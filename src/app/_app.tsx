import { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Preload icons */}
        <link rel="preload" href="public/assets/icons/0-01.png" as="image" />
        <link rel="preload" href="public/assets/icons/02-03.png" as="image" />
        <link rel="preload" href="public/assets/icons/45-48.png" as="image" />
        <link rel="preload" href="public/assets/icons/51-53-56.png" as="image" />
        <link rel="preload" href="public/assets/icons/55-57.png" as="image" />
        <link rel="preload" href="public/assets/icons/61-63-66.png" as="image" />
        <link rel="preload" href="public/assets/icons/65-67.png" as="image" />
        <link rel="preload" href="public/assets/icons/71-73-85.png" as="image" />
        <link rel="preload" href="public/assets/icons/75-77-86.png" as="image" />
        <link rel="preload" href="public/assets/icons/80-81-82.png" as="image" />
        <link rel="preload" href="public/assets/icons/95-96-97.png" as="image" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
