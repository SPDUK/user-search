import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';

class App extends Component {
  state = {
    search: '',
    posts: [],
  };

  handleSearchChange = e => this.setState({ search: e.target.value });

  handleSearchSubmit = e => {
    e.preventDefault();
    console.log(this.state.search);
  };

  render() {
    return (
      <div className="App">
        <Navbar
          handleSearchSubmit={this.handleSearchSubmit}
          handleSearchChange={this.handleSearchChange}
        />
      </div>
    );
  }
}

export default App;
