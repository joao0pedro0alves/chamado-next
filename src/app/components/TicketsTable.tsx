import { TicketStatusType } from '../contexts/Tickets'
import { Ticket as ResponseTicket } from './Ticket'
import { TablePagination } from './ui/TablePagination'

type TicketsResponse = {
  id: number
  customer_id: number
  category: string
  status: TicketStatusType
  about: string
  createdAt: string
}[]

type CustomersResponse = {
  id: number
  name: string
}[]

export async function TicketsTable() {
  const responseTickets = await fetch('http://localhost:3333/tickets')
  const responseCustomers = await fetch('http://localhost:3333/customers')

  const tickets: TicketsResponse = await responseTickets.json()
  const customers: CustomersResponse = await responseCustomers.json()

  const tableTickets = tickets.map((ticket) => {
    const customer = customers.find(
      (customer) => customer.id === ticket.customer_id,
    )

    return {
      ...ticket,
      customer,
    }
  })

  return (
    <div className="bg-white shadow rounded">
      <table className="w-full text-zinc-700">
        <thead>
          <tr className="border-b">
            <th className="text-left p-4 pl-6">Cliente</th>
            <th className="text-left p-4">Categoria</th>
            <th className="text-left p-4">Cadastrado em</th>
            <th className="text-left p-4">Status</th>
            <th className="text-center p-4">#</th>
          </tr>
        </thead>

        <tbody>
          {tableTickets.map((ticket) => {
            return (
              <ResponseTicket
                key={ticket.id}
                data={{
                  id: ticket.id,
                  about: ticket.about,
                  category: ticket.category,
                  createdAt: ticket.createdAt,
                  customer: ticket.customer?.name || '',
                  status: ticket.status,
                }}
              />
            )
          })}
        </tbody>
      </table>

      <TablePagination />
    </div>
  )
}
