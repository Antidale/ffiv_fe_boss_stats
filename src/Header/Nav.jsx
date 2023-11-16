import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
	<div className='flex-row'>

	
	<ul className=' inline-block'>
		<li className='text-2xl font-normal self-end'><NavLink to="/boss-stats/">Boss Stats</NavLink></li>
		<li className='text-2xl font-normal self-end'><NavLink to="/equipment/">Equipment</NavLink></li>
	</ul>
	</div>
)

export default Navigation