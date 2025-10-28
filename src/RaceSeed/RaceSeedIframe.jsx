import { useEffect, useState } from 'react';
import { useTitle } from '../Effects/SetTitle';
import Api from "../Api/Api"
import { useParams } from 'react-router-dom';

const RaceSeedIframe = (props) => {

    const { seedName } = useParams();
    const [seedInfo, setSeedInfo] = useState('');
    useEffect(() => {
        Api.fetchHtml(
            `races/${seedName}/seed`,
            data => setSeedInfo(data)
        )
    }, []);

    if (seedInfo === null) {
        useTitle("404");
        return (
            <article>Seed not found.</article>
        )
    } else if (seedInfo === undefined || seedInfo === '') {
        useTitle("loading")
        return (
            <article>Loading...</article>
        )
    }

    useTitle(`Race: ${seedName}`);

    return (
        <article className='mx-auto bg-seedbackground' >
            <iframe
                className="min-w-full min-h-dvh pt-5 bg-seedbackground"
                srcDoc={seedInfo}
                referrerPolicy="strict-origin-when-cross-origin" />
        </article >
    )
}

export default RaceSeedIframe;
