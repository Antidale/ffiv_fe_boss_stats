import React from 'react';

const TournamentSummary = ({ tournament, setTournamentId }) => (
    <section>
        <h2>{tournament.tournamentName}</h2>
        <p>Entrants: {tournament.entrantCount}</p>
        <p>Server: {tournament.guildName}</p>
        <button onClick={() => setTournamentId(tournament.tournamentId)}>Click!</button>
    </section>
);

export default TournamentSummary;