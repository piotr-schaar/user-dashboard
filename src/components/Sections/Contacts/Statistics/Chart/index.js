import React from 'react';
import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';

const Chart = ({ data }) => {
  return (
    <>
      <Doughnut data={data} />
    </>
  );
};

export default Chart;
