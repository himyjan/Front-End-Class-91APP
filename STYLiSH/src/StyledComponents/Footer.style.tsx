import styled from "styled-components";
import mediaQuery from "./mediaQuery";
import Footer from "../Footer";

const FooterStyledComponents = styled(Footer)`
  .bottom-nav-bar-desktop-box {
    ${mediaQuery("mobile")`
      display: none;
    `}
    ${mediaQuery("desktop")`
      display: flex;
      z-index: 10;
    `}
  }
`;

export default FooterStyledComponents;
