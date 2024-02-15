import { useQuery } from '@tanstack/react-query'

import { getMonthReturnedOrdersAmount } from '@/api/get-month-returned-orders-count'
import { Icons } from '@/components/icons'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { MetricCardSkeleton } from './metrics-card-skeleton'

export function MonthReturnedOrdersCard() {
  const { data: monthReturnedOrdersCount } = useQuery({
    queryKey: ['metrics', 'month-returned-orders-count'],
    queryFn: getMonthReturnedOrdersAmount,
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Pedidos devolvidos (mês)
        </CardTitle>
        <Icons.packageX className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <>
          {monthReturnedOrdersCount ? (
            <>
              <span className="text-2xl font-bold tracking-tight">
                {monthReturnedOrdersCount.currentMonthReturnedOrdersCount}
              </span>
              {monthReturnedOrdersCount.diffFromLastMonth >= 0 ? (
                <p className="text-xs text-muted-foreground">
                  <span className="text-emerald-500 dark:text-emerald-400">
                    +{monthReturnedOrdersCount.diffFromLastMonth}%
                  </span>{' '}
                  em relação a ontem
                </p>
              ) : (
                <p className="text-xs text-muted-foreground">
                  <span className="text-rose-500 dark:text-rose-400">
                    {monthReturnedOrdersCount.diffFromLastMonth}%
                  </span>{' '}
                  em relação a ontem
                </p>
              )}
            </>
          ) : (
            <MetricCardSkeleton />
          )}
        </>
      </CardContent>
    </Card>
  )
}
