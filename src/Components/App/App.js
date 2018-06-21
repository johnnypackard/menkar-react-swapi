import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import PlanetList from '../PlanetList/PlanetList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planet: {},
      planetList: [],
    }
  }

  componentDidMount() {
    console.log('App component mounted');
    const url = 'https://swapi.co/api/planets/?format=json'
    this.getPlanets(url);
  }

  async getPlanets(url) {
    let nextUrl = url;
    while (nextUrl != null) {
      await axios.get(nextUrl)
        .then((response) => {
          console.log( 'Got more planets', response.data.results );
          this.setState({ planetList: 
            [...this.state.planetList, ...response.data.results]
          } );
          nextUrl = response.data.next;
          console.log( 'The next URL is:', nextUrl );
        })
        .catch( ( error ) => {
          console.log( 'Error getting more planets', error )
          nextUrl = null;
      })
    }
  }

  render() {
    console.log( 'PlanetList:', this.state.planetList );
    return (
      <div className="App">
        <Header />
        <PlanetList planetList={this.state.planetList}/>
      </div>
    )
  }
}


export default App;
