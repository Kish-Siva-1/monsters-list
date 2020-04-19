import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.js';
import { SearchBox } from './components/search-box/search-box.js';
import './App.css';

class App extends Component {

  constructor() {
    super(); //calls the constructor method on the component class (ie allows us to access values in constructor via this.state)

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const{ monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox  
          placeholder = 'Search monsters'
          handleChange = {this.handleChange}
        />
        <br />
        <br />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

}

export default App;