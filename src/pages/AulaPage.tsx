import { useParams, useNavigate, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Clock,
  Camera,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  BookOpen,
  Target,
  List,
  FileText,
  Dumbbell,
  ArrowRight,
  Home,
  Image,
  Trophy,
  Star,
  Sparkles,
} from 'lucide-react'
import { getAulaPorId, TODAS_TRILHAS } from '../data/academia'
import type { SecaoAula, TipoSecao, NivelCarreiraAcad as NivelCarreira } from '../data/academia'
import { getAulaImage } from '../data/academia-images'

// ─── Ordem dos níveis ──────────────────────────────────────────────────────────
const NIVEL_ORDEM: Record<NivelCarreira, number> = {
  estagiario: 1,
  junior: 2,
  pleno: 3,
  senior: 4,
  consultor: 5,
}

// ─── Ícone por tipo de seção ──────────────────────────────────────────────────
const ICONE_SECAO: Record<TipoSecao, React.ReactNode> = {
  teoria: <BookOpen size={16} className="text-blue-400" />,
  print: <Camera size={16} className="text-amber-400" />,
  destaque: <Target size={16} className="text-violet-400" />,
  dica: <Lightbulb size={16} className="text-emerald-400" />,
  atencao: <AlertTriangle size={16} className="text-red-400" />,
  pratica: <Dumbbell size={16} className="text-cyan-400" />,
  resumo: <List size={16} className="text-slate-400" />,
  exercicio: <FileText size={16} className="text-pink-400" />,
}

const COR_SECAO: Record<TipoSecao, string> = {
  teoria: 'border-blue-600/20 bg-slate-900',
  print: 'border-amber-500/30 bg-amber-500/5',
  destaque: 'border-violet-500/30 bg-violet-500/5',
  dica: 'border-emerald-500/30 bg-emerald-500/5',
  atencao: 'border-red-500/30 bg-red-500/5',
  pratica: 'border-cyan-500/30 bg-cyan-500/5',
  resumo: 'border-slate-600/50 bg-slate-900/50',
  exercicio: 'border-pink-500/30 bg-pink-500/5',
}

// ─── Bloco de Print: imagem real com frame do site ───────────────────────────
function BlocoPrint({ secao }: { secao: SecaoAula }) {
  const { placeholder } = secao
  if (!placeholder) return null

  // Prioridade: imagem_url do placeholder → mapeamento automático dos PDFs
  const imgUrl = placeholder.imagem_url || getAulaImage(placeholder.id)
  const temImagem = !!imgUrl

  return (
    <div className={`rounded-xl overflow-hidden border ${
      temImagem
        ? 'border-slate-700 bg-slate-950/80'
        : 'border-dashed border-amber-500/40'
    }`}>
      {temImagem ? (
        <>
          {/* Header do frame no estilo site */}
          <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500/70" />
              <div className="w-2 h-2 rounded-full bg-amber-500/70" />
              <div className="w-2 h-2 rounded-full bg-emerald-500/70" />
              <span className="ml-2 text-slate-500 text-xs font-mono">SAP GUI 7.70</span>
            </div>
            <span className="text-slate-600 text-xs font-mono">
              {placeholder.id.replace('print-', '').toUpperCase()}
            </span>
          </div>

          {/* Imagem com frame adaptado ao site escuro */}
          <div className="relative bg-slate-950 flex items-center justify-center p-0">
            <img
              src={imgUrl}
              alt={placeholder.legenda}
              className="w-full object-contain"
              style={{ maxHeight: '520px' }}
            />
          </div>

          {/* Legenda no estilo site */}
          <div className="bg-slate-900/80 border-t border-slate-800 px-4 py-3">
            <div className="flex items-start gap-2">
              <Camera size={13} className="text-amber-400 mt-0.5 shrink-0" />
              <p className="text-slate-400 text-xs leading-relaxed italic">{placeholder.legenda}</p>
            </div>
          </div>
        </>
      ) : (
        /* Placeholder quando não há imagem disponível */
        <div className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <Camera size={18} className="text-amber-400" />
            <span className="text-amber-400 font-semibold text-sm">Imagem do SAP</span>
          </div>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3 mb-3">
            <p className="text-amber-400/90 text-xs font-medium mb-1">📸 O que você verá aqui:</p>
            <p className="text-slate-300 text-sm leading-relaxed">{placeholder.instrucao_capture}</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg border border-dashed border-slate-600 flex flex-col items-center justify-center py-10 gap-3">
            <Image size={36} className="text-slate-600" />
            <p className="text-slate-500 text-sm">Imagem em breve</p>
          </div>
          <p className="text-slate-500 text-xs mt-3">
            <span className="text-slate-400 font-medium">Legenda:</span> {placeholder.legenda}
          </p>
        </div>
      )}
    </div>
  )
}

