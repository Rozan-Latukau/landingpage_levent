'use client';
import { useSearchParams } from 'next/navigation';
import moment from 'moment';
import Head from 'next/head';
import Footer from '@/components/Footer';
import FormCheckout from '@/components/FormCheckout';
import Navbar from '@/components/Navbar';
import { formatDate } from '@/utils/formatDate';

export default function CheckoutPage({ checkPages, eventId }) {
    const searchParams = useSearchParams();
    const ticketId = searchParams.get('ticketId');

    const selectedTicket = checkPages.tickets.find(
        (ticket) => ticket._id === ticketId
    );

    return (
        <>
            <Head>
                <title>Semina || Checkout</title>
                <meta name='description' content='Checkout page' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <section className='bg-navy'>
                <Navbar />
            </section>

            <section className='bg-navy'>
                <div className='checkout container'>
                    <div className='text-center checkout-title'>Invest In Yourself</div>

                    <div className='event-details container d-flex flex-wrap justify-content-lg-center align-items-center gap-5'>
                        <img
                            src='/images/details-image.png'
                            className='event-image'
                            alt='semina'
                        />
                        <div className='d-flex flex-column gap-3'>
                            <h5>{checkPages.title}</h5>

                            <div className='d-flex align-items-center gap-3'>
                                <img src='/icons/ic-marker-white.svg' alt='' />
                                <span>{checkPages.venueName}</span>
                            </div>
                            <div className='d-flex align-items-center gap-3'>
                                <img src='/icons/ic-time-white.svg' alt='' />
                                <span>{moment(checkPages.date).format('HH.mm A')}</span>
                            </div>
                            <div className='d-flex align-items-center gap-3'>
                                <img src='/icons/ic-calendar-white.svg' alt='' />
                                <span>{formatDate(checkPages.date)}</span>
                            </div>
                        </div>
                        <div className='total-price'>
                            {selectedTicket
                                ? selectedTicket.price === 0
                                    ? 'free'
                                    : `$${selectedTicket.price}`
                                : ''}
                        </div>
                    </div>

                    <FormCheckout tickets={checkPages.tickets} eventId={eventId} />
                </div>
            </section>
            <Footer />
        </>
    );
}
