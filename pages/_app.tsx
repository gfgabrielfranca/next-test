import App, { AppProps, AppContext } from 'next/app'
import { DefaultTheme, ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../styles'

interface MyAppProps extends AppProps {
  theme: DefaultTheme;
}

function MyApp({ Component, pageProps, theme }: MyAppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  console.log('App: getInitialProps');
  
  appContext.ctx.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=60'
  );

  const appProps = await App.getInitialProps(appContext);

  const pageProps = {
    ...appProps.pageProps,
    host: appContext.ctx.req.headers.host
  };

  const response = await fetch("https://theme-gfgabrielfranca.vercel.app/");
  const theme = await response.json();
  
  return { pageProps, theme };
}

export default MyApp
