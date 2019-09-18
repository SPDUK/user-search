import React from 'react';

const PostTable = ({ comments }) => {
  // not really sure what this is supposed to be or how to calculate the percentage exactly :(
  // would use flat but doesn't work in some browsers and no time to figure out polyfill
  const countWords = (acc, cur) => {
    // if word is in comment, add 1
    // find out percentage by  comments.length / count ?
    for (const word of cur) {
      acc[word] = acc[word] + 1 || 1;
    }
    return acc;
  };

  const allWords = comments
    .map(({ body }) => body.split(' '))
    .reduce(countWords, {});

  const topPercentages = words => {
    const topWords = [];
    const keys = Object.keys(words);
    for (const key of keys) {
      topWords.push([key, ((100 * words[key]) / keys.length).toFixed(1)]);
    }
    // sort by percentage, highest first
    // only return first 10 results
    return topWords.sort((a, b) => b[1] - a[1]).slice(0, 10);
  };

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
        <tbody>{topPercentages(allWords).map(createTopWord)}</tbody>
      </table>
    </div>
  );
};

export default PostTable;
