import styled from 'styled-components';

const Form = styled.form`
  width: ${({ width }) => width && `${width}px`};
  height: ${({ height }) => height && `${height}px`};
`;

export default Form;
