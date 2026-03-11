import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import type { IncomingMessage, ServerResponse } from 'node:http'
import dotenv from 'dotenv'

// Carregar variáveis do .env no processo Node
dotenv.config()

// Plugin que adiciona o endpoint /api/mentor dentro do próprio Vite
// Isso evita CORS pois tudo roda na mesma porta (5173)
const mentorApiPlugin = () => ({
  name: 'mentor-api',
  configureServer(server: { middlewares: { use: (path: string, handler: (req: IncomingMessage, res: ServerResponse, next: () => void) => void) => void } }) {
    server.middlewares.use('/api/mentor', async (req, res, next) => {
      if (req.method !== 'POST') {
        return next()
      }

      // Ler o body da requisição
      let body = ''
      req.on('data', (chunk: Buffer) => { body += chunk.toString() })
      req.on('end', async () => {
        try {
          const { pergunta, contexto, arquivo, idioma = 'pt-BR' } = JSON.parse(body)

          if (!pergunta) {
            res.writeHead(400, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ error: 'Campo "pergunta" é obrigatório' }))
            return
          }

          const systemPrompt = `Você é um consultor SAP sênior com 20 anos de experiência atuando como mentor de treinamento.
Seu papel é ajudar usuários que possuem SAP GUI instalado no computador a executar tarefas reais.
Você NÃO simula o SAP. Você orienta o usuário a executar tarefas no SAP real.
Responda sempre em português brasileiro, de forma clara, profissional e didática.
Quando explicar passos, seja específico sobre campos e valores do SAP.
Se o usuário estiver travado, explique o conceito de negócio por trás da ação antes de dar o passo técnico.
${contexto ? `\nContexto da missão atual: ${contexto}` : ''}`

          // Lê as chaves do .env
          const groqKey = process.env.VITE_GROQ_API_KEY
          const geminiKey = process.env.VITE_GEMINI_API_KEY
          const claudeKey = process.env.VITE_CLAUDE_API_KEY
          const openaiKey = process.env.VITE_OPENAI_API_KEY

          let resposta: string | null = null
          let fonte = 'offline'

          // ========== CASCATA DE FALLBACK ==========
          // 1. Groq (grátis) ⭐ — Mais rápido
          if (groqKey && !resposta) {
            console.log('[MentorAPI] 1️⃣ Tentando Groq...')
            resposta = await callGroq(groqKey, pergunta, arquivo, systemPrompt)
            if (resposta) {
              fonte = 'groq'
              console.log('[MentorAPI] ✅ Groq respondeu com sucesso')
            }
          }

          // 2. Gemini (grátis) ⭐ — Google
          if (geminiKey && !resposta) {
            console.log('[MentorAPI] 2️⃣ Tentando Gemini...')
            resposta = await callGemini(geminiKey, pergunta, arquivo, systemPrompt)
            if (resposta) {
              fonte = 'gemini'
              console.log('[MentorAPI] ✅ Gemini respondeu com sucesso')
            }
          }

          // 3. Claude (paga)
          if (claudeKey && !resposta) {
            console.log('[MentorAPI] 3️⃣ Tentando Claude...')
            if (arquivo && arquivo.tipo.startsWith('image/')) {
              resposta = await callClaudeWithVision(claudeKey, pergunta, arquivo, systemPrompt)
            } else if (arquivo && arquivo.tipo.startsWith('text/')) {
              const conteudoArquivo = Buffer.from(arquivo.dados, 'base64').toString('utf-8')
              const perguntaComArquivo = `${pergunta}\n\n--- Conteúdo do arquivo ${arquivo.nome} ---\n${conteudoArquivo}\n--- Fim do arquivo ---`
              resposta = await callClaude(claudeKey, perguntaComArquivo, systemPrompt)
            } else {
              resposta = await callClaude(claudeKey, pergunta, systemPrompt)
            }
            if (resposta) {
              fonte = 'claude'
              console.log('[MentorAPI] ✅ Claude respondeu com sucesso')
            }
          }

          // 4. OpenAI (paga)
          if (openaiKey && !resposta) {
            console.log('[MentorAPI] 4️⃣ Tentando OpenAI...')
            if (arquivo && arquivo.tipo.startsWith('image/')) {
              resposta = await callOpenAIWithVision(openaiKey, pergunta, arquivo, systemPrompt)
            } else if (arquivo && arquivo.tipo.startsWith('text/')) {
              const conteudoArquivo = Buffer.from(arquivo.dados, 'base64').toString('utf-8')
              const perguntaComArquivo = `${pergunta}\n\n--- Conteúdo do arquivo ${arquivo.nome} ---\n${conteudoArquivo}\n--- Fim do arquivo ---`
              resposta = await callOpenAI(openaiKey, perguntaComArquivo, systemPrompt)
            } else {
              resposta = await callOpenAI(openaiKey, pergunta, systemPrompt)
            }
            if (resposta) {
              fonte = 'openai'
              console.log('[MentorAPI] ✅ OpenAI respondeu com sucesso')
            }
          }

          // Resposta final
          if (!resposta) {
            resposta = `[Modo Offline] As chaves de API não estão disponíveis ou todas as APIs falharam.\n\nVerifique:\n• VITE_GROQ_API_KEY (grátis)\n• VITE_GEMINI_API_KEY (grátis)\n• VITE_CLAUDE_API_KEY (paga)\n• VITE_OPENAI_API_KEY (paga)\n\nAo menos uma precisa estar configurada no .env\n\nMentre isso, consulte o passo a passo à esquerda e pressione F1 no SAP para ajuda contextual.`
            console.warn('[MentorAPI] 📴 Todas as APIs falharam, respondendo offline')
          }

          res.writeHead(200, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ resposta, fonte, timestamp: new Date().toISOString() }))

        } catch (e) {
          console.error('[MentorAPI] ❌ Erro interno:', e)
          res.writeHead(500, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ error: 'Erro interno no servidor de IA', details: String(e) }))
        }
      })
    })
  },
})

