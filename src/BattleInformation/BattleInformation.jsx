import React from 'react';
import EnemyDetail from '../EnemyDetail/EnemyDetail';

const BattleInformation = ({ battleInfo }) => (
	<section>
		{battleInfo.map(enemy =>
			<EnemyDetail key={enemy.id} enemy={enemy} />
		)}
	</section>
)

export default BattleInformation;
