import React, {useState, useEffect} from 'react';
import './App.css';

//Receive match data from the previous page
function CountryDetail({match}) {
    //State control
    useEffect(() => {
        fetchCountryDetail();
        console.log(match);
    }, []);

    //Match string cleanse
    const matchString = match.params.countryName;

    //state declaration for a parameter
    const [countryDetail, setCountryDetail] = useState([]);

    const fetchCountryDetail = async () => {
        const data = await fetch(
            `https://api.covid19api.com/live/country/${matchString}/status/confirmed`);
        const items = await data.json();
        
        //Check of empty data. 
        //If the data has no value, it is less than 0 
        let n = items.length-1;
        if(0>n){
            console.log("Invalid Data");
            console.log("output: "+ items[n]);
        }else{
            console.log("Valid Data");
            console.log(n);
            setCountryDetail(items[n]);
        }
    }

    //Output 
    return (
        <div>
            <h1>{countryDetail.Country === undefined &&
            "Data Not Available"}</h1>
            <h1>{countryDetail.Country}</h1>
            <h3>Confirmed: {countryDetail.Confirmed}</h3>
            <h3>Deaths: {countryDetail.Deaths}</h3>
            <h3>Recovered: {countryDetail.Recovered}</h3>
            <h3>Active: {countryDetail.Active}</h3>
        </div>
    );
}

export default CountryDetail;
