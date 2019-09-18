import React, { Component } from 'react';
import PostTable from './PostTable';

export default class PostInfo extends Component {
  // for table - use all words in comments
  // chart = just top 10 words
  render() {
    const { comments } = this.props;
    return (
      <div className="post-info">
        <PostTable comments={comments} />
      </div>
    );
  }
}
