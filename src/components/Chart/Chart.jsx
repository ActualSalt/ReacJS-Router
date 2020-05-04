import React, { useState, useEffect } from 'react';
import {fetchDailyData} from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import style from './Chart.module.css';

const Chart = ({ data: { confirmed, deaths, recovered } , country}) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(()=> {
        const fetchAPI = async ()=>{
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    }, []);

    const lineChart = (
        //If dailyData is available, return chart
        dailyData.length
            ? (
        //Data is an object {{}}
        <Line 
            data={{
            labels: dailyData.map(({ date }) => date),
            datasets: [{
                data: dailyData.map(({ confirmed }) =>  confirmed),
                label: 'Infected',
                borderColor: 'red',
                fill: true,
            }, {
                data: dailyData.map(({ deaths }) =>  deaths),
                label: 'Deaths',
                borderColor: 'black',
                backgroundColor: 'rgba(0, 0, 0, .5)',
                fill: true,
            }],
            }} 
        />
        //Else
        ) : null
    );
    //bar chart 
    const barChar = (
        confirmed
        ?(
            <Bar
                data={{
                    labels: ['Infects', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['rgba(255, 0, 0, 0.5)',
                            'rgba(0,255,0, .5)',
                            'rgba(0, 0, 0, 0.5)'],
                            data: [confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options={{
                    legend: {display: false},
                    title: {display: true, text: `Current state in ${country}`},
                }}
            />
        ):null
    );
    return (
        <div className={style.container}>
            {country ? barChar : lineChart}
        </div>
    )
}

export default Chart;