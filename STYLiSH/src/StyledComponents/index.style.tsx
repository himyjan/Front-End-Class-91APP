import styled from "styled-components";
import mediaQuery from "./mediaQuery";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,body {
  margin: 0;
  @import url('https://fonts.googleapis.com/css?family=Noto Sans TC');
  font-family: 'Noto Sans TC';
  font-style: normal;
}
`;

export default GlobalStyle;
