import styled from "styled-components";
import mediaQuery from "./mediaQuery";
import Header from "../Header";

const HeaderStyledComponents = styled(Header)`
  .top-nav {
    margin: 0;
    position: fixed;
    top: 0;
    z-index: 10;
    width: 100%;
    ${mediaQuery("mobile")`
      height: 102px;
    `}
    ${mediaQuery("desktop")`
      height: 140px;
    `}
  }

  .top-nav-bar-box {
    display: flex;
    background-color: #ffffff;
    ${mediaQuery("mobile")`
      justify-content: center;
      align-items: center;
      height: 52px;
    `}
    ${mediaQuery("desktop")`
      flex-direction: row;
      justify-content: start;
      align-items: center;
      height: 100px;
    `}
  }

  .top-nav-bar-website-logo {
    cursor: pointer;
    ${mediaQuery("mobile")`
      width: 129px;
      height: 24px;
    `}
    ${mediaQuery("desktop")`
      width: 258px;
      height: 48px;
      margin-left: 60px;
    `}
  }

  .top-nav-bar-desktop-women-dresses {
    ${mediaQuery("mobile")`
        display: none;
    `}
    ${mediaQuery("desktop")`
      cursor: pointer;
      display: block;
      margin-top: 15px;
      margin-left: 95px;
      font-size: 20px;
      color: #3f3a3a;
      letter-spacing: 30px;
      line-height: 28px;
      text-align: center;
      border-right: 1px solid #3f3a3a;

      &:hover {
        color: #8b572a;
      }
    `}
  }

  .top-nav-bar-desktop-men-dresses {
    ${mediaQuery("mobile")`
        display: none;
    `}
    ${mediaQuery("desktop")`
      cursor: pointer;
      display: block;
      margin-top: 15px;
      margin-left: 36px;
      font-size: 20px;
      color: #3f3a3a;
      letter-spacing: 30px;
      line-height: 28px;
      text-align: center;
      border-right: 1px solid #3f3a3a;

      &:hover {
        color: #8b572a;
      }
    `}
  }

  .top-nav-bar-desktop-accessories {
    ${mediaQuery("mobile")`
        display: none;
    `}
    ${mediaQuery("desktop")`
      cursor: pointer;
      display: block;
      margin-top: 15px;
      margin-left: 36px;
      font-size: 20px;
      color: #3f3a3a;
      letter-spacing: 30px;
      line-height: 28px;
      text-align: center;
      border-right: 0px solid #3f3a3a;

      &:hover {
        color: #8b572a;
      }
    `}
  }

  .top-nav-bar-desktop-search-bar {
    ${mediaQuery("mobile")`
        display: none;
      `}
    ${mediaQuery("desktop")`
        display: block;
        width: 214px;
        height: 44px;
        background-image: url("https://cdn.discordapp.com/attachments/1001702231785099304/1006055671386603581/search.png");
        background-repeat: no-repeat;
        background-position: right;
        margin-left: auto;
        margin-right: 42px;
        border: 1px solid #979797;
        border-radius: 20px;
        padding-left: 20px;
        font-size: 20px;
        color: #8b572a;
        line-height: 24px;

        &:placeholder {
          font-size: 20px;
          color: #8b572a;
          line-height: 24px;
        }
      `}
  }

  .top-nav-bar-desktop-shopping-cart-box {
    ${mediaQuery("mobile")`
        display: none;
      `}
    ${mediaQuery("desktop")`
        display: flex;
        cursor: pointer;
        position: relative;
        justify-content: center;
        align-items: center;
        width: 44px;
        height: 44px;
        margin-right: 42px;
      `}
  }

  .top-nav-bar-desktop-shopping-cart-notification-numbers {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    top: 45%;
    left: 45%;
    background-color: #8b572a;
    border-radius: 50%;
    color: #ffffff;
    font-size: 16px;
    line-height: 24px;
  }

  .top-nav-bar-desktop-shopping-cart-notification-animation {
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

  .top-nav-bar-desktop-profile {
    ${mediaQuery("mobile")`
        display: none;
      `}
    ${mediaQuery("desktop")`
        cursor: pointer;
        display: block;
        width: 40px;
        height: 40px;
        margin-right: 54px;
      `}
  }

  .top-nav-bar-mobile-search {
    ${mediaQuery("mobile")`
        display: block;
        position: fixed;
        right: 16px;
        z-index: 20;
        background-position: right;
        background-repeat: no-repeat;
        border-radius: 20px;
        border: 1px solid #00000000;
        width: 44px;
        height: 44px;
        margin-left: auto;
        background: url('https://cdn.discordapp.com/attachments/1001702231785099304/1006055671386603581/search.png');
        color: 20px;
        color: #8B572A00;

        &:hover {
          color: #8B572A;
          width: calc(100% - 32px);
          padding-left: 20px;
          border-radius: 20px;
          border: 1px solid #000000;
          background-position: right;
          background-repeat: no-repeat;
          transition-property: all;
          transition-duration: 700ms;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        &:input:focus {
          color: #8B572A;
          width: calc(100% - 32px);
          padding-left: 20px;
          border-radius: 20px;
          border: 1px solid #000000;
          background-position: right;
          background-repeat: no-repeat;
          transition-property: all;
          transition-duration: 700ms;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}
    ${mediaQuery("desktop")`
        display: none;
      `}
  }

  .top-nav-bar-below {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #313538;
    ${mediaQuery("mobile")`
        height: 50px;
      `}
    ${mediaQuery("desktop")`
        height: 40px;
      `}
  }

  .top-nav-bar-below-mobile-women-dresses {
    ${mediaQuery("mobile")`
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: 100%;
        font-size: 16px;
        color: #828282;
        border-right: 1px solid #808080;

        &:hover {
        color: #ffffff;
        }
      `}
    ${mediaQuery("desktop")`
        display: none;
        border: hidden;
      `}
  }

  .top-nav-bar-below-mobile-men-dresses {
    ${mediaQuery("mobile")`
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: 100%;
        font-size: 16px;
        color: #828282;
        border-right: 1px solid #808080;

        &:hover {
        color: #ffffff;
        }
      `}
    ${mediaQuery("desktop")`
        display: none;
        border: hidden;
      `}
  }

  .top-nav-bar-below-mobile-accessories {
    ${mediaQuery("mobile")`
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: 100%;
        font-size: 16px;
        color: #828282;
        border-right: 0px solid #808080;

        &:hover {
        color: #ffffff;
        }
      `}
    ${mediaQuery("desktop")`
        display: none;
        border: hidden;
      `}
  }
`;

export default HeaderStyledComponents;
