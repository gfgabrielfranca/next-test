import App, { AppProps, AppContext } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  console.log('App: getInitialProps');
  
  appContext.ctx.res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=60'
  );

  const appProps = await App.getInitialProps(appContext);

  const pageProps = {
    ...appProps.pageProps,
    host: appContext.ctx.req.headers.host
  };
  
  return { pageProps };
}

export default MyApp
