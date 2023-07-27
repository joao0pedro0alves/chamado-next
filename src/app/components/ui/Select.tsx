import { ComponentProps, ElementRef, forwardRef } from 'react'

interface SelectProps extends ComponentProps<'select'> {
  label: string
  placeholder?: string
  options: {
    value: string
    label: string
  }[]
}

export const Select = forwardRef<ElementRef<'select'>, SelectProps>(
  ({ placeholder, label, options, ...rest }, ref) => {
    return (
      <div className="flex flex-col">
        <label className="text-gray-500 text-sm mb-1" htmlFor={rest.id}>
          {label}
        </label>
        <select
          ref={ref}
          className="h-[42px] px-4 bg-white border focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          {...rest}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option) => {
            return (
              <option key={`option-${option.value}`} value={option.value}>
                {option.label}
              </option>
            )
          })}
        </select>
      </div>
    )
  },
)

Select.displayName = 'Select'
