import { useQuery } from '@tanstack/react-query'

import { getMonthOrdersAmount } from '@/api/get-month-delivered-orders-count'
import { Icons } from '@/components/icons'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { MetricCardSkeleton } from './metrics-card-skeleton'

export function MonthOrdersDeliveredCard() {
  const { data: monthOrdersCount } = useQuery({
    queryKey: ['metrics', 'month-orders-delivered-count'],
    queryFn: getMonthOrdersAmount,
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Pedidos entregues (mês)
        </CardTitle>
        <Icons.packageCheck className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <>
          {monthOrdersCount ? (
            <>
              <span className="text-2xl font-bold tracking-tight">
                {monthOrdersCount.currentMonthOrdersCount}
              </span>
              <p className="text-xs text-muted-foreground">
                {monthOrdersCount.diffFromLastMonth >= 0 ? (
                  <>
                    <span className="text-emerald-500 dark:text-emerald-400">
                      +{monthOrdersCount.diffFromLastMonth}%
                    </span>{' '}
                    em relação ao mês passado
                  </>
                ) : (
                  <>
                    <span className="text-rose-500 dark:text-rose-400">
                      {monthOrdersCount.diffFromLastMonth}%
                    </span>{' '}
                    em relação ao mês passado
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
