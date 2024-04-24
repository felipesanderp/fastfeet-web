import { File, ListFilter, MoreHorizontal, PlusCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Badge } from '@/components/ui/badge'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { columns } from './users-table/columns'
import { User } from './users-table/data/schema'
import { UsersTable } from './users-table/users-table'

export function Users() {
  const data: User[] = [
    {
      id: `user-1`,
      name: 'Felipe Sander',
      email: 'felipesanderp@gmail.com',
      imageURL: 'http://github.com/felipesanderp.png',
      role: 'admin',
      status: 'true',
    },
    {
      id: `user-2`,
      name: 'Diego',
      email: 'diego3g@gmail.com',
      imageURL: 'http://github.com/diego3g.png',
      role: 'deliveryman',
      status: 'false',
    },
  ]

  return (
    <>
      <Breadcrumb className="hidden relative -top-20 left-2 md:inline-flex">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbPage>Usuários</BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col gap-4">
        <div className="flex items-center">
          <div className="ml-auto flex items-center gap-2">
            <Button size="sm" className="h-8 gap-1">
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Add Usuário
              </span>
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Usuários</CardTitle>
            <CardDescription>Gerencie os usuários entregadores</CardDescription>
          </CardHeader>
          <CardContent>
            <UsersTable data={data} columns={columns} />
          </CardContent>
        </Card>
      </div>
    </>
  )
}
