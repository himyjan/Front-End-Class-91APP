import styled from "styled-components";
import ThankyouStyledComponents from "./StyledComponents/Thankyou.style";
import mediaQuery from "./StyledComponents/mediaQuery";

type Props = {
  className: string;
};

const Thankyou = ({ className }: Props) => {
  return (
    <div className={className}>
      <div className="checkout-page-empty-cart-info-box">
        <div className="thankyou-page-order-num-info-box">
          <div className="main-header">
            訂購完成<i className="fa-regular fa-circle-check"></i>
          </div>
          <div className="thankyou-page-order-num-info-text"></div>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
