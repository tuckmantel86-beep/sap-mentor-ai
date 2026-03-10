import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore'
import { useProgressStore } from '../store/useProgressStore'
import { TODAS_MISSOES } from '../data/missoes'
import { Zap, Target, TrendingUp, BookOpen, ChevronRight, CheckCircle2 } from 'lucide-react'

export default function DashboardPage() {
  const navigate = useNavigate()
  const { user } = useAuthStore()
  const { progressos } = useProgressStore()

  const missoesConcluidas = Object.values(progressos).filter(p => p.status === 'concluida').length
  const proxima = TODAS_MISSOES.find(m => !progressos[m.id])

  const ultimasMissoes = TODAS_MISSOES.slice(0, 4)

  return (
    <div className="p-8 bg-slate-950 min-h-screen">
      {/* Saudação */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Bem-vindo, {user?.nome}!
        </h1>
        <p className="text-slate-400">
          Continue sua jornada de aprendizado no SAP
        </p>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400 text-sm font-medium">Missões Concluídas</span>
            <CheckCircle2 size={18} className="text-emerald-400" />
          </div>
          <p className="text-3xl font-bold text-white">{missoesConcluidas}</p>
          <p className="text-xs text-slate-500 mt-1">de {TODAS_MISSOES.length} missões</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400 text-sm font-medium">XP Total</span>
            <Zap size={18} className="text-yellow-400" />
          </div>
          <p className="text-3xl font-bold text-white">{user?.xp_total || 0}</p>
          <p className="text-xs text-slate-500 mt-1">pontos de experiência</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400 text-sm font-medium">Nível Atual</span>
            <TrendingUp size={18} className="text-blue-400" />
          </div>
          <p className="text-3xl font-bold text-white capitalize">{user?.nivel}</p>
          <p className="text-xs text-slate-500 mt-1">seu nível profissional</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400 text-sm font-medium">Módulo Foco</span>
            <Target size={18} className="text-pink-400" />
          </div>
          <p className="text-3xl font-bold text-white">{user?.modulo_interesse}</p>
          <p className="text-xs text-slate-500 mt-1">principal de estudo</p>
        </div>
      </div>

      {/* Próxima missão destacada */}
      {proxima && (
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6 mb-8">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-blue-400 text-sm font-medium mb-1">Próxima Missão Recomendada</p>
              <h2 className="text-2xl font-bold text-white mb-2">{proxima.titulo}</h2>
              <p className="text-slate-300 text-sm mb-4">{proxima.contexto}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center gap-1 text-xs bg-blue-600/20 text-blue-300 border border-blue-600/30 px-2.5 py-1 rounded">
                  {proxima.modulo}
                </span>
                <span className="inline-flex items-center gap-1 text-xs bg-slate-700/50 text-slate-300 px-2.5 py-1 rounded">
                  Nível: {proxima.nivel}
                </span>
                <span className="inline-flex items-center gap-1 text-xs bg-slate-700/50 text-slate-300 px-2.5 py-1 rounded">
                  {proxima.tempo_estimado_minutos} min
                </span>
              </div>
            </div>
            <button
              onClick={() => navigate(`/missao/${proxima.id}`)}
              className="ml-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              Começar <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Missões recentes */}
      <div>
        <h3 className="text-lg font-bold text-white mb-4">Missões do Catálogo</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ultimasMissoes.map((missao) => {
            const progresso = progressos[missao.id]
            const statusCor = progresso?.status === 'concluida'
              ? 'text-emerald-400'
              : progresso?.status === 'em_andamento'
              ? 'text-yellow-400'
              : 'text-slate-500'
            const statusBadge = progresso?.status === 'concluida'
              ? 'Concluída'
              : progresso?.status === 'em_andamento'
              ? 'Em andamento'
              : 'Não iniciada'

            return (
              <button
                key={missao.id}
                onClick={() => navigate(`/missao/${missao.id}`)}
                className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-slate-700 hover:bg-slate-800/80 transition-all text-left group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-2">
                    <span className="bg-blue-600 text-blue-100 text-xs font-bold px-2.5 py-1 rounded">
                      {missao.modulo}
                    </span>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded ${
                      missao.nivel === 'iniciante'
                        ? 'bg-emerald-600/20 text-emerald-300'
                        : missao.nivel === 'intermediario'
                        ? 'bg-yellow-600/20 text-yellow-300'
                        : 'bg-red-600/20 text-red-300'
                    }`}>
                      {missao.nivel}
                    </span>
                  </div>
                  {progresso?.status === 'concluida' && (
                    <CheckCircle2 size={18} className="text-emerald-400" />
                  )}
                </div>
                <h4 className="text-sm font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {missao.titulo}
                </h4>
                <p className="text-xs text-slate-500 mb-4 line-clamp-2">
                  {missao.contexto}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                  <p className="text-xs text-slate-400">
                    {missao.empresa_ficticia}
                  </p>
                  <span className={`text-xs font-medium ${statusCor}`}>
                    {statusBadge}
                  </span>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* CTA para ver todas as missões */}
      <div className="mt-8 text-center">
        <button
          onClick={() => navigate('/missoes')}
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors"
        >
          <BookOpen size={16} />
          Ver todas as missões ({TODAS_MISSOES.length})
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  )
}
