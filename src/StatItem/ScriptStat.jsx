import React from 'react';
import PropTypes from "prop-types";

const ScriptStat = ({ values }) => {
	if (values && values.length > 0) {
		return (
			<div className="full-width">
				<h3 className="full-width">
					<span className="header-label">
						Scripts:
					</span>
				</h3>
				<ul className="container">
					{values.map((value, index) => <li className="value" key={index}>{value}</li>)}
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
