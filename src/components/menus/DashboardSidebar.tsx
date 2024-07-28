import {Flex, Image, NavLink, Paper, Text} from '@mantine/core'
import logo from '@/assets/images/logo.png'
import {
  Icon,
  IconFile,
  IconHeartPlus,
  IconHome,
  IconLogout,
  IconProps,
  IconTrash,
  IconUsers,
} from '@tabler/icons-react'
import {ForwardRefExoticComponent, RefAttributes} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {colors} from '@/configs'

type SideMenu = {
  id: string
  label: string
  href: string
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>
}

const MENUS: SideMenu[] = [
  {
    id: '1',
    label: 'Home',
    href: '/d',
    Icon: IconHome,
  },
  {
    id: '2',
    label: 'Blogs',
    href: '/d/blogs',
    Icon: IconFile,
  },
  {
    id: '3',
    label: 'Users',
    href: '/d/users',
    Icon: IconUsers,
  },
  {
    id: '4',
    label: 'Trash',
    href: '/d/trash',
    Icon: IconTrash,
  },
]

export function DashboardSidebar() {
  const location = useLocation()
  return (
    <Paper w="100%" p="4px" mih="100%" shadow="sm" component="section">
      <Flex pt="lg" justify="center" align="center">
        <Image w={100} src={logo} alt="logo" />
      </Flex>
      <Flex pt="xl" rowGap="8px" direction="column">
        {MENUS.map((menu) => {
          return (
            <NavLink
              key={menu.id}
              fw={500}
              label={menu.label}
              component={Link}
              to={{
                pathname: menu.href,
              }}
              leftSection={<menu.Icon width={20} height={20} />}
              active={location.pathname === menu.href}
            />
          )
        })}
        <NavLink
          fw={500}
          label="Logout"
          leftSection={<IconLogout width={20} height={20} />}
          color="red"
          active
        />
      </Flex>
      <Text
        c="gray.7"
        style={{
          position: 'absolute',
          bottom: '16px',
          left: '32px',
          textAlign: 'center',
        }}
        size="12px">
        Created with{' '}
        <IconHeartPlus color={colors.pink[5]} width={12} height={12} /> by
        myominhtoo
      </Text>
    </Paper>
  )
}
