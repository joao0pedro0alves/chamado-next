'use client'

import { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

import { Button } from './ui/Button'
import { Select } from './ui/Select'
import { TicketsContext, TICKET_STATUS } from '../contexts/Tickets'

const ticketValidationScheme = z.object({
  customer: z.string(),
  category: z.string(),
  about: z.string().max(200, 'Descrição muito longa'),
  status: z.enum([
    TICKET_STATUS.OPENED,
    TICKET_STATUS.ADMITTED,
    TICKET_STATUS.FINISHED,
  ]),
})

type TicketFormData = z.infer<typeof ticketValidationScheme>

export function TicketDialog() {
  const { currentTicket, changeCurrentTicket } = useContext(TicketsContext)

  const isOpened = currentTicket !== null

  const { register, handleSubmit, reset } = useForm<TicketFormData>({
    resolver: zodResolver(ticketValidationScheme),
    defaultValues: {
      status: currentTicket?.status || 'OPENED',
    },
  })

  useEffect(() => {
    if (currentTicket) {
      reset({
        customer: currentTicket.customer,
        category: currentTicket.category,
        about: currentTicket.about,
        status: currentTicket.status,
      })
    }
  }, [reset, currentTicket])

  function handleSave(data: TicketFormData) {
    console.log(data)
  }

  function handleOpenChange() {
    changeCurrentTicket(null)
  }

  return (
    <Dialog.Root open={isOpened} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 data-[state=open]:animate-overlayShow fixed inset-0" />

        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 min-h-[50vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded bg-white p-[25px]">
          <Dialog.Title className="text-xl font-bold text-gray-700 mb-6">
            Detalhes do chamado
          </Dialog.Title>

          <form
            onSubmit={handleSubmit(handleSave)}
            className="flex flex-col gap-4"
          >
            <Select
              {...register('customer')}
              label="Cliente"
              required
              placeholder="Selecione o cliente"
              options={[
                { label: 'José', value: '1' },
                { label: 'Roberto', value: '2' },
              ]}
            />

            <Select
              {...register('category')}
              label="Categoria"
              required
              placeholder="Selecione a categoria"
              options={[
                { label: 'Visita', value: '1' },
                { label: 'Visita', value: '2' },
              ]}
            />

            <textarea
              {...register('about')}
              required
              cols={30}
              rows={10}
              placeholder="Descreva os detalhes do caso..."
              className="bg-white border focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-4"
            />

            <div className="grid grid-cols-3 bg-gray-100 h-[42px] rounded divide-x border divide-gray-300">
              <button
                type="button"
                className="text-sm font-medium hover:bg-gray-200 bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Aberto
              </button>
              <button
                type="button"
                className="text-sm font-medium hover:bg-gray-200 transition-color focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Adimitido
              </button>
              <button
                type="button"
                className="text-sm font-medium hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Finalizado
              </button>
            </div>

            <Button
              type="submit"
              className="rounded shadow-none focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              Salvar
            </Button>
          </form>

          <Dialog.Close asChild>
            <button
              className="text-gray-500 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:outline-none"
              aria-label="Close"
            >
              <X />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
