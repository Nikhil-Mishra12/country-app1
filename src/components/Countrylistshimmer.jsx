import './CountrylistShimmer.css'

// const array=new Array(10);
// console.log(array) give empty array

const mapped=Array.from({length:10}).map((el,index) =>{
    return <div  key={index} className="country-card shimmer-card"></div>
})
                    
export default function Countrylistshimmer() {
  return (
    <div className='countries-container'>
        {
            mapped
        }
        
    </div>
  )
}
