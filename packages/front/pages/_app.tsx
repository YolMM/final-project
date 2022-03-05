import React from 'react';
import { SWRConfig } from 'swr';
import fetcher from '../lib/swr-fetch';
import Footer from './components/Footer';
import Menu from './components/Menu';

const MyApp = ({ Component, pageProps }) => (
  <SWRConfig
    value={{
      refreshInterval: 10 * 1000,
      fetcher,
    }}
  >
    <Menu />
    <Component {...pageProps} />
    <Footer />
  </SWRConfig>
);
export default MyApp;
