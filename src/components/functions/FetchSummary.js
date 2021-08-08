import axios from "axios";

export const fetchSummary = async ()=>{
    try{
        const data = await axios.get(`https://api.covid19api.com/summary`)
        console.log(data.data);
        return data.data
    }
    catch(err){
        console.log(err);
    }

}
