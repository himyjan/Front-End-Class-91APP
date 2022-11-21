import Props from './types/styleComponentsType';
import { Link } from '@tanstack/react-router';
import { ApiData, ApiDataJson } from './lib/fetchAPI';
import { ProductColor } from './styledComponents/Home.style';
import { getQueryClientFetchData, rootRoute } from './index';
import { isLoadingStateContext } from './lib/isLoadingStateCreateContext';
import { useContext, useEffect, useReducer } from 'react';

const Home = ({ className }: Props) => {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  // let params = new URLSearchParams(document.rootRoute.search);
  // let category = params.get("category");
  // console.log(category);

  let mode = rootRoute.path as string;

  console.log(mode);

  const setApiJsonByMode = () => {
    if (mode === undefined) {
      return getQueryClientFetchData(['AllData']) as ApiDataJson;
    } else if (mode == 'women') {
      return getQueryClientFetchData(['WomenData']) as ApiDataJson;
    } else if (mode == 'men') {
      return getQueryClientFetchData(['MenData']) as ApiDataJson;
    } else if (mode == 'accessories') {
      return getQueryClientFetchData(['AccessoriesData']) as ApiDataJson;
    } else if (mode == 'keyword') {
      return getQueryClientFetchData(['SearchData']) as ApiDataJson;
    }
  };

  let apiJson: ApiDataJson = setApiJsonByMode() as ApiDataJson;

  const history = rootRoute.history;
  useEffect(() => {
    history.listen(() => {
      if (mode == (rootRoute.current.search.category as string)) {
        return;
      } else {
        mode = rootRoute.current.search.category as string;
        setApiJsonByMode();
        forceUpdate();
      }
    });
  }, []);

  const apiData =
    apiJson == undefined
      ? []
      : Object.keys(apiJson).length > 0
      ? (apiJson.data as unknown as ApiData[])
      : [];
  const isLoading = useContext(isLoadingStateContext);

  return (
    <div className={className}>
      <div>
        <div className='main-page-product-list-box'>
          {apiData.length > 0
            ? apiData.map((item, index) => {
                return (
                  <div className='product' data-id={item.id}>
                    <Link to={`product/${item.id}`}>
                      <img
                        src={item.main_image}
                        alt=''
                        className='product-image'
                      />
                    </Link>
                    <div className='product-color-list'>
                      {apiData.length > 0
                        ? item.colors.map((colorItem, index) => {
                            return (
                              <Link to={`product/${item.id}`}>
                                <ProductColor
                                  color={colorItem.code}
                                  className='product-color'
                                ></ProductColor>
                              </Link>
                            );
                          })
                        : null}
                    </div>
                    <Link to={`product/${item.id}`}>
                      <div className='product-name'>{item.title}</div>
                    </Link>
                    <Link to={`product/${item.id}`}>
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
          <div className='spinner'></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
