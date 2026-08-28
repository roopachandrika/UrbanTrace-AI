import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Navbar from '../components/common/Navbar'
import Sidebar from '../components/common/Sidebar'

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-command-950 text-slate-100">
      <div className="flex min-h-screen">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <div className="flex min-w-0 flex-1 flex-col">
          <Navbar onMenuToggle={() => setIsSidebarOpen((prev) => !prev)} />
          <main className="flex-1 p-4 md:p-6">
            <div className="h-full rounded-xl border border-slate-800 bg-command-900/60 p-5 shadow-panel md:p-6">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default MainLayout
