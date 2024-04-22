import { Link } from 'react-router-dom'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export function Users() {
  return (
    <>
      <Breadcrumb className="hidden relative -top-20 left-2 md:flex">
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
      <div>
        <h1>users</h1>
      </div>
    </>
  )
}
