import React from 'react';
import { useSelector } from 'react-redux';
import Card from 'components/Layout/Card';
import Chart from './Chart';
import useChartData from '../../../../hooks/useChartsData';

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
