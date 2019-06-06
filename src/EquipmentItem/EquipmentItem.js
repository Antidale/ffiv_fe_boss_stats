import React from 'react';
import '../EnemyDetail/EnemyDetail.css';
import StatItem from '../StatItem/StatItem';
import ItemTitle from '../StatItem/ItemTitle';

const EquipmentItem = ({ item }) => (
	<section className="container detail-container">
		<span className="full-width Child title no-margin container">
			<ItemTitle value={item.name} isTitle hideLabel />

		</span>
	</section>
);

export default EquipmentItem;
