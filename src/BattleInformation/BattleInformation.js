import React from 'react';
import EnemyDetail from '../EnemyDetail/EnemyDetail';

const BattleInformation = ({ battleInfo }) => (
	<article>
		{battleInfo.map(enemy =>
			<EnemyDetail key={enemy.id} enemy={enemy} />
		)}
	</article>
)

export default BattleInformation;
