import React, { Component } from 'react';

class PostList extends Component {
  createPost = ({ title, body }) => (
    <div key={body} className="card">
      <div className="card-content">
        <h4 className="title is-5">{title}</h4>
        <p className="subtitle is-6">{body}</p>
      </div>
    </div>
  );

  render() {
    const { posts } = this.props;
    return <div className="post-list">{posts.map(this.createPost)}</div>;
  }
}

export default PostList;
