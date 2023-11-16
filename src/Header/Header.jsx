import React from 'react';
import Nav from "./Nav";

const Header = () => (
	<header className="bg-darkblue font-bold text-white text-7xl pl-3 py-3 flex-col">
		<h1 className='text-left'>FE Info</h1>
		<Nav />
	</header>
);

export default Header;
