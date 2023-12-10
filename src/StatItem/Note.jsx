import React from 'react';
import PropTypes from "prop-types";

const Note = ({ value }) => {
	if (value) {
		return (
			<div className=' border-gray-300 border-t mt-2'>
				{value.map((note, index) => <p key={index} className=' text-gray-700 whitespace-pre-wrap text-2xl font-normal pl-1'>{note}</p>
				)}

			</div>
		)
	}

	return null
}

Note.propTypes = {
	value: PropTypes.array
}

export default Note;
