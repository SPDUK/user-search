import React from 'react';

const PostTable = ({ topPercentages }) => {
  const createTopWord = ([word, percent]) => (
    <tr key={word}>
      <td>{word}</td>
      <td>{percent}</td>
    </tr>
  );
  return (
    <div className="post-table">
      <table className="table is-responsive">
        <thead>
          <tr>
            <th>Word</th>
            <th>% of all comments</th>
          </tr>
        </thead>
        <tbody>{topPercentages.map(createTopWord)}</tbody>
      </table>
    </div>
  );
};

export default PostTable;
