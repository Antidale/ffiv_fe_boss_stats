import React from 'react';
import { useTitle } from '../Effects/SetTitle';

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
            <br />
            <p>Also be sure to check out the <a href="https://wiki.ff4fe.com" className='border-b-1 border-blue-600'>Free Enterprise Wiki</a>! The wiki has lots of pages and articles detailing both FE and the vanilla game, as well as lots of links to community made refernce compilations to help people learn.</p>

            <section className='py-3'>
                <h2 className='text-3xl text-center py-2 bg-darkblue text-white border-white rounded-lg border-2 max-w-3/4 mx-auto my-3 outline outline-black shadow-lg'>Learningway Seeds</h2>
                <p>The Learningway seeds are intended to target the development of specific skills that are helpful for learning the game, and each seed will try to build on what's come before without being too overwhelming. Learningway seeds allow newbies to practice their skills, learn more from watching experts play the same seeds, and receive feedback on their runs.</p>
                <br />
                <p>We encourage you to run the seeds for yourself first, and then come back and watch the videos after you're done. Don't worry about a timer for your first runs, we sure aren't worried about a timer for play throughs on these seeds.</p>

                <h3 className='text-2xl text-center py-1 bg-darkblue text-white border-white rounded-lg border-2 max-w-5/8 mx-auto mt-7 mb-3 outline outline-black shadow-md'>
                    Seed One - Somebunny goes to market
                </h3>
                <p>This is a flagset that's a bit of a riff on the <a href="https://ff4fe.com/make?flags=bBAYAAAAAAAAAAEBGBkQAAAAAAAAAABAAAgBGRAEwAAAC" className='border-b-1 border-blue-600'>Supermarket Sweep preset</a>. Both flagsets feature no character restrictions, and free shops with pretty much all the best weapons, armor, and items available. In this flagset we did empty all the normal treasure chests, but that's to help you focus on learning where shops are, and make you have to manage less inventory.</p>
                <br />
                <p>We also pre-selected objectives that should have you cover a decent amount of the checks in Kmain. And as a nice bonus, you'll get at least one Excal and one Adamant Armor from completing the Forge and Trade Pink Tail objectives.</p>
                <br />
                <code>O1:quest_forge/2:quest_magma/3:quest_tradepink/req:3/win:crystal Kmain Pshop Crelaxed/j:abilities Tempty Swild/free/no:apples Bstandard/whyburn Etoggle Glife/sylph/backrow -spoon</code>

                <p className='pt-2'><a href="/learningway/SeedOne" className='text-xl border-b-2 border-blue-600'>Get the seed</a></p>

                <VodLinks vodInfo={LearninwayVods.SeedOne} />

            </section>
            <InstructionalVideos />
        </article>
    )
}

export default Learningway;