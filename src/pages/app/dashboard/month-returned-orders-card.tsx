import { Icons } from '@/components/icons'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthReturnedOrdersCard() {
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
          <span className="text-2xl font-bold tracking-tight">2</span>
          <p className="text-xs text-muted-foreground">
            <span className="text-emerald-500 dark:text-emerald-400">+7%</span>{' '}
            em relação a ontem
          </p>
        </>
      </CardContent>
    </Card>
  )
}
