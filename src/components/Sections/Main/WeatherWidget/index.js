import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import useGeoPosition from 'hooks/useGeoPosition';
import { fetch } from 'redux/Weather/Weather.actions';
import { FaCloudSunRain } from 'react-icons/fa';
import { Widget } from 'components/Layout';

const convertKelvinsToCelcius = temp => (temp - 273.15).toFixed();

const FlexWrapper = styled.div`
  display: flex;
`;
const IconWrapper = styled.div`
  color: ${({ theme }) => theme.lightGrey};
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WeatherTemp = styled.p`
  font-size: 21px;
  font-weight: 700;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

const WeatherWidget = () => {
  const store = useSelector(({ WeatherReducer }) => WeatherReducer);
  const { position } = useGeoPosition();
  const dispatch = useDispatch();

  const [data, setData] = useState();
  useEffect(() => {
    if (Object.getOwnPropertyNames(position).length !== 0) {
      dispatch(fetch(position));
    }
  }, [position]);

  useEffect(() => {
    if (store.data) {
      setData(store.data.data.main);
    }
  }, [store.data]);

  console.log(store.data);

  return (
    <Widget width={150}>
      <FlexWrapper>
        <IconWrapper>
          <FaCloudSunRain />
        </IconWrapper>
        <WeatherTemp>{data && convertKelvinsToCelcius(data.temp)}°</WeatherTemp>
      </FlexWrapper>
    </Widget>
  );
};

export default WeatherWidget;
