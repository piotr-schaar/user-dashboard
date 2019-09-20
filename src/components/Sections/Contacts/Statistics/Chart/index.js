import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ReactMinimalPieChart from 'react-minimal-pie-chart';

const getRandomColor = () => {
  const colors = ['#98FB98', '#8FBC8F', '#ADFF2F'];
  const newColor = colors[Math.floor(Math.random() * colors.length)];
  return newColor;
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

const howManyTimesInArray = (value, arr) => arr.filter(i => i === value).length;

const Chart = () => {
  const contactsList = useSelector(({ ContactsReducer }) => ContactsReducer.contacts);
  const reduceContactsToCities = contactsList.reduce((newArr, item) => [...newArr, item.city], []);

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

  const test = (event, propsData, index) => {};

  return (
    <>
      <ReactMinimalPieChart
        data={getUnique(citiesCounter)}
        lineWidth={10}
        paddingAngle={5}
        animate
        onClick={test}
      />
    </>
  );
};

export default Chart;
