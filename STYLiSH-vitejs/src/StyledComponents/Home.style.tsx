import styled from "styled-components";
import mediaQuery from "./mediaQuery";
import Home from "../Home";
interface colorProps {
  color: string;
}

export const ProductColor = styled.div<colorProps>`
  cursor: pointer;
  background-color: ${(props) => props.color};
  border: 1px solid #d3d3d3;
  ${mediaQuery("mobile")`
      width: 12px;
      height: 12px;
      margin-top: 8px;
      margin-right: 6px;
    `}
  ${mediaQuery("desktop")`
      width: 24px;
      height: 24px;
      margin-top: 20px;
      margin-right: 10px;
    `}
`;

const HomeStyledComponents = styled(Home)`
  .main-page-product-list-box {
    display: flex;
    flex-wrap: wrap;
    ${mediaQuery("mobile")`
      width: calc(100% - 42px);
      margin: 15px 21px 0 21px;
    `}
    ${mediaQuery("desktop")`
      width: 100%;
      margin: 70px auto 0 auto;
      max-width: 1200px;
    `}
  }

  .product {
    display: flex;
    flex-direction: column;
    ${mediaQuery("mobile")`
      width: calc(50% - 6px);
      margin: 0 3px;
    `}
    ${mediaQuery("desktop")`
      width: 360px;
      height: 666px;
      margin: 0 20px;
    `}
  }

  .product-image {
    cursor: pointer;
    object-fit: cover;
    ${mediaQuery("mobile")`
      width: 100%;
      height: 100%;
    `}
    ${mediaQuery("desktop")`
      width: 360px;
      height: 480px;
    `}
  }

  .product-color-list {
    display: flex;
    flex-direction: row;
    ${mediaQuery("mobile")`
      width: 100%;
      height: 40px;
      align-items: center;
    `}
    ${mediaQuery("desktop")`
      width: 360px;
    `}
  }

  .product-color1 {
    cursor: pointer;
    background-color: #ffffff;
    border: 1px solid #d3d3d3;
    ${mediaQuery("mobile")`
      width: 12px;
      height: 12px;
      margin-top: 8px;
      margin-right: 6px;
    `}
    ${mediaQuery("desktop")`
      width: 24px;
      height: 24px;
      margin-top: 20px;
      margin-right: 10px;
    `}
  }

  .product-color2 {
    cursor: pointer;
    background-color: #ddffbb;
    border: 1px solid #d3d3d3;
    ${mediaQuery("mobile")`
      width: 12px;
      height: 12px;
      margin-top: 8px;
      margin-right: 6px;
    `}
    ${mediaQuery("desktop")`
      width: 24px;
      height: 24px;
      margin-top: 20px;
      margin-right: 10px;
    `}
  }

  .product-color3 {
    cursor: pointer;
    background-color: #d3d3d3;
    border: 1px solid #d3d3d3;
    ${mediaQuery("mobile")`
      width: 12px;
      height: 12px;
      margin-top: 8px;
      margin-right: 6px;
    `}
    ${mediaQuery("desktop")`
      width: 24px;
      height: 24px;
      margin-top: 20px;
      margin-right: 10px;
    `}
  }

  .product-name {
    cursor: pointer;
    ${mediaQuery("mobile")`
      margin-top: 10px;
      font-size: 12px;
      letter-spacing: 2.4px;
      color: #000000;
      line-height: 14px;
    `}
    ${mediaQuery("desktop")`
      margin-top: 20px;
      font-size: 20px;
      letter-spacing: 4px;
      color: #3f3a3a;
      line-height: 24px;
    `}
  }

  .product-price {
    cursor: pointer;
    ${mediaQuery("mobile")`
      margin-top: 8px;
      margin-bottom: 24px;
      font-size: 12px;
      letter-spacing: 2.4px;
      color: #000000;
      line-height: 14px;
    `}
    ${mediaQuery("desktop")`
      margin-top: 10px;
      margin-bottom: 64px;
      font-size: 20px;
      letter-spacing: 4px;
      color: #3f3a3a;
      line-height: 24px;
    `}
  }

  .spinner {
    display: none;
    border: 1rem solid #e5e7eb; /* Light grey */
    border-top: 1rem solid #ea580c; /* Blue */
    border-radius: 50%;
    width: 8rem;
    height: 8rem;
    animation: spin 1s linear infinite;
    margin: 0 auto;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

export default HomeStyledComponents;
