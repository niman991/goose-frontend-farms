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
      1285: '',
    },
    tokenSymbol: 'RIVA',
    tokenAddresses: {
      97: '',
      56: '',
      1285: '',
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
      56: '',
      1285: ''
    },
    tokenSymbol: 'RIVA',
    tokenAddresses: {
      97: '',
      56: '',
      1285: '',
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
      1285: '',
    },
    tokenSymbol: 'MOVR',
    tokenAddresses: {
      97: '',
      56: '',
      1285: '',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
    {
    pid: 3,
    risk: 4,
    lpSymbol: 'MSWAP-MOVR LP',
    lpAddresses: {
      97: '',
      56: '',
      1285: '',
    },
    tokenSymbol: 'MSWAP',
    tokenAddresses: {
      97: '',
      56: '',
      1285: '',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
    {
    pid: 4,
    risk: 3,
    lpSymbol: 'WETH-USDC LP',
    lpAddresses: {
      97: '',
      56: '',
      1285: '',
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      97: '',
      56: '',
      1285: '',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }, 
      {
    pid: 5,
    risk: 3,
    lpSymbol: 'WBTC-USDC LP',
    lpAddresses: {
      97: '',
      56: '',
      1285: '',
    },
    tokenSymbol: 'WBTC',
    tokenAddresses: {
      97: '',
      56: '',
      1285: '',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  
  
  
  
  
  
  
      {
    pid: 6,
    risk: 1,
    lpSymbol: 'BUSD-USDC LP',
    lpAddresses: {
      97: '',
      56: '',
      1285: '',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '',
      137: '',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
      {
    pid: 7,
    risk: 1,
    lpSymbol: 'USDT-USDC LP',
    lpAddresses: {
      97: '',
      56: '',
      1285: '',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '',
      1285: '',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
      {
    pid: 8,
    risk: 1,
    lpSymbol: 'DAI-USDC LP',
    lpAddresses: {
      97: '',
      56: '',
      1285: '',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '',
      56: '',
      1285: '',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  
  
  
  
    {
    pid: 2,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'RIVA',
    lpAddresses: {
      97: '',
      56: '',
      1285: '',
    },
    tokenSymbol: 'RIVA',
    tokenAddresses: {
      97: '',
      56: '',
      1285: '',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  
  
  
  
]

export default farms
