import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import PostList from './components/PostList';

class App extends Component {
  state = {
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
      error: '',
    });
  }

  handleSearchChange = ({ value }) => {
    this.setState({ currentUser: value });
  };

  handleSearchSubmit = async e => {
    e.preventDefault();
    const { currentUser } = this.state;

    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${currentUser}`
      );

      this.setState({
        posts: data,
      });
    } catch (err) {
      this.setState({
        error: 'No such user',
      });
    }
  };

  render() {
    const { loading, users, posts, error } = this.state;
    return (
      <div className="App">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <Navbar
              handleSearchSubmit={this.handleSearchSubmit}
              handleSearchChange={this.handleSearchChange}
              users={users}
            />
            <PostList posts={posts} />
          </>
        )}
        {error || null}
      </div>
    );
  }
}

export default App;
