import { Link, Outlet } from 'react-router-dom'
import { BarChart3, BookOpen, FileQuestion, LayoutDashboard, Users } from 'lucide-react'

const items = [
  ['Dashboard', '/admin', LayoutDashboard],
  ['Users', '/admin/users', Users],
  ['Questions', '/admin/questions', FileQuestion],
  ['Exams', '/admin/exams', BookOpen],
  ['Analytics', '/admin/analytics', BarChart3],
]

export default function AdminLayout() {
  return <div className="min-h-screen bg-slate-50"><header className="border-b border-slate-200 bg-slate-950 text-white"><div className="container-page flex h-16 items-center justify-between"><Link to="/" className="font-extrabold">ExamForge <span className="ml-2 text-xs font-medium text-slate-400">Admin</span></Link><Link to="/" className="text-sm text-slate-300 hover:text-white">View platform</Link></div></header><div className="container-page flex gap-6 py-8"><aside className="hidden w-56 shrink-0 md:block"><nav className="card space-y-1 p-3">{items.map(([label, to, Icon]) => <Link key={to} to={to} className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900"><Icon size={18}/>{label}</Link>)}</nav></aside><main className="min-w-0 flex-1"><Outlet /></main></div></div>
}
