import React, { Fragment } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/dist/shared/lib/router/router';
import initFirebaseAuth from '../lib/initFirebaseAuth';
import AppContexts from '../containers/AppContexts';

import '../styles/index.css';

initFirebaseAuth();

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  /* @ts-expect-error Layout is not part of component */
  const Layout = Component.Layout || Fragment;
  return (
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
  );
};

export default App;
