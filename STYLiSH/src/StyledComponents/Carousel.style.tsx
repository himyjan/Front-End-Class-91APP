import styled from "styled-components";
import mediaQuery from "./mediaQuery";
import Carousel from "../Carousel";

const CarouselStyledComponents = styled(Carousel)`
  .slides {
    width: 100%;
    background-position: center;
    background-size: cover;
    background-image: url("https://cdn.discordapp.com/attachments/1001702231785099304/1006055626872475758/image.png");
    /* transition: background-image 0.5s ease-out; */
    ${mediaQuery("mobile")`
      height: 185px;
      margin-top: 102px;
    `}
    ${mediaQuery("desktop")`
      height: 500px;
      margin-top: 140px;
    `}
  }

  .slides-box {
    position: relative;
    right: 0;
    left: 0;
    height: 100%;
    margin: 0 auto;
    max-width: 1160px;

    ${mediaQuery("mobile")`
      width: calc(100% - 48px);
    `}
  }

  .slides-slidesTextMain {
    position: absolute;
    width: 100%;
  }

  .slides-text-main {
    cursor: pointer;
    text-align: left;
    ${mediaQuery("mobile")`
      margin-top:36px;
      font-size: 15px;
      line-height: 28px;
      color: #000000;
    `}
    ${mediaQuery("desktop")`
      margin-top:166px;
      font-size: 30px;
      line-height: 57px;
      color: #070707;
    `}
  }

  .slides-text-describe {
    cursor: pointer;
    text-align: left;
    ${mediaQuery("mobile")`
      font-size: 12px;
      line-height: 28px;
      color: #000000;
    `}
    ${mediaQuery("desktop")`
      font-size: 20px;
      line-height: 64px;
      color: #070707;
    `}
  }

  .main-page-dot-box {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: 1200px;
    ${mediaQuery("mobile")`
      margin-top: 265px;
    `}
    ${mediaQuery("desktop")`
      margin-top: 596px;
    `}
  }

  .dot {
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 100%;
    background-color: #ffffff40;
    ${mediaQuery("mobile")`
      width: 4px;
      height: 4px;
      margin: 0 4.4px;
    `}
    ${mediaQuery("desktop")`
      width: 10px;
      height: 10px;
      margin: 0 11px;
    `}

    &:hover {
      background-color: #8b572a;
    }
  }
`;

export default CarouselStyledComponents;
