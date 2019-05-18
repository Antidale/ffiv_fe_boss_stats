import React from 'react';
import PropTypes from 'prop-types';
import '../BattleInformation/EnemyDetail.css'
import './StatItem.css'

const StatItem = ({ label, value, isTitle, hideLabel }) => (
	<p className="stat-item">
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
