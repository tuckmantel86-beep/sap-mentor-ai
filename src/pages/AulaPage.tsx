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
  Lock,
} from 'lucide-react'
import { getAulaPorId, TODAS_TRILHAS } from '../data/academia'
import type { SecaoAula, TipoSecao, NivelCarreiraAcad } from '../data/academia'
import { getAulaImage } from '../data/academia-images'
import { useAuthStore } from '../store/useAuthStore'

// ─── Ordem dos níveis ──────────────────────────────────────────────────────────
const NIVEL_ORDEM: Record<NivelCarreiraAcad, number> = {
  estagiario: 1,
  junior: 2,
  pleno: 3,
  senior: 4,
  consultor: 5,
}

const PROXIMO_NIVEL: Record<NivelCarreiraAcad, NivelCarreiraAcad | null> = {
  estagiario: 'junior',
  junior: 'pleno',
  pleno: 'senior',
  senior: 'consultor',
  consultor: null,
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

// ─── Bloco de Print ───────────────────────────────────────────────────────────
function BlocoPrint({ secao }: { secao: SecaoAula }) {
  const { placeholder } = secao
  if (!placeholder) return null

  const imgUrl = placeholder.imagem_url || getAulaImage(placeholder.id)
  const temImagem = !!imgUrl

  return (
    <div className={`rounded-xl overflow-hidden border ${
      temImagem ? 'border-slate-700 bg-slate-950/80' : 'border-dashed border-amber-500/40'
    }`}>
      {temImagem ? (
        <>
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
          <div className="relative bg-slate-950 flex items-center justify-center p-0">
            <img
              src={imgUrl}
              alt={placeholder.legenda}
              className="w-full object-contain"
              style={{ maxHeight: '520px' }}
            />
          </div>
          <div className="bg-slate-900/80 border-t border-slate-800 px-4 py-3">
            <div className="flex items-start gap-2">
              <Camera size={13} className="text-amber-400 mt-0.5 shrink-0" />
              <p className="text-slate-400 text-xs leading-relaxed italic">{placeholder.legenda}</p>
            </div>
          </div>
        </>
      ) : (
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

// ─── Renderizador de Seção ────────────────────────────────────────────────────
function BlocoSecao({ secao }: { secao: SecaoAula }) {
  if (secao.tipo === 'print') return <BlocoPrint secao={secao} />

  return (
    <div className={`rounded-xl border p-5 ${COR_SECAO[secao.tipo]}`}>
      {secao.titulo && (
        <div className="flex items-center gap-2 mb-3">
          {ICONE_SECAO[secao.tipo]}
          <h3 className="text-white font-semibold text-sm">{secao.titulo}</h3>
        </div>
      )}
      {secao.conteudo && (
        <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">
          {secao.conteudo}
        </p>
      )}
      {secao.lista && secao.lista.length > 0 && (
        <ul className={`space-y-2 ${secao.conteudo ? 'mt-3' : ''}`}>
          {secao.lista.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
              <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${
                secao.tipo === 'dica' ? 'bg-emerald-400' :
                secao.tipo === 'resumo' ? 'bg-slate-500' :
                secao.tipo === 'exercicio' ? 'bg-pink-400' :
                secao.tipo === 'teoria' ? 'bg-blue-400' : 'bg-slate-500'
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

function ModalConclusaoTrilha({
  trilhaNome, trilhaEmoji, proximaTrilha, onIniciarProxima, onVoltar
}: ModalConclusaoProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50)
    return () => clearTimeout(t)
  }, [])

  // Cores dos confetes
  const CORES = ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', '#ec4899', '#06b6d4', '#f97316']

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ${
      visible ? 'bg-slate-950/90 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      {/* Confetes animados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(28)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-sm animate-bounce"
            style={{
              width: `${3 + (i % 5) * 2}px`,
              height: `${8 + (i % 4) * 4}px`,
              left: `${3 + (i * 3.4) % 94}%`,
              top: `${5 + (i * 5.7) % 88}%`,
              animationDelay: `${(i * 0.11) % 1.8}s`,
              animationDuration: `${1.2 + (i % 4) * 0.4}s`,
              backgroundColor: CORES[i % CORES.length],
              opacity: 0.7,
              transform: `rotate(${(i * 37) % 180}deg)`,
            }}
          />
        ))}
      </div>

      {/* Card principal */}
      <div className={`relative bg-slate-900 border border-slate-700 rounded-3xl p-8 max-w-md w-full shadow-2xl shadow-slate-950/80 transition-all duration-500 ${
        visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-8'
      }`}>
        {/* Troféu animado */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/20 border-2 border-amber-500/40 flex items-center justify-center shadow-lg shadow-amber-500/20">
              <Trophy size={46} className="text-amber-400" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-amber-400/20 flex items-center justify-center border border-amber-400/40">
              <Star size={14} className="text-amber-300 fill-amber-300" />
            </div>
            <div className="absolute -bottom-1 -left-2">
              <Sparkles size={18} className="text-amber-400" />
            </div>
          </div>
        </div>

        {/* Título */}
        <div className="text-center mb-6">
          <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">
            🎉 Trilha Concluída!
          </p>
          <h2 className="text-white text-2xl font-bold mb-1">
            {trilhaEmoji} {trilhaNome}
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Parabéns! Você completou todas as aulas desta trilha e está pronto para o próximo nível.
          </p>
        </div>

        {/* Badge conquista */}
        <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl px-4 py-3 mb-6">
          <CheckCircle2 size={22} className="text-emerald-400 flex-shrink-0" />
          <div>
            <p className="text-emerald-300 text-sm font-semibold">Nível desbloqueado!</p>
            <p className="text-slate-400 text-xs">Seu progresso foi salvo automaticamente</p>
          </div>
        </div>

        {/* Próxima trilha */}
        {proximaTrilha ? (
          <>
            <div className="bg-slate-800/80 border border-slate-600/50 rounded-xl p-4 mb-5">
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3">
                🚀 Próxima Trilha
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-2xl flex-shrink-0">
                  {proximaTrilha.emoji}
                </div>
                <div>
                  <p className="text-white font-bold">{proximaTrilha.titulo}</p>
                  <p className="text-slate-400 text-xs">{proximaTrilha.subtitulo}</p>
                </div>
              </div>
            </div>

            <button
              onClick={onIniciarProxima}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-600/30 mb-3 text-base"
            >
              <ArrowRight size={20} />
              Iniciar {proximaTrilha.titulo}
            </button>
          </>
        ) : (
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mb-5 text-center">
            <p className="text-amber-300 font-bold">🎓 Você chegou ao topo!</p>
            <p className="text-slate-400 text-xs mt-1">Todas as trilhas disponíveis foram concluídas!</p>
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
  const { user, updateUser } = useAuthStore()
  const [mostrarConclusao, setMostrarConclusao] = useState(false)

  const aula = getAulaPorId(aulaId || '')
  const trilha = TODAS_TRILHAS.find(t => t.aulas.some(a => a.id === aulaId))

  // Nível atual do usuário
  const nivelUsuario = ((user?.nivel as NivelCarreiraAcad) || 'estagiario')

  // ── Guard de acesso: redireciona se a trilha está bloqueada ─────────────────
  useEffect(() => {
    if (!aula || !trilha) return
    const ordemTrilha = NIVEL_ORDEM[trilha.nivel]
    const ordemUsuario = NIVEL_ORDEM[nivelUsuario]
    if (ordemTrilha > ordemUsuario) {
      navigate('/academia', { replace: true })
    }
  }, [aula, trilha, nivelUsuario, navigate])

  // ── Scroll para o topo ao mudar de aula ─────────────────────────────────────
  useEffect(() => {
    const main = document.getElementById('main-content')
    if (main) {
      main.scrollTop = 0
    }
  }, [aulaId])

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

  // Bloquear renderização se a trilha está acima do nível do usuário
  if (trilha && NIVEL_ORDEM[trilha.nivel] > NIVEL_ORDEM[nivelUsuario]) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <Lock size={48} className="text-slate-600 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-white mb-2">Trilha bloqueada</h2>
          <p className="text-slate-400 text-sm mb-4">Conclua a trilha anterior para desbloquear este conteúdo.</p>
          <Link to="/academia" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
            ← Voltar à Academia
          </Link>
        </div>
      </div>
    )
  }

  const aulaAnterior = aula.aula_anterior_id ? getAulaPorId(aula.aula_anterior_id) : null
  const proximaAulaRaw = aula.proxima_aula_id ? getAulaPorId(aula.proxima_aula_id) : null
  const totalPrints = aula.secoes.filter(s => s.tipo === 'print').length

  // É a última aula da trilha se não há próxima, ou se a próxima pertence a outra trilha
  const proximaAulaMesmaTrilha =
    proximaAulaRaw && trilha && trilha.aulas.some(a => a.id === proximaAulaRaw.id)
      ? proximaAulaRaw
      : null
  const ehUltimaAula = !proximaAulaMesmaTrilha
  const proximaAula = proximaAulaMesmaTrilha

  // Próxima trilha para o modal
  const proximaTrilhaInfo = (() => {
    if (!trilha) return null
    const ordemAtual = NIVEL_ORDEM[trilha.nivel]
    const pt = TODAS_TRILHAS.find(t => NIVEL_ORDEM[t.nivel] === ordemAtual + 1)
    if (!pt || pt.aulas.length === 0) return null
    return {
      titulo: pt.titulo,
      emoji: pt.emoji,
      subtitulo: pt.subtitulo,
      primeiraAulaId: pt.aulas[0].id,
      nivel: pt.nivel,
    }
  })()

  // Ao concluir a trilha: atualiza o nível do usuário e navega para a próxima
  const handleIniciarProxima = () => {
    // Atualiza o nível se a próxima trilha existe
    if (trilha) {
      const proximoNivel = PROXIMO_NIVEL[trilha.nivel]
      if (proximoNivel && user) {
        // Só avança se o usuário ainda está no nível atual (não avançou antes)
        const ordemAtual = NIVEL_ORDEM[nivelUsuario]
        const ordemTrilha = NIVEL_ORDEM[trilha.nivel]
        if (ordemTrilha >= ordemAtual) {
          updateUser({ nivel: proximoNivel })
        }
      }
    }

    setMostrarConclusao(false)

    if (proximaTrilhaInfo) {
      navigate(`/academia/${proximaTrilhaInfo.primeiraAulaId}`)
    } else {
      navigate('/academia')
    }
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Modal de conclusão */}
      {mostrarConclusao && trilha && (
        <ModalConclusaoTrilha
          trilhaNome={trilha.titulo}
          trilhaEmoji={trilha.emoji}
          proximaTrilha={proximaTrilhaInfo}
          onIniciarProxima={handleIniciarProxima}
          onVoltar={() => {
            setMostrarConclusao(false)
            navigate('/academia')
          }}
        />
      )}

      {/* Breadcrumb fixo */}
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
              <span className="text-slate-400">{trilha.emoji} {trilha.titulo}</span>
              <ChevronRight size={14} className="text-slate-600" />
            </>
          )}
          <span className="text-white font-medium truncate">{aula.titulo}</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header da aula */}
        <div className="mb-8">
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

          <div className="mt-5 bg-slate-900 border border-slate-700 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Target size={16} className="text-blue-400" />
              <span className="text-blue-400 font-medium text-sm">Objetivo desta aula</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">{aula.objetivo}</p>
          </div>
        </div>

        {/* Seções */}
        <div className="space-y-5">
          {aula.secoes.map((secao) => (
            <BlocoSecao key={secao.id} secao={secao} />
          ))}
        </div>

        {/* Navegação entre aulas */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex items-center justify-between gap-4">
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
                onClick={() => setMostrarConclusao(true)}
                className="flex items-center gap-3 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 rounded-xl px-5 py-3.5 transition-all shadow-lg shadow-amber-600/30 animate-pulse hover:animate-none"
              >
                <div className="text-right">
                  <p className="text-amber-100 text-xs font-medium">Última aula desta trilha</p>
                  <p className="text-white text-sm font-bold">Concluir trilha! 🏆</p>
                </div>
                <Trophy size={20} className="text-white flex-shrink-0" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
