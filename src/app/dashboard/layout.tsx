import { ReactNode } from 'react'
import { Sidebar } from '../components/Sidebar'
import { TicketsProvider } from '../contexts/Tickets'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <TicketsProvider>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 m-4">{children}</main>
      </div>
    </TicketsProvider>
  )
}
