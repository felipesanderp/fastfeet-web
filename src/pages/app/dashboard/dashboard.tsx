import { Helmet } from 'react-helmet-async'

import { Separator } from '@/components/ui/separator'
import { UserAccountNav } from '@/components/user-account-nav'

import { DayOrdersDeliveredCard } from './day-orders-delivered-card'
import { MonthOrdersDeliveredCard } from './month-orders-delivered-card'
import { MonthReturnedOrdersCard } from './month-returned-orders-card'
import { PendingOrdersCard } from './pending-orders-card'
import { PendingOrdersMap } from './pending-orders-map-pigeon-maps'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <UserAccountNav
            user={{
              image: 'http://github.com/felipesanderp.png',
              name: 'Felipe Sander',
            }}
          />
        </div>

        <div className="grid grid-cols-4 gap-4">
          <DayOrdersDeliveredCard />
          <MonthOrdersDeliveredCard />
          <PendingOrdersCard />
          <MonthReturnedOrdersCard />
        </div>

        <div className="flex flex-col gap-4">
          <Separator className="mt-4 mb-4" />
          <h2 className="text-lg font-semibold tracking-tight">
            Pedidos pendentes
          </h2>
          <PendingOrdersMap />
        </div>
      </div>
    </>
  )
}
