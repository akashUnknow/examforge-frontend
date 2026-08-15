import { Link, NavLink } from 'react-router-dom'
import { BookOpen, Menu, Search, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  { label: 'Exams', to: '/exams' },
  { label: 'Tests', to: '/tests' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-slate-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white"><BookOpen size={20} /></span>
          ExamForge
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => <NavLink key={link.to} to={link.to} className={({ isActive }) => isActive ? 'font-semibold text-brand-600' : 'text-slate-600 hover:text-slate-900'}>{link.label}</NavLink>)}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-xl p-2 text-slate-500 hover:bg-slate-100" aria-label="Search"><Search size={20} /></button>
          <Link to="/login" className="btn-secondary px-4 py-2">Login</Link>
          <Link to="/register" className="btn-primary px-4 py-2">Get Started</Link>
        </div>

        <button onClick={() => setOpen(!open)} className="rounded-xl p-2 md:hidden" aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && <div className="border-t border-slate-200 bg-white p-4 md:hidden">
        <div className="container-page flex flex-col gap-2">
          {links.map((link) => <Link onClick={() => setOpen(false)} key={link.to} to={link.to} className="rounded-xl px-3 py-3 font-medium hover:bg-slate-50">{link.label}</Link>)}
          <Link to="/login" onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 font-medium hover:bg-slate-50">Login</Link>
          <Link to="/register" onClick={() => setOpen(false)} className="btn-primary">Get Started</Link>
        </div>
      </div>}
    </header>
  )
}
