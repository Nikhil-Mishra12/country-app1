import React from 'react'

export default function SelectMenu({setquery}) {
  return (
   <select className='filter-by-region' onChange={(e) =>setquery(e.target.value.toLowerCase())}>
    <option hidden>Filter by region</option>
    <option value="Africa">Africa</option>
    <option value="Americas">America</option>
    <option value="Asia">Asia</option>
    <option value="Europe">Europe</option>
    <option value="Oceania">Oceania</option>
   </select>
  )
}
