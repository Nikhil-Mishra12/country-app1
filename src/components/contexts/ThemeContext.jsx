import { createContext } from "react";
import { useState } from "react";

 export const ThemeContext=createContext()

  export function ThemeProvider({children}){
    //console.log(children)
    const [isdark,setisdark]=useState(JSON.parse(localStorage.getItem('isdarkMode')))
       
    return <ThemeContext.Provider value={[isdark,setisdark]}>{children}
    </ThemeContext.Provider>
  
    
 }