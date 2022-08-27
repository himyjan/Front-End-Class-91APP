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

    ${mediaQuery("mobile")`
        width: calc(100% - 48px);
    `}
    ${mediaQuery("desktop")`
        width:100%;
        max-width: 1160px;
    `}
  }

  .slides-slidesTextMain {
    position: absolute;
    width: 100%;
    ${mediaQuery("mobile")`

    `}
    ${mediaQuery("desktop")`

    `}
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

      color: #000000;
    `}
    ${mediaQuery("desktop")`

     color: #070707;
    `}
  }

  .main-page-dot-box {
    ${mediaQuery("mobile")`

    `}
    ${mediaQuery("desktop")`

    `}
  }

  .dot {
    ${mediaQuery("mobile")`

    `}
    ${mediaQuery("desktop")`

    `}
  }
`;

export default CarouselStyledComponents;
