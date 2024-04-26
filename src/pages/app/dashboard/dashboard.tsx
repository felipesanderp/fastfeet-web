import { MoveRight } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import { DayOrdersDeliveredCard } from './day-orders-delivered-card'
import { MonthOrdersDeliveredCard } from './month-orders-delivered-card'
import { MonthReturnedOrdersCard } from './month-returned-orders-card'
import { PendingOrdersCard } from './pending-orders-card'
import { PendingOrdersMap } from './pending-orders-map-pigeon-maps'

export function Dashboard() {
  const navigate = useNavigate()

  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4 mb-4">
          <DayOrdersDeliveredCard />
          <MonthOrdersDeliveredCard />
          <PendingOrdersCard />
          <MonthReturnedOrdersCard />
        </div>

        <Separator className="" />

        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <h2 className="text-lg font-semibold tracking-tight">
              Pedidos pendentes
            </h2>
            <Button
              variant="link"
              onClick={() => navigate(`/orders?status=pending`)}
              className="ml-auto gap-2"
            >
              Ver todos
              <MoveRight className="size-4" />
            </Button>
          </div>
          <PendingOrdersMap />
        </div>
      </div>
    </>
  )
}
