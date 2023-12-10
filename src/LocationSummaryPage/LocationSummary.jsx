import React from 'react';
import SummaryData from './SummaryData';
import Utils from '../Utils/Utils';

const LocationSummary = () => (

  <table className='border-collapse text-xl mx-auto mb-10'>
    <caption className='caption-bottom pt-2'>
      All stats listed use Bahamut's stats. Individual enemies in multi-enemy fights will have different values. 
    </caption>
    <thead>
      <tr>
        <th rowSpan="2" className=''></th>
        <th rowSpan="2" className='text-center align-bottom px-2'>HP</th>
        <th rowSpan="2" className='text-center align-bottom px-2'>Speed</th>
        <th rowSpan="2" className='text-center align-bottom px-2'><img src='/img/Cecil1-Dark2.gif' height='25' width='25' className=' inline-block' /> Max</th>
        <th colSpan="2" className='text-center'>Tornado Form</th>
        <th rowSpan="2" className='text-center align-bottom px-2'>Atk</th>
        <th rowSpan="2" className='text-center align-bottom px-2'>Def</th>
        <th rowSpan="2" className='text-center align-bottom px-2'>M.Atk</th>
      </tr>
      <tr>
        <th className='text-center px-2'>Def</th>
        <th className='text-center px-2'>M.Def</th>
      </tr>
    </thead>
    <tbody>
      {SummaryData.map(data =>
        <tr key={data.location} className=' odd:bg-slate-200 even: bg-slate-300'>
          <td className='text-left font-semibold px-2 pt-1 border border-gray-300' >{data.location}</td>
          <td className='text-right px-2 pt-1 border border-gray-300'>{data.hitPoints}</td>
          <td className='text-right px-2 pt-1 border border-gray-300'>{Utils.formatSpeed(data)}</td>
          <td className='text-right px-2 pt-1 border border-gray-300'>{Utils.darkWaveMax(data)}</td>
          <td className='text-right px-2 pt-1 border border-gray-300'>{data.valDefense}</td>
          <td className='text-right px-2 pt-1 border border-gray-300'>{data.valMagicDef}</td>
          <td className='text-right px-2 pt-1 border border-gray-300'>{Utils.formatAttack(data)}</td>
          <td className='text-right px-2 pt-1 border border-gray-300'>{data.defense}</td>
          <td className='text-right px-2 pt-1 border border-gray-300'>{data.spellPower}</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default LocationSummary;