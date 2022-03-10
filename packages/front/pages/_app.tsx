import React from 'react';
import { SWRConfig } from 'swr';
import { UserProvider } from '@auth0/nextjs-auth0';
import fetcher from '../lib/swr-fetch';
import Footer from './components/base/Footer';
import Menu from './components/base/Menu';
import { StyleDiv } from './components/style/Style';

const MyApp = ({ Component, pageProps }) => (
  <SWRConfig
    value={{
      refreshInterval: 10 * 1000,
      fetcher,
    }}
  >
    <UserProvider>
      <StyleDiv>
        <Menu />
        <Component {...pageProps} />
        <Footer />
      </StyleDiv>
    </UserProvider>
  </SWRConfig>
);
export default MyApp;
