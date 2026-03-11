export type NivelCarreira = 'estagiario' | 'junior' | 'pleno' | 'senior' | 'consultor'
export type Processo = 'P2P' | 'O2C' | 'R2R'
export type Modulo = 'MM' | 'FI' | 'SD' | 'CO' | 'HCM'
export type NivelMissao = 'iniciante' | 'intermediario' | 'avancado'
export type StatusMissao = 'nao_iniciada' | 'em_andamento' | 'concluida'

export interface PassoMissao {
  id: string
  ordem: number
  titulo: string
  instrucao: string
  explicacao_negocio: string
  dica?: string
  erro_comum?: string
}

export interface ExercicioMissao {
  titulo: string
  enunciado: string
  dados: Record<string, string>
}

export interface Missao {
  id: string
  titulo: string
  modulo: Modulo
  processo: Processo
  nivel: NivelMissao
  cargo: string
  empresa_ficticia: string
  tempo_estimado_minutos: number
  contexto: string
  objetivo: string
  transacao_principal: string
  transacoes_secundarias: string[]
  passos: PassoMissao[]
  erros_comuns: string[]
  exercicio: ExercicioMissao
  competencias_treinadas: string[]
  proxima_missao_id?: string
}

export interface ProgressoMissao {
  missao_id: string
  status: StatusMissao
  passos_concluidos: string[]
  iniciada_em?: string
  concluida_em?: string
}

export interface UserProfile {
  id: string
  nome: string
  email: string
  nivel: NivelCarreira
  modulo_interesse: Modulo
  objetivo: string
  missoes_concluidas: number
  xp_total: number
  created_at: string
}

// ─── ACADEMIA SAP ────────────────────────────────────────────────────────────

export type ModuloAcademia = Modulo | 'GERAL'
export type TipoSecao = 'teoria' | 'print' | 'destaque' | 'dica' | 'atencao' | 'pratica' | 'resumo' | 'exercicio'

export interface PlaceholderPrint {
  id: string
  instrucao_capture: string   // instrução exata do que capturar no SAP real
  legenda: string             // legenda que aparece abaixo da imagem
  imagem_url?: string         // preenchido quando o usuário enviar o print real
}

export interface SecaoAula {
  id: string
  ordem: number
  tipo: TipoSecao
  titulo?: string
  conteudo?: string           // texto para tipos: teoria, destaque, dica, atencao, pratica, resumo
  placeholder?: PlaceholderPrint  // para tipo 'print'
  lista?: string[]            // para listas dentro de seções
}

export interface Aula {
  id: string
  titulo: string
  subtitulo: string
  nivel: NivelCarreira
  modulo: ModuloAcademia
  transacoes: string[]
  tempo_estimado_minutos: number
  objetivo: string
  descricao_curta: string
  secoes: SecaoAula[]
  prints_necessarios: number
  proxima_aula_id?: string
  aula_anterior_id?: string
  tags: string[]
  concluida?: boolean
}

export interface TrilhaAcademia {
  id: string
  nivel: NivelCarreira
  titulo: string
  subtitulo: string
  descricao: string
  cor_primaria: string
  cor_badge: string
  emoji: string
  aulas: Aula[]
  total_horas_estimadas: number
  prerequisito?: string
}
