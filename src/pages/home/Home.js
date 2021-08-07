import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const headers = 
  {
    'Content-Type' : 'application/x-www-form-urlencoded; application/json',
    'Access-Control-Allow-Origin' : '*',
  }

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://api.covidtracking.com/v1/status.json",
      headers: headers
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
