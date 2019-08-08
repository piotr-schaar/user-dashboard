import styled from 'styled-components';

const Input = styled.input`
  padding: 10px 15px;
  font-size: 15px;
  font-weight: 400;
  position: relative;
  border: none;
  border-bottom: ${({ theme }) => `2px solid ${theme.blue}`};
`;

export default Input;
