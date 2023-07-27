import '@/lib/date-fns'
import { format } from 'date-fns'

import { TicketDialog } from './TicketDialog'
import { Badge } from './ui/Badge'

interface TicketProps {
  data: {
    id: number
    customer: string
    category: string
    status: string
    createdAt: string
  }
}

export function Ticket({ data }: TicketProps) {
  return (
    <tr className="border-b">
      <td className="text-left p-4 pl-6">{data.customer}</td>
      <td className="text-left p-4">{data.category}</td>
      <td className="text-left p-4">
        {format(new Date(data.createdAt), 'dd/MM/yyyy')}
      </td>
      <td className="text-left p-4">
        <Badge>{data.status}</Badge>
      </td>
      <td className="text-center p-4">
        <TicketDialog data={{ ...data }} />
      </td>
    </tr>
  )
}
