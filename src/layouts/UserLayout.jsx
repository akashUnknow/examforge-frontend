import { Link, Outlet, useNavigate } from 'react-router-dom'
import { BookOpen, LayoutDashboard, LogOut, UserCircle } from 'lucide-react'
import { useAuthStore } from '../store/authStore'
import { logoutUser } from '../services/authService'

export default function UserLayout() {
  const navigate = useNavigate()
  const { user, logout } = useAuthStore()

  async function handleLogout() {
    try {
      if (localStorage.getItem('examforge_refresh_token')) await logoutUser()
    } catch {
      // Local logout must still happen if the backend is unavailable.
    } finally {
      logout()
      navigate('/login', { replace: true })
    }
  }

  return <div className="min-h-screen bg-slate-50">
    <header className="border-b border-slate-200 bg-white">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-extrabold"><BookOpen className="text-brand-600" />ExamForge</Link>
        <div className="flex items-center gap-4">
          <span className="hidden text-sm font-medium text-slate-600 sm:block">{user?.name || user?.email || 'Student'}</span>
          <button onClick={handleLogout} className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-red-600"><LogOut size={17} /> Logout</button>
        </div>
      </div>
    </header>
    <div className="container-page flex gap-6 py-8">
      <aside className="hidden w-56 shrink-0 md:block"><div className="card p-3">
        <Link to="/dashboard" className="flex items-center gap-3 rounded-xl bg-brand-50 px-3 py-3 font-semibold text-brand-700"><LayoutDashboard size={18} />Dashboard</Link>
        <div className="mt-2 flex items-center gap-3 px-3 py-3 text-sm text-slate-500"><UserCircle size={18} />Profile</div>
      </div></aside>
      <main className="min-w-0 flex-1"><Outlet /></main>
    </div>
  </div>
}
