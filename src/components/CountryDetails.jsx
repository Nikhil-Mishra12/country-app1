import React, { useEffect, useState } from 'react'
import '../CountryDetail.css'
import { Link, useLocation, useParams ,useOutletContext} from 'react-router-dom'

import { usetheme } from '../hooks/usetheme'

export default function CountryDetails() {
 //const[isdark]=useOutletContext()
   const [isdark]=usetheme()
   const params=useParams()
   //console.log(params);
   const {state}=useLocation();
   //or console.log(location.state)
   //console.log(state);
   const countryName=params.country;
  
    const [countryData,setcountryData]=useState(null)
   

   function updatecountrydata(data){
    setcountryData({
                name:data.name.common,
                nativeName:Object.values(data.name.nativeName  ||  {})[0].common,
                population:data.population,
                region:data.region,
                subregion: data.subregion,
                capital:data.capital,
                flag:data.flags.svg,
                tld: data.tld,
                
                currencies: Object.values(data.currencies || {}).map((currency) =>currency.name).join(','),
                languages:Object.values(data.languages || {}).join(','),
                borders:[]
            }) 
            
            Promise.all(data.borders.map((border)=>{
              return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
              .then((res) =>res.json())
              .then(([bordercountry]) =>bordercountry.name.common)
            })).then((borders) =>{
              //console.log(borders);
              setcountryData((prevState) =>({...prevState,borders}))
            })
        }

    
    useEffect(()=>{
      if(state){
     updatecountrydata(state)
     return
      }
        fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
        .then((res) =>res.json())
        .then(([data]) =>{
            //console.log(data)
            updatecountrydata(data)
        })
    },[countryName])
  return countryData===null ? ('loading'):

  (
    
    <main className={`${isdark? "dark" : ''}`}>
    
      <div className="country-details-container">
        <span className="back-button" onClick={() =>history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.flag} alt={`${countryData.name} flag`} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p><b>Native Name: {countryData.nativeName || countryData.name}
                 </b><span className="native-name"></span></p>
              <p><b>Population:{countryData.population.toLocaleString('en-IN')} </b>
              <span className="population"></span></p>
              <p><b>Region: {countryData.region}</b><span className="region"></span></p>
              <p><b>Sub Region:{countryData.subregion}</b><span className="sub-region"></span></p>
              <p><b>Capital: {countryData.capital?.join(', ')}</b><span className="capital"></span></p>
              <p>
                <b>Top Level Domain: {countryData.tld}</b><span className="top-level-domain"></span>
              </p>
              <p><b>Currencies:{countryData.currencies} </b><span className="currencies"></span></p>
              <p><b>Languages: {countryData.languages}</b><span className="languages"></span></p>
            </div>
             <div className="border-countries">
              <b>Border Countries:{
               countryData. borders.map((border) => <Link  key={border} to={`/${border}`}>{border}</Link>)
                } </b>&nbsp;</div>
          </div>
        </div>
      </div>
    </main>
  )
}
