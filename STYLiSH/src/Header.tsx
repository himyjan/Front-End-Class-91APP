import styled from "styled-components";
import HeaderStyledComponents from "./styledComponents/Header.style";
import mediaQuery from "./styledComponents/mediaQuery";
import Props from "./types/styleComponentsType";

const navList = ["女裝", "男裝", "配件"];
const Header = ({ className }: Props) => {
  return (
    <header className={className}>
      <nav className="top-nav">
        <div className="top-nav-bar-box">
          <div className="top-nav-bar-website-logo-link">
            <img
              src="https://cdn.discordapp.com/attachments/1001702231785099304/1006055669914406982/logo.png"
              alt=""
              className="top-nav-bar-website-logo"
            />
          </div>
          <div className="top-nav-bar-desktop-women-dresses">
            <div className="top-nav-bar-desktop-women-dresses-link">女裝</div>
          </div>
          <div className="top-nav-bar-desktop-men-dresses">
            <div className="top-nav-bar-desktop-men-dresses-link">男裝</div>
          </div>
          <div className="top-nav-bar-desktop-accessories">
            <div className="top-nav-bar-desktop-accessories-link">配件</div>
          </div>

          <input
            type="text"
            placeholder=""
            title="search-bar"
            value=""
            className="top-nav-bar-desktop-search-bar"
          />

          <div className="top-nav-bar-desktop-shopping-cart-box">
            <div className="top-nav-bar-desktop-shopping-cart-box-link">
              <img
                src="https://cdn.discordapp.com/attachments/1001702231785099304/1007154394585894962/image.png"
                alt=""
                className="top-nav-bar-desktop-shopping-cart-image"
              />
            </div>
            <div className="top-nav-bar-desktop-shopping-cart-notification-numbers">
              <div className="top-nav-bar-desktop-shopping-cart-notification-animation"></div>
              <div className="top-nav-bar-desktop-shopping-cart-notification-numbers-text">
                1
              </div>
            </div>
          </div>

          <div className="top-nav-bar-desktop-profile-box">
            <img
              src="https://cdn.discordapp.com/attachments/1001702231785099304/1007154394904666112/profile.png"
              alt=""
              className="top-nav-bar-desktop-profile"
            />
          </div>

          <input
            type="text"
            placeholder=""
            title="search-bar"
            value=""
            className="top-nav-bar-mobile-search"
          />
        </div>

        <div className="top-nav-bar-below">
          <div className="top-nav-bar-below-mobile-women-dresses">
            <div className="top-nav-bar-below-mobile-women-dresses-link">
              女裝
            </div>
          </div>
          <div className="top-nav-bar-below-mobile-men-dresses">
            <div className="top-nav-bar-below-mobile-men-dresses-link">
              男裝
            </div>
          </div>
          <div className="top-nav-bar-below-mobile-accessories">
            <div className="top-nav-bar-below-mobile-accessories-link">
              配件
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
