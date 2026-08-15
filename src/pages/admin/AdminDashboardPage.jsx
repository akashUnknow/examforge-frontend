import { Activity, FileQuestion, Users, ClipboardCheck } from 'lucide-react'

export default function AdminDashboardPage() {
  const stats = [['Users','12,480',Users],['Questions','24,860',FileQuestion],['Tests','640',ClipboardCheck],['Attempts','86,420',Activity]]
  return <div><p className="text-sm font-bold uppercase tracking-wider text-brand-600">Administration</p><h1 className="mt-2 text-3xl font-black">Dashboard</h1><p className="mt-2 text-slate-500">Monitor the ExamForge platform.</p><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{stats.map(([label,value,Icon]) => <div className="card p-5" key={label}><Icon size={20} className="text-brand-600"/><p className="mt-4 text-2xl font-black">{value}</p><p className="mt-1 text-sm text-slate-500">{label}</p></div>)}</div><div className="card mt-8 p-6"><h2 className="text-xl font-bold">Platform activity</h2><div className="mt-6 flex h-64 items-end gap-3">{[35,52,44,68,57,78,64,88,72,92,80,96].map((height,index) => <div key={index} className="flex-1 rounded-t-lg bg-brand-100" style={{height: `${height}%`}}><div className="h-full w-full rounded-t-lg bg-brand-500/80"/></div>)}</div></div></div>
}
