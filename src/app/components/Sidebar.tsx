import Image from 'next/image'
import { Home, Settings, User2 } from 'lucide-react'

import { SidebarLink } from './SidebarLink'

export function Sidebar() {
  return (
    <aside className="min-w-[300px] min-h-screen flex flex-col">
      <div className="h-[200px] bg-gray-900 bg-profile_cover bg-cover bg-no-repeat bg-center flex items-center justify-center">
        <Image width={100} height={100} src="/images/avatar.png" alt=" " />
      </div>

      <nav className="flex-1 bg-gray-800 space-y-2 p-4">
        <SidebarLink href="/dashboard">
          <Home className="h-5 w-5" />
          <span>Chamados</span>
        </SidebarLink>

        <SidebarLink href="/dashboard/customers">
          <User2 className="h-5 w-5" />
          <span>Clientes</span>
        </SidebarLink>

        <SidebarLink href="/account">
          <Settings className="h-5 w-5" />
          <span>Conta</span>
        </SidebarLink>
      </nav>
    </aside>
  )
}
