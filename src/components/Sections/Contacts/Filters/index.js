import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { filterListByType } from 'redux/Contacts/Contacts.actions';
import Card from 'components/Layout/Card';
import Heading from 'components/Layout/Heading';
import Switch from '../../../SwitchInput';
import Select from '../../../Select';
import useCitiesList from '../../../../hooks/useCitiesList';

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

  const cities = useCitiesList(store.contacts);
  console.log('TCL: Filters -> cities', cities);
  const [cityValue, setCityValue] = useState(String);

  const [activeFilter, setActiveFilter] = useState({
    isActive: false,
    filtersTypes: null,
  });

  const filterDispatch = (filter, value, isUpdate) =>
    activeFilter.isActive && dispatch(filterListByType(filter, value, isUpdate));

  useEffect(() => {
    const checkIsFiltering = store.isFiltered ? store.isFiltered : false;
    filterDispatch(activeFilter.filtersTypes, cityValue, checkIsFiltering);
  }, [cityValue]);

  const cityChangeHandler = e => activeFilter.isActive && setCityValue(e.target.value);

  const filterToggle = e => {
    setActiveFilter({
      isActive: !activeFilter.isActive,
      filtersTypes: filtersTypes[e.target.name],
    });
  };

  return (
    <Card>
      <Heading small>Filters</Heading>
      <MainWrapper>
        <SwitchWrapper>
          <p>Cities</p>
          {cities && (
            <Select
              value={cityValue}
              name="city"
              options={cities}
              handleChange={cityChangeHandler}
            />
          )}

          <Switch value={filtersTypes.byCities} handleChange={filterToggle} />
        </SwitchWrapper>
      </MainWrapper>
    </Card>
  );
};

export default Filters;
