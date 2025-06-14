"use client"

import Head from 'next/head';
import Button from '@/components/Button';
import CardEvent from '@/components/CardEvent';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Statistics from '@/components/Statistics';
import Stories from '@/components/Stories';
import { useRouter } from 'next/navigation';
import moment from 'moment';
import { formatDate } from '@/utils/formatDate';
import Cookies from 'js-cookie';

export default function DetailPage({ detailPage, response, id }) {
    const router = useRouter();

    const handleSubmit = (ticketId, organizer) => {
        const token = Cookies.get('token');
        if (!token) {
            return router.push('/signin');
        } else {
            router.push(
                `/checkout/${id}?ticketId=${ticketId}&organizer=${organizer}`
            );
        }
    };
    return (
        <>
            <Head>
                <title>Levent || Detail Page</title>
                <meta name='description' content='Levent app' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <section className='bg-navy'>
                <Navbar />
            </section>

            <div className='preview-image bg-navy text-center'>
                <img
                    src='/images/details-image.png'
                    className='img-content'
                    alt='semina'
                />
            </div>
            <div className='details-content container'>
                <div className='d-flex flex-wrap justify-content-lg-center gap'>
                    <div className='d-flex flex-column description'>
                        <div className='headline'>{detailPage.title}</div>
                        <br />
                        <div className='event-details'>
                            <h6>Event Details</h6>
                            <p className='details-paragraph'>{detailPage.about}</p>
                        </div>
                        <div className='keypoints'>
                            {detailPage.keyPoint.map((key, i) => {
                                return (
                                    <div className='d-flex align-items-start gap-3' key={i}>
                                        <img src='/icons/ic-check.svg' alt='semina' />
                                        <span>{key}</span>
                                    </div>
                                );
                            })}
                        </div>
                        <div className='map-location'>
                            <h6>Event Location</h6>
                            <div className='map-placeholder'>
                                <div className='maps'>
                                    <img src='/images/maps.png' alt='' />
                                    <div
                                        className='absolute d-flex justify-content-center align-items-center'
                                        id='hoverMe'
                                    >
                                        <a href='#' className='btn-navy' id='btn-maps'>
                                            View in Google Maps
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex flex-column card-event'>
                        <h6>Your Speaker</h6>
                        <div className='d-flex align-items-center gap-3 mt-3'>
                            <img
                                src={`${process.env.NEXT_PUBLIC_API}/${detailPage?.talent?.image?.name}`}
                                alt='semina'
                                width='60'
                            />
                            <div>
                                <div className='speaker-name'>{detailPage?.talent?.name}</div>
                                <span className='occupation'>{detailPage?.talent?.role}</span>
                            </div>
                        </div>
                        <hr />

                        <h6>Get Ticket</h6>
                        {detailPage.tickets.map((ticket) => (
                            <>
                                {ticket.statusTicketCategories ? (
                                    <>
                                        <div className='price my-3'>
                                            {ticket.price === 0 ? 'free' : `$${ticket.price}`}
                                            <span>/person</span>
                                        </div>
                                        <div className='d-flex gap-3 align-items-center card-details'>
                                            <img src='/icons/ic-marker.svg' alt='semina' />{' '}
                                            {detailPage.venueName}
                                        </div>
                                        <div className='d-flex gap-3 align-items-center card-details'>
                                            <img src='/icons/ic-time.svg' alt='semina' />{' '}
                                            {moment(detailPage.date).format('HH.MM A')}
                                        </div>
                                        <div className='d-flex gap-3 align-items-center card-details'>
                                            <img src='/icons/ic-calendar.svg' alt='semina' />{' '}
                                            {formatDate(detailPage.date)}
                                        </div>

                                        {detailPage.stock !== 0 && (
                                            <Button
                                                variant={'btn-green'}
                                                action={() =>
                                                    handleSubmit(ticket._id, detailPage.organizer)
                                                }
                                            >
                                                Join Now
                                            </Button>
                                        )}
                                    </>
                                ) : (
                                    ''
                                )}
                            </>
                        ))}
                    </div>
                </div>
            </div>

            <CardEvent data={response} title='Similiar Events' subTitle='Next One' />
            <Stories />
            <Statistics />
            <Footer />
        </>
    );
}

