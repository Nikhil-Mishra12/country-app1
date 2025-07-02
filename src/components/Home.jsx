import { useContext,  useState } from 'react';
import '../App.css';
import CountriesList from './CountriesList';
import Searchbar from './Searchbar';
import SelectMenu from './SelectMenu';
//import { useOutletContext } from 'react-router-dom';
//import { ThemeContext } from './contexts/ThemeContext';
import { usetheme } from '../hooks/usetheme';
//import { useWindowsize } from '../hooks/Usewindowsize';


export default function Home() {
  //const [isdark]=useContext(ThemeContext)
  // or use this
  const[isdark]=usetheme()
  const[query,setquery]=useState("")
  //console.log(isdark)
  //console.log(ThemeContext)
  //const[isdark]=useOutletContext()
  
  //const windowsize=useWindowsize()
  
  return (
   <main className={`${isdark ? 'dark':''}`}>
       <div className="search-filter-container">
     <Searchbar setquery={setquery}/>
     <SelectMenu setquery={setquery}/>
      </div>
      {/* <h1>{windowsize.width}x{windowsize.height}</h1> */ }
      < CountriesList searchtext={query} />
      
      
     </main>
     
  )
}
