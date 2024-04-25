import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export interface PaginationProps {
  pageIndex: number
  totalCount: number
  perPage: number
  onPageChange: (pageIndex: number) => Promise<void> | void
  onPerPageChange: (perPageNew: number) => Promise<void> | void
}

export function Pagination({
  pageIndex,
  perPage,
  totalCount,
  onPageChange,
  onPerPageChange,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {totalCount} item(s)
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Linhas por página</p>
          <Select
            value={`${perPage}`}
            onValueChange={(value) => {
              onPerPageChange((perPage = Number(value)))
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={perPage} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 30, 40, 50].map((perPage) => (
                <SelectItem key={perPage} value={`${perPage}`}>
                  {perPage}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="text-sm font-medium">
          Página {pageIndex + 1} de {pages}
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => onPageChange(0)}
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={pageIndex === 0}
          >
            <ChevronsLeft className="h-4 w-4" />
            <span className="sr-only">Primeira página</span>
          </Button>
          <Button
            onClick={() => onPageChange(pageIndex - 1)}
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={pageIndex === 0}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Página anterior</span>
          </Button>
          <Button
            onClick={() => onPageChange(pageIndex + 1)}
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={pages <= pageIndex + 1}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Próxima página</span>
          </Button>
          <Button
            onClick={() => onPageChange(pages - 1)}
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={pages <= pageIndex + 1}
          >
            <ChevronsRight className="h-4 w-4" />
            <span className="sr-only">Última página</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
