import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from './store/useAuthStore'
import OnboardingPage from './pages/OnboardingPage'
import DashboardPage from './pages/DashboardPage'
import MissoesPage from './pages/MissoesPage'
import MissaoPage from './pages/MissaoPage'
import PerfilPage from './pages/PerfilPage'
import AcademiaPage from './pages/AcademiaPage'
import AulaPage from './pages/AulaPage'
import Layout from './components/Layout'

function App() {
  const { user } = useAuthStore()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route element={<Layout />}>
          <Route path="/" element={user ? <DashboardPage /> : <Navigate to="/onboarding" />} />
          <Route path="/missoes" element={<MissoesPage />} />
          <Route path="/missao/:id" element={<MissaoPage />} />
          <Route path="/academia" element={<AcademiaPage />} />
          <Route path="/academia/:aulaId" element={<AulaPage />} />
          <Route path="/perfil" element={<PerfilPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
