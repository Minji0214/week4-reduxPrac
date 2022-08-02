import axios from "axios"
import { useEffect } from "react"

const Weather=()=>{
    const API_KEY = "284a0d0bdb7c4230736e803dfb140293"
    const url =`http://api.openweathermap.org/data/2.5/weather?q=Seoul&?units=metric&APPID=${API_KEY}`
   

useEffect(()=>{
axios.get(url)
.then((response)=>{console.log(response)})
},[])


    return(
    <div>
        오늘의 날씨
    </div>
)
}
export default Weather