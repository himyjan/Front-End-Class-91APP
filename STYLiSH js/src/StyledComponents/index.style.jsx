import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  @import url('https://fonts.googleapis.com/css?family=Noto Sans TC');
  font-family: 'Noto Sans TC';
  font-style: normal;
}
`;

export default GlobalStyle;
