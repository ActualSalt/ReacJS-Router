import React from 'react';
import { fetchData} from './api';
import './App.css';
import style from './App.module.css';
import {Nav, Cards, Chart, CountryPicker, SingularCard } from './components';
import {BrowserRouter as BRouter, Switch, Route} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';


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

  //Big country specific data 

  //Change state of the country variable 
  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render(){
    const { data, country } = this.state;
    console.log(data);
    console.log(country);
    return (
      <BRouter>
        <div className="App"> 
          <Nav />
          <Switch>
            <Route path="/" exact >
              <h2>COVID-19 Tracker</h2>
              <div className={style.cardContainer}>
                <Grid container spacing={3} justify="center" >
                    <SingularCard country="USA" /> 
                    <SingularCard country="China" /> 
                    <SingularCard country="Korea, South" />
                </Grid>
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
