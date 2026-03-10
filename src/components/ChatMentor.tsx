import { useState, useEffect, useRef } from 'react'
import { Send, MessageCircle, AlertCircle, Loader } from 'lucide-react'
import { useMentorStore } from '../store/useMentorStore'

interface ChatMentorProps {
  missaoContexto: string
}

export default function ChatMentor({ missaoContexto }: ChatMentorProps) {
  const { mensagens, carregando, enviarPergunta } = useMentorStore()
  const [pergunta, setPergunta] = useState('')
  const mensagensEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    mensagensEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [mensagens])

  const handleEnviar = async () => {
    if (!pergunta.trim()) return
    setPergunta('')
    await enviarPergunta(pergunta, missaoContexto)
  }

  const handleEstouTravado = () => {
    setPergunta('Estou travado neste passo. Pode me ajudar?')
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

      {/* Input */}
      <div className="p-4 border-t border-slate-800">
        <div className="flex gap-2">
          <input
            type="text"
            value={pergunta}
            onChange={(e) => setPergunta(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleEnviar()}
            placeholder="Faça uma pergunta..."
            disabled={carregando}
            className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 disabled:opacity-50"
          />
          <button
            onClick={handleEnviar}
            disabled={!pergunta.trim() || carregando}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 text-white p-2 rounded-lg transition-colors disabled:cursor-not-allowed"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
