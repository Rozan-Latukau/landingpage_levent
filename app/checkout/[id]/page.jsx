import CheckoutPage from './checkout';
import { cookies } from "next/headers";
import { redirect } from 'next/navigation';
import { getData } from '@/utils/fetchData';

export default async function Checkout({ params: paramsPromise }) {
    const params = await paramsPromise;
    const cookieStore = await cookies();
    const token = cookieStore.get('token');

    if (!token) {
        redirect('/signin')
    }
    const eventId = params.id;

    const req = await getData(`/api/v1/events/${eventId}`);;
    const checkPages = req.data;

    return (
        <CheckoutPage checkPages={checkPages} eventId={eventId} />
    );
}

