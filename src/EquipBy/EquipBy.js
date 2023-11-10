import React from 'react';
import '../StatItem/StatItem.css'
import './EquipBy.css'
import PropTypes from "prop-types";

const ScriptStat = ({ values }) => {
	if (values && values.length > 0) {
		return (
			<div className="full-width">
                <span className="header-label">
                    Equippable By:
                </span>
				<ul className="container">
					{values.map((value, index) => <li key={index}><img className="header-icon" src={`/img/${value}.gif`} alt={value} /></li>)}
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
