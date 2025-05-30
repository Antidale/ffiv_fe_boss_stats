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
                    OArandom:4,tough_quest/do_2:spoon/do_4:superweapon OBrandom:4,char/do_2:ribbon/do_4:adamantarmor OC1:collect_boss13/2:boss_wyvern/random:3,boss/do_3:siren/do_5:cursedring ODgroup_a:all/group_b:all/group_c:all/do_2:crystal Kmain/summon/moon/miab:lst/char/nofree Pkey Cstandard/nofree/nogiant/distinct:8/start:any/j:abilities/nekkie/nodupes/hero Tpro/playable Sstandard/playable/no:sirens Bchaos/risky/alt:gauntlet/chaosburn Etoggle Xobjbonus:5 Gwarp/life/sylph/backrow Qfastrom/msgspeedfix <nobr>-kit:better</nobr> <nobr>-kit2:green</nobr> <nobr>-noadamants</nobr> <nobr>-nocursed</nobr> <nobr>-smith:alt,playable</nobr>
                </div>
            </p>
            <br />
            <h2 className='text-2xl text-center p-3 bg-darkblue text-white border-white rounded-lg border-2 max-w-3/4 mx-auto my-3 outline outline-black shadow-lg'>
                Objectives
            </h2>
            <p className='pb-3'>
                The Objective system got a huge overhaul in 5.0, and gives flagset designers a lot more opportunity to craft some story back into the game, offer specific rewards for completing objectives, or even provide a way to both <b>win:game</b> and <b>win:crystal</b>.
                <br />
                <br />
                For this flagset, getting the Crystal requires completing the entirety of two groups out of gropus A, B, and C. Which means that one of the three sets won't be required in order to get the Crystal. The runners will get some rewards as they complete objetives within those groups, as well.
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
                        OC1:collect_boss13/2:boss_wyvern/random:3,boss/do_3:siren/do_5:cursedring
                    </p>

                    <p>Group D - How to win</p>
                    <p className='font-mono pb-2'>
                        ODgroup_a:all/group_b:all/group_c:all/do_2:crystal
                    </p>
                </div>
            </p>
            <h2 className='text-2xl text-center p-3 bg-darkblue text-white border-white rounded-lg border-2 max-w-3/4 mx-auto my-3 outline outline-black shadow-lg mt-6'>
                Key Items
            </h2>
            <p className='pb-3'>
                Key Items got a few things, and one important thing to note is that the Pass is <b>always</b> a Key Item, no matter where you get it from. 18/18 makes a comeback!
                <br />
                <br />
                The new K flags in this flagset are <b>Kchar</b> and <b>Kmiab:lst</b>. For the MIABs, the granularity options that ScytheMarshall pioneered in the forks gets picked up, but there's a slight change in how the actual count of locations that get into the KI pool is determined. For this flagset, that change isn't really in play, so we'll defer explanining that for when the wiki is updated.
                <br />
                <br />
                With <b>Kchar</b> flag enabled, Character locations will be shuffled into the Key Item location pool and Characters will be shuffled into the Key Item pool. This opens up a number of possibilities and can seriously affect your routing decisions during a seed. Zot can have 3 characters, 3 key items, 3 duds, or a mixture of them all.
                <br />
                <br />
                To help runners make good choices around whether or not to go through with the Package check, overworld sprites for character locations have been updated so you can get an idea for what that location has before receiving it. If it's a red treasure chest, it's a piece of treasure. If the chest is blue though, that's a key item!
            </p>
            <p className='border-black border-2 p-2 mx-5 flex-auto'>
                <div className='p-2 font-mono'>
                    Kmain/summon/moon/miab:lst/char/nofree Pkey
                </div>
            </p>
            \
            <h2 className='text-2xl text-center p-3 bg-darkblue text-white border-white rounded-lg border-2 max-w-3/4 mx-auto my-3 outline outline-black shadow-lg mt-6'>
                Characters, Treasures, and Shops
            </h2>
            <p className="pb-3">
                For this flagset, not much changes with the Character flags, just adding in the <b>nogiant</b> flag, which lets you mimic the old Omode:classicgiant behavior of removing the character reward from defeating the CPU spot boss.
                <br />
                <br />
                5.0 does pick up the <b>playable</b> flag from the forks, but has a slightly different implementation. Here, things Edge can Dart <i>are</i> included in the Treasure and Shops pools, and summon orbs only appear if Rydia is in the seed.
            </p>
            <p className='border-black border-2 p-2 mx-5 flex-auto'>
                <div className='p-2 font-mono'>
                    Cstandard/nofree/nogiant/distinct:8/start:any/j:abilities/nekkie/nodupes/hero Tpro/playable Sstandard/playable/no:sirens
                </div>
            </p>

            {/* the rest */}
            <h2 className='text-2xl text-center p-3 bg-darkblue text-white border-white rounded-lg border-2 max-w-3/4 mx-auto my-3 outline outline-black shadow-lg mt-6'>
                The Rest
            </h2>
            <p className="pb-3">
                <b>Bchaos/chaosburn</b> and <b>Qfastrom</b> are the standouts here. The boss scaling code has been reworked and we can now have multiples of any boss in a seed. Your dreams of many Alt. Gauntlets on the moon are now a possibility! You can also, with <b>chaosburn</b>, get a different <b>whichburn</b> effect on each Wyvern you fight. Neat! Scary! <b>Fastrom</b> speeds up the game a noticeable amount. Things are a little more challenging on BS1 than they were before, but also the fights just flow much more nicely.
                <br />
                <br />
                <b>-smith:playable</b> gives the same "A character in the seed can use it" treatment to what Kokkol forges. <b>Xobjbonus:5</b> will give the runners an extra 5% XP for each objective they complete. And you might notice that the Objective rewards include an Adamant amor and a Cursed ring, but here those items are not allowed. Objective rewards can include things that are otherwise not available, which includes a character that's otherwise not allowed in the seed.

            </p>
            <p className='border-black border-2 p-2 mx-5 flex-auto'>
                <div className='p-2 font-mono'>
                    Bchaos/risky/alt:gauntlet/chaosburn Etoggle Xobjbonus:5 Gwarp/life/sylph/backrow Qfastrom/msgspeedfix -kit:better -kit2:green -noadamants -nocursed -smith:alt,playable
                </div>
            </p>
        </article>
    )
}

export default Showcase
