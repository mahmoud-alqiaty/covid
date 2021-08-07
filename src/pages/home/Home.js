import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const headers = 
  {
    "Authorization": 
    "Bearer 5954192-Lr0ma2vvgF34aPWMmAibWlam2YxVTuWb2CPqY7MVTr",
    'Content-Type' : 'application/x-www-form-urlencoded; application/json',
    'Access-Control-Allow-Origin' : '*',
  }
const key = `7cf9d5d72c3f9e916b1516a56477a9bd`
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${key}`,
    })
    .then(res=>{
      res = res
      console.log("res: ", res);
    })
    .catch(err=>{
      console.log("err: ", err);
    })
  }, [])

  return (
    <div>
      home
    </div>
  )
}

export default Home
