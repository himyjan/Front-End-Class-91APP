import styled from "styled-components";
import mediaQuery from "./mediaQuery";
import Header from "../Header";

const HeaderStyledComponents = styled(Header)`
  .top-nav {
  }

  .top-nav-bar-box {
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
    ${mediaQuery("mobile")`
        height: 102px;
    `}
    ${mediaQuery("desktop")`
        height: 140px;
    `}
  }

  .top-nav-bar-website-logo-link {
    cursor: pointer;
  }
`;

export default HeaderStyledComponents;
