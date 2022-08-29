import Props from "./types/styleComponentsType";
import { Link } from "@tanstack/react-location";
import { ApiData } from "./lib/fetchAPI";
import { ProductColor } from "./styledComponents/Home.style";
import { getQueryClientFetchData } from "./index";
import { isLoadingStateContext } from "./lib/isLoadingStateCreateContext";
import { useContext } from "react";

const Home = ({ className }: Props) => {
  const allJson = getQueryClientFetchData("HomeData");
  const allData =
    allJson == undefined
      ? []
      : Object.keys(allJson).length > 0
      ? (allJson.data as unknown as ApiData[])
      : [];
  const isLoading = useContext(isLoadingStateContext);
  console.log(isLoading);

  return (
    <div className={className}>
      <div>
        <div className="main-page-product-list-box">
          {allData.length > 0
            ? allData.map((item, index) => {
                return (
                  <div className="product" data-id={item.id}>
                    <Link to={`product/${item.id}`}>
                      <img
                        src={item.main_image}
                        alt=""
                        className="product-image"
                      />
                    </Link>
                    <div className="product-color-list">
                      {allData.length > 0
                        ? item.colors.map((colorItem, index) => {
                            return (
                              <Link to={`product/${item.id}`}>
                                <ProductColor
                                  color={colorItem.code}
                                  className="product-color"
                                ></ProductColor>
                              </Link>
                            );
                          })
                        : null}
                    </div>
                    <Link to={`product/${item.id}`}>
                      <div className="product-name">{item.title}</div>
                    </Link>
                    <Link to={`product/${item.id}`}>
                      <div className="product-price">TWD.{item.price}</div>
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
          <div className="spinner"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
