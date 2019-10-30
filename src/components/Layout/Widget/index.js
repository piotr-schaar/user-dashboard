import styled from 'styled-components';

const WidgetStyled = styled.div`
  padding: 20px;
  border: 2px solid ${({ theme }) => theme.greenOpacity};
  border-radius: 20px;
`;

export default WidgetStyled;
