import React from 'react';
import '../EnemyDetail/EnemyDetail.css';
import StatItem from '../StatItem/StatItem';
import ItemTitle from '../StatItem/ItemTitle';
import ScriptStat from '../StatItem/ScriptStat';

const EquipmentItem = ({ item }) => (
	<section className="container detail-container">
		<span className="full-width Child title no-margin container">
			<img height="64" width="64" src={`/temp/${item.icon}.gif`} alt={item.category} />
			<ItemTitle value={item.name} isTitle hideLabel />
			<StatItem value={item.category} label={"Category"} />
			<StatItem value={item.equipmentType} label={"Type"} />
		</span>
		<StatItem value={item.str} label="Str" />
		<StatItem value={item.agi} label="Agi" />
		<StatItem value={item.vit} label="Vit" />
		<StatItem value={item.wil} label="Wil" />
		<StatItem value={item.wis} label="Wis" />
		<StatItem value={item.strongAgainst} label="Strong Against" />
		<ScriptStat values={item.canEquip} />
	</section>
);

export default EquipmentItem;
