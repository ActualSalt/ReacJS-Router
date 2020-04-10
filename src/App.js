import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import CountryMap from './CountryMap';
import Home from './Home';
import CountryDetail from './CountryDetail';
import {BrowserRouter as BRouter, Switch, Route} from 'react-router-dom';
//Route renders out compoment based on URL 

function App() {
  return (
    <BRouter>
      <div className="App"> 
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/CountryMap" exact component={CountryMap}/>
          <Route path="/CountryMap/:countryName" component={CountryDetail}/>
        </Switch>
      </div>
    </BRouter>
  );
}

export default App;
