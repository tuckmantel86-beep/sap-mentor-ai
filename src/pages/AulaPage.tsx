import { useParams, useNavigate, Link } from 'react-router-dom'
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
} from 'lucide-react'
import { getAulaPorId, TODAS_TRILHAS } from '../data/academia'
import type { SecaoAula, TipoSecao } from '../data/academia'

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

// ─── Bloco de Placeholder de Print ────────────────────────────────────────────
function BlocoPrint({ secao }: { secao: SecaoAula }) {
  const { placeholder } = secao
  if (!placeholder) return null

  const temImagem = !!placeholder.imagem_url

  return (
    <div className={`rounded-xl border-2 border-dashed overflow-hidden ${
      temImagem ? 'border-emerald-500/40' : 'border-amber-500/40'
    }`}>
      {temImagem ? (
        <div className="relative">
          <img
            src={placeholder.imagem_url}
            alt={placeholder.legenda}
            className="w-full object-contain max-h-[500px] bg-slate-950"
          />
          <div className="bg-slate-900 border-t border-slate-700 px-4 py-2">
            <p className="text-slate-400 text-xs italic">{placeholder.legenda}</p>
          </div>
        </div>
      ) : (
        <div className="p-5">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-3">
            <Camera size={18} className="text-amber-400" />
            <span className="text-amber-400 font-semibold text-sm">Print Necessário</span>
          </div>

          {/* Instrução de captura */}
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3 mb-3">
            <p className="text-amber-400/90 text-xs font-medium mb-1">📸 O que você precisa capturar:</p>
            <p className="text-slate-300 text-sm leading-relaxed">{placeholder.instrucao_capture}</p>
          </div>

          {/* Área de imagem vazia */}
          <div className="bg-slate-800/50 rounded-lg border border-dashed border-slate-600 flex flex-col items-center justify-center py-10 gap-3">
            <Image size={36} className="text-slate-600" />
            <div className="text-center">
              <p className="text-slate-500 text-sm font-medium">Aguardando seu print real do SAP GUI 770</p>
              <p className="text-slate-600 text-xs mt-1">
                Tire o print conforme as instruções acima e envie ao seu instrutor para montar a aula completa
              </p>
            </div>
          </div>

          {/* Legenda que vai aparecer */}
          <div className="mt-3 px-1">
            <p className="text-slate-500 text-xs">
              <span className="text-slate-400 font-medium">Legenda:</span> {placeholder.legenda}
            </p>
          </div>
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

// ─── Página Principal da Aula ─────────────────────────────────────────────────
export default function AulaPage() {
  const { aulaId } = useParams<{ aulaId: string }>()
  const navigate = useNavigate()

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
  const printsPendentes = aula.secoes.filter(
    s => s.tipo === 'print' && !s.placeholder?.imagem_url
  ).length
  const totalPrints = aula.secoes.filter(s => s.tipo === 'print').length

  return (
    <div className="min-h-screen bg-slate-950">
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
            <div className={`flex items-center gap-1.5 text-sm ${
              printsPendentes > 0 ? 'text-amber-400' : 'text-emerald-400'
            }`}>
              <Camera size={15} />
              {printsPendentes > 0
                ? `${printsPendentes}/${totalPrints} prints pendentes`
                : `${totalPrints} prints prontos ✓`}
            </div>
          </div>

          {/* Objetivo */}
          <div className="mt-5 bg-slate-900 border border-slate-700 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Target size={16} className="text-blue-400" />
              <span className="text-blue-400 font-medium text-sm">Objetivo desta aula</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">{aula.objetivo}</p>
          </div>

          {/* Aviso de prints pendentes */}
          {printsPendentes > 0 && (
            <div className="mt-3 flex items-start gap-2 bg-amber-500/10 border border-amber-500/20 rounded-xl p-3">
              <Camera size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-amber-400/90 text-xs">
                Esta aula tem <strong>{printsPendentes} ponto(s)</strong> aguardando prints reais do SAP GUI 770.
                Tire os prints conforme as instruções em cada seção e envie para completar a aula.
              </p>
            </div>
          )}
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

            {/* Próxima aula */}
            {proximaAula ? (
              <button
                onClick={() => navigate(`/academia/${proximaAula.id}`)}
                className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 rounded-xl px-4 py-3 transition-all group max-w-xs shadow-lg shadow-blue-600/20"
              >
                <div className="text-right min-w-0">
                  <p className="text-blue-200 text-xs">Próxima aula</p>
                  <p className="text-white text-sm font-medium truncate">{proximaAula.titulo}</p>
                </div>
                <ChevronRight size={18} className="text-white flex-shrink-0" />
              </button>
            ) : (
              <button
                onClick={() => navigate('/academia')}
                className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 rounded-xl px-4 py-3 transition-all shadow-lg shadow-emerald-600/20"
              >
                <div className="text-right">
                  <p className="text-emerald-200 text-xs">Trilha concluída!</p>
                  <p className="text-white text-sm font-medium">Ver próxima trilha</p>
                </div>
                <ArrowRight size={18} className="text-white flex-shrink-0" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
