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
`;

export default CheckoutStyledComponents;