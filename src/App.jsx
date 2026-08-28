import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Dashboard from './pages/Dashboard'
import LiveCameraNetwork from './pages/LiveCameraNetwork'
import VehicleSearch from './pages/VehicleSearch'
import TrafficAnalytics from './pages/TrafficAnalytics'
import Alerts from './pages/Alerts'
import AdminPanel from './pages/AdminPanel'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/live-camera-network" element={<LiveCameraNetwork />} />
        <Route path="/vehicle-search" element={<VehicleSearch />} />
        <Route path="/traffic-analytics" element={<TrafficAnalytics />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/dashboard" element={<Navigate to="/" replace />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
