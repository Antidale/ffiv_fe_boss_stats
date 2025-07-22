import { useTitle } from '../Effects/SetTitle';
import Seeds from './SOTWSeedSource';
import { useParams } from 'react-router-dom';

const SotwIframe = (props) => {

    const { seedName } = useParams();

    var seedInfo = Seeds[seedName.toLowerCase()]

    if (!seedInfo) {
        useTitle("404");
        return (
            <article>Seed not found.</article>
        )
    }

    useTitle(`SotW: ${seedName}`);

    return (
        <article className='mx-auto bg-seedbackground' >
            <iframe
                className="min-w-full min-h-dvh pt-5 bg-seedbackground"
                srcDoc={seedInfo}
                referrerPolicy="strict-origin-when-cross-origin" />
        </article >
    )
}

export default SotwIframe;
