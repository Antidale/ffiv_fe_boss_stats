import React from 'react';
import './EnemyDetail.css';
import StatItem from '../StatItem/StatItem';
// import ScriptStat from '../StatItem/ScriptStat';
import ItemTitle from '../StatItem/ItemTitle';

const BossDetail = ({ enemy }) => (
	<section >
		<details className="container detail-container">
			<summary>
				<span className="full-width Child title no-margin container">
					<ItemTitle value={enemy.enemy} isTitle hideLabel />
					<StatItem label="HP" value={enemy.hitPoints} isTitle />
					<StatItem label="XP" value={enemy.experiencePoints} />
				</span>
			</summary>
			<StatItem label="Level" value={enemy.level} />
			<StatItem label="Average Punch" value={calculateDamage(enemy)} 
					  hoverText="Does not include defenses"/>
			<StatItem label={( isSingleSpeed(enemy)
						? "Speed"
						: "Speed Range")} 
					  value={(isSingleSpeed(enemy) 
						? enemy.maxSpeed 
						: enemy.minSpeed + " to " + enemy.maxSpeed)} />
			<StatItem label="Spell Power" value={enemy.spellPower} />
			<StatItem label="Defense" value={enemy.defense} />
			<StatItem label="Magic Def" value={enemy.magicDefense} />
			<StatItem label="Gil" value={enemy.gil} />
			{/* <ScriptStat values={enemy.scriptValues} /> */}
		</details>
	</section>
);

const calculateDamage = (enemy) => (
	Math.floor((
		//base
		enemy.attackPower * enemy.attackMultiplier * enemy.attackPercent / 100 
		+ 
		// 1.5x possible multiplier
		enemy.attackPower * enemy.attackMultiplier * enemy.attackPercent * 1.5 / 100)
		//average them together
		/ 2)
)

const isSingleSpeed = (enemy) => (
	enemy.maxSpeed === enemy.minSpeed
)

export default BossDetail
