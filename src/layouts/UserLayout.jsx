import { Link, Outlet } from 'react-router-dom'
import { BookOpen, LayoutDashboard } from 'lucide-react'

export default function UserLayout() {
  return <div className="min-h-screen bg-slate-50"><header className="border-b border-slate-200 bg-white"><div className="container-page flex h-16 items-center justify-between"><Link to="/" className="flex items-center gap-2 font-extrabold"><BookOpen className="text-brand-600" />ExamForge</Link><Link to="/" className="text-sm text-slate-500 hover:text-slate-900">Back to platform</Link></div></header><div className="container-page flex gap-6 py-8"><aside className="hidden w-56 shrink-0 md:block"><div className="card p-3"><Link to="/dashboard" className="flex items-center gap-3 rounded-xl bg-brand-50 px-3 py-3 font-semibold text-brand-700"><LayoutDashboard size={18} />Dashboard</Link></div></aside><main className="min-w-0 flex-1"><Outlet /></main></div></div>
}
