import styled from 'styled-components';

const Input = styled.input`
  padding: 10px 15px;
  font-size: 15px;
  font-weight: 400;
  margin: 5px 0;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.greenOpacity};
`;

export default Input;
