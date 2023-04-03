import Props from './types/styleComponentsType';
import { Link, useSearch } from '@tanstack/react-router';
import { ProductColor } from './styledComponents/Home.style';
import { getQueryClientFetchData, rootRoute, indexRoute } from './index';
import { isLoadingStateContext } from './lib/isLoadingStateCreateContext';
import { MutableRefObject, useContext, useEffect, useReducer, useRef, useState } from 'react';
import { ApiData, ApiDataJson } from './types/apiDataType';
import api from './lib/fetchAPI';

const useIntersectionObserver = (ref: MutableRefObject<undefined>, options: {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      // observer.unobserve(ref.current);
    };
  }, [options, ref]);

  return isIntersecting;
};

const Home = ({ className }: Props) => {
  const { category, keyword } = useSearch({ from: indexRoute.id });
  const [products, setProducts] = useState<ApiData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [savedCategory, setSavedCategory] = useState(category);
  const [nextPaging, setNextPaging] = useState(0);
  const isFetching = useRef(false);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  // let params = new URLSearchParams(document.rootRoute.search);
  // let category = params.get("category");
  // console.log(category);

  const setApiJsonByMode = () => {
    if (category === 'all') {
      return (getQueryClientFetchData(['AllData']) as { data: ApiDataJson }).data;
    } else if (category == 'women') {
      return (getQueryClientFetchData(['WomenData']) as { data: ApiDataJson }).data;
    } else if (category == 'men') {
      return (getQueryClientFetchData(['MenData']) as { data: ApiDataJson }).data;
    } else if (category == 'accessories') {
      return (getQueryClientFetchData(['AccessoriesData']) as { data: ApiDataJson }).data;
    }
    // else if (category == 'keyword') {
    //   return getQueryClientFetchData(['SearchData']) as { data: ApiDataJson };
    // }
  };

  let apiJson: ApiDataJson = setApiJsonByMode() as ApiDataJson;

  async function fetchProducts() {
    isFetching.current = true;
    setIsLoading(true);

    const loading = async (apiJson: ApiDataJson) => {
      const response: ApiDataJson = await apiJson;
      if (nextPaging === 0 || savedCategory !== category || keyword) {
        setProducts(response.data);
        setSavedCategory(category);
      } else if (nextPaging !== undefined) {
        setProducts((prev) => [...prev, ...response.data]);
      }

      setNextPaging(response.next_paging);
      isFetching.current = false;
      setIsLoading(false);
    };

    if (keyword != '') {
      setNextPaging(0);
      loading((await api.searchProducts(keyword, 0)).data);
    } else {
      if (savedCategory !== category) {
        setNextPaging(0);
        loading((await api.getProducts(category, 0)).data);
      } else {
        loading((await api.getProducts(category, nextPaging)).data);
      }
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [keyword, category]);

  const ref = useRef();
  const onScreen = useIntersectionObserver(ref, { threshold: 0.5 });

  useEffect(() => {
    if (!onScreen) return;
    if (nextPaging === undefined) return;
    if (isFetching.current) return;

    fetchProducts();
  }, [onScreen]);

  return (
    <div className={className}>
      <div>
        <div className='main-page-product-list-box'>
          {products.length > 0
            ? products.map((item, index) => {
              return (
                <div className='product' data-id={item.id}>
                  <Link to={"/product/$product_id"} params={{ product_id: `${item.id}` }}>
                    <img
                      src={item.main_image}
                      alt=''
                      className='product-image'
                    />
                  </Link>
                  <div className='product-color-list'>
                    {products.length > 0
                      ? item.colors.map((colorItem, index) => {
                        return (
                          <Link to={"/product/$product_id"} params={{ product_id: `${item.id}` }}>
                            <ProductColor
                              color={colorItem.code}
                              className='product-color'
                            ></ProductColor>
                          </Link>
                        );
                      })
                      : null}
                  </div>
                  <Link to={"/product/$product_id"} params={{ product_id: `${item.id}` }}>
                    <div className='product-name'>{item.title}</div>
                  </Link>
                  <Link to={"/product/$product_id"} params={{ product_id: `${item.id}` }}>
                    <div className='product-price'>TWD.{item.price}</div>
                  </Link>
                </div>
              );
            })
            : null}
          {/* <div className="product">
            <img
              src="https://cdn.discordapp.com/attachments/1001702231785099304/1006055626515951719/image_2.png"
              alt=""
              className="product-image"
            />
            <div className="product-color-list">
              <div className="product-color1"></div>
              <div className="product-color2"></div>
              <div className="product-color3"></div>
            </div>
            <div className="product-name">前開衩扭結洋裝</div>
            <div className="product-price">TWD.799</div>
          </div>
          <div className="product">
            <img
              src="https://cdn.discordapp.com/attachments/1001702231785099304/1006055626515951719/image_2.png"
              alt=""
              className="product-image"
            />
            <div className="product-color-list">
              <div className="product-color1"></div>
              <div className="product-color2"></div>
              <div className="product-color3"></div>
            </div>
            <div className="product-name">前開衩扭結洋裝</div>
            <div className="product-price">TWD.799</div>
          </div>
          <div className="product">
            <img
              src="https://cdn.discordapp.com/attachments/1001702231785099304/1006055626515951719/image_2.png"
              alt=""
              className="product-image"
            />
            <div className="product-color-list">
              <div className="product-color1"></div>
              <div className="product-color2"></div>
              <div className="product-color3"></div>
            </div>
            <div className="product-name">前開衩扭結洋裝</div>
            <div className="product-price">TWD.799</div>
          </div>
          <div className="product">
            <img
              src="https://cdn.discordapp.com/attachments/1001702231785099304/1006055626515951719/image_2.png"
              alt=""
              className="product-image"
            />
            <div className="product-color-list">
              <div className="product-color1"></div>
              <div className="product-color2"></div>
              <div className="product-color3"></div>
            </div>
            <div className="product-name">前開衩扭結洋裝</div>
            <div className="product-price">TWD.799</div>
          </div>
          <div className="product">
            <img
              src="https://cdn.discordapp.com/attachments/1001702231785099304/1006055626515951719/image_2.png"
              alt=""
              className="product-image"
            />
            <div className="product-color-list">
              <div className="product-color1"></div>
              <div className="product-color2"></div>
              <div className="product-color3"></div>
            </div>
            <div className="product-name">前開衩扭結洋裝</div>
            <div className="product-price">TWD.799</div>
          </div>
          <div className="product">
            <img
              src="https://cdn.discordapp.com/attachments/1001702231785099304/1006055626515951719/image_2.png"
              alt=""
              className="product-image"
            />
            <div className="product-color-list">
              <div className="product-color1"></div>
              <div className="product-color2"></div>
              <div className="product-color3"></div>
            </div>
            <div className="product-name">前開衩扭結洋裝</div>
            <div className="product-price">TWD.799</div>
          </div> */}
          {isLoading ?? <div className='spinner'></div>}
        </div>
      </div>
      <div ref={ref as unknown as React.LegacyRef<HTMLDivElement>}></div>
    </div>
  );
};

export default Home;
