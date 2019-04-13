import React from 'react';
import PropTypes from 'prop-types';
import '../BattleInformation/EnemyDetail.css'

const StatItem = ({ label, value, isTitle }) => (
	<p className="stat-item">
		<span className={
			"label " +
			(isTitle ? "title " : " ")}>{label}: </span>
		{value}
	</p>
)

StatItem.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.any
}

export default StatItem;
