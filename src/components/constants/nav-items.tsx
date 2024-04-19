import { Home, ShoppingCart, User } from 'lucide-react'

import { NavItem } from '@/types/nav-link'

export const AdminItems: NavItem[] = [
  {
    title: 'Dashboard',
    icon: Home,
    href: '/',
  },
  {
    title: 'Usuários',
    icon: User,
    href: '/users',
  },
  {
    title: 'Pedidos',
    icon: ShoppingCart,
    href: '/orders',
  },
]
