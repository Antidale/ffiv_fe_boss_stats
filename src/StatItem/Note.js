import React from 'react';
import './StatItem.css'
import './ScriptStat.css'
import PropTypes from "prop-types";

const Note = ({ value }) => {
	if (value) {
		return (
			<div className="full-width">
				<h3 className="full-width">
					<span className="header-label">
						Notes:
					</span>
				</h3>
                <p>
                    {value}
                </p>
			</div>
		)
	}

	return null
}

Note.propTypes = {
	value: PropTypes.string
}

export default Note;