// ─── Renderizador de Seção ─────────────────────────────────────────────────────
function BlocoSecao({ secao }: { secao: SecaoAula }) {
  if (secao.tipo === 'print') {
    return <BlocoPrint secao={secao} />
  }

  return (
    <div className={`rounded-xl border p-5 ${COR_SECAO[secao.tipo]}`}>
      {/* Cabeçalho da seção */}
      {secao.titulo && (
        <div className="flex items-center gap-2 mb-3">
          {ICONE_SECAO[secao.tipo]}
          <h3 className="text-white font-semibold text-sm">{secao.titulo}</h3>
        </div>
      )}

      {/* Conteúdo de texto */}
      {secao.conteudo && (
        <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">
          {secao.conteudo}
        </p>
      )}

      {/* Lista de itens */}
      {secao.lista && secao.lista.length > 0 && (
        <ul className={`mt-3 space-y-2 ${secao.conteudo ? 'mt-3' : ''}`}>
          {secao.lista.map((item, i) => (
            <li key={i} className={`flex items-start gap-2 text-sm ${
              secao.tipo === 'exercicio' ? 'text-slate-300' :
              secao.tipo === 'resumo' ? 'text-slate-300' :
              'text-slate-300'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${
                secao.tipo === 'dica' ? 'bg-emerald-400' :
                secao.tipo === 'resumo' ? 'bg-slate-500' :
                secao.tipo === 'exercicio' ? 'bg-pink-400' :
                secao.tipo === 'teoria' ? 'bg-blue-400' :
                'bg-slate-500'
              }`} />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

// ─── Modal de Conclusão de Trilha ─────────────────────────────────────────────
interface ModalConclusaoProps {
  trilhaNome: string
  trilhaEmoji: string
  proximaTrilha: { titulo: string; emoji: string; subtitulo: string; primeiraAulaId: string } | null
  onIniciarProxima: () => void
  onVoltar: () => void
}

function ModalConclusaoTrilha({ trilhaNome, trilhaEmoji, proximaTrilha, onIniciarProxima, onVoltar }: ModalConclusaoProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Pequeno delay para a animação de entrada
    const t = setTimeout(() => setVisible(true), 50)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ${
      visible ? 'bg-slate-950/90 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      {/* Partículas decorativas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-bounce"
            style={{
              width: `${4 + (i % 4) * 3}px`,
              height: `${4 + (i % 4) * 3}px`,
              left: `${5 + (i * 4.7) % 90}%`,
              top: `${10 + (i * 6.3) % 80}%`,
              animationDelay: `${(i * 0.15) % 1.5}s`,
              animationDuration: `${1.5 + (i % 3) * 0.5}s`,
              backgroundColor: ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', '#ec4899'][i % 5],
              opacity: 0.6,
            }}
          />
        ))}
      </div>

      {/* Card principal */}
      <div className={`relative bg-slate-900 border border-slate-700 rounded-3xl p-8 max-w-md w-full shadow-2xl shadow-slate-950/80 transition-all duration-500 ${
        visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-8'
      }`}>
        {/* Ícone de troféu animado */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/20 border border-amber-500/30 flex items-center justify-center">
              <Trophy size={44} className="text-amber-400" />
            </div>
            {/* Brilho ao redor */}
            <div className="absolute -top-1 -right-1">
              <Star size={16} className="text-amber-300 fill-amber-300" />
            </div>
            <div className="absolute -bottom-1 -left-1">
              <Sparkles size={14} className="text-amber-400" />
            </div>
          </div>
        </div>

        {/* Título */}
        <div className="text-center mb-6">
          <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-2">
            Trilha Concluída!
          </p>
          <h2 className="text-white text-2xl font-bold mb-1">
            {trilhaEmoji} {trilhaNome}
          </h2>
          <p className="text-slate-400 text-sm">
            Parabéns! Você completou todas as aulas desta trilha.
          </p>
        </div>

        {/* Badge de conquista */}
        <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-3 mb-6">
          <CheckCircle2 size={20} className="text-emerald-400 flex-shrink-0" />
          <div>
            <p className="text-emerald-300 text-sm font-medium">Nível desbloqueado!</p>
            <p className="text-slate-400 text-xs">Você está pronto para o próximo desafio</p>
          </div>
        </div>

        {/* Próxima trilha */}
        {proximaTrilha ? (
          <>
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 mb-5">
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-2">Próxima Trilha</p>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{proximaTrilha.emoji}</span>
                <div>
                  <p className="text-white font-semibold">{proximaTrilha.titulo}</p>
                  <p className="text-slate-400 text-xs">{proximaTrilha.subtitulo}</p>
                </div>
              </div>
            </div>

            <button
              onClick={onIniciarProxima}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/30 mb-3"
            >
              <ArrowRight size={18} />
              Iniciar {proximaTrilha.titulo}
            </button>
          </>
        ) : (
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 mb-5 text-center">
            <p className="text-amber-300 font-semibold text-sm">🎓 Você chegou ao topo!</p>
            <p className="text-slate-400 text-xs mt-1">Parabéns, você concluiu todas as trilhas disponíveis!</p>
          </div>
        )}

        <button
          onClick={onVoltar}
          className="w-full text-slate-500 hover:text-slate-300 text-sm py-2 transition-colors"
        >
          Ver todas as trilhas
        </button>
      </div>
    </div>
  )
}

// ─── Página Principal da Aula ─────────────────────────────────────────────────
export default function AulaPage() {
  const { aulaId } = useParams<{ aulaId: string }>()
  const navigate = useNavigate()
  const [mostrarConclusao, setMostrarConclusao] = useState(false)

  // Scroll para o topo sempre que mudar de aula
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [aulaId])

  const aula = getAulaPorId(aulaId || '')
  const trilha = TODAS_TRILHAS.find(t => t.aulas.some(a => a.id === aulaId))

  if (!aula) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <GraduationCap size={48} className="text-slate-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Aula não encontrada</h2>
          <Link to="/academia" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
            ← Voltar à Academia
          </Link>
        </div>
      </div>
    )
  }

  const aulaAnterior = aula.aula_anterior_id ? getAulaPorId(aula.aula_anterior_id) : null
  const proximaAula = aula.proxima_aula_id ? getAulaPorId(aula.proxima_aula_id) : null
  const totalPrints = aula.secoes.filter(s => s.tipo === 'print').length
  const ehUltimaAula = !proximaAula

  // Encontrar a próxima trilha para o modal de conclusão
  const proximaTrilhaInfo = (() => {
    if (!trilha) return null
    const ordemAtual = NIVEL_ORDEM[trilha.nivel as NivelCarreira]
    const pt = TODAS_TRILHAS.find(t => NIVEL_ORDEM[t.nivel as NivelCarreira] === ordemAtual + 1)
    if (!pt || pt.aulas.length === 0) return null
    return {
      titulo: pt.titulo,
      emoji: pt.emoji,
      subtitulo: pt.subtitulo,
      primeiraAulaId: pt.aulas[0].id,
    }
  })()

  const handleUltimaAulaClick = () => {
    setMostrarConclusao(true)
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Modal de conclusão de trilha */}
      {mostrarConclusao && trilha && (
        <ModalConclusaoTrilha
          trilhaNome={trilha.titulo}
          trilhaEmoji={trilha.emoji}
          proximaTrilha={proximaTrilhaInfo}
          onIniciarProxima={() => {
            setMostrarConclusao(false)
            if (proximaTrilhaInfo) {
              navigate(`/academia/${proximaTrilhaInfo.primeiraAulaId}`)
            } else {
              navigate('/academia')
            }
          }}
          onVoltar={() => {
            setMostrarConclusao(false)
            navigate('/academia')
          }}
        />
      )}

      {/* Barra de navegação / breadcrumb */}
      <div className="bg-slate-900 border-b border-slate-800 sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center gap-2 text-sm">
          <button
            onClick={() => navigate('/academia')}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <Home size={14} />
            Academia
          </button>
          <ChevronRight size={14} className="text-slate-600" />
          {trilha && (
            <>
              <span className="text-slate-400">{trilha.titulo}</span>
              <ChevronRight size={14} className="text-slate-600" />
            </>
          )}
          <span className="text-white font-medium truncate">{aula.titulo}</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header da aula */}
        <div className="mb-8">
          {/* Badge de nível e módulo */}
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            {trilha && (
              <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border ${trilha.cor_badge}`}>
                {trilha.emoji} {trilha.titulo}
              </span>
            )}
            {aula.modulo !== 'GERAL' && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                Módulo {aula.modulo}
              </span>
            )}
            {aula.transacoes.map(t => (
              <span key={t} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700">
                {t}
              </span>
            ))}
          </div>

          <h1 className="text-3xl font-bold text-white mb-2">{aula.titulo}</h1>
          <p className="text-slate-400 text-lg">{aula.subtitulo}</p>

          {/* Metadados */}
          <div className="flex items-center gap-5 mt-4">
            <div className="flex items-center gap-1.5 text-slate-500 text-sm">
              <Clock size={15} />
              {aula.tempo_estimado_minutos} minutos
            </div>
            <div className="flex items-center gap-1.5 text-slate-500 text-sm">
              <FileText size={15} />
              {aula.secoes.length} seções
            </div>
            {totalPrints > 0 && (
              <div className="flex items-center gap-1.5 text-sm text-emerald-400">
                <Camera size={15} />
                {totalPrints} imagens
              </div>
            )}
          </div>

          {/* Objetivo */}
          <div className="mt-5 bg-slate-900 border border-slate-700 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Target size={16} className="text-blue-400" />
              <span className="text-blue-400 font-medium text-sm">Objetivo desta aula</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">{aula.objetivo}</p>
          </div>

        </div>

        {/* Conteúdo das seções */}
        <div className="space-y-5">
          {aula.secoes.map((secao) => (
            <BlocoSecao key={secao.id} secao={secao} />
          ))}
        </div>

        {/* Navegação entre aulas */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex items-center justify-between gap-4">
            {/* Aula anterior */}
            {aulaAnterior ? (
              <button
                onClick={() => navigate(`/academia/${aulaAnterior.id}`)}
                className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl px-4 py-3 transition-all group max-w-xs"
              >
                <ChevronLeft size={18} className="text-slate-400 group-hover:text-white flex-shrink-0" />
                <div className="text-left min-w-0">
                  <p className="text-slate-500 text-xs">Aula anterior</p>
                  <p className="text-white text-sm font-medium truncate">{aulaAnterior.titulo}</p>
                </div>
              </button>
            ) : (
              <div />
            )}

            {/* Próxima aula ou conclusão de trilha */}
            {!ehUltimaAula ? (
              <button
                onClick={() => navigate(`/academia/${proximaAula!.id}`)}
                className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 rounded-xl px-4 py-3 transition-all group max-w-xs shadow-lg shadow-blue-600/20"
              >
                <div className="text-right min-w-0">
                  <p className="text-blue-200 text-xs">Próxima aula</p>
                  <p className="text-white text-sm font-medium truncate">{proximaAula!.titulo}</p>
                </div>
                <ChevronRight size={18} className="text-white flex-shrink-0" />
              </button>
            ) : (
              <button
                onClick={handleUltimaAulaClick}
                className="flex items-center gap-3 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 rounded-xl px-4 py-3 transition-all shadow-lg shadow-amber-600/30"
              >
                <div className="text-right">
                  <p className="text-amber-100 text-xs">Última aula</p>
                  <p className="text-white text-sm font-medium">Concluir trilha! 🏆</p>
                </div>
                <Trophy size={18} className="text-white flex-shrink-0" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
