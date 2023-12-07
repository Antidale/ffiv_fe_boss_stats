import React from 'react';
import PropTypes from "prop-types";

const Note = ({ value }) => {
	if (value) {
		return (
			<div className=''>
				<h3 className=''>
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