import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="text-lg font-extrabold">ExamForge</h2>
          <p className="mt-3 max-w-xs text-sm leading-6 text-slate-500">Prepare smarter, practice better, and build confidence for your next exam.</p>
        </div>
        <div><h3 className="font-semibold">Platform</h3><div className="mt-4 space-y-3 text-sm text-slate-500"><Link className="block hover:text-brand-600" to="/exams">Exams</Link><Link className="block hover:text-brand-600" to="/tests">Practice Tests</Link></div></div>
        <div><h3 className="font-semibold">Company</h3><div className="mt-4 space-y-3 text-sm text-slate-500"><a href="#" className="block hover:text-brand-600">About</a><a href="#" className="block hover:text-brand-600">Contact</a><a href="#" className="block hover:text-brand-600">Help</a></div></div>
        <div><h3 className="font-semibold">Legal</h3><div className="mt-4 space-y-3 text-sm text-slate-500"><a href="#" className="block hover:text-brand-600">Privacy</a><a href="#" className="block hover:text-brand-600">Terms</a><a href="#" className="block hover:text-brand-600">Refund Policy</a></div></div>
      </div>
      <div className="border-t border-slate-100 py-5 text-center text-sm text-slate-400">© {new Date().getFullYear()} ExamForge. All rights reserved.</div>
    </footer>
  )
}
