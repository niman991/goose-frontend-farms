import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.goosedefi.com/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.goosedefi.com/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/nests',
  },
  {
    label: 'Farming Countdown',
    icon: 'InfoIcon',
    href: '/',
  },
  {
    label: 'Prices',
    icon: 'InfoIcon',
    href: '/',
  },
  {
    label: 'Analytics',
    icon: 'InfoIcon',
    href: '/',
  },
  {
    label: 'Referrals (Coming soon)',
    icon: 'GroupsIcon',
    href: '/',
  },
  {
    label: 'Bridge',
    icon: 'TradeIcon',
    href: '/',
  },
    {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/goosedefi/',
      },
    ],
  },
]

export default config
