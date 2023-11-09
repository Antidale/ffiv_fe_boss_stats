import React from 'react';
import './EnemyDetail.css';
import StatItem from '../StatItem/StatItem';
import ScriptStat from '../StatItem/ScriptStat';
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
			<StatItem label="Average Punch" value={Math.floor((enemy.attackPower * enemy.attackMultiplier * enemy.attackPercent / 100 + enemy.attackPower * enemy.attackMultiplier * enemy.attackPercent * 1.5 / 100) / 2)} />
			<StatItem label="Speed Range" value={enemy.maxSpeed + " to " + enemy.minSpeed} />
			<StatItem label="Spell Power" value={enemy.spellPower} />
			<StatItem label="Max Speed" value={enemy.maxSpeed} />
			<StatItem label="Min Speed" value={enemy.minSpeed} />
			<StatItem label="Defense" value={enemy.defense} />
			<StatItem label="Magic Def" value={enemy.magicDefense} />
			<StatItem label="Gil" value={enemy.gil} />
			<ScriptStat values={enemy.scriptValues} />
		</details>
	</section>
);

export default BossDetail
