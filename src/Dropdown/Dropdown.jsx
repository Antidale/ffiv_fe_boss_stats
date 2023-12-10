import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ title, items, onValueChanged }) => (
	<div className="inline-flex m-5 py-5">
		<h2 className="pr-2 font-semibold text-2xl self-center">{title}</h2>
		<select onChange={onValueChanged} className=' pl-2 pt-1'>
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
