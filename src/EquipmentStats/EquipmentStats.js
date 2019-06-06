import React, { Component } from 'react';
import Api from '../Api/Api';

const EQUIPMENT_ENDPOINT = "equipment";

class EquipmentStats extends Component {
	constructor(props) {
		super(props);

		this.state = {
			equipment: []
		}
	}

	componentDidMount() {
		Api.fetchData(
			EQUIPMENT_ENDPOINT,
			data => this.setState({ equipment: data })
		)
	}

	render() {
		return (
			<div>
				{this.state.equipment.toString()}
			</div>
		)
	}
}

export default EquipmentStats;
