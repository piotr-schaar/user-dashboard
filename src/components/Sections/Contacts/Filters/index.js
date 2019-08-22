import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { filterListByType as filterListByTypeAction } from 'actions/ContactsActions';
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

const Filters = ({ contacts, filterListByType }) => {
  const [availableCities, setAvailableCties] = useState([]);
  const [cityValue, setCityValue] = useState(String);

  useEffect(() => {
    let cities = contacts.map(item => item.city);
    cities = cities.reduce(
      (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
      [],
    );
    setAvailableCties(cities);
    filterListByType('cities', cityValue);
  }, [contacts, cityValue]);

  const handleChange = e => {
    setCityValue(e.target.value);
    filterListByType('cities', cityValue);
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

const mapStateToProps = ({ ContactsReducer }) => ContactsReducer;
const mapDispatchToProps = dispatch => ({
  filterListByType: (type, value) => dispatch(filterListByTypeAction(type, value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filters);
