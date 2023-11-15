import React from 'react';
import PropTypes from 'prop-types';
import './StatItem.css'

const StatItem = ({ label, value, hoverText, isTitle, hideLabel }) => (
	<p className="stat-item" title={hoverText}>
		<span className={
			"label " +
			(isTitle ? "title " : " ") +
			(hideLabel ? "hidden " : " ")}>
			{label}:
				</span>
		<span className="value">
			{value}
		</span>

	</p>
)

StatItem.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.any
}

export default StatItem;
