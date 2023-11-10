import React from 'react';
import '../EnemyDetail/EnemyDetail.css';
import StatItem from '../StatItem/StatItem';
import ItemTitle from '../StatItem/ItemTitle';
import EquipBy from '../EquipBy/EquipBy';

const EquipmentItem = ({ item }) => (
	<section className="container detail-container">
		<span className="full-width Child title no-margin container">
			<img className="header-icon" height="64" width="64" src={`/img/${item.icon}.gif`} alt={item.category} />
			<ItemTitle value={item.name} isTitle hideLabel />
		</span>
		<StatItem value={item.str} label="Str" />
		<StatItem value={item.agi} label="Agi" />
		<StatItem value={item.vit} label="Vit" />
		<StatItem value={item.wil} label="Wil" />
		<StatItem value={item.wis} label="Wis" />
		<StatItem value={item.strongAgainst} label="Strong Against" />
		<EquipBy values={item.canEquip} />
	</section>
);

export default EquipmentItem;
