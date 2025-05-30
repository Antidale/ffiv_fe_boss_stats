import { useTitle } from '../Effects/SetTitle';

const Showcase = () => {
    return (
        <article className='mx-auto max-w-6/10 pb-10'>
            <h1 className='text-4xl text-center p-3 bg-darkblue text-white border-white rounded-lg border-2 max-w-7/8 mx-auto my-3 outline outline-black shadow-lg'>
                The Flags
            </h1>
            <p>
                There's a lot new in 5.0, and you should really look at the <a href="https://discord.com/channels/411615349579186178/1370845709544456295" className='border-b-2 border-blue-600'>randomizer-updates</a> channel in the Free Enterprise Workshop for a rundown of the changes, but here's both the flagset and a very quick summary of the changes.
                <br />
                <p className='mb-3'>Here's the whole flagset:</p>
            </p>
            <p className='border-black border-2 p-2 mx-5 font-mono flex-auto'>
                <div className='p-2'>
                    OArandom:4,tough_quest/do_2:spoon/do_4:superweapon OBrandom:4,char/do_2:ribbon/do_4:adamantarmor OC1:collect_boss10/2:boss_wyvern/random:3,boss/do_3:siren/do_5:cursedring ODgroup_a:all/group_b:all/group_c:all/do_2:crystal Kmain/summon/moon/miab:lst/char/nofree Pkey Cstandard/nofree/nogiant/distinct:8/start:any/j:abilities/nekkie/nodupes/hero Tpro/playable Sstandard/playable/no:sirens Bchaos/risky/alt:gauntlet/chaosburn Etoggle Xobjbonus:5 Gwarp/life/sylph/backrow Qfastrom/msgspeedfix <nobr>-kit:better</nobr> <nobr>-kit2:green</nobr> <nobr>-noadamants</nobr> <nobr>-nocursed</nobr> <nobr>-smith:alt,playable</nobr>
                </div>
            </p>
            <br />
            <h2 className='text-2xl text-center p-3 bg-darkblue text-white border-white rounded-lg border-2 max-w-3/4 mx-auto my-3 outline outline-black shadow-lg'>
                Objectives
            </h2>
            <p>
                The Objective system got a huge overhaul in 5.0, and gives flagset designers a lot more opportunity to craft some story back into the game, offer specific rewards for completing objectives, or even provide a
            </p>
            <p className='border-black border-2 p-2 mx-5 flex-auto'>
                <div className='p-2'>
                    <p>Group A - Tough Quests</p>
                    <p className='font-mono pb-2'>
                        OArandom:4,tough_quest/do_2:spoon/do_4:superweapon
                    </p>

                    <p>Group B - Characters</p>
                    <p className='font-mono pb-2'>
                        OBrandom:4,char/do_2:ribbon/do_4:adamantarmor
                    </p>

                    <p>Group C - Bosses</p>
                    <p className='font-mono pb-2'>
                        OC1:collect_boss10/2:boss_wyvern/random:3,boss/do_3:siren/do_5:cursedring
                    </p>

                    <p>Group D - How to win</p>
                    <p className='font-mono pb-2'>
                        ODgroup_a:all/group_b:all/group_c:all/do_2:crystal
                    </p>
                </div>
            </p>

            {/* <code>
                Kmain/summon/moon/miab:lst/char/nofree Pkey Cstandard/nofree/nogiant/distinct:8/start:any/j:abilities/nekkie/nodupes/hero Tpro/playable Sstandard/playable/no:sirens Bchaos/risky/alt:gauntlet/chaosburn Etoggle Xobjbonus:5 Gwarp/life/sylph/backrow Qfastrom/msgspeedfix -kit:better -kit2:green -noadamants -nocursed -smith:alt,playable
            </code> */}

        </article>
    )
}

export default Showcase