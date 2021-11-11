import React, { Fragment } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/dist/shared/lib/router/router';
import AppContexts from '../containers/AppContexts';
import { AuthProvider } from '../components/Auth/AuthProvider';

import '../styles/index.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  /* @ts-expect-error Layout is not part of component */
  const Layout = Component.Layout || Fragment;
  return (
    <AuthProvider>
      <AppContexts pageProps={pageProps}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Mundo Balloon -- Admin Site</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContexts>
    </AuthProvider>
  );
};

export default App;
