import React from 'react';
import EnemyDetail from './EnemyDetail';

const BattleInformation = ({ battleInfo }) => (
	<div>
		{battleInfo.map(enemy =>
			<EnemyDetail key={enemy.id} enemy={enemy} />
		)}
	</div>
)

export default BattleInformation;
