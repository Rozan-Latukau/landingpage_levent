import Head from 'next/head';
import Brand from '@/components/Brand';
import FormSignin from '@/components/FormSignin';
import Navbar from '@/components/Navbar';

export default function Home() {
    return (
        <>
            <Head>
                <title>Levent || Signin</title>
                <meta name='description' content='Levent app' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <section className='bg-navy'>
                <Navbar />
            </section>
            <section className='login header bg-navy'>
                <div className='container'>
                    <div className='d-flex flex-column align-items-center hero gap-5'>
                        <div>
                            <div className='hero-headline text-start'>Sign In</div>
                        </div>
                        <FormSignin />
                    </div>
                </div>
            </section>
            <Brand className='pt-0 bg-navy' />
        </>
    );
}