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
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 115px;
      margin: 0 auto;
      background-color:#313538;
    `}
  }

  .bottom-nav-bar-desktop-links {
    display: flex;
    margin-right: 101px;
  }

  .bottom-nav-bar-desktop-info-about {
    cursor: pointer;
    width: 134px;
    height: 22px;
    font-size: 16px;
    color: #f5f5f5;
    line-height: 22px;
    border-right: 1px solid #828282;
  }

  .bottom-nav-bar-desktop-info-service-terms {
    cursor: pointer;
    width: 134px;
    height: 22px;
    font-size: 16px;
    color: #f5f5f5;
    line-height: 22px;
    border-right: 1px solid #828282;
  }

  .bottom-nav-bar-desktop-info-privacy-policy {
    cursor: pointer;
    width: 134px;
    height: 22px;
    font-size: 16px;
    color: #f5f5f5;
    line-height: 22px;
    border-right: 1px solid #828282;
  }
`;

export default FooterStyledComponents;
