import React from 'react';
import Nav from "./Nav";

const Header = () => (
	<header className="bg-darkblue text-white text-7xl py-3 sticky top-0">
		<div className='flex justify-between pl-5'>
			<h1 className='text-left font-bold '>FE Info</h1>
			<Nav />
		</div>
	</header>
);

export default Header;
