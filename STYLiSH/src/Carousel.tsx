import styled from "styled-components";
import CarouselStyledComponents from "./StyledComponents/Carousel.style";
import mediaQuery from "./StyledComponents/mediaQuery";

type Props = {
  className: string;
};

const Carousel = ({ className }: Props) => {
  return (
    <div className="carousel">
      <div className="slides">
        <div className="slides-box">
          <div className="slides-slidesTextMain">
            <div className="slides-text-main">
              於是
              <br />
              我也想要給你
              <br />
              一個那麼美好的自己。
              <br />
            </div>
            <div className="slides-text-describe">不朽《與自己和好如初》</div>
          </div>
        </div>
        <div className="main-page-dot-box">
          <div
            data-index=""
            id=""
            data-product_id=""
            className="dot
        "
          ></div>
          <div
            data-index=""
            id=""
            data-product_id=""
            className="dot
        "
          ></div>
          <div
            data-index=""
            id=""
            data-product_id=""
            className="dot
        "
          ></div>
          <div
            data-index=""
            id=""
            data-product_id=""
            className="dot
        "
          ></div>
          <div
            data-index=""
            id=""
            data-product_id=""
            className="dot
        "
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
