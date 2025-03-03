import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
	<nav>
		<div className='items-center justify-center p-6 mx-auto text-gray-200 text-2xl font-semibold'>
			<NavLink className='border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-600 mx-1.5 sm:mx-6' to="/">Location Summary</NavLink>
			<NavLink className='border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-600 mx-1.5 sm:mx-6' to="/learningway/">Learningway</NavLink>
			<NavLink className='border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-600 mx-1.5 sm:mx-6' to="/boss-stats/">Boss Stats</NavLink>
			{/* <NavLink className='border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-600 mx-1.5 sm:mx-6' to="/equipment/">Equipment</NavLink> */}
		</div>
	</nav>
)

export default Navigation
