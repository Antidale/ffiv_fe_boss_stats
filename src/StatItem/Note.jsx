import React from 'react';
import './StatItem.css'
import './ScriptStat.css'
import PropTypes from "prop-types";

const Note = ({ value }) => {
	if (value) {
		return (
			<div className="full-width">
				<h3 className="full-width">
					<span>
						Notes:
					</span>
				</h3>
                    {value}
			</div>
		)
	}

	return null
}

Note.propTypes = {
	value: PropTypes.string
}

export default Note;