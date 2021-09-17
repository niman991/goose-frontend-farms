import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'EGG-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      137: '0xdf14901ab35bf92a68086491db30d3c9448f4758'
    },
    tokenSymbol: 'EGG',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
      137: '0xc9daCfF0A5580645A1Df201ed7bDC9DD11C04aDe',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'EGG-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xd1b59d11316e87c3a0a069e80f590ba35cd8d8d3',
      137: '0x18bdb0c96752a083e0eea52e276d16776c2d44c2'
    },
    tokenSymbol: 'EGG',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
      137: '0xc9daCfF0A5580645A1Df201ed7bDC9DD11C04aDe',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
      137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
