import React, { useState } from 'react';
import '../EnemyDetail/EnemyDetail.css';
import StatItem from '../StatItem/StatItem';
import ItemTitle from '../StatItem/ItemTitle';
import ScriptStat from '../StatItem/ScriptStat';

const EquipmentItem = ({ item }) => {


	const [isExpanded, setExpanded] = useState(false);

	return (
		<section className="container detail-container" onClick={() => setExpanded(!isExpanded)}>
			<span className="full-width Child title no-margin container">
				<img className="header-icon" height="64" width="64" src={`/img/${item.icon}.gif`} alt={item.category} />
				<ItemTitle value={item.name} isTitle hideLabel />
			</span>
			<section className={isExpanded ? " " : "hidden"}>
				<StatItem value={item.str} label="Str" />
				<StatItem value={item.agi} label="Agi" />
				<StatItem value={item.vit} label="Vit" />
				<StatItem value={item.wil} label="Wil" />
				<StatItem value={item.wis} label="Wis" />
				<StatItem value={item.strongAgainst} label="Strong Against" />
				<ScriptStat values={item.canEquip} />
			</section>
		</section>
	);
}

export default EquipmentItem;
