import { Clock, ChevronRight, CheckCircle2 } from 'lucide-react'
import type { Missao, ProgressoMissao } from '../types'

interface MissaoCardProps {
  missao: Missao
  progresso: ProgressoMissao | null
  onClick: (missao: Missao) => void
}

const moduloCores: Record<string, { bg: string; text: string; light: string }> = {
  MM: { bg: 'bg-blue-600', text: 'text-blue-100', light: 'bg-blue-600/10' },
  FI: { bg: 'bg-green-600', text: 'text-green-100', light: 'bg-green-600/10' },
  SD: { bg: 'bg-purple-600', text: 'text-purple-100', light: 'bg-purple-600/10' },
  CO: { bg: 'bg-orange-600', text: 'text-orange-100', light: 'bg-orange-600/10' },
  HCM: { bg: 'bg-pink-600', text: 'text-pink-100', light: 'bg-pink-600/10' },
}

const nivelCores: Record<string, string> = {
  iniciante: 'bg-emerald-600/20 text-emerald-300 border-emerald-600/30',
  intermediario: 'bg-yellow-600/20 text-yellow-300 border-yellow-600/30',
  avancado: 'bg-red-600/20 text-red-300 border-red-600/30',
}

export default function MissaoCard({ missao, progresso, onClick }: MissaoCardProps) {
  const core = moduloCores[missao.modulo]
  const statusBadge = progresso?.status === 'concluida'
    ? 'Concluída'
    : progresso?.status === 'em_andamento'
    ? 'Em andamento'
    : 'Não iniciada'

  const statusCor = progresso?.status === 'concluida'
    ? 'text-emerald-400'
    : progresso?.status === 'em_andamento'
    ? 'text-yellow-400'
    : 'text-slate-500'

  return (
    <button
      onClick={() => onClick(missao)}
      className="group text-left bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-slate-700 hover:bg-slate-800/80 transition-all hover:shadow-lg hover:shadow-blue-600/10 w-full"
    >
      {/* Header com módulo e status */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className={`${core.bg} ${core.text} text-xs font-bold px-2.5 py-1 rounded-md`}>
            {missao.modulo}
          </span>
          <span className={`text-xs font-medium px-2.5 py-1 rounded-md border ${nivelCores[missao.nivel]}`}>
            {missao.nivel.charAt(0).toUpperCase() + missao.nivel.slice(1)}
          </span>
        </div>
        {progresso?.status === 'concluida' && (
          <CheckCircle2 size={20} className="text-emerald-400" />
        )}
      </div>

      {/* Título */}
      <h3 className="text-sm font-semibold text-white mb-2 line-clamp-2 group-hover:text-blue-300 transition-colors">
        {missao.titulo}
      </h3>

      {/* Informações */}
      <div className="space-y-1 mb-4">
        <p className="text-xs text-slate-400">
          {missao.empresa_ficticia} • {missao.cargo}
        </p>
        <p className="text-xs text-slate-500">
          T-Code: <span className="font-mono text-blue-400">{missao.transacao_principal}</span>
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-800">
        <div className="flex items-center gap-1 text-xs text-slate-400">
          <Clock size={14} />
          {missao.tempo_estimado_minutos} min
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-xs font-medium ${statusCor}`}>
            {statusBadge}
          </span>
          <ChevronRight size={16} className="text-slate-600 group-hover:text-slate-400 transition-colors" />
        </div>
      </div>

      {/* Progress bar se em andamento */}
      {progresso?.status === 'em_andamento' && (
        <div className="mt-3 w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-yellow-500 transition-all"
            style={{
              width: `${(progresso.passos_concluidos.length / Math.max(missao.passos.length, 1)) * 100}%`
            }}
          />
        </div>
      )}
    </button>
  )
}
