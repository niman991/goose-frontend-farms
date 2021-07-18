import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'MoreIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'MoreIcon',
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
    icon: 'MoreIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'MoreIcon',
    href: '/nests',
  },
  {
    label: 'Farming Countdown',
    icon: 'MoreIcon',
    href: '/farms',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'GitHub',
    icon: 'MoreIcon',
    href: 'https://github.com/',
  },
  {
    label: 'Referrals',
    icon: 'MoreIcon',
    href: '/',
  },
  {
    label: 'Audit coming soon',
    icon: 'MoreIcon',
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
