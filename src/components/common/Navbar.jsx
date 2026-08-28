const Navbar = ({ onMenuToggle }) => {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-800/80 bg-command-900/90 px-4 py-3 backdrop-blur">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onMenuToggle}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-command-800 text-slate-200 transition hover:border-accent-500/70 hover:text-accent-500 md:hidden"
            aria-label="Open navigation"
          >
            ☰
          </button>
          <div>
            <p className="text-base font-semibold text-slate-100">UrbanTrace AI Command Center</p>
            <p className="text-xs text-slate-400">Real-time city traffic intelligence operations</p>
          </div>
        </div>
        <div className="hidden rounded-lg border border-slate-700/80 bg-command-800 px-3 py-2 text-xs text-slate-300 sm:block">
          Monitoring Status: <span className="font-semibold text-emerald-400">Operational</span>
        </div>
      </div>
    </header>
  )
}

export default Navbar
