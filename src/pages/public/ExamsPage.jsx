import { Search } from 'lucide-react'
import { Link } from 'react-router-dom'

const exams = [
  { name: 'SSC CGL', category: 'SSC', description: 'Practice quantitative aptitude, reasoning, English and general awareness.' },
  { name: 'Banking', category: 'Banking', description: 'Prepare for aptitude, reasoning, English and banking awareness.' },
  { name: 'Railway', category: 'Railway', description: 'Build speed and accuracy with railway-focused practice.' },
  { name: 'UPSC', category: 'Civil Services', description: 'Organize your preparation across core civil service subjects.' },
  { name: 'Defence', category: 'Defence', description: 'Practice with focused question sets for defence examinations.' },
  { name: 'Teaching', category: 'Teaching', description: 'Prepare for teaching eligibility and recruitment exams.' },
]

export default function ExamsPage() {
  return <div className="container-page py-12 sm:py-16"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-wider text-brand-600">Exam library</p><h1 className="mt-2 text-4xl font-black">Choose your exam</h1><p className="mt-4 text-slate-500">Find your exam and explore its subjects, tests and preparation resources.</p></div><div className="mt-8 flex max-w-2xl items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm"><Search size={20} className="text-slate-400"/><input className="w-full outline-none" placeholder="Search exams..."/></div><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{exams.map((exam) => <Link key={exam.name} to="/tests" className="card p-6 transition hover:-translate-y-1 hover:border-brand-200"><span className="text-xs font-bold uppercase tracking-wider text-brand-600">{exam.category}</span><h2 className="mt-3 text-xl font-bold">{exam.name}</h2><p className="mt-3 text-sm leading-6 text-slate-500">{exam.description}</p><span className="mt-5 inline-block text-sm font-bold text-brand-600">Explore tests →</span></Link>)}</div></div>
}
