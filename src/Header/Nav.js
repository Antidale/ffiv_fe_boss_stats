import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Navigation = () => (
	<ul>
		<li><Link to="/equipment/">Equipment</Link></li>
		<li><Link to="/boss-stats/">Boss Stats</Link></li>
	</ul>
)

export default Navigation
