import styled from 'styled-components';

const Input = styled.input`
  padding: 15px 30px;
  font-size: 15px;
  font-weight: 400;
  background-color: grey;
  border: none;
  border-radius: 50px;
  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: white;
  }
`;

export default Input;
