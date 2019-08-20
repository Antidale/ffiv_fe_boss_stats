import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';

const Dropdown = ({ title, items, onValueChanged, initialValue }) => {
	const [currentValue, setValue] = useState(undefined)

	return (
		<div className="Dropdown">
			<h2 className="Dropdown-h2">{title}</h2>
			<select value={currentValue || initialValue} onChange={function (event) { setValue(event.target.value); onValueChanged(event) }}>
				{items.map(item =>
					<option key={item.id} value={item.id}>{item.name}</option>
				)}
			</select>
		</div>
	)
}

Dropdown.propTypes = {
	title: PropTypes.string.isRequired,
	items: PropTypes.array.isRequired,
	onValueChanged: PropTypes.func.isRequired,
	initialValue: PropTypes.number
}

export default Dropdown;
