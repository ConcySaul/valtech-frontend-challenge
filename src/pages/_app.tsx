import './globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Valtech Front Challenge</title>
        <meta name="description" content="Valtech react front challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
