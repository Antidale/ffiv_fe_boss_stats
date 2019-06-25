import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Navigation = () => (
	<ul>
		<li><Link to={process.env.REACT_APP_URL_PREFIX + "/equipment/"}>Equipment</Link></li>
		<li><Link to={process.env.REACT_APP_URL_PREFIX + "/boss-stats/"}>Boss Stats</Link></li>
	</ul>
)

export default Navigation
