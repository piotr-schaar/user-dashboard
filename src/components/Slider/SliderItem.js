import React from 'react';

import styled from 'styled-components';

const Img = styled.img`
  width: 160px;
`;
const SliderItem = ({ movie: { poster_path } }) => {
  return (
    <h1>
      <Img
        src={
          poster_path === null
            ? 'http://via.placeholder.com/300x450'
            : `https://image.tmdb.org/t/p/w300/${poster_path}`
        }
        alt="1"
      />
    </h1>
  );
};

export default SliderItem;
