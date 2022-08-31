import styled from "styled-components";
import mediaQuery from "./mediaQuery";
import Product from "../Product";

interface colorBoxProps {
  selected: boolean;
}

export const ColorBox = styled.div<colorBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border: ${(props) => (props.selected ? "1px solid #979797" : "none")};
  ${mediaQuery("mobile")`
      margin-left: 7px;
      margin-right: 7px;
    `}
  ${mediaQuery("desktop")`
      margin-left: 9.5px;
      margin-right: 9.5px;
    `}
`;

interface colorProps {
  color: string;
}

export const Color = styled.div<colorProps>`
  cursor: pointer;
  background-color: ${(props) => props.color.replaceAll('"', "")};
  width: 24px;
  height: 24px;
  border: 1px solid #d3d3d3;
`;

interface sizeProps {
  color: string;
  fontColor: string;
}

export const Size = styled.div<sizeProps>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color.replaceAll('"', "")};
  color: ${(props) => props.fontColor.replaceAll('"', "")};
  border-radius: 16px;
  width: 36px;
  height: 36px;
  ${mediaQuery("mobile")`
      margin-left: 7px;
      margin-right: 7px;
    `}
  ${mediaQuery("desktop")`
      margin-left: 9.5px;
      margin-right: 9.5px;
    `}
`;

