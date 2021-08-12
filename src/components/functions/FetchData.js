import axios from "axios";

const url = `https://api.covid19api.com`

export const fetchsummary = async ()=>{
    try {
        const {data: {Global, Countries}} = await axios.get(`${url}/summary`)
        return {Global, Countries}
    } catch (error) {
        console.log(error);
    }
}

export const fetchSingleCountry = async (country)=>{
    try {
        const {data} = await axios.get(`${url}/total/country/${country}`)

        const reversedData = data.reverse()
        const lastRecovedDay = reversedData.find(item => item.Recovered !== 0)
        
        const lastTotal = {
            confirmed: data[0].Confirmed,
            deaths: data[0].Deaths,
            active: data[0].Active,
            recovered: lastRecovedDay.Recovered,
        }

        const lastDay = {
            confirmed: data[0].Confirmed - data[1].Confirmed,
            deaths: data[0].Deaths - data[1].Deaths,
            active: data[0].Active,
            recovered: data[0].recovered- data[1].recovered,
            date: data[0].date,
        }

        return {lastTotal, lastDay}


        // console.log("res", lastTotal); 
    } catch (error) {
        console.log(error);
    }
}