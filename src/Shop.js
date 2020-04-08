import React, {useState, useEffect} from 'react';
import './App.css';

function Shop() {
  //State control
  useEffect(() => {
    fetchItems();
  },[]);

  const [countries, setCountries] = useState([]);

  const fetchItems = async () =>{
    //API declaration
    const data = await fetch('https://api.covid19api.com/summary');
    
    const items = await data.json();
    const n = 0;

    
    console.log(items.Countries[0]);
    setCountries(items.Countries[0]);
  }

  return (
    <div>
      {countries.Country}
    </div>
  );
}

export default Shop;
