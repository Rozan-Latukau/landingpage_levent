import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Levent || Page LandingPage</title>
        <meta name='description' content='Levent app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
    </>
  );
}
