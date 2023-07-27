import { ComponentProps } from 'react'

type BadgeProps = ComponentProps<'span'>

export function Badge(props: BadgeProps) {
  return (
    <span
      className="bg-gray-500 inline-block text-center min-w-[90px] text-sm px-2 py-1 rounded-lg font-semibold text-white"
      {...props}
    />
  )
}
