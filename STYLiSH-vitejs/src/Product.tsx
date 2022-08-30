import Props from "./types/styleComponentsType";

const Product = ({ className }: Props) => {
  return (
    <div className={className}>
      <div className="product-page-product-detail" id="" data-product_id="">
        <div className="product-page-product-detail-box" id="">
          <img
            src="https://cdn.discordapp.com/attachments/1001702231785099304/1006055626515951719/image_2.png"
            alt=""
            className="product-page-product-image"
            id=""
          />
          <div className="product-page-product-info" id="">
            <div className="product-page-product-name" id="">
              前開衩扭結洋裝
            </div>
            <div className="product-page-product-id" id="">
              201807201824
            </div>
            <div className="product-page-product-price" id="">
              TWD.799
            </div>
            <div className="product-page-product-info-split-border"></div>
            <div className="product-page-product-color">
              <div className="product-page-product-color-label">顏色｜</div>

              <div className="product-page-product-color-list">
                <div className="product-page-product-color-box">
                  <div className="product-page-product-color1"></div>
                </div>
                <div className="product-page-product-color-box">
                  <div className="product-page-product-color2"></div>
                </div>
                <div className="product-page-product-color-box">
                  <div className="product-page-product-color3"></div>
                </div>
              </div>
            </div>
            <div className="product-page-product-size">
              <div className="product-page-product-size-label">尺寸｜</div>

              <div className="product-page-product-size-list">
                <div className="product-page-product-sizeS">S</div>
                <div className="product-page-product-sizeM">M</div>
                <div className="product-page-product-sizeL">L</div>
              </div>
            </div>
            <div className="product-page-product-amount">
              <div className="product-page-product-amount-label">數量｜</div>

              <div className="product-page-product-amount-list" id="">
                <div className="product-page-product-amount-minus">-</div>
                <input
                  placeholder="1"
                  title="input-amount"
                  value="1"
                  className="product-page-product-amount-input"
                />
                <div className="product-page-product-amount-plus">+</div>
              </div>
            </div>
            <div className="product-page-btn-add-to-cart">加入購物車</div>
            <div className="product-page-product-spec">
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
        <div className="product-page-product-describe">
          <div className="product-page-product-describe-box">
            <div className="product-page-product-describe-title-text">
              更多產品資訊
            </div>
            <div className="product-page-product-describe-split-border"></div>
          </div>
          <div className="product-page-product-className">
            O.N.S is all about options, which is why we took our staple polo
            shirt and upgraded it with slubby linen jersey, making it even
            lighter for those who prefer their summer style extra-breezy.
          </div>
          <img
            src="https://cdn.discordapp.com/attachments/1001702231785099304/1007251147632947271/0.png"
            alt=""
            className="product-page-product-image1"
            id=""
          />
          <img
            src="https://cdn.discordapp.com/attachments/1001702231785099304/1007251147196747866/1.png"
            alt=""
            className="product-page-product-image2"
            id=""
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
