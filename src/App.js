import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
   
   const apiKey = '716be0c454fe89d3a79806dcb4a68008'
   const [city , setCity] = useState("")
  const [data, setData] = useState({})
   
  const getWeatherDetails = (cityName) => {
    // if (!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiURL).then((res)=> {
      console.log("response",res.data)
      setData(res.data);
    }).catch((err)=> {
      console.log("error",err)
    })
  }

  useEffect(() => {
    getWeatherDetails("delhi")
  }, [])

  const handleInputCity = (e) => {
   setCity(e.target.value)
  }
  
  const handleSearch = () => {
    getWeatherDetails(city)
  }
  
  return (
    <div className='col-md-12'>
      <div className='WeatherBG'>
       <h1 className='heading-1'>Weather App</h1> <br/>
       <br/>
       <div className='d-grid mt-4 col-4 gap-3'>
        <input className='form-control' type='text' value={city} onChange={handleInputCity}/>
       <button className='btn btn-success' type='button' onClick={handleSearch}>Search</button>
       </div>
      </div>
      <div className='col-md-12 text-center mt-5'>
        <div className='shadow rounded Weatherbox '>
          <img className='image-2' src='https://tse1.mm.bing.net/th?id=OIP.KOhzhOJQ4AHmN25RM2zFbAHaFP&pid=Api&P=0'/>
          <h5 className='weather-city'>{data?.name}</h5>
          <h6 className='weather-temp'>{((data?.main?.temp)- 273.15).toFixed(2)}℃</h6>

        </div>

      </div>
    </div>
  )
}


export default App;
