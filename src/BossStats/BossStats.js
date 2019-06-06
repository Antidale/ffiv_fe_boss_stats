import React, { Component } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import BattleInformation from '../BattleInformation/BattleInformation';
import Api from '../Api/Api'

const BATTLE_ENDPOINT = "bossbattle";
const LOCATION_ENDPOINT = "battlelocation";
const BOSSSTATS_ENDPOINT = "bossstats";

class BossStats extends Component {
	constructor(props) {
		super(props);

		this.state = {
			locations: [],
			battles: [],
			bossStats: [],
			locationId: 1,
			battleId: 1
		};

		this.battleOnChanged = this.battleOnChanged.bind(this);
		this.locationOnChanged = this.locationOnChanged.bind(this);
		this.getBattleInformation = this.getBattleInformation.bind(this);
	}

	componentDidMount() {
		Api.fetchData(
			BATTLE_ENDPOINT,
			data => this.setState({ battles: data })
		);

		Api.fetchData(
			LOCATION_ENDPOINT,
			data => this.setState({ locations: data })
		);

		this.getBattleInformation(this.state.locationId, this.state.battleId);
	}

	locationOnChanged(event) {
		this.setState({ locationId: event.target.value });
		this.getBattleInformation(event.target.value, this.state.battleId);
	}

	battleOnChanged(event) {
		this.setState({ battleId: event.target.value });
		this.getBattleInformation(this.state.locationId, event.target.value);
	}

	getBattleInformation(locationId, battleId) {
		let postBody = {
			LocationId: locationId,
			BattleId: battleId
		};
		let postOptions = {
			method: "POST",
			body: JSON.stringify(postBody),
			headers: { "Content-Type": "application/json" }
		}

		Api.fetchData(BOSSSTATS_ENDPOINT,
			data => this.setState({ bossStats: data }),
			postOptions)
	}

	render() {
		return (
			<section>
				<Dropdown
					title="Battles"
					items={this.state.battles}
					onValueChanged={this.battleOnChanged}
					defaultValue={0} />
				<Dropdown
					title="Locations"
					items={this.state.locations}
					onValueChanged={this.locationOnChanged}
					defaultValue={1}
				/>
				<BattleInformation battleInfo={this.state.bossStats} />
			</section>
		)
	}
}

export default BossStats;
