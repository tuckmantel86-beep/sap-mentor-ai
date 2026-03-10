import { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore'
import { useProgressStore } from '../store/useProgressStore'
import { TODAS_MISSOES } from '../data/missoes'
import { Edit2, Save, X, Trophy, Zap, Target, Flame } from 'lucide-react'

export default function PerfilPage() {
  const { user, updateUser } = useAuthStore()
  const { progressos } = useProgressStore()
  const [editando, setEditando] = useState(false)
  const [nomeEdit, setNomeEdit] = useState(user?.nome || '')

  const missoesConcluidas = Object.values(progressos).filter(p => p.status === 'concluida').length
  const missoesMapa = TODAS_MISSOES.map(m => ({
    ...m,
    status: progressos[m.id]?.status || 'nao_iniciada'
  }))

  const handleSalvar = () => {
    if (nomeEdit.trim()) {
      updateUser({ nome: nomeEdit })
      setEditando(false)
    }
  }

  const objetivoTexto: Record<string, string> = {
    primeiro_emprego: 'Conseguir meu primeiro emprego SAP',
    mudanca_area: 'Mudar de área para SAP',
    melhorar_trabalho: 'Melhorar no trabalho atual',
    virar_consultor: 'Me tornar consultor SAP'
  }

  const nivelTexto: Record<string, string> = {
    estagiario: 'Estagiário',
    junior: 'Júnior',
    pleno: 'Pleno',
    senior: 'Sênior',
    consultor: 'Consultor'
  }

  return (
    <div className="p-8 bg-slate-950 min-h-screen">
      {/* Header com avatar */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center border-2 border-blue-600">
              <span className="text-4xl font-bold text-blue-400">
                {user?.nome?.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              {!editando ? (
                <div>
                  <h1 className="text-3xl font-bold text-white">{user?.nome}</h1>
                  <p className="text-slate-400">
                    {nivelTexto[user?.nivel || 'estagiario']} em {user?.modulo_interesse}
                  </p>
                </div>
              ) : (
                <div>
                  <input
                    type="text"
                    value={nomeEdit}
                    onChange={(e) => setNomeEdit(e.target.value)}
                    className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white mb-2 w-64"
                    autoFocus
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleSalvar}
                      className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white text-sm px-3 py-1 rounded transition-colors"
                    >
                      <Save size={14} />
                      Salvar
                    </button>
                    <button
                      onClick={() => {
                        setEditando(false)
                        setNomeEdit(user?.nome || '')
                      }}
                      className="flex items-center gap-1 bg-slate-700 hover:bg-slate-600 text-white text-sm px-3 py-1 rounded transition-colors"
                    >
                      <X size={14} />
                      Cancelar
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          {!editando && (
            <button
              onClick={() => setEditando(true)}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <Edit2 size={18} />
              Editar
            </button>
          )}
        </div>
      </div>

      {/* Estatísticas principais */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <Trophy size={20} className="text-yellow-400" />
            <span className="text-slate-400 text-sm font-medium">Missões Concluídas</span>
          </div>
          <p className="text-3xl font-bold text-white">{missoesConcluidas}</p>
          <p className="text-xs text-slate-500 mt-1">de {TODAS_MISSOES.length} total</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <Zap size={20} className="text-yellow-400" />
            <span className="text-slate-400 text-sm font-medium">XP Total</span>
          </div>
          <p className="text-3xl font-bold text-white">{user?.xp_total || 0}</p>
          <p className="text-xs text-slate-500 mt-1">pontos de experiência</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <Target size={20} className="text-blue-400" />
            <span className="text-slate-400 text-sm font-medium">Nível Atual</span>
          </div>
          <p className="text-3xl font-bold text-white capitalize">{user?.nivel}</p>
          <p className="text-xs text-slate-500 mt-1">profissional</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <Flame size={20} className="text-orange-400" />
            <span className="text-slate-400 text-sm font-medium">Módulo Foco</span>
          </div>
          <p className="text-3xl font-bold text-white">{user?.modulo_interesse}</p>
          <p className="text-xs text-slate-500 mt-1">área de interesse</p>
        </div>
      </div>

      {/* Objetivo */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-white mb-4">Seu Objetivo</h3>
        <div className="bg-blue-600/10 border border-blue-600/30 rounded-lg p-4">
          <p className="text-blue-300 font-medium">{objetivoTexto[user?.objetivo || 'primeiro_emprego']}</p>
        </div>
      </div>

      {/* Mapa de progresso na trilha P2P */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-white mb-4">Seu Progresso na Trilha P2P</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {missoesMapa.map((missao, idx) => {
            const status = missao.status
            const statusCores = {
              concluida: 'bg-emerald-600/20 border-emerald-600/30 text-emerald-300',
              em_andamento: 'bg-yellow-600/20 border-yellow-600/30 text-yellow-300',
              nao_iniciada: 'bg-slate-800 border-slate-700 text-slate-400'
            }

            return (
              <div
                key={missao.id}
                className={`border rounded-lg p-4 transition-all ${statusCores[status]}`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase opacity-75">
                      Missão {idx + 1}
                    </p>
                    <h4 className="font-semibold text-sm mt-1">{missao.titulo}</h4>
                  </div>
                  {status === 'concluida' && (
                    <Trophy size={18} className="flex-shrink-0" />
                  )}
                </div>

                <div className="text-xs opacity-75">
                  {status === 'concluida' && 'Concluída'}
                  {status === 'em_andamento' && 'Em andamento'}
                  {status === 'nao_iniciada' && 'Não iniciada'}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Competências desenvolvidas */}
      <div>
        <h3 className="text-lg font-bold text-white mb-4">Competências Desenvolvidas</h3>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          {missoesMapa
            .filter(m => m.status === 'concluida')
            .length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {Array.from(
                new Set(
                  missoesMapa
                    .filter(m => m.status === 'concluida')
                    .flatMap(m => m.competencias_treinadas)
                )
              ).map((competencia) => (
                <span
                  key={competencia}
                  className="bg-emerald-600/20 text-emerald-300 border border-emerald-600/30 px-3 py-1.5 rounded-lg text-sm font-medium"
                >
                  {competencia}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-slate-400 text-sm">
              Complete missões para desenvolver competências
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
