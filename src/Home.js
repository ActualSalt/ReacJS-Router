import React, {useState, useEffect} from 'react';
import './App.css';

function Home() {
  //State control
  useEffect(() => {
    fetchItems();
  },[]);

  const [summaryUpdate, setSummaryUpdate] = useState([]);

  const fetchItems = async () =>{
    //API declaration
    const data = await fetch('https://api.covid19api.com/summary');
    
    const items = await data.json();
    console.log(items.Global);
    setSummaryUpdate(items.Global);
  }

  return (
    <div>
        <h1 class="summary">New Confirmed: {summaryUpdate.NewConfirmed}</h1>
        <h1 class="summary">Total Cofirmed: {summaryUpdate.TotalConfirmed}</h1>
        <h1 class="summary">New Deaths: {summaryUpdate.NewDeaths}</h1>
        <h1 class="summary">Total Deaths: {summaryUpdate.TotalDeaths}</h1>
        <h1 class="summary">New Recovered: {summaryUpdate.NewRecovered}</h1>
        <h1 class="summary">Total Recovered: {summaryUpdate.TotalRecovered}</h1>
    </div>
  );
}

export default Home;
