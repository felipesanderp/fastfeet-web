import { Plus } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '@/components/ui/button'

export function UsersRecipients() {
  const [searchParams, setSearchParams] = useSearchParams()

  const page = z.coerce.number().parse(searchParams.get('page') ?? '1')

  const perPage = z.coerce.number().parse(searchParams.get('perPage') ?? '10')

  return (
    <>
      <Helmet title="Destinatários" />

      <div className="flex flex-col gap-12">
        <div className="flex items-center justify-between">
          <h1 className="font-bold font-robotoCondensed text-3xl">
            Destinatários
          </h1>

          <Button variant="link" size="sm">
            <Plus className="size-4 mr-2" />
            Novo destinatário
          </Button>
        </div>
      </div>
    </>
  )
}
