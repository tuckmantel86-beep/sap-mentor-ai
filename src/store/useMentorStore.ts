import { create } from 'zustand'

interface Mensagem {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: string
}

interface MentorState {
  mensagens: Mensagem[]
  carregando: boolean
  missaoAtualId: string | null
  setMissaoAtual: (id: string) => void
  enviarPergunta: (pergunta: string, contextoMissao: string) => Promise<void>
  limparChat: () => void
}

const SYSTEM_PROMPT = `Você é um consultor SAP sênior com 20 anos de experiência atuando como mentor de treinamento.
Seu papel é ajudar usuários que possuem SAP GUI instalado no computador a executar tarefas reais.
Você NÃO simula o SAP. Você orienta o usuário a executar tarefas no SAP real.
Responda sempre em português brasileiro, de forma clara, profissional e didática.
Quando explicar passos, seja específico sobre campos e valores do SAP.
Se o usuário estiver travado, explique o conceito de negócio por trás da ação antes de dar o passo técnico.`

export const useMentorStore = create<MentorState>((set) => ({
  mensagens: [],
  carregando: false,
  missaoAtualId: null,

  setMissaoAtual: (id) => set({ missaoAtualId: id, mensagens: [] }),

  enviarPergunta: async (pergunta, contextoMissao) => {
    const novaMensagem: Mensagem = {
      id: Date.now().toString(),
      role: 'user',
      content: pergunta,
      timestamp: new Date().toISOString(),
    }

    set((state) => ({
      mensagens: [...state.mensagens, novaMensagem],
      carregando: true,
    }))

    try {
      // Tenta Claude API
      const apiKey = import.meta.env.VITE_CLAUDE_API_KEY

      if (!apiKey) {
        throw new Error('API key não configurada')
      }

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-calls': 'true',
        },
        body: JSON.stringify({
          model: 'claude-haiku-4-5',
          max_tokens: 1024,
          system: SYSTEM_PROMPT,
          messages: [
            {
              role: 'user',
              content: `Contexto da missão atual: ${contextoMissao}\n\nPergunta do usuário: ${pergunta}`
            }
          ]
        })
      })

      if (!response.ok) throw new Error('Erro na API Claude')

      const data = await response.json()
      const resposta = data.content[0].text

      const mensagemResposta: Mensagem = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: resposta,
        timestamp: new Date().toISOString(),
      }

      set((state) => ({
        mensagens: [...state.mensagens, mensagemResposta],
        carregando: false,
      }))

    } catch {
      // Fallback: resposta offline genérica
      const mensagemFallback: Mensagem = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `Olá! Estou sem conexão com a IA no momento. Para esta missão, consulte o passo a passo detalhado à esquerda. Se tiver dúvidas sobre campos SAP específicos, pressione F1 dentro do SAP para ajuda contextual. Configure sua chave de API no arquivo .env para ativar o mentor IA completo.`,
        timestamp: new Date().toISOString(),
      }

      set((state) => ({
        mensagens: [...state.mensagens, mensagemFallback],
        carregando: false,
      }))
    }
  },

  limparChat: () => set({ mensagens: [] }),
}))
