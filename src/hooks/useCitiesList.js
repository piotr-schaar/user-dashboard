import { useState, useEffect } from 'react';

const useCitiesList = contacts => {
  const [availableCities, setAvailableCties] = useState(['none']);
  useEffect(() => {
    let cities = contacts.map(item => item.city);
    cities = cities.reduce(
      (newArr, item) => (newArr.includes(item) ? newArr : [...newArr, item]),
      [],
    );
    setAvailableCties(cities);
  }, [contacts]);

  return availableCities;
};

export default useCitiesList;
