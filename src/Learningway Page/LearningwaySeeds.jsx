import React from 'react';
import { useTitle } from '../Effects/SetTitle';
import VodLinks from './VodLinks';
import LearningwayVods from './LearningwayVods'
import { NavLink } from 'react-router-dom';

const LearningwaySeeds = () => {
    useTitle("Learnignway Seeds")

    return (
        <article className='mx-auto max-w-6/10 pb-5'>
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

            <p className='pt-2'><NavLink to="/learningway/seeds/seedone" className='text-xl border-b-2 border-blue-600'>Get the seed</NavLink></p>

            <VodLinks vodInfo={LearningwayVods.SeedOne} />

            <h3 className='text-2xl text-center py-1 bg-darkblue text-white border-white rounded-lg border-2 max-w-5/8 mx-auto mt-7 mb-3 outline outline-black shadow-md'>
                Seed Two - Somebunny makes choices
            </h3>

            <p>This flagset represents a small step up in beginner flags. High quality gear is still available, but you must either find it or pay for it. You must find ways to search effectively to get your team rolling. But you’ll have some security- all characters can be found somewhere in the seed.</p>
            <br />
            <p>Your objectives are designed to take you everywhere, and in some cases into difficult situations. Six out of eight objectives may allow you to skip a difficult boss or a check gated by a buried key item.</p>
            <br />
            <code>O1:quest_masamunealtar/random:7/req:6/win:crystal Kmain/summon/moon/force:magma Pshop Cstandard/nofree/j:abilities/nodupes Twild Swild Bstandard/alt:gauntlet/whyburn Etoggle Gwarp/life/sylph/backrow -kit:basic -noadamants -spoon</code>

            <p className='pt-2'><NavLink to="/learningway/seeds/seedtwo" className='text-xl border-b-2 border-blue-600'>Get the seed</NavLink></p>

            <VodLinks vodInfo={LearningwayVods.SeedTwo} />

            <h3 className='text-2xl text-center py-1 bg-darkblue text-white border-white rounded-lg border-2 max-w-5/8 mx-auto mt-7 mb-3 outline outline-black shadow-md'>
                Seed Three - Somebunny gets a Hook
            </h3>

            <p>This flagset is a lot more focused than the two previous ones, and should run pretty quickly, but can have a lot of replayability and challenge. The only goal here is to get the Hook, take the Hovercraft to Eblan, and complete the Hook Route underground.</p>
            <br />
            <p>With all the character spots open, you should get a pretty decent selection for your party, but with <code>nodupes</code> enabled, you're limited to just one of anybody. Treasure is set to Twildish, so you have good things to find in boxes, but the quality will depend on what area you're hunting in. Check out the wiki's page <a href="https://wiki.ff4fe.com/doku.php?id=treasure_probability_curves_twildish" className='border-b-1 border-blue-600'>detailing Twildish information</a> for more information</p>
            <br />
            <code>O1:quest_falcon/req:all/win:game Kmain/force:hook Pnone Crelaxed/j:abilities/nodupes Twildish Sstandard Bstandard/alt:gauntlet Etoggle Glife/sylph/backrow -kit:basic -noadamants -spoon</code>

            <p className='pt-2'><NavLink to="/learningway/seeds/seedthree" className='text-xl border-b-2 border-blue-600'>Get the seed</NavLink></p>

            <VodLinks vodInfo={LearningwayVods.SeedThree} />

            <p className='pt-2'><NavLink to="/learningway/seeds/seedthreechallenge" className='text-xl border-b-2 border-blue-600'>Get a bonus challenge seed</NavLink></p>

        </article>
    )
}

export default LearningwaySeeds;