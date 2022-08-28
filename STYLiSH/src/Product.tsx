import Props from "./types/styleComponentsType";
import Viewer from "react-viewer";
import { useState } from "react";

const Product = ({ className }: Props) => {
  const [visibleMain, setVisibleMain] = useState(false);
  const [visible, setVisible] = useState(false);

  return (
    <div className={className}>
      <div className="product-page-product-detail-box" id="" data-product_id="">
        <div className="" id="">
          <div className="product-main-image-viewer-box" id="">
            <div
              className="product-main-image-viewer"
              id=""
              onClick={() => {
                setVisibleMain(true);
              }}
            >
              <Viewer
                visible={visibleMain}
                onClose={() => {
                  setVisibleMain(false);
                }}
                images={[
                  {
                    src: "https://cdn.discordapp.com/attachments/1001702231785099304/1006055626515951719/image_2.png",
                    alt: "",
                  },
                ]}
              />
              <img
                src="https://cdn.discordapp.com/attachments/1001702231785099304/1006055626515951719/image_2.png"
                alt=""
                className="product-image"
                id=""
              />
            </div>
          </div>
          <div id="product-info">
            <div id="product-className">前開衩扭結洋裝</div>
            <div id="product-className">201807201824</div>
            <div id="product-className">TWD.799</div>
            <div id="split-border"></div>
            <div id="product-color">
              <div id="product-color-label">顏色｜</div>

              <div id="product-color">
                <div>
                  <div id="product-color1"></div>
                </div>
                <div>
                  <div id="product-color2"></div>
                </div>
                <div>
                  <div id="product-color3"></div>
                </div>
              </div>
            </div>
            <div id="product-size">
              <div id="product-size-label">尺寸｜</div>

              <div id="product-size">
                <div id="product-sizeS">S</div>
                <div id="product-sizeM">M</div>
                <div id="product-sizeL">L</div>
              </div>
            </div>
            <div id="product-amount-box">
              <div id="product-amount-label">數量｜</div>

              <div className="" id="">
                <div id="product-amount-minus">-</div>
                <input
                  placeholder="1"
                  title="input-amount"
                  value="1"
                  id="product-amount"
                />
                <div id="product-amount-plus">+</div>
              </div>
            </div>
            <div>加入購物車</div>
            <div id="product-spec">
              實品顏色依單品照為主
              <br />
              <br />
              棉 100%
              <br />
              厚薄：薄
              <br />
              彈性：無
              <br />
              <br />
              清洗：手洗，溫水
              <br />
              產地：中國
            </div>
          </div>
        </div>
        <div id="product-describe">
          <div>
            <div id="product-className">更多產品資訊</div>
            <div id="split-border"></div>
          </div>
          <div id="product-className">
            O.N.S is all about options, which is why we took our staple polo
            shirt and upgraded it with slubby linen jersey, making it even
            lighter for those who prefer their summer style extra-breezy.
          </div>
          <div className="product-image-viewer-box" id="">
            <div
              className="product-image-viewer"
              id=""
              onClick={() => {
                setVisible(true);
              }}
            >
              <Viewer
                visible={visible}
                onClose={() => {
                  setVisible(false);
                }}
                images={[
                  {
                    src: "https://cdn.discordapp.com/attachments/1001702231785099304/1007251147632947271/0.png",
                    alt: "",
                  },
                  {
                    src: "https://cdn.discordapp.com/attachments/1001702231785099304/1007251147196747866/1.png",
                    alt: "",
                  },
                ]}
              />
              <img
                src="https://cdn.discordapp.com/attachments/1001702231785099304/1007251147632947271/0.png"
                alt=""
                className="product-image"
                id=""
              />
              <img
                src="https://cdn.discordapp.com/attachments/1001702231785099304/1007251147196747866/1.png"
                alt=""
                className="product-image"
                id=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
