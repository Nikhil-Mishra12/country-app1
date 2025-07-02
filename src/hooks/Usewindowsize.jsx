import { useEffect, useState } from "react"

export function useWindowsize(){
    const[windowsize,setwindowsize]=useState({
    width:window.innerWidth,
    height:window.innerHeight,

  })
  
    
    
    useEffect(() =>{
   window.addEventListener('resize',()=>{
    setwindowsize({
      width:window.innerWidth,
      height:window.innerHeight}
    )
   })
    },[])
    return windowsize
}