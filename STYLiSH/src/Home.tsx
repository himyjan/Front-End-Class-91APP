import Props from './types/styleComponentsType';
import { Link, useSearch } from '@tanstack/react-router';
import { useInfiniteQuery } from '@tanstack/react-query';
import { ProductColor } from './styledComponents/Home.style';
import { getQueryClientFetchData, rootRoute, indexRoute } from './index';
import { MutableRefObject, useContext, useEffect, useReducer, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import api from './utils/api';
import { ProductsSearch, ProductDetailsData, ProductDetails } from './types/productType';

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
  const getProducts = async ({ pageParam = { search: 'all', paging: 0 } }) => {
    const response = ['all', 'men', 'women', 'acccessories'].includes(pageParam.search) ?
      await fetch(
        `https://api.appworks-school.tw/api/1.0/products/${pageParam.search}?paging=${pageParam.paging ?? 0}`
      )
      : await fetch(
        `https://api.appworks-school.tw/api/1.0/products/search?keyword=${pageParam.search}&paging=${pageParam.paging ?? 0}`
      );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json() as ProductsSearch
    data['search'] = pageParam.search;
    return data;
  }
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['product'],
    queryFn: getProducts,
    getNextPageParam: (lastPage) => (lastPage.next_paging === undefined ? undefined : { search: lastPage.search ?? 'all', paging: lastPage.next_paging ?? 0 }),
    defaultPageParam: { search: keyword !== '' ? keyword : category, paging: 0 }
  })
  const [products, setProducts] = useState<ProductDetailsData[]>(data?.pages[0].data ?? []);
  const [isLoading, setIsLoading] = useState(false);
  const [nextPaging, setNextPaging] = useState(0);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  // let params = new URLSearchParams(document.rootRoute.search);
  // let category = params.get("category");
  // console.log(category);

  useEffect(() => {
    fetchNextPage();
  }, [keyword, category]);

  // const ref = useRef();
  // const onScreen = useIntersectionObserver(ref, { threshold: 0.5 });
  const { ref, inView, entry } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (!inView) return;
    if (nextPaging === undefined) return;
    if (isFetching) return;

    fetchNextPage();
    setProducts(data?.pages[0].data ?? [])
  }, [inView, data?.pages[0].data]);

  return (
    <div className={className}>
      <div>
        <div className='main-page-product-list-box'>
          {products
            ? products.map((item, index) => {
              return (
                <div className='product' data-id={item.id} key={item.id}>
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
