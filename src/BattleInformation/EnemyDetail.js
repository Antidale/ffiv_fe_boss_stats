import React from 'react';
import './EnemyDetail.css';
import '../StatItem/StatItem'
import StatItem from '../StatItem/StatItem';

const BossDetail = ({ enemy }) => (
	<div className="container detail-container">
		<span className="full-width Child title no-margin container">
			<StatItem label="Battle" value={enemy.battle} isTitle />
			<StatItem label="Enemy" value={enemy.enemy} isTitle />
			<StatItem label="Location" value={enemy.location} isTitle />
		</span>
		<StatItem label="HP" value={enemy.hitPoints} />
		<StatItem label="XP" value={enemy.experiencePoints} />
		<StatItem label="Attack" value={enemy.hitPoints} />
		<StatItem label="Accuracy" value={enemy.hitPoints} />
		<StatItem label="Attack Multi" value={enemy.hitPoints} />
		<StatItem label="Gil" value={enemy.gil} />
	</div>
);

export default BossDetail
