import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProgressStore } from '../store/useProgressStore'
import { TODAS_MISSOES } from '../data/missoes'
import MissaoCard from '../components/MissaoCard'
import { Filter, X } from 'lucide-react'
import type { Modulo, NivelMissao } from '../types'

export default function MissoesPage() {
  const navigate = useNavigate()
  const { progressos } = useProgressStore()
  const [moduloFiltro, setModuloFiltro] = useState<Modulo | null>(null)
  const [nivelFiltro, setNivelFiltro] = useState<NivelMissao | null>(null)
  const [processoFiltro, setProcessoFiltro] = useState<string | null>(null)

  const missoesFiltradas = TODAS_MISSOES.filter(m => {
    if (moduloFiltro && m.modulo !== moduloFiltro) return false
    if (nivelFiltro && m.nivel !== nivelFiltro) return false
    if (processoFiltro && m.processo !== processoFiltro) return false
    return true
  })

  const temFiltros = moduloFiltro || nivelFiltro || processoFiltro

  const limparFiltros = () => {
    setModuloFiltro(null)
    setNivelFiltro(null)
    setProcessoFiltro(null)
  }

  return (
    <div className="p-8 bg-slate-950 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Catálogo de Missões</h1>
        <p className="text-slate-400">
          {missoesFiltradas.length} de {TODAS_MISSOES.length} missões disponíveis
        </p>
      </div>

      {/* Filtros */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Filter size={18} className="text-blue-400" />
          <h3 className="font-semibold text-white">Filtrar por</h3>
          {temFiltros && (
            <button
              onClick={limparFiltros}
              className="ml-auto text-sm text-slate-400 hover:text-slate-300 flex items-center gap-1 transition-colors"
            >
              <X size={14} />
              Limpar filtros
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Módulo */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-3">
              Módulo
            </label>
            <div className="flex flex-wrap gap-2">
              {['MM', 'FI', 'SD', 'CO', 'HCM'].map((m) => (
                <button
                  key={m}
                  onClick={() => setModuloFiltro(moduloFiltro === m ? null : (m as Modulo))}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    moduloFiltro === m
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Nível */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-3">
              Nível
            </label>
            <div className="flex flex-wrap gap-2">
              {['iniciante', 'intermediario', 'avancado'].map((n) => (
                <button
                  key={n}
                  onClick={() => setNivelFiltro(nivelFiltro === n ? null : (n as NivelMissao))}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    nivelFiltro === n
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {n.charAt(0).toUpperCase() + n.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Processo */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-3">
              Processo
            </label>
            <div className="flex flex-wrap gap-2">
              {['P2P', 'O2C', 'R2R'].map((p) => (
                <button
                  key={p}
                  onClick={() => setProcessoFiltro(processoFiltro === p ? null : p)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    processoFiltro === p
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid de missões */}
      {missoesFiltradas.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {missoesFiltradas.map((missao) => (
            <MissaoCard
              key={missao.id}
              missao={missao}
              progresso={progressos[missao.id] || null}
              onClick={(m) => navigate(`/missao/${m.id}`)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-slate-400 mb-2">Nenhuma missão encontrada com estes filtros</p>
          <button
            onClick={limparFiltros}
            className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
          >
            Limpar filtros
          </button>
        </div>
      )}
    </div>
  )
}
