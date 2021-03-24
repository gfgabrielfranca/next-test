import styled, { createGlobalStyle, css } from 'styled-components';
import NextNprogress from 'nextjs-progressbar';

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

export const ProgressBar = styled(NextNprogress).attrs(({theme}) => ({
  color: theme.color,
  startPosition: 0.3,
  stopDelayMs: 200,
  height: "2"
}))``