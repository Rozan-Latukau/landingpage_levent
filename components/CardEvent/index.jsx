/* eslint-disable @next/next/no-img-element */
import React from 'react';
import CardTitle from '../CardTitle';
import Link from 'next/link';
import { formatDate } from '../../utils/formatDate';

export default function CardEvent({ data = [], title, subTitle }) {
  return (
    <section className='grow-today'>
      <div className='container'>
        <CardTitle title={title} subTitle={subTitle} />
        <div className='mt-5 row gap'>
          {data.map((event, index) => (
            <div className='col-lg-3 col-md-6 col-12' key={index}>
              <div className='card-grow h-100'>
                <span className='badge-pricing'>
                  {event?.tickets?.[0]?.price === 0
                    ? 'free'
                    : `$${event?.tickets?.[0]?.price || 'N/A'}`}
                </span>
                <img
                  src={`${process.env.NEXT_PUBLIC_API}/${event?.image?.name || 'default.jpg'}`}
                  alt='semina'
                />
                <div className='card-content'>
                  <div className='card-title'>{event?.title || 'Untitled'}</div>
                  <div className='card-subtitle'>
                    {event?.category?.name || 'No Category'}
                  </div>
                  <div className='description'>
                    {event?.venueName || 'Unknown Venue'}, {formatDate(event?.date)}
                  </div>
                  <Link href={`/detail/${event?._id}`} className='stretched-link'>

                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
}
