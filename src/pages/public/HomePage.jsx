import { ArrowRight, BarChart3, CheckCircle2, Clock3, Search, ShieldCheck, Target } from 'lucide-react'
import { Link } from 'react-router-dom'

const exams = ['SSC', 'Banking', 'Railway', 'UPSC', 'Defence', 'Teaching']
const tests = [
  { name: 'Quantitative Aptitude Mock Test', exam: 'SSC CGL', questions: 50, duration: '60 min' },
  { name: 'Reasoning Practice Set', exam: 'Banking', questions: 40, duration: '45 min' },
  { name: 'General Awareness Challenge', exam: 'Railway', questions: 50, duration: '60 min' },
]

export default function HomePage() {
  return <>
    <section className="overflow-hidden bg-slate-950 py-20 text-white sm:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <div>
          <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">Your exam preparation, organized</div>
          <h1 className="max-w-2xl text-4xl font-black tracking-tight sm:text-6xl">Prepare smarter. <span className="text-blue-400">Practice better.</span> Score higher.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">Practice realistic tests, understand your performance, and focus on the topics that matter most.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Link to="/tests" className="btn-primary">Explore Tests <ArrowRight className="ml-2" size={18}/></Link><Link to="/exams" className="btn-secondary border-white/20 bg-white/5 text-white hover:bg-white/10">Browse Exams</Link></div>
        </div>
        <div className="card border-white/10 bg-white/5 p-6 text-white">
          <div className="flex items-center gap-3"><div className="rounded-xl bg-blue-500/20 p-3 text-blue-300"><Target/></div><div><p className="font-bold">Find your next practice set</p><p className="text-sm text-slate-400">Search exams, subjects and tests</p></div></div>
          <div className="mt-6 flex items-center gap-3 rounded-xl bg-white px-4 py-4 text-slate-400"><Search size={20}/><span>Search exams, tests, subjects...</span></div>
          <div className="mt-6 grid grid-cols-2 gap-3"><Stat label="Practice tests" value="500+"/><Stat label="Questions" value="25K+"/></div>
        </div>
      </div>
    </section>

    <section className="container-page py-16"><div className="flex items-end justify-between"><div><p className="text-sm font-bold uppercase tracking-wider text-brand-600">Explore</p><h2 className="mt-2 text-3xl font-extrabold">Popular exams</h2></div><Link to="/exams" className="hidden text-sm font-semibold text-brand-600 sm:block">View all</Link></div><div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">{exams.map((exam) => <Link key={exam} to="/exams" className="card p-5 text-center font-bold transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg">{exam}<span className="mt-2 block text-xs font-normal text-slate-400">Explore →</span></Link>)}</div></section>

    <section className="bg-white py-16"><div className="container-page"><div className="flex items-end justify-between"><div><p className="text-sm font-bold uppercase tracking-wider text-brand-600">Practice</p><h2 className="mt-2 text-3xl font-extrabold">Featured tests</h2></div><Link to="/tests" className="text-sm font-semibold text-brand-600">View all</Link></div><div className="mt-8 grid gap-5 lg:grid-cols-3">{tests.map((test) => <div key={test.name} className="card p-6"><span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">{test.exam}</span><h3 className="mt-5 text-lg font-bold">{test.name}</h3><div className="mt-5 flex gap-5 text-sm text-slate-500"><span className="flex items-center gap-1"><CheckCircle2 size={16}/> {test.questions} Qs</span><span className="flex items-center gap-1"><Clock3 size={16}/> {test.duration}</span></div><Link to="/tests" className="btn-secondary mt-6 w-full">View Test</Link></div>)}</div></div></section>

    <section className="container-page py-16"><div className="grid gap-5 md:grid-cols-3"><Feature icon={Target} title="Focused practice" text="Practice by exam, subject and topic so every session has a purpose."/><Feature icon={BarChart3} title="Clear analytics" text="Track scores, accuracy and weak areas as you practice."/><Feature icon={ShieldCheck} title="Exam-ready" text="Build confidence with timed tests and realistic question sets."/></div></section>
  </>
}

function Stat({ label, value }) { return <div className="rounded-xl border border-white/10 bg-white/5 p-4"><p className="text-2xl font-black">{value}</p><p className="text-sm text-slate-400">{label}</p></div> }
function Feature({ icon: Icon, title, text }) { return <div className="card p-6"><div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-brand-600"><Icon size={21}/></div><h3 className="text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{text}</p></div> }
