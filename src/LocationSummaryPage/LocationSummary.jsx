import React from 'react';
import SummaryData from './SummaryData';
import Utils from '../Utils/Utils';

const LocationSummary = () => (
  <table className='table-auto border-collapse text-2xl mx-auto'>
    <thead>
      <tr >
        <th rowSpan="2"></th>
        <th rowSpan="2" className='text-center align-bottom pl-3 pr-3'>HP</th>
        <th rowSpan="2" className='text-center align-bottom pl-3 pr-3'>Speed</th>
        <th rowSpan="2" className='text-center align-bottom pl-3 pr-3'>DKC Max</th>
        <th colspan="2" className='text-center'>Tornado Form</th>
        <th rowspan="2" className='text-center align-bottom pl-3 pr-3'>Atk</th>
        <th rowspan="2" className='text-center align-bottom pl-3 pr-3'>Def</th>
        <th rowspan="2" className='text-center align-bottom pl-3 pr-3'>Mg Atk</th>
      </tr>
      <tr>
        <th className='text-center pl-3 pr-3'>Def</th>
        <th className='text-center pl-3 pr-3'>Mg Def</th>
      </tr>
    </thead>
    <tbody>
      {SummaryData.map(data =>
        <tr key={data.location} className=' odd:bg-slate-200'>
          <td className='text-left font-semibold pr-3 pl-3 border border-slate-700' >{data.location}</td>
          <td className='text-right pr-3 pl-3 border border-slate-700'>{data.hitPoints}</td>
          <td className='text-right pr-3 pl-3 border border-slate-700'>{Utils.formatSpeed(data)}</td>
          <td className='text-right pr-3 pl-3 border border-slate-700'>{Utils.darkWaveMax(data)}</td>
          <td className='text-right pr-3 pl-3 border border-slate-700'>{data.valDefense}</td>
          <td className='text-right pr-3 pl-3 border border-slate-700'>{data.valMagicDef}</td>
          <td className='text-right pr-3 pl-3 border border-slate-700'>{Utils.formatAttack(data)}</td>
          <td className='text-right pr-3 pl-3 border border-slate-700'>{data.defense}</td>
          <td className='text-right pr-3 pl-3 border border-slate-700'>{data.spellPower}</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default LocationSummary;