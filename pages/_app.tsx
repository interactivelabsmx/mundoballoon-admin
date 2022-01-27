import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import React from 'react';
import 'styles/index.css';
import AppContexts from '@containers/AppContexts';
import { AuthProvider } from '@containers/AuthProvider';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <AuthProvider>
    <AppContexts pageProps={pageProps}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Mundo Balloon -- Admin Site</title>
      </Head>
      <Component {...pageProps} />
    </AppContexts>
  </AuthProvider>
);

export default App;
