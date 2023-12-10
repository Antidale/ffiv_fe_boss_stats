import React from 'react';
import PropTypes from "prop-types";

const ScriptStat = ({ values }) => {
	if (values && values.length > 0) {
		return (
			<div className="full-width">
                <span className="header-label">
                    Equippable By:
                </span>
				<ul className="container portrait-background">
					{values.map((value, index) => <li key={index} className='portrait-background'><img className="header-icon" src={`/img/${value}.gif`} alt={value} /></li>)}
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
