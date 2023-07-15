import { Icon } from '@chakra-ui/react'
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdInfoOutline,
  MdMenuBook,
  MdOutlineShoppingCart
} from 'react-icons/md'
import { LuMessageSquare } from 'react-icons/lu'
import { SiCalender } from 'react-icons/si'
// Admin Imports
import MainDashboard from 'pages/admin/default'
import Info from 'pages/admin/info'
import Profile from 'pages/admin/profile'
import Calender from 'pages/admin/calender'
import Ebook from 'pages/admin/e-book'
import DataTables from 'pages/admin/data-tables'
import RTL from 'pages/rtl/rtl-default'
import Chat from 'pages/admin/chat'

// Auth Imports
import SignInCentered from 'pages/auth/sign-in'

const routes = [
  {
    name: 'Dashboard',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard
  },
  {
    name: 'Info',
    layout: '/admin',
    path: '/info',
    icon: (
      <Icon
        as={MdInfoOutline}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: Info,
    secondary: true
  },
  {
    name: 'Ebook',
    layout: '/admin',
    icon: <Icon as={MdMenuBook} width='20px' height='20px' color='inherit' />,
    path: '/e-book',
    component: Ebook
  },
  {
    name: 'Calender',
    layout: '/admin',
    path: '/calender',
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Calender
  },
  {
    name: 'Chat',
    layout: '/admin',
    path: '/chat',
    icon: <Icon as={LuMessageSquare} width='20px' height='20px' color='inherit' />,
    component: Chat
  },
  {
    name: 'Sign In',
    layout: '/auth',
    path: '/sign-in',
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignInCentered
  },
  // {
  //   name: 'RTL Admin',
  //   layout: '/rtl',
  //   path: '/rtl-default',
  //   icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
  //   component: RTL
  // }
]

export default routes
