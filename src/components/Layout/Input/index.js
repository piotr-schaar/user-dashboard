import styled from 'styled-components';

const Input = styled.input`
  padding: 10px 15px;
  font-size: 15px;
  font-weight: 400;
  margin: 5px 0;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.green};
`;

export default Input;
