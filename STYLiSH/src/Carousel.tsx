import {
  useState,
  useEffect,
  useContext,
  useReducer,
  useRef,
  useInsertionEffect,
  useLayoutEffect,
  useCallback,
  useMemo,
  useImperativeHandle,
  useDebugValue,
  useTransition,
  useDeferredValue,
  useId,
  useSyncExternalStore,
} from "react";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import styled from "styled-components";
import CarouselStyledComponents from "./styledComponents/Carousel.style";
import mediaQuery from "./styledComponents/mediaQuery";
import Props from "./types/styleComponentsType";
import ApiJsonTypes from "./types/ApiJsonTypes";
import axios from "axios";
import useInterval from "use-interval";
import fetchAPIService from "./services/fetchAPIService";

const Carousel = ({ className }: Props) => {
  const [campaigns, setCampaigns] = useState({});
  const [sliderIndex, setSliderIndex] = useState(0);

  console.log(campaigns);

  const setSliderData: () => Promise<void> = async () => {
    const campaignsJSON = await fetchAPIService.findSlider();
    setCampaigns(Object.values(campaignsJSON));
  };
  useEffect(() => {
    setSliderData();
  }, []);

  useInterval(() => {
    sliderIndex == Object.keys(campaigns).length - 1
      ? setSliderIndex(0)
      : setSliderIndex(sliderIndex + 1);
  }, 5000);

  return (
    <div className={className}>
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
