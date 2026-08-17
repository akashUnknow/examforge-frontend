import { LockKeyhole, Mail, Loader2 } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { loginUser } from '../../services/authService'
import { useAuthStore } from '../../store/authStore'

export default function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { setAuth } = useAuthStore()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')

    if (!form.email || !form.password) {
      setError('Please enter your email and password.')
      return
    }

    try {
      setLoading(true)
      const response = await loginUser(form)
      const data = response?.data || response

      if (!data?.accessToken || !data?.user) {
        throw new Error('Login response is missing authentication data.')
      }

      setAuth(data)
      navigate(location.state?.from || '/dashboard', { replace: true })
    } catch (requestError) {
      setError(requestError.response?.data?.message || requestError.message || 'Unable to sign in. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthShell title="Welcome back" subtitle="Sign in to continue your preparation.">
      <form className="space-y-5" onSubmit={handleSubmit}>
        {error && <div className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{error}</div>}
        <Field icon={Mail} label="Email" name="email" type="email" value={form.email} onChange={updateField} placeholder="you@example.com" autoComplete="email" />
        <Field icon={LockKeyhole} label="Password" name="password" type="password" value={form.password} onChange={updateField} placeholder="••••••••" autoComplete="current-password" />
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-slate-500"><input type="checkbox" /> Remember me</label>
          <Link to="/forgot-password" className="font-semibold text-brand-600">Forgot password?</Link>
        </div>
        <button className="btn-primary flex w-full items-center justify-center gap-2" disabled={loading}>
          {loading && <Loader2 size={18} className="animate-spin" />}
          {loading ? 'Signing in...' : 'Sign in'}
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-slate-500">Don't have an account? <Link to="/register" className="font-bold text-brand-600">Create one</Link></p>
    </AuthShell>
  )
}

function AuthShell({ title, subtitle, children }) {
  return <div className="flex min-h-[calc(100vh-16rem)] items-center justify-center px-4 py-12"><div className="w-full max-w-md"><div className="mb-8 text-center"><Link to="/" className="text-2xl font-black">ExamForge</Link><h1 className="mt-8 text-3xl font-black">{title}</h1><p className="mt-2 text-slate-500">{subtitle}</p></div><div className="card p-6 sm:p-8">{children}</div></div></div>
}

function Field({ icon: Icon, label, ...props }) {
  return <label className="block"><span className="mb-2 block text-sm font-semibold">{label}</span><div className="flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-3 focus-within:border-brand-500"><Icon size={18} className="text-slate-400"/><input className="w-full outline-none" {...props}/></div></label>
}
