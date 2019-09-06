import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { filterListByType as filterListByTypeAction } from 'redux/Contacts/Contacts.actions';
import Card from 'components/Card';
import Heading from 'components/Heading';
import Switch from '../../../SwitchInput';
import Select from '../../../Select';

const MainWrapper = styled.div``;

const SwitchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Filters = () => {
  const [availableCities, setAvailableCties] = useState([]);
  const [cityValue, setCityValue] = useState(String);

  const store = useSelector(({ ContactsReducer }) => ContactsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    let cities = store.contacts.map(item => item.city);
    cities = cities.reduce(
      (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
      [],
    );
    setAvailableCties(cities);
    dispatch(filterListByTypeAction('cities', cityValue));
  }, [store.contacts, cityValue]);

  const handleChange = e => {
    setCityValue(e.target.value);
    dispatch(filterListByTypeAction('cities', cityValue));
  };

  return (
    <Card>
      <Heading small>Filters</Heading>
      <MainWrapper>
        <SwitchWrapper>
          <p>Alphabetic order</p>
          <Switch value="alphabeticAZ" />
        </SwitchWrapper>
        <SwitchWrapper>
          <p>Cities</p>
          {cityValue}
          <Select
            value={cityValue}
            name="city"
            options={availableCities}
            handleChange={handleChange}
          />
        </SwitchWrapper>
        <SwitchWrapper>
          <p>Mens</p>
          <Switch value="Mens" />
        </SwitchWrapper>
      </MainWrapper>
    </Card>
  );
};

export default Filters;
