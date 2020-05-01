import React from 'react';
import { fetchData } from './api';
import './App.css';
import style from './App.module.css';
import {Nav, Cards, Chart, CountryPicker } from './components';
import {BrowserRouter as BRouter, Switch, Route} from 'react-router-dom';


import about from './pages/About';


//Route renders out compoment based on URL 

class App extends React.Component{
    //Constructor not needed
    state = {
      data: {},
      country: '',
  }

    //put async in front since it is a built in function
    async componentDidMount() {
      const data = await fetchData();

      this.setState({ data });
  }

  //Change state of the country variable 
  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render(){
    const { data, country } = this.state;

    return (
      <BRouter>
        <div className="App"> 
          <Nav />
          <Switch>
            <Route path="/" exact >
              <Cards data={data} />
              <div className={style.container}>
                <Chart data={data} country={country} />        
              </div>
            </Route>
            
            <Route path="/about" component={about} />

            <Route path="/countryPickerPage" >
              <Cards data={data} />
              <div className={style.container}>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
              </div>
              <div className={style.container}>
                <Chart data={data} country={country} />        
              </div>
            </Route>
          </Switch>

        </div>
      </BRouter>
    );

  }
}

export default App;
