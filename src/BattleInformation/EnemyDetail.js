import React from 'react';
import './EnemyDetail.css';

const BossDetail = ({ enemy }) => (
	<div className="container detail-container">
		<h2 className="full-width Child title no-margin">
			<span className="test">{enemy.battle}</span>
			<span className="test">{enemy.enemy}</span>
			<span className="test">{enemy.location}</span>
		</h2>
		<p className="stat-item">HP: {enemy.hitPoints}</p>
		<p className="stat-item">XP: {enemy.experiencePoints}</p>
		<p className="stat-item">Attack: {enemy.attackPower}</p>
		<p className="stat-item">Accuracy: {enemy.attackPercent}</p>
		<p className="stat-item">Attack Multi: {enemy.attackPercent}</p>
	</div>
);

export default BossDetail
