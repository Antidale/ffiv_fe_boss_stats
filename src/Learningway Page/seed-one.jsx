import React from 'react';
import { useTitle } from '../Effects/SetTitle';
import Seeds from './LearningwaySeedSource';
import { useParams } from 'react-router-dom';

const SeedIframe = (props) => {


    const { seedName } = useParams();

    var seedInfo = Seeds[seedName]

    if (!seedInfo) {
        useTitle("404");
        return (
            <article>Seed not found.</article>
        )
    }
    useTitle(`Learningway: ${seedName}`);
    return (
        <article className='mx-auto bg-seedbackground' >
            <iframe
                className="min-w-full min-h-dvh pt-5 bg-seedbackground"
                srcDoc={Seeds.SeedOne}
                referrerPolicy="strict-origin-when-cross-origin" />
        </article >
    )
}

export default SeedIframe;