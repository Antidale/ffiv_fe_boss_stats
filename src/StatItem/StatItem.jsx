import React from 'react';
import PropTypes from 'prop-types';

const StatItem = ({ label, value, hoverText }) => (
	<p className=" text-2xl text-gray-700 px-1 font-normal" title={hoverText}>
		<span className=' text-xl'>
			{label}:
		</span>
		<span className=" pl-1">
			{value}
		</span>

	</p>
)

StatItem.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.any
}

export default StatItem;
