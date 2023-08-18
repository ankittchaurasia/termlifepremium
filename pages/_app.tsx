import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>TermLife Insurance Premium Calculator</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Verdana, sans-serif',
        
          colorScheme: 'light',
          primaryColor:"pink",
          headings: {
            fontFamily: 'monospace, Roboto, sans-serif',
            fontWeight: 700,
          },
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}