import Props from './types/styleComponentsType';
import { Link } from '@tanstack/react-router';
import api from './utils/api';
import { useInterval } from 'usehooks-ts';
import { useState, useEffect } from 'react';
import { Slides, Dot } from './styledComponents/Carousel.style';
import { CarouselDetails, MarketingCampaigns } from './types/marketingType';

const Carousel = ({ className }: Props) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [pause, setPause] = useState(false);
  const sliderData = api.getSliderData().data?.data.data ?? [];

  useEffect(() => {
    sliderData.length > 0
      ? sliderData.forEach((slider) => {
        const img = new Image();
        img.src = slider.picture;
      })
      : null;
  }, [sliderData]);

  useInterval(
    () => {
      sliderData.length > 0
        ? sliderIndex == sliderData.length - 1
          ? setSliderIndex(0)
          : setSliderIndex(sliderIndex + 1)
        : null;
    },
    pause ? null : 5000
  );

  return (
    <div className={className}>
      <Link
        to={"/product/$product_id"}
        params={{ product_id: `${sliderData.length > 0 ? sliderData[sliderIndex].product_id : -1}` }}
      >
        <Slides
          className='slides'
          picture={sliderData.length > 0 ? sliderData[sliderIndex].picture : ''}
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >
          <div className='slides-box'>
            <div className='slides-slidesTextMain'>
              <div className='slides-text-main'>
                {/* 於是 */}
                {sliderData.length > 0
                  ? sliderData[sliderIndex].story
                    .split('。')[0]
                    .replaceAll('\r\n', '\n')
                  : null}
                {/* <br /> */}
                {/* 我也想要給你 */}
                {/* <br /> */}
                {/* 一個那麼美好的自己。 */}
                {/* <br /> */}
              </div>
              <div className='slides-text-describe'>
                {/* 不朽《與自己和好如初》 */}
                {sliderData.length > 0
                  ? sliderData[sliderIndex].story
                    .split('。')[1]
                    .replaceAll('<br>', '')
                  : null}
                {/* {Object.keys(campaigns).length > 0
                ? campaigns[sliderIndex].story
                    .split("。")[1]
                    .replaceAll("<br>", "")
                : null} */}
              </div>
            </div>
          </div>
          <div className='main-page-dot-box'>
            {sliderData.length > 0
              ? sliderData.map((item, index) => {
                return (
                  <Dot
                    key={item.id}
                    data-index={index}
                    data-id={item.id}
                    data-product_id={item.product_id}
                    color={sliderIndex == index ? '#8b572a' : '#ffffff40'}
                    className='dot'
                    onClick={() => setSliderIndex(index)}
                  ></Dot>
                );
              })
              : null}
            {/* <div
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
          ></div> */}
          </div>
        </Slides>
      </Link>
    </div>
  );
};

export default Carousel;
