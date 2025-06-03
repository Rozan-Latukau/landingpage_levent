'use client';

import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import moment from 'moment';
import { formatDate } from '../../utils/formatDate';

export default function DashboardClient({ data, errorMessage }) {
    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage);
        }
    }, [errorMessage]);

    if (!data) return <p>No data available</p>;

    return (
        <div className='checkout container'>
            <div className='text-center checkout-title text-black'>Invest In Yourself</div>
            {data.map((item) => (
                <div
                    className='event-details container bg-primary py-3 d-flex flex-wrap justify-content-lg-center align-items-center gap-5'
                    key={item._id}
                >
                    <div className='d-flex flex-column gap-3'>
                        <h5>{item.historyEvent.title}</h5>

                        <div className='d-flex align-items-center gap-3'>
                            <img src='/icons/ic-marker-white.svg' alt='' />
                            <span>{item.historyEvent.venueName}</span>
                        </div>
                        <div className='d-flex align-items-center gap-3'>
                            <img src='/icons/ic-time-white.svg' alt='' />
                            <span>{moment(item.historyEvent.date).format('HH.MM A')}</span>
                        </div>
                        <div className='d-flex align-items-center gap-3'>
                            <img src='/icons/ic-calendar-white.svg' alt='' />
                            <span>{formatDate(item.historyEvent.date)}</span>
                        </div>
                    </div>
                    <div className='total-price'>
                        {item.totalPay === 0 ? 'free' : `$${item.totalPay}`}
                    </div>
                </div>
            ))}
        </div>
    );
}
