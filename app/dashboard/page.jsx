import Head from 'next/head';
import { cookies } from 'next/headers';
import { getData } from '../../utils/fetchData';
import dynamic from 'next/dynamic';
import Navbar from "@/components/Navbar/index";

// Import client component *tanpa* ssr:false
const DashboardClient = dynamic(() => import('./dashboard'));

export default async function Dashboard() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  let data = [];
  let errorMessage = '';

  try {
    const req = await getData('/api/v1/orders', {}, token);
    data = req.data;
  } catch (error) {
    errorMessage = error.response?.data?.msg || 'Failed to load data.';
  }

  return (
    <>
      <Head>
        <title>Levent || Dashboard</title>
        <meta name="description" content="Levent app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className='bg-navy'>
        <Navbar />
      </section>

      <DashboardClient data={data} errorMessage={errorMessage} />
    </>
  );
}
