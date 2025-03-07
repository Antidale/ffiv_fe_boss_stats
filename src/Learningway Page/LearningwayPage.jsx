import React from 'react';
import { useTitle } from '../Effects/SetTitle';
import YouTubeIframe from '../Utils/YouTube';

const Learningway = () => {
    useTitle("Learningway")

    return (
        <article className='mx-auto max-w-6/10'>
            <h1 className='text-4xl text-center p-3 bg-darkblue text-white border-white rounded-lg border-2 max-w-7/8 mx-auto my-3 outline outline-black'>Learningway</h1>
            <p>Learning Free Enterprise is often an exercise in "Let me explain! No, there is too much, let me sum up". With that in mind, Learningway is an ongoing effort with from newbies and veterens to help provide a little more guidance than has been generally available for people looking to pick up the game.</p>
            <br />
            <p>The series is going have some static seeds hosted on this website, with accompanying links to videos of veterens talking about their thoughts as they progress through the seed, some walkthrough videos linked to on this page, and more to come as we figure out more of what's needed!</p>
            <br />
            <p>Also be sure to check out the <a href="https://wiki.ff4fe.com" className='border-b-1 border-blue-600'>Free Enterprise Wiki</a>! The wiki has lots of pages and articles detailing both FE and the vanilla game, as well as lots of links to community made refernce compilations to help people learn.</p>

            <section className='py-3'>
                <h2 className='text-3xl text-center py-2 bg-darkblue text-white border-white rounded-lg border-2 max-w-3/4 mx-auto my-3 outline outline-black'>Learningway Seeds</h2>
                <p>The Learningway seeds are a collection of introductory seeds for Free Enterprise, intended to help guide new players in learning the game. Each seed will have some accompanying recordings from veteren players, with narration focused on what the player is thinking about as they're running the seed for the first time.</p>
                <br />
                <p>We encourage you to run the seeds for yourself first, and then come back and watch the videos after you're done. Don't worry about a timer for your first runs, we sure aren't worried about a timer for play throughs on these seeds.</p>

                <h3 className='text-2xl text-center py-2 bg-darkblue text-white border-white rounded-lg border-2 max-w-5/8 mx-auto mt-7 mb-5 outline outline-black shadow-lg'>
                    Seed One - Somebunny goes to market
                </h3>
                <code>O1:quest_forge/2:quest_magma/3:quest_tradepink/req:3/win:crystal Kmain Pshop Crelaxed/j:abilities Tempty Swild/free/no:apples Bstandard/whyburn Etoggle Glife/sylph/backrow -spoon</code>
                <p className='text-lg text-center border-slate-400 rounded-sm border-2 border-white max-w-1/6 my-3 shadow-md outline outline-black bg-darkblue text-white'><a href="/learningway/seed-one">Get the seed</a></p>
                <p>This is a flagset that's a bit of a riff on the <a href="https://ff4fe.com/make?flags=bBAYAAAAAAAAAAEBGBkQAAAAAAAAAABAAAgBGRAEwAAAC" className='border-b-1 border-blue-600'>Supermarket Sweep preset</a>. Both flagsets feature no character restrictions, and free shops with pretty much all the best weapons, armor, and items available. In this flagset we did empty all the normal treasure chests, but that's to help you focus on learning where shops are, and make you have to manage less inventory.</p>
                <br />
                <p>We also pre-selected objectives that should have you cover a decent amount of the checks in Kmain. And as a nice bonus, you'll get at least one Excal and one Adamant Armor from completing the Forge and Trade Pink Tail objectives.</p>
                <details className='text-lg text-center border-2 border-white outline outline-black rounded-sm border-1 max-w-1/4 my-5 shadow-sm '>
                    <p className='pl-2 py-1'>
                        <a href="https://youtu.be/SykTfwDKZFE" className="border-b-2 border-blue-600" >
                            Antidale
                        </a>
                    </p>
                    <p className='pl-2  pb-2'>
                        <a href="https://www.youtube.com/watch?v=9YF-flPCeVs" className="border-b-2 border-blue-600" >
                            tallgrant
                        </a>
                    </p>
                    <summary className='text-white text-md mt-0 bg-darkblue'>
                        Click to show VOD links
                    </summary>
                </details>

            </section>
            <section className='py-3'>
                <h2 className='text-3xl text-center py-2 bg-darkblue text-white border-white rounded-lg border-2 max-w-3/4 mx-auto my-3 outline outline-black'>Instructional Videos</h2>
                <ul className='list-none'>
                    <li>
                        <YouTubeIframe title="Kmain Walkthrough" url="https://www.youtube.com/embed/FiG22k-sD88?si=MfYZK20IjdVg-EnW" />
                    </li>
                    <li>
                        <YouTubeIframe title="Ksummon Walkthrough" url="https://www.youtube.com/embed/DofNt0zSspA?si=IazstpXcVsQVMdU-" />
                    </li>
                    <li>
                        <YouTubeIframe title="Kmoon Walkthrough" url="https://www.youtube.com/embed/FzXE2Xvj51A?si=WZ-WKf57iBPEwPOk" />
                    </li>
                    <li className='my-5'>
                        <YouTubeIframe title="Understanding Agility in Final Fantasy IV: Free Enterprise by tallgrant" url="https://www.youtube.com/embed/cAbnhESM6N4?si=SMVMC-szr-VT5w59" />
                    </li>
                </ul>
            </section>
        </article>
    )
}

export default Learningway;