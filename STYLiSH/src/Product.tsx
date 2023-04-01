import Props from './types/styleComponentsType';
import { getQueryClientFetchData, productIDRoute } from './index';
import { useParams } from '@tanstack/react-router';
import { useLocalStorage } from 'usehooks-ts';
import { ColorBox, Color, Size } from './styledComponents/Product.style';
import { Color as ColorType } from './lib/fetchAPI';

const Product = ({ className }: Props) => {
  const {
    product_id
  } = useParams({ from: productIDRoute.id });

  const productJson = getQueryClientFetchData(['product', `${product_id}`]).data.data;
  const [shoppingCartList, setShoppingCartList] = useLocalStorage(
    'shoppingCartList',
    window.localStorage.getItem('shoppingCartList')
      ? JSON.parse(window.localStorage.getItem('shoppingCartList') as string)
      : []
  );
  let selectedColor;
  let selectedSize;
  return (
    <div className={className}>
      <div className='product-page-product-detail' id='' data-product_id=''>
        <div className='product-page-product-detail-box' id=''>
          <img
            src={productJson ? productJson.main_image : ''}
            alt=''
            className='product-page-product-image'
            id=''
          />
          {/* <img
            src="https://cdn.discordapp.com/attachments/1001702231785099304/1006055626515951719/image_2.png"
            alt=""
            className="product-page-product-image"
            id=""
          /> */}
          <div className='product-page-product-info' id=''>
            <div className='product-page-product-name' id=''>
              {productJson ? productJson.title : ''}
              {/* 前開衩扭結洋裝 */}
            </div>
            <div className='product-page-product-id' id=''>
              {productJson ? productJson.id : ''}
              {/* 201807201824 */}
            </div>
            <div className='product-page-product-price' id=''>
              TWD.{productJson ? productJson.price : ''}
              {/* TWD.799 */}
            </div>
            <div className='product-page-product-info-split-border'></div>
            <div className='product-page-product-color'>
              <div className='product-page-product-color-label'>顏色｜</div>

              <div className='product-page-product-color-list'>
                {productJson
                  ? productJson.colors.map((color: ColorType, index: number) => {
                    return (
                      <ColorBox
                        selected={false}
                        className={`product-page-product-color-box${index}`}
                      >
                        <Color
                          color={`#${color.code}`}
                          className={`product-page-product-color${index}`}
                        ></Color>
                      </ColorBox>
                    );
                  })
                  : null}
                {/* <div className="product-page-product-color-box">
                  <div className="product-page-product-color1"></div>
                </div>
                <div className="product-page-product-color-box">
                  <div className="product-page-product-color2"></div>
                </div>
                <div className="product-page-product-color-box">
                  <div className="product-page-product-color3"></div>
                </div> */}
              </div>
            </div>
            <div className='product-page-product-size'>
              <div className='product-page-product-size-label'>尺寸｜</div>

              <div className='product-page-product-size-list'>
                {productJson
                  ? productJson.sizes.map((size: string) => {
                    return (
                      <Size
                        color={'#ececec'}
                        fontColor={'#3f3a3a'}
                        className={`product-page-product-size${size}`}
                      >
                        {size}
                      </Size>
                    );
                  })
                  : null}
                {/* <div className="product-page-product-sizeS">S</div>
                <div className="product-page-product-sizeM">M</div>
                <div className="product-page-product-sizeL">L</div> */}
              </div>
            </div>
            <div className='product-page-product-amount'>
              <div className='product-page-product-amount-label'>數量｜</div>

              <div className='product-page-product-amount-list' id=''>
                <div className='product-page-product-amount-minus'>-</div>
                <input
                  placeholder='1'
                  title='input-amount'
                  value='1'
                  className='product-page-product-amount-input'
                />
                <div className='product-page-product-amount-plus'>+</div>
              </div>
            </div>
            <div className='product-page-btn-add-to-cart'>加入購物車</div>
            <div className='product-page-product-spec'>
              {productJson ? productJson.note : ''}
              <br />
              <br />
              {productJson ? productJson.texture : ''}
              <br />
              {productJson ? productJson.description.slice(0, 4) : ''}
              <br />
              {productJson ? productJson.description.slice(4) : ''}
              <br />
              清洗：{productJson ? productJson.wash : ''}
              <br />
              產地：{productJson ? productJson.place : ''}
              {/* 實品顏色依單品照為主
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
              產地：中國 */}
            </div>
          </div>
        </div>
        <div className='product-page-product-describe'>
          <div className='product-page-product-describe-box'>
            <div className='product-page-product-describe-title-text'>
              更多產品資訊
            </div>
            <div className='product-page-product-describe-split-border'></div>
          </div>
          <div className='product-page-product-className'>
            {productJson ? productJson.story : ''}
            {/* O.N.S is all about options, which is why we took our staple polo
            shirt and upgraded it with slubby linen jersey, making it even
            lighter for those who prefer their summer style extra-breezy. */}
          </div>
          {productJson
            ? productJson.images.map((url: string) => {
              return (
                <img
                  src={url}
                  alt=''
                  className='product-page-product-image1'
                  id=''
                />
              );
            })
            : null}
          {/* <img
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
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Product;
