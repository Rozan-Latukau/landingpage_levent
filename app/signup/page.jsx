import Head from 'next/head';
import Brand from '@/components/Brand';
import Navbar from '@/components/Navbar';
import FormSignup from '@/components/FormSignup';


export default function Signin() {
    return (
        <>
            <Head>
                <title>Levent || Signup</title>
                <meta name='description' content='Levent app' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <section className='bg-navy'>
                <Navbar />
            </section>

            <section className='login header bg-navy'>
                <div className='container'>
                    <div className='row row-cols-md-12 row-cols-1 d-flex justify-content-center align-items-center hero'>
                        <div className='col-md-6'>
                            <div className='hero-headline text-start'>
                                Expand Your <br className='d-none d-md-block' />
                                Knowledge & Skills
                            </div>
                            <p className='hero-paragraph text-start'>
                                Kami menyediakan berbagai acara terbaik untuk membantu{' '}
                                <br className='d-none d-lg-block' />
                                anda dalam meningkatkan skills di bidang teknologi
                            </p>
                        </div>
                        <div className='col-md-6'>
                            <FormSignup />
                        </div>
                    </div>
                </div>
            </section>

            <Brand className='pt-0 bg-navy' />
        </>
    );
}

