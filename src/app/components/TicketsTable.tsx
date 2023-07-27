import { Ticket } from './Ticket'
import { TablePagination } from './ui/TablePagination'

interface Ticket {
  id: number
  customer: string
  category: string
  status: string
  createdAt: string
}

export async function TicketsTable() {
  const response = await fetch('http://localhost:3333/tickets')
  const tickes: Ticket[] = await response.json()

  return (
    <div className="bg-white shadow rounded">
      <table className="w-full text-zinc-700">
        <thead>
          <tr className="border-b">
            <th className="text-left p-4 pl-6">Cliente</th>
            <th className="text-left p-4">Assunto</th>
            <th className="text-left p-4">Cadastrado em</th>
            <th className="text-left p-4">Categoria</th>
            <th className="text-center p-4">#</th>
          </tr>
        </thead>

        <tbody>
          {tickes.map((ticket) => {
            return <Ticket key={ticket.id} data={ticket} />
          })}
        </tbody>
      </table>

      <TablePagination />
    </div>
  )
}
