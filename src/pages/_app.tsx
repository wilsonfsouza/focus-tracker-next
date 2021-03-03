import React from 'react';
import { AppProps } from 'next/app';

import GlobalStyle from '../styles/global';

import AppProvider from '../contexts';

const MyApp: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppProvider sessionProps={pageProps.session}>
      <Component {...pageProps} />
      <GlobalStyle />
    </AppProvider>
  );
}

export default MyApp
