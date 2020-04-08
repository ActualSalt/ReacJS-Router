import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
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
          <Route path="/shop" component={Shop}/>
        </Switch>
      </div>
    </BRouter>
  );
}

const Home = () =>(
  <div>
    <h1>Home</h1>
  </div>
);

export default App;
