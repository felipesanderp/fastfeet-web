import { useQuery } from '@tanstack/react-query'

import { getDayOrdersAmount } from '@/api/get-day-orders-count'
import { Icons } from '@/components/icons'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { MetricCardSkeleton } from './metrics-card-skeleton'

export function DayOrdersDeliveredCard() {
  const { data: dayOrdersCount } = useQuery({
    queryKey: ['metrics', 'day-orders-count'],
    queryFn: getDayOrdersAmount,
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Pedidos entregues (dia)
        </CardTitle>
        <Icons.packageOpen className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {dayOrdersCount ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {dayOrdersCount.todayOrders}
            </span>
            <p className="text-xs text-muted-foreground">
              {dayOrdersCount.diffFromYesterday >= 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    +{dayOrdersCount.diffFromYesterday}%
                  </span>{' '}
                  em relação a ontem
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    {dayOrdersCount.diffFromYesterday}%
                  </span>{' '}
                  em relação a ontem
                </>
              )}
            </p>
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  )
}
