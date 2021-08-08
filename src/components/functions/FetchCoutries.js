import axios from "axios";

export const fetcchCountries = async ()=>{
    try{
        const data = await  axios.get(`https://api.covid19api.com/countries`)
        console.log(data);
        return data.data
    }
    catch(err){
        console.log(err);
    }

}
