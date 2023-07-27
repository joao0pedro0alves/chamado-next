'use client'

import '@/lib/date-fns'
import { Edit } from 'lucide-react'
import { format } from 'date-fns'
import { useContext } from 'react'
import { TicketsContext, Ticket as TicketType } from '../contexts/Tickets'

import { Badge } from './ui/Badge'

interface TicketProps {
  data: TicketType
}

export function Ticket({ data }: TicketProps) {
  const { changeCurrentTicket } = useContext(TicketsContext)

  function handleEditTicket() {
    const { id, about, category, customer, createdAt, status } = data

    changeCurrentTicket({
      id,
      about,
      category,
      customer,
      createdAt,
      status,
    })
  }

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
        <button
          onClick={handleEditTicket}
          className="bg-blue-400 hover:bg-blue-500 transition-colors p-2 rounded-lg"
        >
          <Edit className="text-white w-5 h-5" />
        </button>
      </td>
    </tr>
  )
}
