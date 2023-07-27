'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Link, { LinkProps } from 'next/link'

import { cn } from '@/lib/utils'

interface SidebarLinkProps extends LinkProps {
  children: ReactNode
}

export function SidebarLink({ children, ...rest }: SidebarLinkProps) {
  const pathname = usePathname()

  return (
    <Link
      className={cn(
        'flex items-center gap-4 text-gray-100 p-4 hover:bg-gray-900 transition-colors rounded',
        pathname === rest.href ? 'bg-gray-900' : '',
      )}
      {...rest}
    >
      {children}
    </Link>
  )
}
