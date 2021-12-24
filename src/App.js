import React, { Component } from 'react';

import { CardList } from './components/CardList/CardList'

import { SearchBox } from './components/SearchBox/SearchBox'

import './App.css';

class App extends Component {

  constructor () {
    super();

    this.state = {
        monsters : [],
        searchFields : ''
    };
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }

  handleChange = e => {
    this.setState({ searchFields : e.target.value })
  };

  render() {

    const { monsters, searchFields } = this.state;

    const filterMonsters = monsters.filter( 
      monster => monster.name.toLowerCase().includes(searchFields.toLowerCase()) 
    ); 

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox 
            placeholder='Search monsters'
            handleChange={this.handleChange}
        />
       { !filterMonsters.length ? <h1>No Data</h1> : <CardList monsters={filterMonsters} />  }
      </div>
    )
  }
}

export default App;