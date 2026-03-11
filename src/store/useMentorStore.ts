import { create } from 'zustand'

interface Mensagem {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: string
}

interface ArquivoMentor {
  nome: string
  tipo: string
  tamanho: number
  dados: string
}

interface MentorState {
  mensagens: Mensagem[]
  carregando: boolean
  missaoAtualId: string | null
  setMissaoAtual: (id: string) => void
  enviarPergunta: (pergunta: string, contextoMissao: string) => Promise<void>
  enviarPerguntaComArquivo: (pergunta: string, arquivo: ArquivoMentor, contextoMissao: string) => Promise<void>
  limparChat: () => void
}

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
      console.log('🤖 Enviando pergunta para mentor backend...')

      // Chama o endpoint backend proxy
      const response = await fetch('/api/mentor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pergunta,
          contexto: contextoMissao,
          idioma: 'pt-BR',
        }),
      })

      if (!response.ok) {
        throw new Error(`Backend retornou erro: ${response.status}`)
      }

      const dados = await response.json()
      const { resposta, fonte } = dados

      if (!resposta) {
        throw new Error('Nenhuma resposta recebida do backend')
      }

      console.log(`✅ Mentor respondeu (${fonte})`)

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

    } catch (erro) {
      console.error('❌ Erro na IA Mentor:', erro)
      const mensagemFallback: Mensagem = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `[Modo Offline] Desculpe, não consigo conectar com o servidor de IA no momento. Sua pergunta: "${pergunta}"\n\nPara esta missão, consulte o passo a passo detalhado à esquerda. Se tiver dúvidas sobre campos SAP específicos, pressione F1 dentro do SAP para ajuda contextual.\n\nVerifique se:\n• O servidor está rodando (npm run dev)\n• A conexão com internet está ativa\n• As chaves de API estão configuradas no .env`,
        timestamp: new Date().toISOString(),
      }

      set((state) => ({
        mensagens: [...state.mensagens, mensagemFallback],
        carregando: false,
      }))
    }
  },

  enviarPerguntaComArquivo: async (pergunta, arquivo, contextoMissao) => {
    const novaMensagem: Mensagem = {
      id: Date.now().toString(),
      role: 'user',
      content: `${pergunta}\n📎 Arquivo enviado: ${arquivo.nome}`,
      timestamp: new Date().toISOString(),
    }

    set((state) => ({
      mensagens: [...state.mensagens, novaMensagem],
      carregando: true,
    }))

    try {
      console.log('🤖 Enviando pergunta com arquivo para mentor backend...')

      const response = await fetch('/api/mentor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pergunta,
          contexto: contextoMissao,
          arquivo: {
            nome: arquivo.nome,
            tipo: arquivo.tipo,
            dados: arquivo.dados,
          },
          idioma: 'pt-BR',
        }),
      })

      if (!response.ok) {
        throw new Error(`Backend retornou erro: ${response.status}`)
      }

      const dados = await response.json()
      const { resposta, fonte } = dados

      if (!resposta) {
        throw new Error('Nenhuma resposta recebida do backend')
      }

      console.log(`✅ Mentor respondeu (${fonte})`)

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

    } catch (erro) {
      console.error('❌ Erro na IA Mentor com arquivo:', erro)
      const mensagemFallback: Mensagem = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `[Modo Offline] Desculpe, não consigo analisar o arquivo "${arquivo.nome}" neste momento.\n\nPossíveis causas:\n• As chaves de API não estão configuradas\n• O arquivo é muito grande ou em formato não suportado\n• Problema na conexão com o servidor\n\nTente enviar a pergunta sem o arquivo ou reinicie a página.`,
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
