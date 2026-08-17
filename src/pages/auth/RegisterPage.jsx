import { Loader2 } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { registerUser } from '../../services/authService'

const initialForm = { name: '', email: '', mobile: '', password: '', confirmPassword: '' }

export default function RegisterPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState(initialForm)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setSuccess('')

    if (Object.values(form).some((value) => !value.trim())) {
      setError('Please fill in all fields.')
      return
    }

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    try {
      setLoading(true)
      await registerUser(form)
      setSuccess('Account created successfully. Redirecting to login...')
      setTimeout(() => navigate('/login', { replace: true }), 800)
    } catch (requestError) {
      setError(requestError.response?.data?.message || requestError.message || 'Unable to create your account.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-[calc(100vh-16rem)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link to="/" className="text-2xl font-black">ExamForge</Link>
          <h1 className="mt-8 text-3xl font-black">Create your account</h1>
          <p className="mt-2 text-slate-500">Start building your exam preparation routine.</p>
        </div>
        <div className="card p-6 sm:p-8">
          <form className="space-y-5" onSubmit={handleSubmit}>
            {error && <div className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{error}</div>}
            {success && <div className="rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">{success}</div>}
            <Field label="Full name" name="name" value={form.name} onChange={updateField} placeholder="Your name" autoComplete="name" />
            <Field label="Email" name="email" type="email" value={form.email} onChange={updateField} placeholder="you@example.com" autoComplete="email" />
            <Field label="Mobile number" name="mobile" type="tel" value={form.mobile} onChange={updateField} placeholder="9876543210" autoComplete="tel" />
            <Field label="Password" name="password" type="password" value={form.password} onChange={updateField} placeholder="••••••••" autoComplete="new-password" />
            <Field label="Confirm password" name="confirmPassword" type="password" value={form.confirmPassword} onChange={updateField} placeholder="••••••••" autoComplete="new-password" />
            <button className="btn-primary flex w-full items-center justify-center gap-2" disabled={loading}>
              {loading && <Loader2 size={18} className="animate-spin" />}
              {loading ? 'Creating account...' : 'Create account'}
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-slate-500">Already have an account? <Link to="/login" className="font-bold text-brand-600">Sign in</Link></p>
        </div>
      </div>
    </div>
  )
}

function Field({ label, ...props }) {
  return <label className="block"><span className="mb-2 block text-sm font-semibold">{label}</span><input className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500" {...props}/></label>
}
