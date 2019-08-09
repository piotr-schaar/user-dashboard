import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito:300,400,700&display=swap');
  
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    font-size: 62.5%; 
  }
  
  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-family: 'Nunito', sans-serif;
  }
  .tab-list {
  border-bottom: 1px solid #ccc;
  padding-left: 0;
}

.tab-list-item {
  display: inline-block;
  list-style: none;
  margin-bottom: -1px;
  padding: 0.5rem 0.75rem;
}

.tab-list-active {
  background-color: white;
  border: solid #ccc;
  border-width: 1px 1px 0 1px;
}
`;

export default GlobalStyle;
