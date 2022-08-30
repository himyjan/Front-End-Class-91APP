import Props from "./types/styleComponentsType";
import { useForm } from "react-hook-form";

const Checkout = ({ className }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      email: "",
      time: "not-set",
    },
  });
  return (
    <div className={className}>
      <div className="checkout-page-checkout-box" id="">
        <div className="checkout-page-cart-title-box-box" id="">
          <div className="checkout-page-cart-title-box" id="">
            <div className="check-out-page-notification-title" id="">
              購物車(3)
            </div>
            <div className="check-out-page-title-qty-text" id="">
              數量
            </div>
            <div className="check-out-page-title-price-text" id="">
              單價
            </div>
            <div className="check-out-page-title-total-text" id="">
              小計
            </div>
          </div>

          <div className="checkout-page-checkout-product-list" id="">
            <div className="checkout-page-checkout-product" id="">
              <div
                className="checkout-page-checkout-product-split-border"
                id=""
              ></div>
              <div className="checkout-page-product-box" id="">
                <img
                  src="https://cdn.discordapp.com/attachments/1001702231785099304/1007251332052295720/image.png"
                  alt=""
                  className="checkout-page-product-image"
                  id=""
                />
                <div className="checkout-page-product-spec" id="">
                  <div className="checkout-page-product-name-text" id="">
                    前開衩扭結洋裝
                  </div>
                  <div className="checkout-page-product-id-text" id="">
                    201807201824
                  </div>
                  <div className="checkout-page-product-color-text" id="">
                    顏色｜白
                  </div>
                  <div className="checkout-page-product-size-text" id="">
                    尺寸｜M
                  </div>
                </div>
                <img
                  src="https://cdn.discordapp.com/attachments/1001702231785099304/1007859059120156743/trash.png"
                  alt=""
                  className="checkout-page-remove-product-trash-image"
                  id=""
                />
              </div>
              <div className="check-out-page-item-text-box" id="">
                <div className="check-out-page-item-qty-text" id="">
                  數量
                </div>
                <div className="check-out-page-item-price-text" id="">
                  單價
                </div>
                <div className="check-out-page-item-total-text" id="">
                  小計
                </div>
              </div>
              <div className="check-out-page-item-total-price-box" id="">
                <select className="check-out-page-item-qty" id="" title="From">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                <div className="check-out-page-item-price" id="">
                  TWD.799
                </div>
                <div className="check-out-page-item-total" id="">
                  TWD.799
                </div>
              </div>
            </div>
            <div className="checkout-page-checkout-product" id="">
              <div
                className="checkout-page-checkout-product-split-border"
                id=""
              ></div>
              <div className="checkout-page-product-box" id="">
                <img
                  src="https://cdn.discordapp.com/attachments/1001702231785099304/1007251332052295720/image.png"
                  alt=""
                  className="checkout-page-product-image"
                  id=""
                />
                <div className="checkout-page-product-spec" id="">
                  <div className="checkout-page-product-name-text" id="">
                    前開衩扭結洋裝
                  </div>
                  <div className="checkout-page-product-id-text" id="">
                    201807201824
                  </div>
                  <div className="checkout-page-product-color-text" id="">
                    顏色｜白
                  </div>
                  <div className="checkout-page-product-size-text" id="">
                    尺寸｜M
                  </div>
                </div>
                <img
                  src="https://cdn.discordapp.com/attachments/1001702231785099304/1007859059120156743/trash.png"
                  alt=""
                  className="checkout-page-remove-product-trash-image"
                  id=""
                />
              </div>
              <div className="check-out-page-item-text-box" id="">
                <div className="check-out-page-item-qty-text" id="">
                  數量
                </div>
                <div className="check-out-page-item-price-text" id="">
                  單價
                </div>
                <div className="check-out-page-item-total-text" id="">
                  小計
                </div>
              </div>
              <div className="check-out-page-item-total-price-box" id="">
                <select className="check-out-page-item-qty" id="" title="From">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                <div className="check-out-page-item-price" id="">
                  TWD.799
                </div>
                <div className="check-out-page-item-total" id="">
                  TWD.799
                </div>
              </div>
            </div>
            <div className="checkout-page-checkout-product" id="">
              <div
                className="checkout-page-checkout-product-split-border"
                id=""
              ></div>
              <div className="checkout-page-product-box" id="">
                <img
                  src="https://cdn.discordapp.com/attachments/1001702231785099304/1007251332052295720/image.png"
                  alt=""
                  className="checkout-page-product-image"
                  id=""
                />
                <div className="checkout-page-product-spec" id="">
                  <div className="checkout-page-product-name-text" id="">
                    前開衩扭結洋裝
                  </div>
                  <div className="checkout-page-product-id-text" id="">
                    201807201824
                  </div>
                  <div className="checkout-page-product-color-text" id="">
                    顏色｜白
                  </div>
                  <div className="checkout-page-product-size-text" id="">
                    尺寸｜M
                  </div>
                </div>
                <img
                  src="https://cdn.discordapp.com/attachments/1001702231785099304/1007859059120156743/trash.png"
                  alt=""
                  className="checkout-page-remove-product-trash-image"
                  id=""
                />
              </div>
              <div className="check-out-page-item-text-box" id="">
                <div className="check-out-page-item-qty-text" id="">
                  數量
                </div>
                <div className="check-out-page-item-price-text" id="">
                  單價
                </div>
                <div className="check-out-page-item-total-text" id="">
                  小計
                </div>
              </div>
              <div className="check-out-page-item-total-price-box" id="">
                <select className="check-out-page-item-qty" id="" title="From">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                <div className="check-out-page-item-price" id="">
                  TWD.799
                </div>
                <div className="check-out-page-item-total" id="">
                  TWD.799
                </div>
              </div>
            </div>
          </div>

          <div className="" id="">
            <div className="" id="">
              配送國家
            </div>
            <select className="amount" id="" title="From">
              <option value="TW">臺灣及離島</option>
            </select>
            <div className="" id="">
              付款方式
            </div>
            <select className="amount" id="" title="From">
              <option value="creditCard">信用卡付款</option>
            </select>
          </div>

          <div className="" id="">
            ※提醒您：
            <br />
            ●選擇宅配-請填寫正確收件人資訊，避免包裹配送不達
            <br />
            ●選擇超商-請填寫正確收件人姓名(與證件相符)，避免無法領取
          </div>

          <div id="cart-title-box">
            <div id="cart-title">訂購資料</div>
          </div>

          <div id="split-border"></div>

          <div className="" id="">
            <form
              onSubmit={handleSubmit((data) => {
                console.log(data);
              })}
            >
              <div className="" id="">
                收件人姓名
              </div>
              <input
                {...register("name", {
                  required: "此欄位必填",
                  minLength: { value: 2, message: "最短兩字" },
                })}
                placeholder="收件人姓名"
                className="checkout-page-name-input"
              />
              <div className="" id="">
                {errors.name?.message}
              </div>
              <div className="" id="">
                務必填寫完整收件人姓名，避免包裹無法順利簽收
              </div>
              <div className="" id="">
                手機
              </div>
              <input
                {...register("phone", {
                  required: "此欄位必填",
                  minLength: {
                    value: 10,
                    message:
                      "請輸入正確手機號碼:\n\n前兩碼須為09\n共10個數字\n僅限數字不得有任何符號",
                  },
                  pattern: /^09[0-9]{8}$/,
                })}
                placeholder="手機"
                className="checkout-page-phone-input"
              />
              <div className="" id="">
                {errors.phone?.message}
              </div>
              <div className="" id="">
                地址
              </div>
              <input
                {...register("address", {
                  required: "此欄位必填",
                  minLength: { value: 3, message: "最短三字" },
                })}
                placeholder="地址"
                className="checkout-page-address-input"
              />
              <div className="" id="">
                {errors.address?.message}
              </div>
              <div className="" id="">
                Email
              </div>
              <input
                {...register("email", {
                  required: "請輸入正確的email格式",
                  minLength: { value: 2, message: "最短兩字" },
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                })}
                placeholder="Email"
                className="checkout-page-email-input"
              />
              <div className="" id="">
                {errors.email?.message}
              </div>
              <input
                {...register("time")}
                type="radio"
                id="08:00-12:00"
                className="time"
                value="08:00-12:00"
              />
              <label data-for="08:00-12:00">08:00-12:00</label>
              <br />
              <input
                {...register("time", {
                  required: "請輸入正確的email格式",
                })}
                type="radio"
                id="14:00-18:00"
                className="time"
                value="14:00-18:00"
              />
              <label data-for="14:00-18:00">14:00-18:00</label>
              <br />
              <input
                {...register("time")}
                type="radio"
                id="not-set"
                className="time"
                value="not-set"
              />
              <label data-for="not-set">不指定</label>
              <input type="submit" />
              <div className="" id="">
                {errors.time?.message}
              </div>
            </form>
            {/* <div className="" id="">
              <div id="cart-title">收件人姓名</div>
              <input
                type="text"
                placeholder="收件人姓名"
                title="input-name"
                value=""
                className="checkout-page-name-input"
                id=""
              />
            </div>
            <div className="" id="">
              務必填寫完整收件人姓名，避免包裹無法順利簽收
            </div>
            <div className="" id="">
              <div id="cart-title">手機</div>
              <input
                type="text"
                placeholder="手機"
                title="input-phone-number"
                value=""
                className="checkout-page-phone-number-input"
                id=""
              />
            </div>
            <div className="" id="">
              <div id="cart-title">地址</div>
              <input
                type="text"
                placeholder="地址"
                title="input-address"
                value=""
                className="checkout-page-address-input"
                id=""
              />
            </div>
            <div className="" id="">
              <div id="cart-title">Email</div>
              <input
                type="text"
                placeholder="Email"
                title="input-email"
                value=""
                className="checkout-page-email-input"
                id=""
              />
            </div>
            <div className="" id="">
              <div id="cart-title">配送時間</div>
              <div className="checkout-page-receive-time-input" id="">
                <input
                  type="radio"
                  id="08:00-12:00"
                  className="time"
                  value="08:00-12:00"
                />
                <label data-for="08:00-12:00">08:00-12:00</label>
                <br />
                <input
                  type="radio"
                  id="14:00-18:00"
                  className="time"
                  value="14:00-18:00"
                />
                <label data-for="14:00-18:00">14:00-18:00</label>
                <br />
                <input
                  type="radio"
                  id="not-set"
                  className="time"
                  value="not-set"
                />
                <label data-for="not-set">不指定</label>
              </div>
            </div> */}
          </div>

          <div id="cart-title-box">
            <div id="cart-title">付款資料</div>
          </div>

          <div id="split-border"></div>
          <div className="" id="">
            <div className="checkout-page-tap-pay-card-number-box" id="">
              <div id="cart-title">信用卡號碼</div>
              <input
                type="text"
                placeholder="**** **** **** ****"
                title="input-credit-card-number"
                value=""
                className="checkout-page-card-number-input"
                id=""
              />
            </div>
            <div
              className="checkout-page-tap-pay-card-expiration-date-box"
              id=""
            >
              <div className="cart-title" id="">
                有效期限
              </div>
              <input
                type="text"
                placeholder="MM / YY"
                title="input-credit-card-valid-month"
                value=""
                className="checkout-page-card-expiration-date-input"
                id=""
              />
            </div>
            <div className="checkout-page-tap-pay-card-ccv-box" id="">
              <div className="cart-title" id="">
                安全碼
              </div>
              <input
                type="text"
                placeholder="後三碼"
                title="input-credit-card-CSC"
                value=""
                className="checkout-page-card-ccv-input"
                id=""
              />
            </div>
            <div id="product-info">
              <div>
                <div className="" id="">
                  <div id="product-className">總金額</div>
                  <div id="product-className">NT.</div>
                  <div className="checkout-page-amount-text" id="">
                    2397
                  </div>
                </div>
                <div className="" id="">
                  <div id="product-className">運費</div>
                  <div id="product-className">NT.</div>
                  <div className="checkout-page-delivery-fee-text" id="">
                    30
                  </div>
                </div>

                <div id="split-border"></div>

                <div className="" id="">
                  <div id="product-className">應付金額</div>
                  <div id="product-className">NT.</div>
                  <div className="checkout-page-total-text" id="">
                    2427
                  </div>
                </div>
              </div>

              <div className="checkout-page-submit-order" id="">
                確認付款
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