const ProductStyledComponents = styled(Product)`
  .product-page-product-detail {
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
      max-width:960px;
    `}
  }
  .product-page-product-detail-box {
    display: flex;
    ${mediaQuery("mobile")`
      flex-direction: column;
      margin-top: 0;
    `}
    ${mediaQuery("desktop")`
      flex-direction: row;
      align-items: center;
      margin-top: 65px;
    `}
  }
  .product-page-product-image {
    cursor: pointer;
    object-fit: cover;
    ${mediaQuery("mobile")`
      width: 100%;
    `}
    ${mediaQuery("desktop")`
      width: 560px;
      height: 746.66px;
    `}
  }
  .product-page-product-info {
    display: flex;
    flex-direction: column;
    ${mediaQuery("mobile")`
      margin: 0 24px;
      max-width: none;
      max-height: none;
    `}
    ${mediaQuery("desktop")`
      margin-left: 40px;
      margin-right: 0;
      align-items: flex-start;
      max-width: 360px;
      max-height: 746.66px;
    `}
  }
  .product-page-product-name {
    color: #3f3a3a;
    ${mediaQuery("mobile")`
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 4px;
      margin-top: 17px;
    `}
    ${mediaQuery("desktop")`
      font-size: 32px;
      line-height: 38px;
      letter-spacing: 6.4px;
      margin-top: 0;
    `}
  }
  .product-page-product-id {
    color: #bababa;
    ${mediaQuery("mobile")`
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 3.2px;
      margin-top: 10px;
    `}
    ${mediaQuery("desktop")`
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 4px;
      margin-top: 16px;
    `}
  }
  .product-page-product-price {
    color: #3f3a3a;
    ${mediaQuery("mobile")`
      font-size: 20px;
      line-height: 24px;
      margin-top: 20px;
    `}
    ${mediaQuery("desktop")`
        font-size: 20px;
        line-height: 36px;
        margin-top: 40px;
    `}
  }
  .product-page-product-info-split-border {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 0;
    border: 1px solid #3f3a3a;
    ${mediaQuery("mobile")`
      margin: 10px 0;
      max-width: none;
    `}
    ${mediaQuery("desktop")`
      margin: 20px 0;
      max-width: 360px;
    `}
  }
  .product-page-product-color {
    display: flex;
    flex-direction: row;
    align-items: center;
    ${mediaQuery("mobile")`
      margin-top: 20px;
    `}
    ${mediaQuery("desktop")`
      margin-top: 10px;
    `}
  }
  .product-page-product-color-label {
    display: inline-block;
    color: #3f3a3a;
    ${mediaQuery("mobile")`
      width: 62px;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 2.8px;
    `}
    ${mediaQuery("desktop")`
      width: 72px;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 4px;
    `}
  }
  .product-page-product-color-list {
    display: flex;
    flex-direction: row;
    ${mediaQuery("mobile")`
      width: 100%;
      height: 40px;
      align-items: center;
      margin-left: 6.5px;
    `}
    ${mediaQuery("desktop")`
      width: 360px;
      margin-left: 16.5px;
    `}
  }
  .product-page-product-color-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    border: 1px solid #979797;
    ${mediaQuery("mobile")`
      margin-left: 7px;
      margin-right: 7px;
    `}
    ${mediaQuery("desktop")`
      margin-left: 9.5px;
      margin-right: 9.5px;
    `}
  }
  /* .product-page-product-color1 {
    cursor: pointer;
    background-color: #ffffff;
    width: 24px;
    height: 24px;
    border: 1px solid #d3d3d3;
  }
  .product-page-product-color2 {
    cursor: pointer;
    background-color: #ddffbb;
    width: 24px;
    height: 24px;
    border: 1px solid #d3d3d3;
  }
  .product-page-product-color3 {
    cursor: pointer;
    background-color: #cccccc;
    width: 24px;
    height: 24px;
    border: 1px solid #d3d3d3;
  } */
  .product-page-product-size {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 19px;
  }
  .product-page-product-size-label {
    display: inline-block;
    color: #3f3a3a;
    ${mediaQuery("mobile")`
      width: 62px;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 2.8px;
    `}
    ${mediaQuery("desktop")`
      width: 72px;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 4px;
    `}
  }
  .product-page-product-size-list {
    display: flex;
    flex-direction: row;
    ${mediaQuery("mobile")`
      width: 100%;
      height: 40px;
      align-items: center;
      margin-left: 6.5px;
    `}
    ${mediaQuery("desktop")`
      width: 360px;
      margin-left: 16.5px;
    `}
  }
  /* .product-page-product-sizeS {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ececec;
    color: #3f3a3a;
    border-radius: 16px;
    width: 36px;
    height: 36px;
    ${mediaQuery("mobile")`
      margin-left: 7px;
      margin-right: 7px;
    `}
    ${mediaQuery("desktop")`
      margin-left: 9.5px;
      margin-right: 9.5px;
    `}
  }
  .product-page-product-sizeM {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ececec;
    color: #3f3a3a;
    border-radius: 16px;
    width: 36px;
    height: 36px;
    ${mediaQuery("mobile")`
      margin-left: 7px;
      margin-right: 7px;
    `}
    ${mediaQuery("desktop")`
      margin-left: 9.5px;
      margin-right: 9.5px;
    `}
  }
  .product-page-product-sizeL {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ececec;
    color: #3f3a3a;
    border-radius: 16px;
    width: 36px;
    height: 36px;
    ${mediaQuery("mobile")`
      margin-left: 7px;
      margin-right: 7px;
    `}
    ${mediaQuery("desktop")`
      margin-left: 9.5px;
      margin-right: 9.5px;
    `}
  } */
  .product-page-product-amount {
    display: flex;
    flex-direction: row;
    align-items: center;
    ${mediaQuery("mobile")`
      margin-top: 30px;
    `}
    ${mediaQuery("desktop")`
      margin-top: 19px;
    `}
  }
  .product-page-product-amount-label {
    ${mediaQuery("mobile")`
      display: none;
    `}
    ${mediaQuery("desktop")`
      display: inline-block;
      color: #3f3a3a;
      width: 72px;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 4px;
    `}
  }
  .product-page-product-amount-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 44px;
    background-color: #ffffff;
    border: 1px solid #979797;
    ${mediaQuery("mobile")`
      width: 100%;
      margin-left: 0;
    `}
    ${mediaQuery("desktop")`
      width: 160px;
      margin-left: 25px;
    `}
  }
  .product-page-product-amount-minus {
    cursor: pointer;
    width: 6px;
    height: 32px;
    margin-left: 15px;
    font-size: 16px;
    color: #000000;
    line-height: 32px;
  }
  .product-page-product-amount-input {
    cursor: pointer;
    width: 100%;
    text-align: center;
    color: #8b572a;
    ${mediaQuery("mobile")`
      font-size: 20px;
      line-height: 22px;
    `}
    ${mediaQuery("desktop")`
      font-size: 16px;
      line-height: 32px;
    `}
  }
  .product-page-product-amount-plus {
    cursor: pointer;
    width: 9px;
    height: 32px;
    margin-right: 15px;
    font-size: 16px;
    color: #000000;
    line-height: 32px;
  }
  .product-page-btn-add-to-cart {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    color: #ffffff;
    ${mediaQuery("mobile")`
      width: 100%;
      height: 44px;
      margin-top: 10px;
      font-size: 16px;
      line-height: 30px;
      letter-spacing: 3.2px;
      border: none;
    `}
    ${mediaQuery("desktop")`
      width: 360px;
      height: 64px;
      margin-top: 29px;
      font-size: 20px;
      line-height: 30px;
      letter-spacing: 4px;
      border: 1px solid #979797;
    `}
  }
  .product-page-product-spec {
    ${mediaQuery("mobile")`
      margin-top: 28px;
      font-size: 14px;
      line-height: 24px;
    `}
    ${mediaQuery("desktop")`
      margin-top: 40px;
      font-size: 20px;
      line-height: 30px;
    `}
  }
  .product-page-product-describe {
    ${mediaQuery("mobile")`
      margin: 0 24px 32px 24px;
    `}
    ${mediaQuery("desktop")`
      margin: 0 0 49px 0;
    `}
  }
  .product-page-product-describe-box {
    display: flex;
    align-items: center;
    width: 100%;
    height: 30px;
    ${mediaQuery("mobile")`
      margin-top: 28px;
    `}
    ${mediaQuery("desktop")`
      margin-top: 50.33px;
    `}
  }
  .product-page-product-describe-title-text {
    display: inline-block;
    color: #8b572a;
    ${mediaQuery("mobile")`
      width: 152px;
      font-size: 16px;
      line-height: 30px;
      letter-spacing: 3.2px;
    `}
    ${mediaQuery("desktop")`
      width: 180px;
      font-size: 20px;
      line-height: 30px;
      letter-spacing: 3px;
    `}
  }
  .product-page-product-describe-split-border {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 0;
    border: 1px solid #3f3a3a;
    ${mediaQuery("mobile")`
      margin-left: 0;
    `}
    ${mediaQuery("desktop")`
      margin-left: 64px;
    `}
  }
  .product-page-product-image1 {
    object-fit: cover;
    ${mediaQuery("mobile")`
      width: 100%;
      margin-top: 20px;
    `}
    ${mediaQuery("desktop")`
      width: 960px;
      height: 540px;
      margin-top: 30px;
    `}
  }
  .product-page-product-image2 {
    object-fit: cover;
    ${mediaQuery("mobile")`
      width: 100%;
      margin-top: 20px;
    `}
    ${mediaQuery("desktop")`
      width: 960px;
      height: 540px;
      margin-top: 30px;
    `}
  }
`;

export default ProductStyledComponents;
