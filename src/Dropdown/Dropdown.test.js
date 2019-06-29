import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './Dropdown';
import { on } from 'cluster';

it('renders without crashing', () => {

	const item_one = {
		id: 1,
		name: "item one"
	}
	const item_two = {
		id: 2,
		name: "item two"
	}

	const onChanged = () => {
		return true;
	}
	const title = "fake title"



	const div = document.createElement('div');
	ReactDOM.render(
		<Dropdown
			title={title}
			items={[item_one, item_two]}
			onValueChanged={onChanged}
		/>, div);
	ReactDOM.unmountComponentAtNode(div);
});
