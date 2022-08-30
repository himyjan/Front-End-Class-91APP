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
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 0;
      margin: 10px 0;
      border: 1px solid #3f3a3a;
    `}
    ${mediaQuery("desktop")`
      display: none;
    `}
  }
  .checkout-page-product {
    display: flex;
    flex-direction: row;
  }
  .checkout-page-product-image {
    cursor: pointer;
    object-fit: cover;
    width: 114px;
    height: 152px;
  }
  .checkout-page-product-spec {
    display: flex;
    flex-direction: column;
    ${mediaQuery("mobile")`
      width: 100%;
      margin-left: 10px;
    `}
    ${mediaQuery("desktop")`
      width: 354px;
      margin-left: 16px;
    `}
  }
  .checkout-page-product-name-text {
    color: #000000;
    ${mediaQuery("mobile")`
      font-size: 14px;
      line-height: 17px;
    `}
    ${mediaQuery("desktop")`
      font-size: 16px;
      line-height: 19px;
    `}
  }
  .checkout-page-product-id-text {
    color: #3f3a3a;
    ${mediaQuery("mobile")`
      margin-top: 20px;
      font-size: 14px;
      line-height: 17px;
    `}
    ${mediaQuery("desktop")`
      margin-top: 18px;
      font-size: 16px;
      line-height: 19px;
    `}
  }
  .checkout-page-product-color-text {
    color: #3f3a3a;
    ${mediaQuery("mobile")`
      margin-top: 24px;
      font-size: 14px;
      line-height: 17px;
    `}
    ${mediaQuery("desktop")`
      margin-top: 22px;
      font-size: 16px;
      line-height: 19px;
    `}
  }
  .checkout-page-product-size-text {
    color: #3f3a3a;
    ${mediaQuery("mobile")`
      margin-top: 12px;
      font-size: 14px;
      line-height: 17px;
    `}
    ${mediaQuery("desktop")`
      margin-top: 10px;
      font-size: 16px;
      line-height: 19px;
    `}
  }
  .checkout-page-remove-product-trash-image {
    position: absolute;
    cursor: pointer;
    object-fit: cover;
    width: 44px;
    height: 44px;
    ${mediaQuery("mobile")`
      left: calc(100% - 44px);
      margin-top: 0;
    `}
    ${mediaQuery("desktop")`
      left: calc(100% - 74px);
      margin-top: 54px;
    `}
  }
  .check-out-page-item-text-box {
    display: flex;
    flex-direction: row;
    ${mediaQuery("mobile")`
      margin-top: 20px;
    `}
    ${mediaQuery("desktop")`
      margin-top: 0;
    `}
  }
  .check-out-page-item-qty-text {
    ${mediaQuery("mobile")`
      color: #3f3a3a;
      display: block;
      width: 104px;
      height: 17px;
      margin-right: auto;
      text-align: center;
      font-size: 14px;
      line-height: 17px;
    `}
    ${mediaQuery("desktop")`
      display: none;
    `}
  }
  .check-out-page-item-price-text {
    ${mediaQuery("mobile")`
      color: #3f3a3a;
      display: block;
      width: 104px;
      height: 17px;
      text-align: center;
      font-size: 14px;
      line-height: 17px;
    `}
    ${mediaQuery("desktop")`
      display: none;
    `}
  }
  .check-out-page-item-total-text {
    ${mediaQuery("mobile")`
      color: #3f3a3a;
      display: block;
      width: 104px;
      height: 17px;
      margin-left: auto;
      text-align: center;
      font-size: 14px;
      line-height: 17px;
    `}
    ${mediaQuery("desktop")`
      display: none;
    `}
  }
  .check-out-page-item-total-price-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    ${mediaQuery("mobile")`
      height:30px;
      margin-top: 12px;
    `}
    ${mediaQuery("desktop")`
      height: 32px;
      margin-top: 60px;
    `}
  }
  .check-out-page-item-qty {
    width: 80px;
  }
`;

export default CheckoutStyledComponents;
