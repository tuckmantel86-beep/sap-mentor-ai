// TIPOS DA ACADEMIA SAP - arquivo separado

export type ModuloAcademia = 'MM' | 'FI' | 'SD' | 'CO' | 'HCM' | 'GERAL'
export type TipoSecao = 'teoria' | 'print' | 'destaque' | 'dica' | 'atencao' | 'pratica' | 'resumo' | 'exercicio'
export type NivelCarreiraAcad = 'estagiario' | 'junior' | 'pleno' | 'senior' | 'consultor'

export interface PlaceholderPrint {
  id: string
  instrucao_capture: string
  legenda: string
  imagem_url?: string
}

export interface SecaoAula {
  id: string
  ordem: number
  tipo: TipoSecao
  titulo?: string
  conteudo?: string
  placeholder?: PlaceholderPrint
  lista?: string[]
}

export interface Aula {
  id: string
  titulo: string
  subtitulo: string
  nivel: NivelCarreiraAcad
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
  nivel: NivelCarreiraAcad
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
