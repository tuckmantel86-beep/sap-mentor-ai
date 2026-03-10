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
