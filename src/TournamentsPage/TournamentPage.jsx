import React, { Component } from 'react';
import Api from '../Api/Api';
import TournamentSummary from './TournamentSummary';
import Registrant from './Registrant';

const TOURNAMENTS_ENDPOINT = "tournament"


class TournamentPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tournaments: [],
            tournamentRegistrants: [],
        }

    }

    componentDidMount() {
        Api.fetchData(
            TOURNAMENTS_ENDPOINT,
            data => this.setState({ tournaments: data })
        )
        document.title = 'Tournaments'
    }

    setTournamentId = (tournamentId) => {
        const TOURNAMENT_REGISTRANTS_ENDPOINT = `tournament/${tournamentId}/registrants`
        Api.fetchData(
            TOURNAMENT_REGISTRANTS_ENDPOINT,
            data => this.setState({ tournamentRegistrants: data })
        );
    }

    render() {
        return (
            <article className='mx-auto'>
                {this.state.tournaments.map(tournament =>
                    <TournamentSummary key={tournament.tournamentId} tournament={tournament} setTournamentId={this.setTournamentId} />
                )}
                <section>
                    {this.state.tournamentRegistrants.map(registrant => <Registrant key={registrant.discordName} registrant={registrant} />)}
                </section>
            </article>
        )
    }
}

export default TournamentPage;
