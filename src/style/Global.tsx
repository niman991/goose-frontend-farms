import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-image: url('/images/egg/bg.png');
    background-color: ${({ theme }) => theme.colors.background};
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: auto;

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
