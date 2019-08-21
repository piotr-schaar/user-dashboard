import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import useSelectOptions from 'hooks/useSelectOptions';
import Card from 'components/Card';
import Heading from 'components/Heading';
import Switch from '../../../SwitchInput';

const MainWrapper = styled.div``;

const SwitchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Fitlers = ({ contacts }) => {
  const [availableCities, setAvailableCties] = useState([]);
  const [city, citySelect] = useSelectOptions('', availableCities);
  useEffect(() => {}, [contacts]);
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
          <select name="city">
            <option>Poznań</option>
            <option>Wrocław</option>
          </select>
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

export default connect(mapStateToProps)(Fitlers);
