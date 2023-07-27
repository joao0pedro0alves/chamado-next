import { MessageSquare } from 'lucide-react'
import { NewTicketButton } from '../components/NewTicketButton'
import { TicketDialog } from '../components/TicketDialog'
import { TicketsTable } from '../components/TicketsTable'

export default function DashboardPage() {
  return (
    <div>
      <header className="p-4 bg-white shadow rounded mb-[3.8rem]">
        <div className="inline-flex items-center gap-4">
          <MessageSquare />
          <span className="text-2xl">Chamados</span>
        </div>
      </header>

      <section className="mt-4 space-y-4">
        <div className="flex justify-end">
          <NewTicketButton />
        </div>

        <TicketsTable />
        <TicketDialog />
      </section>
    </div>
  )
}
