import React from 'react';
import { useTitle } from '../Effects/SetTitle';
import { NavLink } from 'react-router-dom';

import VodLinks from './VodLinks';
import LearninwayVods from './LearningwayVods'
import InstructionalVideos from './InstructionalVideos';

const Learningway = () => {
    useTitle("Learningway")

    return (
        <article className='mx-auto max-w-6/10'>
            <h1 className='text-4xl text-center p-3 bg-darkblue text-white border-white rounded-lg border-2 max-w-7/8 mx-auto my-3 outline outline-black shadow-lg'>Learningway</h1>
            <p>Learning Free Enterprise is often an exercise in "Let me explain! No, there is too much, let me sum up". With that in mind, this project is an ongoing effort with from newbies and veterans to help provide a little more guidance than has been generally available for people looking to pick up the game.</p>
            <br />
            <p>The series is going have a collection static seeds hosted on this website, with accompanying links to videos of veterans talking about their thoughts as they progress through the seed, some walkthrough videos linked to on this page, and more to come as we figure out more of what's needed. If you have suggestions, join the <a href="https://discord.gg/AVeUqkb" className='border-b-1 border-blue-600'>FE Discord</a> and head over to the #newbies-corner channel.</p>

            <div className='flex justify-evenly mt-5'>
                <NavLink className='text-xl bg-darkblue text-white border-white rounded-lg border-2 px-3 py-2 outline outline-black shadow-md' to="/learningway/seeds">Learningway Seeds</NavLink>
                <NavLink className="text-xl bg-darkblue text-white border-white rounded-lg border-2 px-3 py-2 outline outline-black shadow-md" to="/learnignway/videos">Instructional Videos</NavLink>
            </div>
            <br />
            <p>Also be sure to check out the <a href="https://wiki.ff4fe.com" className='border-b-1 border-blue-600'>Free Enterprise Wiki</a>! The wiki has lots of pages and articles detailing both FE and the vanilla game, as well as lots of links to community made refernce compilations to help people learn.</p>
        </article>
    )
}

export default Learningway;