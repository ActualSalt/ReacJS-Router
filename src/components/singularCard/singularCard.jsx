import React, { useState, useEffect } from 'react';
import { fetchBigs } from '../../api';

import style from './singularCard.module.css';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';


const SingularCard = ({country}) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchBigs(country));
        }

        fetchAPI();
    }, [setFetchedCountries]);

    if(!fetchedCountries.confirmed){
        return 'Loading';
    }

    return(
        <div className={style.container}>
            <p>{country}</p>
            <p>{fetchedCountries.confirmed.value}</p>
            <p>{fetchedCountries.recovered.value}</p>
            <p>{fetchedCountries.deaths.value}</p>
        </div>
    );
}

export default SingularCard;