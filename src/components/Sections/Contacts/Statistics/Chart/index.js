import React from 'react';
import ReactMinimalPieChart from 'react-minimal-pie-chart';
import { useSelector } from 'react-redux';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const getUnique = arr => {
  const seen = new Set();
  const filteredArr = arr.filter(element => {
    const duplicate = seen.has(element.title);
    seen.add(element.title);
    return !duplicate;
  });
  return filteredArr;
};

const Chart = () => {
  const contactsList = useSelector(({ ContactsReducer }) => ContactsReducer.contacts);
  const reduceContactsToCities = contactsList.reduce((newArr, item) => [...newArr, item.city], []);

  const howManyTimesInArray = (value, arr) => arr.filter(i => i === value).length;

  const citiesCounter = reduceContactsToCities.reduce(
    (newArr, item) => [
      ...newArr,
      {
        title: item,
        value: howManyTimesInArray(item, reduceContactsToCities),
        color: getRandomColor(),
      },
    ],
    [],
  );

  console.log(getUnique(citiesCounter));
  return (
    <ReactMinimalPieChart data={getUnique(citiesCounter)} lineWidth={15} paddingAngle={5} label />
  );
};

export default Chart;
