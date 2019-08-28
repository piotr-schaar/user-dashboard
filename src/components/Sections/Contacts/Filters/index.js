import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { filterListByType } from 'actions/ContactsActions';
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
      (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
      [],
    );
    setAvailableCties(availableCities.concat(cities));
  }, [store.contacts]);

  const filterDispatch = (filter, value) =>
    activeFilter.isActive ? dispatch(filterListByType(filter, value)) : null;

  const handleChange = e => {
    if (activeFilter.isActive) {
      setCityValue(e.target.value);
      filterDispatch(activeFilter.filtersTypes, e.target.value);
    } else {
      return null;
    }
  };
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
