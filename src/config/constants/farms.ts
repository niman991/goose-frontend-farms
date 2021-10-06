import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'RIVA-USDC LP',
    lpAddresses: {
      97: '',
      56: '',
      1285: '0xf17227b8684bCaeA9FcC9c062Ef81D1EDC07374C',
    },
    tokenSymbol: 'RIVA',
    tokenAddresses: {
      97: '',
      56: '',
      1285: '0x0ECe64308f07f12dee501d2e31B0F834748767b1',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'RIVA-MOVR LP',
    lpAddresses: {
      97: '',
      56: '',
      1285: '0x896C7Bfd94312E2025bF58100E3045636Bf3540c'
    },
    tokenSymbol: 'RIVA',
    tokenAddresses: {
      97: '',
      56: '',
      1285: '0x0ECe64308f07f12dee501d2e31B0F834748767b1',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'MOVR-USDC LP',
    lpAddresses: {
      97: '',
      56: '',
      1285: '0x74888A02891586EBecCc7B04A0F7a9b5098Daf05',
    },
    tokenSymbol: 'MOVR',
    tokenAddresses: {
      97: '',
      56: '',
      1285: '0x98878B06940aE243284CA214f92Bb71a2b032B8A',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },



  
]

export default farms
