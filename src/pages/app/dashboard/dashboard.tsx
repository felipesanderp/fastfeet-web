import { Helmet } from 'react-helmet-async'

import { DayOrdersDeliveredCard } from './day-orders-delivered-card'
import { MonthOrdersDeliveredCard } from './month-orders-delivered-card'
import { MonthReturnedOrdersCard } from './month-returned-orders-card'
import { PendingOrdersCard } from './pending-orders-card'
import { PendingOrdersMap } from './pending-orders-map-pigeon-maps'

const orders = [
  {
    id: 1,
    latitude: -25.4129,
    longitude: -49.2305,
  },
  {
    id: 2,
    latitude: -25.453389288968776,
    longitude: -49.28089341433161,
  },
  // Add more orders as needed
]

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight font-robotoCondensed">
          Dashboard
        </h1>

        <div className="grid grid-cols-4 gap-4">
          <DayOrdersDeliveredCard />
          <MonthOrdersDeliveredCard />
          <PendingOrdersCard />
          <MonthReturnedOrdersCard />
        </div>

        <div className="">
          <PendingOrdersMap orders={orders} />
        </div>
      </div>
    </>
  )
}
