import styled from "styled-components";
import mediaQuery from "./mediaQuery";
import Checkout from "../Checkout";

const CheckoutStyledComponents = styled(Checkout)`
  .checkout-page-checkout-box {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    ${mediaQuery("mobile")`
      margin-top: 102px;
      max-width: 1070px;
    `}
    ${mediaQuery("desktop")`
      margin-top: 140px;
      max-width: 1160px;
    `}
  }
  .checkout-page-cart-title-box-box {
    display: flex;
    flex-direction: column;
    ${mediaQuery("mobile")`
      margin: 0 24px;
    `}
    ${mediaQuery("desktop")`
      margin: 0 0;
    `}
  }
  .checkout-page-cart-title-box {
    display: flex;
    flex-direction: row;
    ${mediaQuery("mobile")`
      margin-top: 20px;
    `}
    ${mediaQuery("desktop")`
      margin-top: 51px;
      align-items: start;
    `}
  }
  .check-out-page-notification-title {
    display: inline-block;
    font-weight: bold;
    color: #3f3a3a;
    font-size: 16px;
    line-height: 19px;
    ${mediaQuery("mobile")`
      margin-right: 0;
    `}
    ${mediaQuery("desktop")`
      margin-right: 468px;
    `}
  }
  .check-out-page-title-qty-text {
    ${mediaQuery("mobile")`
      display: none;
    `}
    ${mediaQuery("desktop")`
      display: inline-block;
      margin-right: 160px;
      color: #3f3a3a;
      font-size: 16px;
      line-height: 19px;
    `}
  }
  .check-out-page-title-price-text {
    ${mediaQuery("mobile")`
      display: none;
    `}
    ${mediaQuery("desktop")`
      display: inline-block;
      margin-right: 160px;
      color: #3f3a3a;
      font-size: 16px;
      line-height: 19px;
    `}
  }
  .check-out-page-title-total-text {
    ${mediaQuery("mobile")`
      display: none;
    `}
    ${mediaQuery("desktop")`
      display: inline-block;
      color: #3f3a3a;
      font-size: 16px;
      line-height: 19px;
    `}
  }
  .checkout-page-checkout-product-list-box {
    width: 100%;
    ${mediaQuery("mobile")`
      margin-top: 0;
      padding-top: 0;
      padding-bottom: 0;
      border: none;
    `}
    ${mediaQuery("desktop")`
      margin-top: 16px;
      padding-top: 10px;
      padding-bottom: 40px;
      border: 1px solid #979797;
    `}
  }
  .checkout-page-checkout-product-list {
    position: relative;
    display: flex;
    ${mediaQuery("mobile")`
      flex-direction: column;
      margin-top: 10px;
      margin-left: 0;
    `}
    ${mediaQuery("desktop")`
      flex-direction: row;
      margin-top: 30px;
      margin-left: 32px;
    `}
  }
  .checkout-page-checkout-product-list-split-border {
    ${mediaQuery("mobile")`
      display: block;
    `}
    ${mediaQuery("desktop")`
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 0;
      margin: 10px 0;
      border: 1px solid #3f3a3a;
    `}
  }
`;

export default CheckoutStyledComponents;
