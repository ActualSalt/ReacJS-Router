import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function CountryMap() {
  //State control
  useEffect(() => {
    fetchItems();
  },[]);

  //state declaration for an array
  const [countries, setCountries] = useState([]);

  const fetchItems = async () =>{
    //API declaration
    const data = await fetch('https://api.covid19api.com/countries');
    const items = await data.json();
    
    console.log(items);
    setCountries(items);
  }
    
  return (
    <div>
      <h1>Country</h1>
      {countries.map(countries => (
        <h3 key={countries.Slug+'_'+countries.ISO2}>
          <Link to={`/CountryMap/${countries.Country}`}>{countries.Country}</Link>
        </h3>
      ))}
    </div>
  );
}

export default CountryMap;
