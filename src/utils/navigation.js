import {
  Activity,
  Bell,
  Camera,
  LayoutDashboard,
  Search,
  Shield,
} from 'lucide-react'

export const NAVIGATION_ITEMS = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Live Camera Network', path: '/live-camera-network', icon: Camera },
  { name: 'Vehicle Search', path: '/vehicle-search', icon: Search },
  { name: 'Traffic Analytics', path: '/traffic-analytics', icon: Activity },
  { name: 'Alerts', path: '/alerts', icon: Bell },
  { name: 'Admin Panel', path: '/admin-panel', icon: Shield },
]
