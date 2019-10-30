import React from 'react';
import { useSelector } from 'react-redux';
import useChartData from 'hooks/useChartsData';
import { Card } from 'components/Layout';
import Chart from './Chart';

const Statistics = () => {
  const contactsList = useSelector(({ ContactsReducer }) => ContactsReducer.contacts);
  const cityData = useChartData(contactsList, 'city');

  return (
    <Card>
      <Chart data={cityData} type="pie" />
    </Card>
  );
};

export default Statistics;
