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
    console.log(items.Countries['1']);
    setCountries(items.Country);
  }

  return (
    <div>
      {countries}
    </div>
  );
}

export default Shop;
