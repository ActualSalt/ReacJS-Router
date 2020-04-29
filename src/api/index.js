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

//Fetch data for the daily data from the past to present
export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));

        return (modifiedData);
    } catch (error) {
        console.log(error);
    }
}

//Fetch data of a specfic country
export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }
}