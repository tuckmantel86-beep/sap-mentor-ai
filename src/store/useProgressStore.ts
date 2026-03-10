import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { ProgressoMissao } from '../types'

interface ProgressState {
  progressos: Record<string, ProgressoMissao>
  iniciarMissao: (missaoId: string) => void
  concluirPasso: (missaoId: string, passoId: string) => void
  concluirMissao: (missaoId: string) => void
  getProgresso: (missaoId: string) => ProgressoMissao | null
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      progressos: {},

      iniciarMissao: (missaoId) => set((state) => ({
        progressos: {
          ...state.progressos,
          [missaoId]: {
            missao_id: missaoId,
            status: 'em_andamento',
            passos_concluidos: [],
            iniciada_em: new Date().toISOString(),
          }
        }
      })),

      concluirPasso: (missaoId, passoId) => set((state) => {
        const progresso = state.progressos[missaoId]
        if (!progresso) return state
        return {
          progressos: {
            ...state.progressos,
            [missaoId]: {
              ...progresso,
              passos_concluidos: [...new Set([...progresso.passos_concluidos, passoId])]
            }
          }
        }
      }),

      concluirMissao: (missaoId) => set((state) => ({
        progressos: {
          ...state.progressos,
          [missaoId]: {
            ...state.progressos[missaoId],
            status: 'concluida',
            concluida_em: new Date().toISOString(),
          }
        }
      })),

      getProgresso: (missaoId) => get().progressos[missaoId] || null,
    }),
    { name: 'sap-mentor-progress' }
  )
)
