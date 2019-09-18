import React from 'react';
import Chartist from 'react-chartist';

const options = {
  reverseData: true,
  horizontalBars: true,
};

const createData = words => {
  const labels = words.map(([word, _]) => word);
  const series = words.map(([_, count]) => count);
  return {
    labels,
    series: [series],
  };
};

const PostChart = ({ chartWords }) => (
  <div className="post-chart">
    <h1>Count of Top 10 Words</h1>
    <Chartist
      className="ct-chart"
      data={createData(chartWords)}
      options={options}
      type="Bar"
    />
  </div>
);
export default PostChart;
