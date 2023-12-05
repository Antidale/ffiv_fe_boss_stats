import React from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';

const Dropdown = ({ title, items, onValueChanged }) => (
	<div className="inline-flex m-5 pb-10 pt-10">
		<h2 className="pr-10 font-semibold text-2xl self-center">{title}</h2>
		<select onChange={onValueChanged}>
			{items.map(item =>
				<option key={item.id} value={item.id}>{item.name}</option>
			)}
		</select>
	</div>
)

Dropdown.propTypes = {
	title: PropTypes.string.isRequired,
	items: PropTypes.array.isRequired,
	onValueChanged: PropTypes.func.isRequired
}

export default Dropdown;
