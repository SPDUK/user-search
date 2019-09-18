import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';

class App extends Component {
  state = {
    search: '',
    users: [],
    posts: [],
    loading: true,
    currentUser: undefined,
  };

  async componentDidMount() {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    this.setState({
      users: data,
      loading: false,
    });
  }

  handleSearchChange = ({ id }) => {
    this.setState({ currentUser: id });
  };

  handleSearchSubmit = e => {
    e.preventDefault();
    console.log(this.state.search);
  };

  render() {
    const { loading, users, posts, search, currentUser } = this.state;
    console.log(users);
    return (
      <div className="App">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Navbar
            handleSearchSubmit={this.handleSearchSubmit}
            handleSearchChange={this.handleSearchChange}
            users={users}
          />
        )}
      </div>
    );
  }
}

export default App;
