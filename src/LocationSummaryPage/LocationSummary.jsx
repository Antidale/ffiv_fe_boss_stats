import React from 'react';
import SummaryData from './SummaryData';
import Utils from '../Utils/Utils';

const LocationSummary = () => (
  <table>
    <thead>
      <tr>
        <th></th>
        <th>HP</th>
        <th>Speed</th>
        <th>DKC Max</th>
        <th>Val Evade</th>
        <th>Val Mg Def</th>
        <th>Attack</th>
        <th>Defense</th>
        <th>Mg Atk</th>
        <th>Mg Def</th>
      </tr>
    </thead>
    <tbody>
      {SummaryData.map(data =>
        <tr key={data.location}>
          <td>{data.location}</td>
          <td>{data.hitPoints}</td>
          <td>{Utils.formatSpeed(data)}</td>
          <td>{Utils.darkWaveMax(data)}</td>
          <td>{data.valEvade}</td>
          <td>{data.valMagicDef}</td>
          <td>{Utils.formatAttack(data)}</td>
          <td>{data.defense}</td>
          <td>{data.spellPower}</td>
          <td>{data.magicDefense}</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default LocationSummary;