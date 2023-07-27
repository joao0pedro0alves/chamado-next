'use client'

import { createContext, ReactNode, useState } from 'react'

export const TICKET_STATUS = {
  OPENED: 'OPENED',
  ADMITTED: 'ADMITTED',
  FINISHED: 'FINISHED',
} as const

export type TicketStatusType = 'OPENED' | 'ADMITTED' | 'FINISHED'

export interface Ticket {
  id?: number
  customer: string
  category: string
  status: TicketStatusType
  about: string
  createdAt: string
}

interface TicketsContextType {
  currentTicket: null | Ticket
  changeCurrentTicket: (ticket: null | Ticket) => void
}

export const TicketsContext = createContext({} as TicketsContextType)

export function TicketsProvider({ children }: { children: ReactNode }) {
  const [currentTicket, setCurrentTicket] = useState<Ticket | null>(null)

  function changeCurrentTicket(ticket: null | Ticket) {
    setCurrentTicket(ticket)
  }

  return (
    <TicketsContext.Provider value={{ currentTicket, changeCurrentTicket }}>
      {children}
    </TicketsContext.Provider>
  )
}
