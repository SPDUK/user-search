import React from 'react';
import PostTable from './PostTable';
import PostChart from './PostChart';

const PostInfo = ({ comments }) => {
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
    // could also use Object.entries here
    const topWords = [];
    const keys = Object.keys(words);
    for (const key of keys) {
      topWords.push([key, ((100 * words[key]) / keys.length).toFixed(1)]);
    }
    // sort by percentage, highest first
    // only return first 10 results
    return topWords.sort((a, b) => b[1] - a[1]).slice(0, 10);
  };

  // for table - use all words in comments ?
  // chart = just top 10 words ? confused

  const chartWords = Object.entries(allWords)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  return (
    <div className="post-info">
      <PostTable topPercentages={topPercentages(allWords)} />
      <PostChart chartWords={chartWords} />
    </div>
  );
};

export default PostInfo;
