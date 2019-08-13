import styled, { css } from 'styled-components';

const Heading = styled.h2`
  color: ${({ theme, color }) => (color ? theme[color] : 'black')};
  font-size: ${({ theme, big }) => (big ? theme.fontSize.xl : theme.fontSize.l)};
  font-weight: ${({ theme }) => theme.bold};
  ${({ small }) =>
    small &&
    css`
      font-size: 15px;
    `}
`;

export default Heading;
