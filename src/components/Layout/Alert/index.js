import styled from 'styled-components';

const Alert = styled.div`
  margin: 10px 0;
  border-radius: 15px;
  padding: 15px;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.s};

  background-color: ${({ type, theme }) => theme[type]};
`;

export default Alert;
