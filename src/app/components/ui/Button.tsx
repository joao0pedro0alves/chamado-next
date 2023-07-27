import { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

type ButtonProps = ComponentProps<'button'>

export function Button({ className, ...rest }: ButtonProps) {
  return (
    <button
      className={cn(
        'text-white font-semibold px-4 py-2 rounded-lg shadow bg-green-500 hover:bg-green-600 transition-colors',
        className,
      )}
      {...rest}
    />
  )
}
