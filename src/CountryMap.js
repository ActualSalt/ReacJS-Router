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
    const data = await fetch('https://api.covid19api.com/summary');
    const items = await data.json();
    setCountries(items.Countries);
  }

  
  return (
    <div>
      <h1>Country</h1>
      {countries.map(countries => (
        <div className="itemBox">
          <h3 key={countries.Slug+'_'+countries.CountryCode}>
            <Link to={`/CountryMap/${countries.Slug}`}
            className="mapItem">
              {countries.Country}
            </Link>
          </h3>
        </div>
      ))}
    </div>
  );
}

export default CountryMap;
