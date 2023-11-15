import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Navigation = () => (
	<ul>
		<li><NavLink to="/equipment/">Equipment</NavLink></li>
		<li><NavLink to="/boss-stats/">Boss Stats</NavLink></li>
	</ul>
)

export default Navigation
