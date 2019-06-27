import React, { Component } from 'react';
import Api from '../Api/Api';
import EquipmentItem from "../EquipmentItem/EquipmentItem"

const EQUIPMENT_ENDPOINT = "equipment";

class EquipmentPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			equipmentList: []
		}
	}

	componentDidMount() {
		Api.fetchData(
			EQUIPMENT_ENDPOINT,
			data => this.setState({ equipmentList: data })
		)
	}

	render() {
		return (
			<article>
				{this.state.equipmentList.map(item =>
					<EquipmentItem key={item.id} item={item} />)}
			</article>
		)
	}
}

export default EquipmentPage;