/**
 * Groq API (grátis, rápido) - Primeiro na cascata
 * Modelos disponíveis: llama3-70b-8192, llama-3.1-70b-versatile, mixtral-8x7b-32768 (deprecated)
 */
async function callGroq(apiKey: string, pergunta: string, arquivo: any, systemPrompt: string): Promise<string | null> {
  try {
    const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile', // Modelo de produção ativo em 2026
        max_tokens: 1024,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: pergunta },
        ],
      }),
    })

    if (!r.ok) {
      const errorData = await r.json().catch(() => ({}))
      console.warn('[Groq] Status', r.status, ':', errorData)
      return null
    }

    const data = await r.json() as { choices: Array<{ message: { content: string } }> }
    return data.choices[0]?.message.content || null

  } catch (e) {
    console.warn('[Groq] ⚠️ Erro:', e)
    return null
  }
}

/**
 * Gemini API (grátis do Google) - Segunda na cascata
 * Modelo: gemini-1.5-flash (v1beta - mais novo e estável)
 */
async function callGemini(apiKey: string, pergunta: string, arquivo: any, systemPrompt: string): Promise<string | null> {
  try {
    const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        system_instruction: {
          parts: {
            text: systemPrompt,
          },
        },
        contents: {
          parts: [
            { text: pergunta },
          ],
        },
        generationConfig: {
          maxOutputTokens: 1024,
          temperature: 0.7,
        },
      }),
    })

    if (!r.ok) {
      const errorData = await r.json().catch(() => ({}))
      console.warn('[Gemini] Status', r.status, ':', errorData)
      return null
    }

    const data = await r.json() as { candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }> }
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text
    return text || null

  } catch (e) {
    console.warn('[Gemini] ⚠️ Erro:', e)
    return null
  }
}

/**
 * Claude API sem visão (texto apenas)
 */
async function callClaude(apiKey: string, pergunta: string, systemPrompt: string): Promise<string | null> {
  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5',
        max_tokens: 1024,
        system: systemPrompt,
        messages: [{ role: 'user', content: pergunta }],
      }),
    })

    if (!r.ok) {
      const errorData = await r.json().catch(() => ({}))
      console.warn('[Claude] Status', r.status, ':', errorData)
      return null
    }

    const data = await r.json() as { content: Array<{ type: string; text: string }> }
    const txt = data.content.find(c => c.type === 'text')
    return txt?.text || null

  } catch (e) {
    console.warn('[Claude] ⚠️ Erro:', e)
    return null
  }
}

/**
 * Claude API com Vision para analisar imagens
 */
async function callClaudeWithVision(apiKey: string, pergunta: string, arquivo: any, systemPrompt: string): Promise<string | null> {
  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5',
        max_tokens: 1024,
        system: systemPrompt,
        messages: [{
          role: 'user',
          content: [
            { type: 'text', text: pergunta },
            {
              type: 'image',
              source: {
                type: 'base64',
                media_type: arquivo.tipo,
                data: arquivo.dados,
              },
            },
          ],
        }],
      }),
    })

    if (!r.ok) {
      const errorData = await r.json().catch(() => ({}))
      console.warn('[Claude Vision] Status', r.status, ':', errorData)
      return null
    }

    const data = await r.json() as { content: Array<{ type: string; text: string }> }
    const txt = data.content.find(c => c.type === 'text')
    return txt?.text || null

  } catch (e) {
    console.warn('[Claude Vision] ⚠️ Erro:', e)
    return null
  }
}

/**
 * OpenAI API sem visão (texto apenas)
 */
async function callOpenAI(apiKey: string, pergunta: string, systemPrompt: string): Promise<string | null> {
  try {
    const r = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        max_tokens: 1024,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: pergunta },
        ],
      }),
    })

    if (!r.ok) {
      const errorData = await r.json().catch(() => ({}))
      console.warn('[OpenAI] Status', r.status, ':', errorData)
      return null
    }

    const data = await r.json() as { choices: Array<{ message: { content: string } }> }
    return data.choices[0]?.message.content || null

  } catch (e) {
    console.warn('[OpenAI] ⚠️ Erro:', e)
    return null
  }
}

/**
 * OpenAI API com Vision para analisar imagens
 */
async function callOpenAIWithVision(apiKey: string, pergunta: string, arquivo: any, systemPrompt: string): Promise<string | null> {
  try {
    const r = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        max_tokens: 1024,
        messages: [
          { role: 'system', content: systemPrompt },
          {
            role: 'user',
            content: [
              { type: 'text', text: pergunta },
              {
                type: 'image_url',
                image_url: {
                  url: `data:${arquivo.tipo};base64,${arquivo.dados}`,
                },
              },
            ],
          },
        ],
      }),
    })

    if (!r.ok) {
      const errorData = await r.json().catch(() => ({}))
      console.warn('[OpenAI Vision] Status', r.status, ':', errorData)
      return null
    }

    const data = await r.json() as { choices: Array<{ message: { content: string } }> }
    return data.choices[0]?.message.content || null

  } catch (e) {
    console.warn('[OpenAI Vision] ⚠️ Erro:', e)
    return null
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), mentorApiPlugin()],
  server: {
    port: 5173,
  },
})
