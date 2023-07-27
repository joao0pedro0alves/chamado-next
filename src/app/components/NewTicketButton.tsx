'use client'

import { useContext } from 'react'
import { TicketsContext, TICKET_STATUS } from '../contexts/Tickets'
import { Button } from './ui/Button'

export function NewTicketButton() {
  const { changeCurrentTicket } = useContext(TicketsContext)

  function handleNewTicket() {
    changeCurrentTicket({
      id: 0,
      about: '',
      category: '',
      customer: '',
      createdAt: new Date().toString(),
      status: TICKET_STATUS.OPENED,
    })
  }

  return <Button onClick={handleNewTicket}>Abrir chamado</Button>
}
