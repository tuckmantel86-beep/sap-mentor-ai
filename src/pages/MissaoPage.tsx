import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useProgressStore } from '../store/useProgressStore'
import { useAuthStore } from '../store/useAuthStore'
import { useMentorStore } from '../store/useMentorStore'
import { TODAS_MISSOES } from '../data/missoes'
import ChatMentor from '../components/ChatMentor'
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Trophy,
  Clock,
  ArrowRight
} from 'lucide-react'

export default function MissaoPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [passoAtualIdx, setPassoAtualIdx] = useState(0)
  const { iniciarMissao, concluirPasso, concluirMissao, getProgresso } = useProgressStore()
  const { updateUser } = useAuthStore()
  const { setMissaoAtual } = useMentorStore()

  const missao = TODAS_MISSOES.find(m => m.id === id)
  const progresso = id ? getProgresso(id) : null

  useEffect(() => {
    if (!missao) return

    // Iniciar missão se não iniciada
    if (!progresso) {
      iniciarMissao(missao.id)
    }

    // Definir contexto do mentor IA
    setMissaoAtual(missao.id)
  }, [missao, progresso, iniciarMissao, setMissaoAtual])

  if (!missao) {
    return (
      <div className="p-8 bg-slate-950 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Missão não encontrada</h2>
          <button
            onClick={() => navigate('/missoes')}
            className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
          >
            Voltar ao catálogo
          </button>
        </div>
      </div>
    )
  }

  const todosConcluidos = progresso && progresso.passos_concluidos.length === missao.passos.length
  const passoAtual = missao.passos[passoAtualIdx]
  const progressoPercentual = progresso
    ? Math.round((progresso.passos_concluidos.length / missao.passos.length) * 100)
    : 0

  const handleConcluirPasso = () => {
    if (!passoAtual || !progresso) return

    concluirPasso(missao.id, passoAtual.id)

    // Ir para próximo passo
    if (passoAtualIdx < missao.passos.length - 1) {
      setPassoAtualIdx(passoAtualIdx + 1)
    }
  }

  const handleConcluirMissao = () => {
    concluirMissao(missao.id)
    updateUser({ missoes_concluidas: (useAuthStore.getState().user?.missoes_concluidas || 0) + 1 })

    // Redirecionar após 2 segundos
    setTimeout(() => {
      if (missao.proxima_missao_id) {
        navigate(`/missao/${missao.proxima_missao_id}`)
      } else {
        navigate('/missoes')
      }
    }, 2000)
  }

  const moduloCores: Record<string, { bg: string; text: string }> = {
    MM: { bg: 'bg-blue-600', text: 'text-blue-100' },
    FI: { bg: 'bg-green-600', text: 'text-green-100' },
    SD: { bg: 'bg-purple-600', text: 'text-purple-100' },
    CO: { bg: 'bg-orange-600', text: 'text-orange-100' },
    HCM: { bg: 'bg-pink-600', text: 'text-pink-100' },
  }

  const core = moduloCores[missao.modulo]

  return (
    <div className="flex h-screen bg-slate-950">
      {/* Painel Esquerdo - Navegação */}
      <aside className="w-80 bg-slate-900 border-r border-slate-800 overflow-y-auto">
        <div className="sticky top-0 bg-slate-900 border-b border-slate-800 p-5">
          <button
            onClick={() => navigate('/missoes')}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-4"
          >
            <ChevronLeft size={18} />
            Voltar
          </button>

          <div className="flex items-center gap-2 mb-3">
            <span className={`${core.bg} ${core.text} text-xs font-bold px-2.5 py-1 rounded`}>
              {missao.modulo}
            </span>
            <span className="bg-slate-800 text-slate-300 text-xs px-2.5 py-1 rounded">
              {missao.nivel}
            </span>
          </div>

          <h1 className="text-lg font-bold text-white mb-2">{missao.titulo}</h1>
          <p className="text-xs text-slate-400 mb-4">
            {missao.empresa_ficticia} • {missao.cargo}
          </p>

          <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700 mb-4">
            <p className="text-xs font-medium text-slate-300 mb-2">Objetivo</p>
            <p className="text-sm text-slate-200">{missao.objetivo}</p>
          </div>

          <div className="bg-blue-600/10 rounded-lg p-3 border border-blue-600/30 mb-4">
            <p className="text-xs font-medium text-blue-300 mb-1">Transação Principal</p>
            <p className="text-sm font-mono text-blue-400 font-bold">{missao.transacao_principal}</p>
          </div>
        </div>

        {/* Contexto da missão */}
        <div className="p-5 border-b border-slate-800">
          <p className="text-xs font-medium text-slate-400 mb-2">CONTEXTO</p>
          <p className="text-sm text-slate-300 leading-relaxed">{missao.contexto}</p>
        </div>

        {/* Passos */}
        <div className="p-5">
          <p className="text-xs font-medium text-slate-400 mb-3">PASSOS ({missao.passos.length})</p>
          <div className="space-y-2">
            {missao.passos.map((passo, idx) => {
              const isConcluido = progresso?.passos_concluidos.includes(passo.id)
              const isAtual = idx === passoAtualIdx

              return (
                <button
                  key={passo.id}
                  onClick={() => setPassoAtualIdx(idx)}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    isAtual
                      ? 'bg-blue-600 text-white'
                      : isConcluido
                      ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-600/30 hover:bg-emerald-600/30'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {isConcluido ? (
                      <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border border-current mt-0.5 flex items-center justify-center text-xs flex-shrink-0">
                        {idx + 1}
                      </div>
                    )}
                    <span className="text-xs font-medium line-clamp-2">{passo.titulo}</span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Progress bar */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-medium text-slate-400">Progresso</p>
              <p className="text-xs font-bold text-blue-400">{progressoPercentual}%</p>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 transition-all duration-300"
                style={{ width: `${progressoPercentual}%` }}
              />
            </div>
          </div>
        </div>

        {/* Informações adicionais */}
        <div className="p-5 border-t border-slate-800 space-y-3">
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-slate-500" />
            <div>
              <p className="text-xs text-slate-500">Tempo estimado</p>
              <p className="text-sm font-medium text-white">{missao.tempo_estimado_minutos} minutos</p>
            </div>
          </div>

          <div>
            <p className="text-xs text-slate-500 mb-2">Competências</p>
            <div className="flex flex-wrap gap-1">
              {missao.competencias_treinadas.slice(0, 3).map((c, i) => (
                <span key={i} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Painel Central - Conteúdo */}
      <div className="flex-1 flex flex-col">
        {/* Header do passo */}
        <div className="bg-slate-900 border-b border-slate-800 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400 mb-1">
                Passo {passoAtualIdx + 1} de {missao.passos.length}
              </p>
              <h2 className="text-2xl font-bold text-white">{passoAtual?.titulo}</h2>
            </div>
            {todosConcluidos && (
              <div className="text-center">
                <Trophy size={32} className="text-yellow-400 mb-2" />
                <p className="text-sm font-medium text-yellow-400">Parabéns!</p>
              </div>
            )}
          </div>
        </div>

        {/* Conteúdo do passo */}
        <div className="flex-1 overflow-y-auto p-6">
          {!todosConcluidos ? (
            <div className="max-w-3xl">
              {/* Instrução principal */}
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 mb-6">
                <h3 className="text-sm font-bold text-blue-400 mb-3">INSTRUÇÃO PASSO A PASSO</h3>
                <div className="text-white whitespace-pre-wrap text-sm leading-relaxed font-medium">
                  {passoAtual?.instrucao}
                </div>
              </div>

              {/* Explicação de negócio */}
              <div className="bg-blue-600/10 border border-blue-600/30 rounded-lg p-6 mb-6">
                <div className="flex items-start gap-3">
                  <Lightbulb size={20} className="text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-blue-300 mb-2">Por que fazer isso?</h3>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      {passoAtual?.explicacao_negocio}
                    </p>
                  </div>
                </div>
              </div>

              {/* Dica */}
              {passoAtual?.dica && (
                <div className="bg-emerald-600/10 border border-emerald-600/30 rounded-lg p-4 mb-6">
                  <p className="text-sm text-emerald-300">
                    <span className="font-bold">Dica:</span> {passoAtual.dica}
                  </p>
                </div>
              )}

              {/* Erro comum */}
              {passoAtual?.erro_comum && (
                <div className="bg-orange-600/10 border border-orange-600/30 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle size={18} className="text-orange-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-orange-300 mb-1">Erro Comum</p>
                      <p className="text-sm text-slate-200">{passoAtual.erro_comum}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="max-w-3xl py-8">
              {/* Exercício prático */}
              <div className="text-center mb-8">
                <Trophy size={48} className="text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Todos os passos concluídos!</h3>
                <p className="text-slate-400 mb-6">Agora realize o exercício prático para consolidar o aprendizado</p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                <h4 className="text-lg font-bold text-white mb-3">{missao.exercicio.titulo}</h4>
                <p className="text-slate-300 mb-6 leading-relaxed">{missao.exercicio.enunciado}</p>

                <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                  <p className="text-xs font-bold text-slate-400 mb-3 uppercase">Dados para o exercício</p>
                  <div className="space-y-2">
                    {Object.entries(missao.exercicio.dados).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between text-sm">
                        <span className="text-slate-400 capitalize">{key.replace(/_/g, ' ')}:</span>
                        <span className="text-white font-mono">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleConcluirMissao}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <CheckCircle2 size={20} />
                  Confirmar Conclusão da Missão
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer com botões */}
        {!todosConcluidos && (
          <div className="bg-slate-900 border-t border-slate-800 p-6">
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={() => setPassoAtualIdx(Math.max(0, passoAtualIdx - 1))}
                disabled={passoAtualIdx === 0}
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
              >
                <ChevronLeft size={18} />
                Passo Anterior
              </button>

              <button
                onClick={handleConcluirPasso}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Marcar Concluído
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => setPassoAtualIdx(Math.min(missao.passos.length - 1, passoAtualIdx + 1))}
                disabled={passoAtualIdx === missao.passos.length - 1}
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
              >
                Próximo Passo
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Painel Direito - Chat Mentor */}
      <div className="w-80 border-l border-slate-800 flex flex-col">
        <ChatMentor missaoContexto={`${missao.titulo} - ${passoAtual?.titulo || 'Missão iniciada'}`} />
      </div>
    </div>
  )
}
