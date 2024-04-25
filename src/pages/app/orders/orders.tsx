import {
  File,
  ListFilter,
  MoreHorizontal,
  PlusCircle,
  Search,
  Truck,
} from 'lucide-react'
import { Link } from 'react-router-dom'

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
  DropdownMenuShortcut,
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

export function Orders() {
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
          <BreadcrumbPage>Pedidos</BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col gap-4 md:gap-8">
        <div className="">
          <Tabs defaultValue="all">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="all">Todos</TabsTrigger>
                <TabsTrigger value="pending">Pendentes</TabsTrigger>
                <TabsTrigger value="withdrawn">Em entrega</TabsTrigger>
                <TabsTrigger value="delivered">Entregues</TabsTrigger>
                <TabsTrigger value="returned">Retornada</TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <ListFilter className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Filter
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                      Active
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Archived
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <File className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Export
                  </span>
                </Button>
                <Button size="sm" className="h-8 gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add Product
                  </span>
                </Button>
              </div>
            </div>
            <TabsContent value="all">
              <Card>
                <CardHeader>
                  <CardTitle>Pedidos</CardTitle>
                  <CardDescription>Gerencie todos os pedidos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border bg-muted/40">
                    <Table>
                      <TableHeader>
                        <TableHead className="w-[64px]"></TableHead>
                        <TableHead className="w-[285px]">
                          Identificador
                        </TableHead>
                        <TableHead className="w-[440px]">Descrição</TableHead>
                        <TableHead className="w-[220px]">
                          Destinatário
                        </TableHead>
                        <TableHead className="w-[200px]">Status</TableHead>
                        <TableHead className="w-[120px]"></TableHead>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>
                            <Button variant="outline" size="xs">
                              <Search className="size-3" />
                              <span className="sr-only">
                                Detalhes do pedido
                              </span>
                            </Button>
                          </TableCell>
                          <TableCell className="font-mono text-xs font-medium">
                            {crypto.randomUUID()}
                          </TableCell>
                          <TableCell className="truncate max-w-[440px]">
                            50 caixas de chocolate ao leite com bastante
                            cacauuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu
                          </TableCell>
                          <TableCell>Carlos de Andrade</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Truck className="size-4" />
                              <p>Em entrega</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  variant="ghost"
                                  className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                                >
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Open menu</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent
                                align="end"
                                className="w-[160px]"
                              >
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                <DropdownMenuItem>Make a copy</DropdownMenuItem>
                                <DropdownMenuItem>Favorite</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                  Delete
                                  <DropdownMenuShortcut>
                                    ⌘⌫
                                  </DropdownMenuShortcut>
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell>
                            <Button variant="outline" size="xs">
                              <Search className="size-3" />
                              <span className="sr-only">
                                Detalhes do pedido
                              </span>
                            </Button>
                          </TableCell>
                          <TableCell className="font-mono text-xs font-medium">
                            {crypto.randomUUID()}
                          </TableCell>
                          <TableCell className="truncate max-w-[440px]">
                            50 caixas de chocolate ao leite com bastante
                            cacauuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu
                          </TableCell>
                          <TableCell>Carlos de Andrade</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Truck className="size-4" />
                              <p>Em entrega</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  variant="ghost"
                                  className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                                >
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Open menu</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent
                                align="end"
                                className="w-[160px]"
                              >
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                <DropdownMenuItem>Make a copy</DropdownMenuItem>
                                <DropdownMenuItem>Favorite</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                  Delete
                                  <DropdownMenuShortcut>
                                    ⌘⌫
                                  </DropdownMenuShortcut>
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="pending"></TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}
