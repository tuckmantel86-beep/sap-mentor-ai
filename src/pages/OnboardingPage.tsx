import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore'
import { Cpu, ChevronRight, BookOpen, Target, TrendingUp, Briefcase } from 'lucide-react'
import type { Modulo, NivelCarreira } from '../types'

const MODULOS = [
  { value: 'MM', label: 'MM — Compras & Estoque', desc: 'Ordens de compra, recebimento, estoque', cor: 'blue' },
  { value: 'FI', label: 'FI — Financeiro', desc: 'Contabilidade, pagamentos, faturas', cor: 'green' },
  { value: 'SD', label: 'SD — Vendas', desc: 'Pedidos de venda, entregas, faturamento', cor: 'purple' },
  { value: 'CO', label: 'CO — Controladoria', desc: 'Centros de custo, ordens internas', cor: 'orange' },
  { value: 'HCM', label: 'HCM — Recursos Humanos', desc: 'Admissão, folha, benefícios', cor: 'pink' },
]

const OBJETIVOS = [
  { value: 'primeiro_emprego', label: 'Conseguir meu primeiro emprego SAP', icon: Briefcase },
  { value: 'mudanca_area', label: 'Mudar de área para SAP', icon: TrendingUp },
  { value: 'melhorar_trabalho', label: 'Melhorar no trabalho atual', icon: Target },
  { value: 'virar_consultor', label: 'Me tornar consultor SAP', icon: BookOpen },
]

export default function OnboardingPage() {
  const navigate = useNavigate()
  const { setUser } = useAuthStore()
  const [step, setStep] = useState(1)
  const [nome, setNome] = useState('')
  const [modulo, setModulo] = useState<Modulo>('MM')
  const [objetivo, setObjetivo] = useState('primeiro_emprego')

  const handleComecar = () => {
    const nivelMap: Record<string, NivelCarreira> = {
      primeiro_emprego: 'estagiario',
      mudanca_area: 'junior',
      melhorar_trabalho: 'pleno',
      virar_consultor: 'junior',
    }

    setUser({
      id: crypto.randomUUID(),
      nome: nome || 'Estudante SAP',
      email: '',
      nivel: nivelMap[objetivo] || 'estagiario',
      modulo_interesse: modulo,
      objetivo,
      missoes_concluidas: 0,
      xp_total: 0,
      created_at: new Date().toISOString(),
    })
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <div className="w-full max-w-lg">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4 shadow-xl shadow-blue-600/30">
            <Cpu size={32} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white">SAP Mentor AI</h1>
          <p className="text-slate-400 mt-2">Aprenda SAP fazendo tarefas reais de empresa</p>
        </div>

        {step === 1 && (
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
            <h2 className="text-xl font-bold text-white mb-2">Qual é o seu nome?</h2>
            <p className="text-slate-400 text-sm mb-6">Como podemos te chamar durante o treinamento?</p>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm mb-6"
              onKeyDown={(e) => e.key === 'Enter' && setStep(2)}
            />
            <button
              onClick={() => setStep(2)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              Próximo <ChevronRight size={18} />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
            <h2 className="text-xl font-bold text-white mb-2">Qual módulo SAP te interessa?</h2>
            <p className="text-slate-400 text-sm mb-6">Começaremos pelo módulo que mais importa para você</p>
            <div className="space-y-3 mb-6">
              {MODULOS.map((m) => (
                <button
                  key={m.value}
                  onClick={() => setModulo(m.value as Modulo)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    modulo === m.value
                      ? 'border-blue-500 bg-blue-600/10 text-white'
                      : 'border-slate-700 bg-slate-800 text-slate-300 hover:border-slate-600'
                  }`}
                >
                  <span className="font-semibold text-sm">{m.label}</span>
                  <p className="text-xs text-slate-500 mt-0.5">{m.desc}</p>
                </button>
              ))}
            </div>
            <div className="flex gap-3">
              <button onClick={() => setStep(1)} className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold py-3 rounded-xl transition-colors text-sm">
                Voltar
              </button>
              <button onClick={() => setStep(3)} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm">
                Próximo <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
            <h2 className="text-xl font-bold text-white mb-2">Qual é o seu objetivo?</h2>
            <p className="text-slate-400 text-sm mb-6">Isso vai personalizar sua trilha de aprendizado</p>
            <div className="space-y-3 mb-6">
              {OBJETIVOS.map((obj) => {
                const Icon = obj.icon
                return (
                  <button
                    key={obj.value}
                    onClick={() => setObjetivo(obj.value)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center gap-3 ${
                      objetivo === obj.value
                        ? 'border-blue-500 bg-blue-600/10 text-white'
                        : 'border-slate-700 bg-slate-800 text-slate-300 hover:border-slate-600'
                    }`}
                  >
                    <Icon size={18} className={objetivo === obj.value ? 'text-blue-400' : 'text-slate-500'} />
                    <span className="text-sm font-medium">{obj.label}</span>
                  </button>
                )
              })}
            </div>
            <div className="flex gap-3">
              <button onClick={() => setStep(2)} className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold py-3 rounded-xl transition-colors text-sm">
                Voltar
              </button>
              <button onClick={handleComecar} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors text-sm">
                Começar Treinamento
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
