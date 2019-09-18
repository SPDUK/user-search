import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import PostInfo from './components/PostInfo';

class App extends Component {
  state = {
    users: [],
    posts: [],
    comments: [],
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
      const posts = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${currentUser}`
      );
      const comments = await axios.get(
        `http://jsonplaceholder.typicode.com/comments?postId=${currentUser}`
      );

      this.setState({
        posts: posts.data,
        comments: comments.data,
      });
    } catch (err) {
      this.setState({
        error: 'No such user',
      });
    }
  };

  render() {
    const { loading, users, posts, comments, error } = this.state;
    return (
      <>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <Navbar
              handleSearchSubmit={this.handleSearchSubmit}
              handleSearchChange={this.handleSearchChange}
              users={users}
            />
            <div className="columns mt-1">
              {posts.length > 1 && (
                <PostList className="column is-half" posts={posts} />
              )}
              {comments.length > 1 && (
                <PostInfo className="column is-half" comments={comments} />
              )}
            </div>
          </>
        )}
        {error || null}
      </>
    );
  }
}

export default App;
