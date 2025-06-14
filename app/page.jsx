import Head from 'next/head';
import Brand from '../components/Brand';
import CardEvent from '../components/CardEvent';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Statistics from '../components/Statistics';
import Stories from '../components/Stories';
import { getData } from '../utils/fetchData';

export default async function Home() {
  const req = await getData('api/v1/events');
  const res = req.data;

  return (
    <>
      <Head>
        <title>Levent || Landing Page</title>
        <meta name='description' content='Levent app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Brand />
      <CardEvent data={res} title='Featured Events' subTitle='Grow Today' />
      <Stories />
      <Statistics />
      <Footer />
    </>
  );
}
