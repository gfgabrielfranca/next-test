import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    body {
      background: ${theme.background};
      color: ${theme.color};
    }

    a {
      color: inherit;
    }
  `}
  
`
