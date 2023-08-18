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
        
          colorScheme: 'dark',
          primaryColor:"violet",
          colors:{
            dark: [
              "#FFF0F6", // pink 1 - Lightest pink
              "#FFDEEB", // pink 2
              "#FCC2D7", // pink 3
              "#FAA2C1", // pink 4
              "#F783AC", // pink 5
              "#F06595", // pink 6
              "#E64980", // pink 7
              "#D6336C", // pink 8
              "#C2255C", // pink 9
              "#A61E4D"  // pink 10 - Darkest pink
            ],
          },
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