import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return <div className="container-page flex min-h-[60vh] flex-col items-center justify-center text-center"><p className="text-6xl font-black text-brand-600">404</p><h1 className="mt-4 text-3xl font-black">Page not found</h1><p className="mt-3 text-slate-500">The page you are looking for does not exist.</p><Link to="/" className="btn-primary mt-7">Go home</Link></div>
}
