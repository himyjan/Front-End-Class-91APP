import styled from "styled-components";
import mediaQuery from "./mediaQuery";
import Footer from "../Footer";

const FooterStyledComponents = styled(Footer)`
  .bottom-nav-bar-desktop {
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

  .bottom-nav-bar-desktop-box {
    display: flex;
    margin-right: 101px;
  }

  .bottom-nav-bar-desktop-about {
    cursor: pointer;
    width: 134px;
    height: 22px;
    font-size: 16px;
    color: #f5f5f5;
    text-align: center;
    line-height: 22px;
    border-right: 1px solid #828282;
  }

  .bottom-nav-bar-desktop-service-terms {
    cursor: pointer;
    width: 134px;
    height: 22px;
    font-size: 16px;
    color: #f5f5f5;
    text-align: center;
    line-height: 22px;
    border-right: 1px solid #828282;
  }

  .bottom-nav-bar-desktop-privacy-policy {
    cursor: pointer;
    width: 134px;
    height: 22px;
    font-size: 16px;
    color: #f5f5f5;
    text-align: center;
    line-height: 22px;
    border-right: 1px solid #828282;
  }

  .bottom-nav-bar-desktop-contact-us {
    cursor: pointer;
    width: 134px;
    height: 22px;
    font-size: 16px;
    color: #f5f5f5;
    text-align: center;
    line-height: 22px;
    border-right: 1px solid #828282;
  }

  .bottom-nav-bar-desktop-frequently-asked-questions {
    cursor: pointer;
    width: 134px;
    height: 22px;
    font-size: 16px;
    color: #f5f5f5;
    text-align: center;
    line-height: 22px;
    border-right: 1px solid #82828200;
  }

  .bottom-nav-bar-desktop-social-media-links {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bottom-nav-bar-desktop-social-media-links {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bottom-nav-bar-desktop-line-image-box {
    cursor: pointer;
    width: 50px;
    height: 50px;
    margin-right: 30px;
  }

  .bottom-nav-bar-desktop-twitter-image-box {
    cursor: pointer;
    width: 50px;
    height: 50px;
    margin-right: 30px;
  }

  .bottom-nav-bar-desktop-facebook-image-box {
    cursor: pointer;
    width: 50px;
    height: 50px;
    margin-right: 30px;
  }

  .bottom-nav-bar-desktop-line-image {
    width: 100%;
    height: 100%;
  }

  .bottom-nav-bar-desktop-twitter-image {
    width: 100%;
    height: 100%;
  }

  .bottom-nav-bar-desktop-facebook-image {
    width: 100%;
    height: 100%;
  }

  .bottom-nav-bar-desktop-all-rights-reserved {
    font-size: 12px;
    color: #828282;
    line-height: 17px;
    text-align: center;
  }

  .bottom-nav-bar-mobile {
    ${mediaQuery("mobile")`
      display: block;
      z-index: 10;
      width: 100%;
      background-color: #313538;
    `}
    ${mediaQuery("desktop")`
      display: none;
    `}
  }

  .bottom-nav-bar-mobile-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 360px;
    margin: 0 auto;
    padding-top: 23px;
  }

  .bottom-nav-bar-mobile-contactlist {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
  }

  .bottom-nav-bar-mobile-links-part1 {
    margin-left: 40px;
    margin-right: 36px;
  }

  .bottom-nav-bar-mobile-links-part2 {
    margin-right: 31px;
  }

  .bottom-nav-bar-mobile-about {
    font-size: 14px;
    color: #d3d3d3;
    line-height: 20px;
    margin-bottom: 8px;
  }

  .bottom-nav-bar-mobile-service-terms {
    font-size: 14px;
    color: #d3d3d3;
    line-height: 20px;
    margin-bottom: 8px;
  }

  .bottom-nav-bar-mobile-privacy-policy {
    font-size: 14px;
    color: #d3d3d3;
    line-height: 20px;
    margin-bottom: 13px;
  }

  .bottom-nav-bar-mobile-contact-us {
    font-size: 14px;
    color: #d3d3d3;
    line-height: 20px;
    margin-bottom: 8px;
  }

  .bottom-nav-bar-mobile-frequently-asked-questions {
    font-size: 14px;
    color: #d3d3d3;
    line-height: 20px;
    margin-bottom: 41px;
  }

  .bottom-nav-bar-mobile-social-media-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 51px;
  }

  .bottom-nav-bar-mobile-line-image-box {
    width: 20px;
    height: 20px;
    margin-right: 14px;
  }

  .bottom-nav-bar-mobile-twitter-image-box {
    width: 20px;
    height: 20px;
    margin-right: 14px;
  }

  .bottom-nav-bar-mobile-facebook-image-box {
    width: 20px;
    height: 20px;
    margin-right: 14px;
  }

  .bottom-nav-bar-mobile-line-image {
    width: 100%;
    height: 100%;
  }

  .bottom-nav-bar-mobile-twitter-image {
    width: 100%;
    height: 100%;
  }

  .bottom-nav-bar-mobile-facebook-image {
    width: 100%;
    height: 100%;
  }

  .bottom-nav-bar-mobile-all-rights-reserved {
    font-size: 10px;
    color: #828282;
    line-height: 14px;
    text-align: center;
    margin: 13px auto 80px auto;
  }

  .bottom-nav-bar-mobile-stick {
    ${mediaQuery("mobile")`
      z-index: 10;
      position: fixed;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 60px;
      bottom: 0;
      background-color: #313538;
    `}
    ${mediaQuery("desktop")`
      display: none;
    `}
  }

  .bottom-nav-bar-mobile-stick-cart {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 24px;
    border-right: 1px solid #828282;
  }

  .bottom-nav-bar-mobile-stick-shopping-cart {
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .bottom-nav-bar-mobile-stick-shopping-cart-text {
    font-size: 16px;
    color: #ffffff;
    line-height: 16px;
    text-align: center;
  }

  .bottom-nav-bar-mobile-stick-shopping-cart-notification-numbers {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    top: 45%;
    left: 21%;
    background-color: #8b572a;
    border-radius: 50%;
    color: #ffffff;
    font-size: 16px;
    line-height: 24px;
  }

  .bottom-nav-bar-mobile-stick-shopping-cart-notification-animation {
    display: inline-flex;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    opacity: 0.75;
    background: #8b572a;

    animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;

    @keyframes ping {
      75%,
      100% {
        transform: scale(2);
        opacity: 0;
      }
    }
  }

  .bottom-nav-bar-mobile-stick-shopping-profile {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 24px;
  }

  .bottom-nav-bar-mobile-stick-shopping-profile-text {
    font-size: 16px;
    color: #ffffff;
    line-height: 16px;
    text-align: center;
  }
`;

export default FooterStyledComponents;
