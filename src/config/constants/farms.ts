import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'RIVA-USDC LP',
    lpAddresses: {
      97: '',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      137: '0x96C5b8fa9c0432c22AFBFA8FF03d6f3DeEFAd78b',
    },
    tokenSymbol: 'RIVA',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
      137: '0xdd31D406AD1a88c000E1Ad7ee7d277157C9D7d13',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'RIVA-WMOVR LP',
    lpAddresses: {
      97: '',
      56: '0xd1b59d11316e87c3a0a069e80f590ba35cd8d8d3',
      137: '0xD9c5A21Bd82D980D6460C46d2eB5fB4D1cA70E17'
    },
    tokenSymbol: 'RIVA',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
      137: '0xdd31D406AD1a88c000E1Ad7ee7d277157C9D7d13',
    },
    quoteTokenSymbol: QuoteToken.MOVR,
    quoteTokenAdresses: contracts.movr,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'MATIC-USDC LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
    },
    tokenSymbol: 'MATIC',
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
