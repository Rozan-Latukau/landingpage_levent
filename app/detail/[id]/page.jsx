import { getData } from '@/utils/fetchData';
import DetailPage from './detail';

export default async function Detail({ params: paramsPromise }) {
    const params = await paramsPromise;
    const req = await getData(`api/v1/events/${params.id}`);
    const detailPage = req.data;

    const request = await getData('api/v1/events');
    const response = request.data;

    return (
        <DetailPage detailPage={detailPage} reponse={response} id={params.id} />
    );
}
