import { LockKeyhole, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  return <AuthShell title="Welcome back" subtitle="Sign in to continue your preparation."><form className="space-y-5"><Field icon={Mail} label="Email" type="email" placeholder="you@example.com"/><Field icon={LockKeyhole} label="Password" type="password" placeholder="••••••••"/><div className="flex items-center justify-between text-sm"><label className="flex items-center gap-2 text-slate-500"><input type="checkbox"/> Remember me</label><a href="#" className="font-semibold text-brand-600">Forgot password?</a></div><button className="btn-primary w-full">Sign in</button></form><p className="mt-6 text-center text-sm text-slate-500">Don't have an account? <Link to="/register" className="font-bold text-brand-600">Create one</Link></p></AuthShell>
}

function AuthShell({ title, subtitle, children }) { return <div className="flex min-h-[calc(100vh-16rem)] items-center justify-center px-4 py-12"><div className="w-full max-w-md"><div className="mb-8 text-center"><Link to="/" className="text-2xl font-black">ExamForge</Link><h1 className="mt-8 text-3xl font-black">{title}</h1><p className="mt-2 text-slate-500">{subtitle}</p></div><div className="card p-6 sm:p-8">{children}</div></div></div> }
function Field({ icon: Icon, label, ...props }) { return <label className="block"><span className="mb-2 block text-sm font-semibold">{label}</span><div className="flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-3 focus-within:border-brand-500"><Icon size={18} className="text-slate-400"/><input className="w-full outline-none" {...props}/></div></label> }
