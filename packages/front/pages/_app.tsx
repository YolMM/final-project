import React from 'react';
import { SWRConfig } from 'swr';
import fetcher from '../lib/swr-fetch';

const MyApp = ({ Component, pageProps }) => (
  <SWRConfig
    value={{
      refreshInterval: 10 * 1000,
      fetcher,
    }}
  >
    <Component {...pageProps} />
  </SWRConfig>
);
export default MyApp;
