import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className="text-center">
      <h2 className="text-3xl font-semibold text-slate-100">404</h2>
      <p className="mt-2 text-sm text-slate-300">Page not found.</p>
      <Link to="/" className="mt-4 inline-flex rounded-lg bg-accent-500 px-4 py-2 text-sm font-medium text-command-950 transition hover:bg-accent-600">
        Return to Dashboard
      </Link>
    </section>
  )
}

export default NotFound
