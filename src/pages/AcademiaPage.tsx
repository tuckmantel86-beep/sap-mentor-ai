import { useNavigate } from 'react-router-dom'
import {
  GraduationCap,
  BookOpen,
  Clock,
  ChevronRight,
  Lock,
  CheckCircle2,
  PlayCircle,
  Star,
  Layers,
  ArrowRight,
} from 'lucide-react'
import { TODAS_TRILHAS } from '../data/academia'
import { TrilhaAcademia, Aula, NivelCarreiraAcad as NivelCarreira } from '../types/academia'
import { useAuthStore } from '../store/useAuthStore'

const NIVEL_ORDEM: Record<NivelCarreira, number> = {
  estagiario: 1,
  junior: 2,
  pleno: 3,
  senior: 4,
  consultor: 5,
}

function getStatusTrilha(trilha: TrilhaAcademia, nivelUsuario: NivelCarreira) {
  const ordemTrilha = NIVEL_ORDEM[trilha.nivel]
  const ordemUsuario = NIVEL_ORDEM[nivelUsuario]

  if (ordemTrilha < ordemUsuario) return 'concluida'
  if (ordemTrilha === ordemUsuario) return 'atual'
  return 'bloqueada'
}

function BadgeNivel({ titulo, cor }: { titulo: string; cor: string }) {
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border ${cor}`}>
      {titulo}
    </span>
  )
}

function CardAula({ aula, index, onClick }: { aula: Aula; index: number; onClick: () => void }) {
  const temPrints = aula.prints_necessarios > 0
  const printsPendentes = aula.secoes.filter(
    s => s.tipo === 'print' && !s.placeholder?.imagem_url
  ).length

  return (
    <button
      onClick={onClick}
      className="w-full text-left group bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 rounded-xl p-4 transition-all duration-200 flex items-start gap-4"
    >
      {/* Número */}
      <div className="w-8 h-8 rounded-lg bg-slate-700 group-hover:bg-blue-600 flex items-center justify-center flex-shrink-0 transition-colors text-sm font-bold text-slate-300 group-hover:text-white">
        {index + 1}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="text-white font-medium text-sm group-hover:text-blue-300 transition-colors truncate">
          {aula.titulo}
        </p>
        <p className="text-slate-400 text-xs mt-0.5 line-clamp-2">{aula.descricao_curta}</p>

        <div className="flex items-center gap-3 mt-2">
          <span className="flex items-center gap-1 text-slate-500 text-xs">
            <Clock size={11} />
            {aula.tempo_estimado_minutos} min
          </span>
          {temPrints && (
            <span className={`flex items-center gap-1 text-xs ${printsPendentes > 0 ? 'text-amber-400' : 'text-emerald-400'}`}>
              <Star size={11} />
              {printsPendentes > 0 ? `${printsPendentes} prints pendentes` : 'Prints prontos'}
            </span>
          )}
          {aula.transacoes.length > 0 && (
            <span className="flex items-center gap-1 text-slate-500 text-xs">
              <Layers size={11} />
              {aula.transacoes.join(', ')}
            </span>
          )}
        </div>
      </div>

      <ChevronRight size={16} className="text-slate-600 group-hover:text-blue-400 flex-shrink-0 transition-colors mt-1" />
    </button>
  )
}

function CardTrilha({ trilha, status, onClick }: {
  trilha: TrilhaAcademia
  status: 'atual' | 'bloqueada' | 'concluida'
  onClick: () => void
}) {
  const navigate = useNavigate()
  const bloqueada = status === 'bloqueada'
  const concluida = status === 'concluida'
  const aulasComConteudo = trilha.aulas.length > 0

  return (
    <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
      bloqueada
        ? 'border-slate-700/30 bg-slate-900/30 opacity-60'
        : concluida
        ? 'border-emerald-700/30 bg-slate-900/50'
        : 'border-slate-700 bg-slate-900 shadow-xl shadow-slate-950/50'
    }`}>
      {/* Header com gradiente */}
      <div className={`bg-gradient-to-r ${trilha.cor_primaria} p-5 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">{trilha.emoji}</span>
              {concluida && (
                <CheckCircle2 size={20} className="text-white opacity-90" />
              )}
              {bloqueada && (
                <Lock size={16} className="text-white opacity-70" />
              )}
            </div>
            <h3 className="text-white font-bold text-lg leading-tight">{trilha.titulo}</h3>
            <p className="text-white/70 text-sm">{trilha.subtitulo}</p>
          </div>
          <div className="text-right">
            <p className="text-white/90 font-bold text-xl">{trilha.aulas.length}</p>
            <p className="text-white/60 text-xs">aulas</p>
          </div>
        </div>

        {/* Barra de progresso */}
        <div className="relative mt-4">
          <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white/80 rounded-full transition-all"
              style={{ width: concluida ? '100%' : status === 'atual' && aulasComConteudo ? '5%' : '0%' }}
            />
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-white/60 text-xs">
              {concluida ? 'Concluída' : status === 'atual' ? 'Em andamento' : 'Não iniciada'}
            </span>
            <span className="text-white/60 text-xs">{trilha.total_horas_estimadas}h estimadas</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <p className="text-slate-400 text-sm mb-4">{trilha.descricao}</p>

        {trilha.prerequisito && !concluida && (
          <div className="flex items-center gap-2 text-xs text-amber-400/80 bg-amber-400/10 rounded-lg px-3 py-2 mb-4">
            <Lock size={12} />
            <span>Pré-requisito: {trilha.prerequisito}</span>
          </div>
        )}

        {/* Lista de aulas */}
        {aulasComConteudo ? (
          <div className="space-y-2">
            {trilha.aulas.slice(0, 3).map((aula, i) => (
              <CardAula
                key={aula.id}
                aula={aula}
                index={i}
                onClick={() => !bloqueada && navigate(`/academia/${aula.id}`)}
              />
            ))}
            {trilha.aulas.length > 3 && (
              <button
                onClick={() => !bloqueada && onClick()}
                disabled={bloqueada}
                className="w-full text-center text-sm text-slate-500 hover:text-blue-400 transition-colors py-2 disabled:cursor-not-allowed"
              >
                + {trilha.aulas.length - 3} aulas a mais → Ver trilha completa
              </button>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-3">
              <GraduationCap size={24} className="text-slate-500" />
            </div>
            <p className="text-slate-400 text-sm font-medium">Em Desenvolvimento</p>
            <p className="text-slate-600 text-xs mt-1">As aulas deste nível estão sendo preparadas</p>
          </div>
        )}

        {/* CTA */}
        {!bloqueada && aulasComConteudo && (
          <button
            onClick={() => navigate(`/academia/${trilha.aulas[0].id}`)}
            className={`mt-4 w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-medium text-sm transition-all ${
              concluida
                ? 'bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/30'
                : 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/20'
            }`}
          >
            <PlayCircle size={16} />
            {concluida ? 'Revisar Trilha' : 'Começar Trilha'}
            <ArrowRight size={14} />
          </button>
        )}
      </div>
    </div>
  )
}

export default function AcademiaPage() {
  const navigate = useNavigate()
  const { user } = useAuthStore()
  const nivelUsuario: NivelCarreira = (user?.nivel as NivelCarreira) || 'estagiario'

  const totalAulas = TODAS_TRILHAS.reduce((acc, t) => acc + t.aulas.length, 0)
  const totalHoras = TODAS_TRILHAS.reduce((acc, t) => acc + t.total_horas_estimadas, 0)

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex items-start justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <GraduationCap size={22} className="text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Academia SAP</h1>
                  <p className="text-slate-400 text-sm">Trilha de aprendizado do zero ao Consultor</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
                Aprenda SAP GUI 770 com aulas estruturadas, prints reais do sistema e
                explicações contextualizadas no mundo corporativo. Cada trilha prepara você
                para o próximo nível da carreira.
              </p>
            </div>

            {/* Stats */}
            <div className="hidden md:flex gap-6 flex-shrink-0">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">{totalAulas}</p>
                <p className="text-slate-500 text-xs mt-0.5">aulas disponíveis</p>
              </div>
              <div className="w-px bg-slate-700" />
              <div className="text-center">
                <p className="text-2xl font-bold text-white">5</p>
                <p className="text-slate-500 text-xs mt-0.5">trilhas de carreira</p>
              </div>
              <div className="w-px bg-slate-700" />
              <div className="text-center">
                <p className="text-2xl font-bold text-white">{totalHoras}h</p>
                <p className="text-slate-500 text-xs mt-0.5">de conteúdo total</p>
              </div>
            </div>
          </div>

          {/* Info banner */}
          <div className="mt-6 flex items-start gap-3 bg-blue-600/10 border border-blue-600/20 rounded-xl px-4 py-3">
            <BookOpen size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-blue-300 text-sm font-medium">Como funciona a Academia?</p>
              <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">
                As aulas ensinam teoria e mostram marcações exatas de onde adicionar prints reais
                do SAP. Você tira os prints no seu SAP GUI 770 e os conteúdos ficam completos e
                personalizados para a sua empresa.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Grid de Trilhas */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-white">Trilhas de Carreira</h2>
          <BadgeNivel
            titulo={`Seu nível: ${nivelUsuario}`}
            cor="bg-blue-500/20 text-blue-400 border-blue-500/30"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {TODAS_TRILHAS.map((trilha) => {
            const status = getStatusTrilha(trilha, nivelUsuario)
            return (
              <CardTrilha
                key={trilha.id}
                trilha={trilha}
                status={status}
                onClick={() => trilha.aulas.length > 0 && navigate(`/academia/${trilha.aulas[0].id}`)}
              />
            )
          })}
        </div>

        {/* Rodapé motivacional */}
        <div className="mt-10 text-center py-8 border-t border-slate-800">
          <p className="text-slate-500 text-sm">
            💡 Cada aula desta Academia usa prints reais do SAP GUI 770 para garantir máxima precisão.
          </p>
          <p className="text-slate-600 text-xs mt-1">
            As aulas dos Níveis 2-5 estão em desenvolvimento e serão lançadas em breve.
          </p>
        </div>
      </div>
    </div>
  )
}
