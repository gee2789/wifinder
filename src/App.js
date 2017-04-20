import React, { Component } from 'react';
import logo from './logo.svg';
import Map from './components/google-map'
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      lat: null,
      long:null,
      zoom: 16,
      wifis: []
    }
  }

  componentWillMount(){
    axios.get('https://data.cityofnewyork.us/api/views/jd4g-ks2z/rows.json?accessType=DOWNLOAD')
    .then((response)=> {
      this.setState({wifis: response.data.data})
    })
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        lat: position.coords.latitude,
        long: position.coords.longitude
      })
    })
  }

  render() {
    let stuff
    if(!!(this.state.lat && this.state.long)){
      stuff = <Map lat={this.state.lat} long={this.state.long} zoom={this.state.zoom} wifis={this.state.wifis} />
    }else{
      stuff = <h1>LOADING BITCHES</h1>
    }
    return (
      <div className="App">
        {stuff}
      </div>

    );
  }
}

export default App;
