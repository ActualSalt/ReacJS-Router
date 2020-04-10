import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

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

        console.log(items.length);
        const n = items.length-1;
        setCountryDetail(items[n]);
    }
    
    return (
        <div>
            <h1>{countryDetail.Country}</h1>
            <h3>Confirmed: {countryDetail.Confirmed}</h3>
            <h3>Deaths: {countryDetail.Deaths}</h3>
            <h3>Recovered: {countryDetail.Recovered}</h3>
            <h3>Actice: {countryDetail.Active}</h3>
        </div>
    );
}

export default CountryDetail;
