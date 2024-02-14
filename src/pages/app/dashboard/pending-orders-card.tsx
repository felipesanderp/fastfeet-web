import { useQuery } from '@tanstack/react-query'

import { getDayPendingOrdersAmount } from '@/api/get-day-pending-orders-count'
import { Icons } from '@/components/icons'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { MetricCardSkeleton } from './metrics-card-skeleton'

export function PendingOrdersCard() {
  const { data: dayPendingOrdersCount } = useQuery({
    queryKey: ['metrics', 'day-pending-orders-count'],
    queryFn: getDayPendingOrdersAmount,
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Pedidos pendentes (total)
        </CardTitle>
        <Icons.packageSearch className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <>
          {dayPendingOrdersCount ? (
            <>
              <span className="text-2xl font-bold tracking-tight">
                {dayPendingOrdersCount.todayPendingOrdersCount}
              </span>
              <p className="text-xs text-muted-foreground">
                {dayPendingOrdersCount.diffFromYesterdayPendingOrders >= 0 ? (
                  <>
                    <span className="text-emerald-500 dark:text-emerald-400">
                      +{dayPendingOrdersCount.diffFromYesterdayPendingOrders}%
                    </span>{' '}
                    em relação a ontem
                  </>
                ) : (
                  <>
                    <span className="text-rose-500 dark:text-rose-400">
                      {dayPendingOrdersCount.diffFromYesterdayPendingOrders}%
                    </span>{' '}
                    em relação a ontem
                  </>
                )}
              </p>
            </>
          ) : (
            <MetricCardSkeleton />
          )}
        </>
      </CardContent>
    </Card>
  )
}
