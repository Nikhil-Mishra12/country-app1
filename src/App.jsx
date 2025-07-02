
import './App.css';
import Header from './components/Header'
import {Outlet} from 'react-router-dom'

import {  ThemeProvider } from './components/contexts/ThemeContext';


const App = () => {
 
   
  return (
    
   /* <Header theme={[isdark,setisdark]} />  for understanding purpose*/ 
   <ThemeProvider >
    <Header  />
   <Outlet />
   </ThemeProvider>
     
  )
}
export default App