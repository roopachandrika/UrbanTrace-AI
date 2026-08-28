import { NavLink } from 'react-router-dom'
import { NAVIGATION_ITEMS } from '../../utils/navigation'

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-slate-950/60 md:hidden"
          aria-label="Close navigation"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-72 transform border-r border-slate-800 bg-command-900 px-4 py-6 shadow-panel transition-transform duration-300 md:static md:z-0 md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="mb-8 border-b border-slate-800 pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-500/20 text-xl text-accent-500">UT</div>
            <div>
              <h1 className="text-lg font-semibold tracking-wide text-slate-100">UrbanTrace AI</h1>
              <p className="text-xs text-slate-400">City-Wide Vehicle Intelligence Platform</p>
            </div>
          </div>
        </div>

        <nav className="space-y-2">
          {NAVIGATION_ITEMS.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={name}
              to={path}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? 'bg-accent-500/20 text-accent-500 shadow-[inset_0_0_0_1px_rgba(0,217,255,0.45)]'
                    : 'text-slate-300 hover:bg-command-800 hover:text-slate-100'
                }`
              }
              end={path === '/'}
            >
              <Icon size={18} />
              <span>{name}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  )
}

export default Sidebar
