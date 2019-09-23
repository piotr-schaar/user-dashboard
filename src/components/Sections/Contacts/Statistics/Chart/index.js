import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

const Chart = ({ data, type }) => {
  const renderCharts = () => {
    switch (type) {
      case 'pie':
        return <Doughnut data={data} />;
      default:
        return <p>ni ma</p>;
    }
  };

  return <>{renderCharts()}</>;
};

Chart.propTypes = {
  data: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

export default Chart;
