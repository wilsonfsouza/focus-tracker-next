import React from 'react';
import { AppProps } from 'next/app';

import GlobalStyle from '../styles/global';

import AppProvider from '../contexts';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider theme={pageProps.theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </AppProvider>
  );
}
