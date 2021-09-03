/*
=========================================================
* Notus NextJS - v1.1.0 based on Tailwind Starter Kit by Creative Tim
=========================================================

* Product Page: https://www.creative-tim.com/product/notus-nextjs
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/notus-nextjs/blob/main/LICENSE.md)

* Tailwind Starter Kit Page: https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from 'react';
import Head from 'next/head';
import initFirebaseAuth from '../lib/initFirebaseAuth';
import AppContexts from '../containers/AppContexts';

import '@fortawesome/fontawesome-free/css/all.min.css';
import '@material-tailwind/react/tailwind.css';
import '../styles/tailwind.css';

initFirebaseAuth();

const App = ({ Component, pageProps }) => {
  const Layout = Component.layout || (({ children }) => <>{children}</>);
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
