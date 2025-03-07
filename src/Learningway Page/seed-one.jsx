import React from 'react';
import { useTitle } from '../Effects/SetTitle';

const SeedOne = () => {
    useTitle("Learningway Seed One")

    return (<iframe className="min-w-full min-h-dvh pt-5 bg-seedbackground" src="/seeds/Learningway_Seed_One.html"></iframe>)
}

export default SeedOne;