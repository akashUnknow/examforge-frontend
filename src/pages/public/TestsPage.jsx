import { Clock3, Filter, Search } from 'lucide-react'
import { Link } from 'react-router-dom'

const tests = [
  { name: 'SSC CGL Quantitative Aptitude Mock 01', exam: 'SSC CGL', questions: 50, duration: '60 min', level: 'Medium' },
  { name: 'Banking Reasoning Practice 01', exam: 'Banking', questions: 40, duration: '45 min', level: 'Easy' },
  { name: 'Railway General Awareness Mock 01', exam: 'Railway', questions: 50, duration: '60 min', level: 'Hard' },
  { name: 'SSC CGL Reasoning Mock 02', exam: 'SSC CGL', questions: 50, duration: '60 min', level: 'Medium' },
  { name: 'Banking Quantitative Aptitude 02', exam: 'Banking', questions: 40, duration: '45 min', level: 'Medium' },
  { name: 'UPSC General Studies Practice', exam: 'UPSC', questions: 30, duration: '40 min', level: 'Hard' },
]

export default function TestsPage() {
  return <div className="container-page py-12 sm:py-16"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-sm font-bold uppercase tracking-wider text-brand-600">Practice center</p><h1 className="mt-2 text-4xl font-black">Practice tests</h1><p className="mt-4 text-slate-500">Build speed and accuracy with timed practice sets.</p></div><button className="btn-secondary"><Filter size={17} className="mr-2"/> Filters</button></div><div className="mt-8 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm"><Search size={20} className="text-slate-400"/><input className="w-full outline-none" placeholder="Search tests..."/></div><div className="mt-8 grid gap-5 lg:grid-cols-2">{tests.map((test) => <div key={test.name} className="card p-6"><div className="flex items-start justify-between gap-4"><div><span className="text-xs font-bold uppercase tracking-wider text-brand-600">{test.exam}</span><h2 className="mt-2 text-lg font-bold">{test.name}</h2></div><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{test.level}</span></div><div className="mt-5 flex gap-5 text-sm text-slate-500"><span>{test.questions} Questions</span><span className="flex items-center gap-1"><Clock3 size={16}/>{test.duration}</span></div><Link to="/login" className="btn-primary mt-6 w-full">Start Practice</Link></div>)}</div></div>
}
