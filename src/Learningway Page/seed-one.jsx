import React from 'react';
import { useTitle } from '../Effects/SetTitle';

const SeedOne = () => {
    useTitle("Learningway Seed One")

    return (
        <article className='mx-auto bg-seedbackground'>
            <iframe
                className="min-w-full min-h-dvh pt-5 bg-seedbackground"
                src="https://ff4-fe-info.s3.us-west-2.amazonaws.com/learningway-seeds/seed_one.html"
                referrerpolicy="strict-origin-when-cross-origin" />
        </article>
    )
}

export default SeedOne;