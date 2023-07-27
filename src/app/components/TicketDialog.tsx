'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { Edit, X } from 'lucide-react'
import { FormEvent } from 'react'
import { Button } from './ui/Button'
import { Select } from './ui/Select'

interface TicketDialogProps {
  data: {
    id: number
    customer: string
    category: string
    status: string
    createdAt: string
  }
}

export function TicketDialog({ data }: TicketDialogProps) {
  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className="bg-blue-400 hover:bg-blue-500 transition-colors p-2 rounded-lg">
        <Edit className="text-white w-5 h-5" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 data-[state=open]:animate-overlayShow fixed inset-0" />

        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 min-h-[50vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded bg-white p-[25px]">
          <Dialog.Title className="text-xl font-bold text-gray-700 mb-6">
            Detalhes do chamado
          </Dialog.Title>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Select
              label="Cliente"
              options={[
                { label: 'José', value: '1' },
                { label: 'Roberto', value: '2' },
              ]}
            />

            <Select
              label="Categoria"
              options={[
                { label: 'Visita', value: '1' },
                { label: 'Visita', value: '2' },
              ]}
            />

            <textarea
              name="about"
              id="about"
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
                Em aberto
              </button>
              <button
                type="button"
                className="text-sm font-medium hover:bg-gray-200 transition-color focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Progresso
              </button>
              <button
                type="button"
                className="text-sm font-medium hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Atentido
              </button>
            </div>

            <Button className="rounded shadow-none focus:outline-none focus:ring-2 focus:ring-green-600">
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
