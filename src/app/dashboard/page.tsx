import { MessageSquare } from 'lucide-react'
import { TicketsTable } from '../components/TicketsTable'
import { Button } from '../components/ui/Button'

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
          <Button>Abrir chamado</Button>
        </div>

        <TicketsTable />
      </section>
    </div>
  )
}
