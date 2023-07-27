import { ReactNode } from 'react'
import { Sidebar } from '../components/Sidebar'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 m-4">{children}</main>
    </div>
  )
}
