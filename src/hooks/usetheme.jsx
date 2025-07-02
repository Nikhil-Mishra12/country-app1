import { useContext } from "react";
import { ThemeContext } from "../components/contexts/ThemeContext";

export function usetheme(){
    const [isdark,setisdark]=useContext(ThemeContext)
    return [isdark,setisdark]
}

// or
// export function usetheme(){
//      return useContext(ThemeContext)
    
// }