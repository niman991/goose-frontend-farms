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
        href: 'https://swap.moonswap.in/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://swap.moonswap.in/#/pool',
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
    label: 'Prices',
    icon: 'InfoIcon',
    href: 'https://swap.moonswap.in/#/stats',
  },
  {
    label: 'Analytics',
    icon: 'InfoIcon',
    href: 'https://info.moonswap.in/',
  },
  {
    label: 'Referrals (Coming soon)',
    icon: 'GroupsIcon',
    href: '/',
  },
  {
    label: 'Bridge',
    icon: 'TradeIcon',
    href: 'https://anyswap.exchange/dashboard#/',
  },
    {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/RiverRocket-finance/',
      },
    ],
  },
]

export default config
