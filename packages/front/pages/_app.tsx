import React from 'react';
import { SWRConfig } from 'swr';
import { UserProvider } from '@auth0/nextjs-auth0';
import fetcher from '../lib/swr-fetch';
import Footer from './components/base/Footer';
import Menu from './components/base/Menu';

const MyApp = ({ Component, pageProps }) => (
  <SWRConfig
    value={{
      refreshInterval: 10 * 1000,
      fetcher,
    }}
  >
    <UserProvider>
      <Menu />
      <Component {...pageProps} />
      <Footer />
    </UserProvider>
  </SWRConfig>
);
export default MyApp;
