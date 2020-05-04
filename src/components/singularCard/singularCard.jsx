import React, { useState, useEffect } from 'react';
import { fetchBigs } from '../../api';

import style from './singularCard.module.css';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

const SingularCard = ({country}) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchBigs(country));
        }

        fetchAPI();
    }, [country]);

    if(!fetchedCountries.confirmed){
        return 'Loading';
    }

    return(
            <Grid item component={Card} xs={9} sm={2} xm={2} className={style.card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom >
                        {country}
                    </Typography>
                    <hr className={style.lineShadow} />

                    <Typography className={style.textContainer} >
                    <span>Confirmed: </span>                    
                    <CountUp 
                        start={0}
                        end={fetchedCountries.confirmed.value}
                        duration={2}
                        separator=","
                    />
                    </Typography>
                    <Typography className={style.textContainer}>
                    <span>Recovered: </span>     
                    <CountUp 
                        start={0}
                        end={fetchedCountries.recovered.value}
                        duration={2}
                        separator=","
                    />
                    </Typography>
                    <Typography className={style.textContainer}>
                    <span>Deaths: </span>     
                    <CountUp 
                        start={0}
                        end={fetchedCountries.deaths.value}
                        duration={2}
                        separator=","
                    />
                    </Typography>
                </CardContent>
            </Grid>
    );
}

export default SingularCard;