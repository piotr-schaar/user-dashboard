import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import ReactMinimalPieChart from 'react-minimal-pie-chart';

const getRandomColor = () => {
  const colors = ['#98FB98'];
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
  const [currentlyShowedCity, setCurrentlyShowedCity] = useState('');
  const [cities, setCities] = useState([]);

  useEffect(() => {
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

    setCities(citiesCounter);
  }, [contactsList]);

  const ChartWrapper = styled.div`
    position: relative;
    height: 100%;
    p {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
    }
  `;

  const onMouseOver = (event, propsData, index) => {
    setCurrentlyShowedCity(propsData[index].title);
    const arrayWithSelectedItem = propsData.map((entry, i) => {
      return i === index
        ? {
            ...entry,
            color: 'grey',
          }
        : entry;
    });

    setCities(arrayWithSelectedItem);
  };

  const onMouseOut = (event, propsData, index) => {
    const data = propsData.map((entry, i) => {
      return i === index
        ? {
            ...entry,
            color: '#98FB98',
          }
        : entry;
    });
    setCurrentlyShowedCity('');
    setCities(data);
  };

  console.log(cities);
  return (
    <ReactMinimalPieChart
      data={getUnique(cities)}
      segmentsStyle={{ position: 'relative', transition: 'stroke .3s' }}
      lineWidth={15}
      paddingAngle={5}
      onClick={onMouseOut}
      onMouseOut={onMouseOut}
      onBlur={onMouseOut}
      onMouseOver={onMouseOver}
      onFocus={onMouseOver}
    >
      <ChartWrapper>
        <p>{currentlyShowedCity}</p>
      </ChartWrapper>
    </ReactMinimalPieChart>
  );
};

export default Chart;
