import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import useGeoPosition from 'hooks/useGeoPosition';
import { fetch } from 'redux/Weather/Weather.actions';
import { FaCloudSunRain } from 'react-icons/fa';

const convertKelvinsToCelcius = temp => (temp - 273.15).toFixed();

const WidgetWrapper = styled.div`
  width: 200px;
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.greenOpacity};
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  p {
    font-weight: 700;
    font-size: 20px;
  }
`;

const IconWrapper = styled.div`
  color: ${({ theme }) => theme.lightGrey};
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WeatherWidget = () => {
  const store = useSelector(({ WeatherReducer }) => WeatherReducer);
  const { position, error } = useGeoPosition();
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
  }, [store]);

  return (
    <WidgetWrapper>
      <IconWrapper>
        <FaCloudSunRain />
      </IconWrapper>
      <p>{data && convertKelvinsToCelcius(data.temp)}°</p>
    </WidgetWrapper>
  );
};

export default WeatherWidget;
