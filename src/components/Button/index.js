import styled from 'styled-components';
import theme from 'theme/MainTheme';

const Button = styled.button`
  background: ${({ theme }) => theme.blue};
  border: none;
  color: white;
  text-transform: lowercase;
  font-weight: 600;
  padding: 10px 5px;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export default Button;
