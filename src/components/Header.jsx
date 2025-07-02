
import { usetheme } from "../hooks/usetheme"

export default function Header() {
  const[isdark,setisdark]=usetheme()
 // console.log(ThemeContext)
  
  // if(isdark){
  //   document.body.classList.add('dark')
  // }
  // else{
  //   document.body.classList.remove('dark')
  // }
  return (
    <header className={`header-container ${isdark? 'dark' :''}`}>
        <div className="header-content">
            <h2 className="title">
                <a href="/">Where in the world? </a>
            </h2>
            <p className="theme-changer" onClick={()=>{
              
              setisdark(!isdark)
              localStorage.setItem('isdarkMode',!isdark)
            }}>
                <i className={`fa-solid fa-${isdark? "sun" :"moon"}`}></i>
                &nbsp;&nbsp;{isdark ? "Light":"Dark"} Mode
            </p>
        </div>
    </header>
  )
}
