import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ComponentProps } from 'react'

type TablePaginationProps = ComponentProps<'div'>

export function TablePagination(props: TablePaginationProps) {
  return (
    <div className="p-4 bg-gray-50 flex justify-end" {...props}>
      <div className="grid grid-cols-2 gap-10">
        <select>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>

        <div className="flex items-center gap-4">
          <button>
            <ChevronLeft className="text-gray-500 text-sm" />
          </button>
          <button>
            <ChevronRight className="text-gray-500 text-sm" />
          </button>
        </div>
      </div>
    </div>
  )
}
