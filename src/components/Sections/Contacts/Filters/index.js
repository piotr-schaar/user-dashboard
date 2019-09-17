import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { filterListByType } from 'redux/Contacts/Contacts.actions';
import Card from 'components/Layout/Card';
import Heading from 'components/Layout/Heading';
import Switch from '../../../SwitchInput';
import Select from '../../../Select';

const MainWrapper = styled.div``;

const SwitchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const filtersTypes = {
  byAlphabetic: 'byAlphabetic',
  byCities: 'byCities',
  byGender: 'byGender',
};

const Filters = () => {
  const store = useSelector(({ ContactsReducer }) => ContactsReducer);

  const dispatch = useDispatch();

  const [availableCities, setAvailableCties] = useState(['none']);
  const [cityValue, setCityValue] = useState(String);
  const [activeFilter, setActiveFilter] = useState({
    isActive: false,
    filtersTypes: null,
  });

  useEffect(() => {
    let cities = store.contacts.map(item => item.city);
    cities = cities.reduce(
      (newArr, item) => (newArr.includes(item) ? newArr : [...newArr, item]),
      [],
    );
    setAvailableCties(availableCities.concat(cities));
  }, [store.contacts]);

  const filterDispatch = (filter, value) =>
    activeFilter.isActive ? dispatch(filterListByType(filter, value)) : null;

  const handleChange = e =>
    activeFilter.isActive
      ? (setCityValue(e.target.value), filterDispatch(activeFilter.filtersTypes, e.target.value))
      : null;

  const filterToggle = e => {
    setActiveFilter({
      isActive: !activeFilter.isActive,
      filtersTypes: filtersTypes[e.target.name],
    });

    return activeFilter.isActive ? filterDispatch(activeFilter.filtersTypes, cityValue) : null;
  };
  return (
    <Card>
      <Heading small>Filters</Heading>
      {cityValue}
      {activeFilter.filtersTypes}
      <MainWrapper>
        <SwitchWrapper>
          <p>Alphabetic order</p>
          <Switch value="alphabetic" />
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
          <Switch value={filtersTypes.byCities} handleChange={filterToggle} />
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
