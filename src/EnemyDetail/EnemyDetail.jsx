import React from 'react';
import './EnemyDetail.css';
import StatItem from '../StatItem/StatItem';
import Note from '../StatItem/Note';
import ItemTitle from '../StatItem/ItemTitle';
import Utils from '../Utils/Utils';

const BossDetail = ({ enemy }) => (
	<section className=''>
		<details className="">
			<summary>
				<span className="">
					<ItemTitle value={enemy.enemy} isTitle hideLabel />
					<StatItem label="HP" value={enemy.hitPoints} isTitle />
					<StatItem label="XP" value={enemy.experiencePoints} />
				</span>
			</summary>
			<StatItem label="Level" value={enemy.level} />
			<StatItem label="Average Punch" value={Utils.calculateDamage(enemy)} 
					  hoverText="Does not include defenses"/>
			<StatItem label={( Utils.isSingleSpeed(enemy)
						? "Speed"
						: "Speed Range")} 
					  value={( Utils.isSingleSpeed(enemy) 
						? enemy.maxSpeed 
						: enemy.minSpeed + " to " + enemy.maxSpeed)} />
			<StatItem label="Spell Power" value={enemy.spellPower} />
			<StatItem label="Defense" value={enemy.defense} />
			<StatItem label="Magic Def" value={enemy.magicDefense} />
			<StatItem label="Gil" value={enemy.gil} />
			<Note value={enemy.notes} />
		</details>
	</section>
);

export default BossDetail
