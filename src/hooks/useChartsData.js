import { useState, useEffect } from 'react';

const getRandomColor = () => {
  const colors = ['#98FB98', '#8a9a5b', '00ab6b', '#90C183'];
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

const reduceArrayWithObjItem = (arr, value) =>
  arr.reduce((newArr, item) => [...newArr, item[value]], []);

const useChartData = (arr, type) => {
  const reduceArrayToType = reduceArrayWithObjItem(arr, type);
  const [collection, setCollection] = useState([]);
  const [data, setData] = useState({});
  
  useEffect(() => {
    const reduceArrayToChartModel = reduceArrayToType.reduce(
      (newArr, item) => [
        ...newArr,
        {
          title: item,
          value: howManyTimesInArray(item, reduceArrayToType),
          color: getRandomColor(),
        },
      ],
      [],
    );
    setCollection(getUnique(reduceArrayToChartModel));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arr]);

  useEffect(() => {
    const labels = reduceArrayWithObjItem(collection, 'title');
    const values = reduceArrayWithObjItem(collection, 'value');
    const labelsColors = reduceArrayWithObjItem(collection, 'color');

    setData({
      labels,
      datasets: [
        {
          data: values,
          backgroundColor: labelsColors,
          hoverBackgroundColor: labelsColors,
        },
      ],
    });
  }, [collection]);

  return data;
};

export default useChartData;
