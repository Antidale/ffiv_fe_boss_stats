import React from 'react';
import StatItem from '../StatItem/StatItem';
import Note from '../StatItem/Note';
import Utils from '../Utils/Utils';

const BossDetail = ({ enemy }) => (
	<section className=' mb-5 grid grid-cols-5'>
		<div className=' w-2'></div>
		<details className='border-darkblue border-2 rounded-lg col-span-3'>
			<summary className='bg-darkblue text-slate-200'>
				<div className='grid grid-cols-4'>
					<h2 className="font-semibold align-bottom text-4xl pl-3 col-span-2 pb-2">
						<span className="">{enemy.enemy}</span>
					</h2>
					<p className='text-3xl align-text-bottom'>
						HP: {enemy.hitPoints}
					</p>
					<p className='text-3xl align-text-bottom'>
						XP: {enemy.experiencePoints}
					</p>
				</div>
			</summary>
			<div className='flex flex-row flex-wrap gap-x-3'>
				<StatItem label="Level" value={enemy.level} />
				<StatItem label="Attack" value={Utils.formatAttack(enemy)} />
				<StatItem label={(Utils.isSingleSpeed(enemy)
					? "Speed"
					: "Speed Range")}
					value={(Utils.isSingleSpeed(enemy)
						? enemy.maxSpeed
						: enemy.minSpeed + " to " + enemy.maxSpeed)} />
				<StatItem label="Spell Power" value={enemy.spellPower} />
				<StatItem label="Defense" value={enemy.defense} />
				<StatItem label="Magic Def" value={enemy.magicDefense} />
				<StatItem label="Gil" value={enemy.gil} />
			</div>

			<Note value={enemy.notes} />
		</details>
	</section>
);

export default BossDetail
