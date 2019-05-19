import React from 'react';
import './StatItem.css';

const ItemTitle = ({ value }) => (
	<p className="stat-item">
		<span className="item-title value">{value}</span>
	</p>
)

export default ItemTitle;
