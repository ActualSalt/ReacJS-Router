import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

//Fetch data for summary data
export const fetchData = async (country) => {
    let changeableUrl = url;

    if (country) {
        changeableUrl = `${url}/countries/${country}`;
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);
        //return specfic data 
        //const modifiedData = {confirmed, recovered, deaths, lastUpdate};
        // lastUpdate: data.lastUpdate
        return {confirmed, recovered, deaths, lastUpdate};
    } catch (error) {
        console.log(error);
    }
}

