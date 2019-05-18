import React from 'react';
import './StatItem.css'
import './ScriptStat.css'
import PropTypes from "prop-types";

const ScriptStat = ({ values }) => {
	if (values.length > 0) {
		return (
			<div className="full-width">
				<hr />


				<span className="label">Scripts:</span>
				<br />
				<ul>
					{values.map(value => <li>{value}</li>)}
				</ul>
			</div>
		)
	}

	return null
}

ScriptStat.propTypes = {
	value: PropTypes.array
}

export default ScriptStat;
