import styled from 'styled-components';

const Card = styled.div`
  padding: ${({ padding }) => (padding ? `${padding}px` : '20px')};
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export default Card;
