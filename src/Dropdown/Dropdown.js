import React from 'react';
import './Dropdown.css';

const Dropdown = ({ title, items, onValueChanged }) => (
	<div>
		<h2>{title}</h2>
		<select onChange={onValueChanged}>
			{items.map(item =>
				<option key={item.id} value={item.id}>{item.name}</option>
			)}
		</select>
	</div>
)

export default Dropdown;
