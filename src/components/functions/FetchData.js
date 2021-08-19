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
            recovered: data[0].Recovered- data[1].Recovered,
            date: new Date(data[0].Date).toDateString(),
        }

        const lastTenDays = []

        for(let i=9; i>=0; i--){
            const oneDay = {
                confirmed: data[i].Confirmed - data[i+1].Confirmed,
                deaths: data[i].Deaths - data[i+1].Deaths,
                date: new Date(data[i].Date).toDateString()
            }
            lastTenDays.push(oneDay) 
        }

        let months_2020 = []
        let months_2021 = []
      
        const days2020 = data.filter(item => new Date(item.Date).getFullYear() === 2020)
        const days2021 = data.filter(item => new Date(item.Date).getFullYear() === 2021)

        let prvTotal = {
            Confirmed: 0,
            Deaths: 0,
        }

        for(let i=0; i<12; i++){
            const oneMonth = days2020.filter(day=> new Date(day.Date).getMonth() === i)
            const reversedOneMonth = oneMonth.reverse()
            let final = []

            const firstDay = {
                confirmed: reversedOneMonth[0].Confirmed - prvTotal.Confirmed,
                deaths: reversedOneMonth[0].Deaths - prvTotal.Deaths,
                date: new Date(reversedOneMonth[0].Date).toDateString()
            }
            final.push(firstDay)

            for(let j=1; j<reversedOneMonth.length; j++){
                const oneDay = {
                    confirmed: reversedOneMonth[j].Confirmed - reversedOneMonth[j-1].Confirmed,
                    deaths: reversedOneMonth[j].Deaths - reversedOneMonth[j-1].Deaths,
                    date: new Date(reversedOneMonth[j].Date).toDateString()
                }
                final.push(oneDay)
            }
            
            prvTotal.Confirmed = reversedOneMonth[reversedOneMonth.length-1].Confirmed
            prvTotal.Deaths = reversedOneMonth[reversedOneMonth.length-1].Deaths

            final.length && months_2020.push(final)
        }

        const currentMonth = new Date().getMonth()

        for(let i=0; i<currentMonth; i++){
            const oneMonth = days2021.filter(day=> new Date(day.Date).getMonth() === i)
            const reversedOneMonth = oneMonth.reverse()
            let final = []

            const firstDay = {
                confirmed: reversedOneMonth[0].Confirmed - prvTotal.Confirmed,
                deaths: reversedOneMonth[0].Deaths - prvTotal.Deaths,
                date: new Date(reversedOneMonth[0].Date).toDateString()
            }
            final.push(firstDay)

            for(let j=1; j<reversedOneMonth.length; j++){
                const oneDay = {
                    confirmed: reversedOneMonth[j].Confirmed - reversedOneMonth[j-1].Confirmed,
                    deaths: reversedOneMonth[j].Deaths - reversedOneMonth[j-1].Deaths,
                    date: new Date(reversedOneMonth[j].Date).toDateString()
                }
                final.push(oneDay)
            }
            
            prvTotal.Confirmed = reversedOneMonth[reversedOneMonth.length-1].Confirmed
            prvTotal.Deaths = reversedOneMonth[reversedOneMonth.length-1].Deaths

            final.length && months_2021.push(final)
        }

        const months_2020_total = months_2020.map(item =>
        {
            let confirmed = 0
            let deaths = 0
            for(let i=0; i<item.length; i++){
                confirmed = confirmed + item[i].confirmed
                deaths = deaths + item[i].deaths
            }
            return {confirmed, deaths}
        })


        const months_2021_total = months_2021.map(item =>
        {
            let confirmed = 0
            let deaths = 0
            for(let i=0; i<item.length; i++){
                confirmed = confirmed + item[i].confirmed
                deaths = deaths + item[i].deaths
            }
            return {confirmed, deaths}
        })

        return {
            lastTotal, 
            lastDay, 
            lastTenDays, 
            months_2020, 
            months_2021,
            months_2020_total,
            months_2021_total,
        }

    } catch (error) {
        console.log(error);
    }
}

