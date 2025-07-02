import { useEffect, useState } from 'react';
import Countrycard from './Countrycard';
import Countrylistshimmer from './Countrylistshimmer';

    
  

  
export default function CountriesList({searchtext}) {
   const [countriesData,setcountriesData]=useState([])
  //  const [count,setcount]=useState(0)
   

  useEffect(()=> {
fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,currencies,languages,area,borders,subregion')
     .then((res) =>res.json())
     .then((data) =>{
       setcountriesData(data);
       })

       //only fo understanding purpose
      //  const intervalid=setInterval(() => {
      //   console.log('runing countrieslist component')
      //  }, 1000);
      //  return () =>{
      //   clearInterval(intervalid)
      //  }
  },[])


   // only for understanding purpose
  // useEffect(() =>{
  //   console.log('hii')
  // },[count,countriesData])

    
  if(countriesData.length===0){
   return <Countrylistshimmer />
  }
    
   
  return (
    <>
    

    {/* <h1>{count}</h1> for understanding purpose
    <button onClick={() =>setcount(count+1)}>Increase count</button> */}


 <div className="countries-container">
{
    countriesData
    .filter((country) =>country.name.common.toLowerCase().includes(searchtext) || country.region.toLowerCase().includes(searchtext))
    .map((country) =>{
        return  <Countrycard name={country.name.common} 
      key={country.name.common}
      flag={country.flags.svg}
       pop={country.population}
       region={country.region}
       capital={country.capital}
       data={country}
       />
}
)
}
 </div>
 </>
  )}

