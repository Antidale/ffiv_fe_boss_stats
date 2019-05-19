import React from 'react';
import './EnemyDetail.css';
import StatItem from '../StatItem/StatItem';
import ScriptStat from '../StatItem/ScriptStat';
import ItemTitle from '../StatItem/ItemTitle';

const BossDetail = ({ enemy }) => (
	<section className="container detail-container">
		<span className="full-width Child title no-margin container">
			<ItemTitle value={enemy.enemy} isTitle hideLabel />
			<StatItem label="HP" value={enemy.hitPoints} isTitle />
			<StatItem label="XP" value={enemy.experiencePoints} />
		</span>
		<StatItem label="Level" value={enemy.level} />
		<StatItem label="Attack" value={enemy.attackPower} />
		<StatItem label="Accuracy" value={enemy.attackPercent} />
		<StatItem label="Attack Multi" value={enemy.attackMultiplier} />
		<StatItem label="Spell Power" value={enemy.spellPower} />
		<StatItem label="Max Speed" value={enemy.maxSpeed} />
		<StatItem label="Min Speed" value={enemy.minSpeed} />
		<StatItem label="Defense" value={enemy.defense} />
		<StatItem label="Evade" value={enemy.evade} />
		<StatItem label="Defense Multi" value={enemy.defenseMultiplier} />
		<StatItem label="Magic Def" value={enemy.magicDefense} />
		<StatItem label="Magic Evade" value={enemy.magicEvade} />
		<StatItem label="Magic Def Multi" value={enemy.magicDefenseMultiplier} />
		<StatItem label="Gil" value={enemy.gil} />
		<ScriptStat values={enemy.scriptValues} />
	</section>
);

export default BossDetail
