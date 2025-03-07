import React from 'react';
import { useTitle } from '../Effects/SetTitle';

const SeedOne = () => {
    useTitle("Learningway Seed One")

    return (
        <article className='mx-auto bg-seedbackground'>
            <iframe className="min-w-full min-h-dvh pt-5 bg-seedbackground" src="/seeds/Learningway_Seed_One.html" width="600" height="800" referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </article>
    )
}

export default SeedOne;