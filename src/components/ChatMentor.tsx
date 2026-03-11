import { useState, useEffect, useRef } from 'react'
import { Send, MessageCircle, AlertCircle, Loader, Paperclip, X } from 'lucide-react'
import { useMentorStore } from '../store/useMentorStore'

interface ChatMentorProps {
  missaoContexto: string
}

interface ArquivoSelecionado {
  nome: string
  tipo: string
  tamanho: number
  dados: string // base64 ou conteúdo texto
}

export default function ChatMentor({ missaoContexto }: ChatMentorProps) {
  const { mensagens, carregando, enviarPergunta, enviarPerguntaComArquivo } = useMentorStore()
  const [pergunta, setPergunta] = useState('')
  const [arquivo, setArquivo] = useState<ArquivoSelecionado | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const mensagensEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    mensagensEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [mensagens])

  const handleEnviar = async () => {
    if (!pergunta.trim() && !arquivo) return

    if (arquivo) {
      await enviarPerguntaComArquivo(pergunta || 'Analise este arquivo:', arquivo, missaoContexto)
      setArquivo(null)
    } else {
      await enviarPergunta(pergunta, missaoContexto)
    }
    setPergunta('')
  }

  const handleEstouTravado = () => {
    setPergunta('Estou travado neste passo. Pode me ajudar?')
  }

  const handleSelecionarArquivo = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Limita a 5MB
    if (file.size > 5 * 1024 * 1024) {
      alert('Arquivo muito grande! Máximo 5MB.')
      return
    }

    const isImagem = file.type.startsWith('image/')
    const isTexto = file.type.startsWith('text/') || file.type === 'application/json'

    if (!isImagem && !isTexto) {
      alert('Aceito apenas imagens (PNG, JPG) ou arquivos de texto (TXT, JSON).')
      return
    }

    const reader = new FileReader()
    reader.onload = (evt) => {
      const dados = evt.target?.result as string
      setArquivo({
        nome: file.name,
        tipo: file.type,
        tamanho: file.size,
        dados: dados.split(',')[1] || dados, // Remove "data:image/png;base64," se presente
      })
    }
    reader.readAsDataURL(file)

    // Reseta o input para permitir selecionar o mesmo arquivo novamente
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const removerArquivo = () => {
    setArquivo(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className="flex flex-col h-full bg-slate-900 border-l border-slate-800 rounded-l-xl">
      {/* Header */}
      <div className="p-4 border-b border-slate-800 flex items-center gap-2">
        <MessageCircle size={18} className="text-blue-400" />
        <h3 className="font-semibold text-white text-sm">Mentor IA</h3>
      </div>

      {/* Mensagens */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {mensagens.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center text-slate-400 text-sm">
            <MessageCircle size={32} className="text-slate-600 mb-3" />
            <p className="font-medium mb-2">Bem-vindo ao Mentor IA</p>
            <p className="text-xs leading-relaxed">
              Faça perguntas sobre o passo atual ou clique em "Estou travado" para obter ajuda contextualizada.
            </p>
          </div>
        )}

        {mensagens.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-sm px-3 py-2 rounded-lg text-sm leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-blue-600 text-white rounded-br-none'
                  : 'bg-slate-800 text-slate-100 rounded-bl-none'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {carregando && (
          <div className="flex justify-start">
            <div className="bg-slate-800 text-slate-100 px-3 py-2 rounded-lg rounded-bl-none flex items-center gap-2 text-sm">
              <Loader size={16} className="animate-spin" />
              Mentor pensando...
            </div>
          </div>
        )}

        <div ref={mensagensEndRef} />
      </div>

      {/* Ação rápida */}
      {mensagens.length === 0 && (
        <div className="px-4 py-3 border-t border-slate-800">
          <button
            onClick={handleEstouTravado}
            className="w-full flex items-center justify-center gap-2 bg-orange-600/20 hover:bg-orange-600/30 text-orange-300 border border-orange-600/30 rounded-lg px-3 py-2 text-xs font-medium transition-colors"
          >
            <AlertCircle size={14} />
            Estou travado neste passo
          </button>
        </div>
      )}

      {/* Preview do arquivo */}
      {arquivo && (
        <div className="px-4 py-2 bg-slate-800 border-t border-slate-700">
          <div className="flex items-center justify-between bg-slate-700 rounded-lg p-2 text-xs">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <Paperclip size={14} className="text-blue-400 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-white truncate">{arquivo.nome}</p>
                <p className="text-slate-400 text-xs">{(arquivo.tamanho / 1024).toFixed(1)} KB</p>
              </div>
            </div>
            <button
              onClick={removerArquivo}
              className="ml-2 text-slate-400 hover:text-white transition-colors flex-shrink-0"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t border-slate-800">
        <div className="flex gap-2">
          <input
            type="text"
            value={pergunta}
            onChange={(e) => setPergunta(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && !arquivo && handleEnviar()}
            placeholder={arquivo ? 'Adicione uma descrição do arquivo...' : 'Faça uma pergunta...'}
            disabled={carregando}
            className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 disabled:opacity-50"
          />
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleSelecionarArquivo}
            accept="image/*,.txt,.json"
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={carregando}
            className="bg-slate-700 hover:bg-slate-600 disabled:bg-slate-800 text-white p-2 rounded-lg transition-colors disabled:cursor-not-allowed"
            title="Enviar imagem ou arquivo de texto"
          >
            <Paperclip size={16} />
          </button>
          <button
            onClick={handleEnviar}
            disabled={(!pergunta.trim() && !arquivo) || carregando}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 text-white p-2 rounded-lg transition-colors disabled:cursor-not-allowed"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
