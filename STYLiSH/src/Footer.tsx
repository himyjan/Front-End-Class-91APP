import styled from "styled-components";
import FooterStyledComponents from "./styledComponents/Footer.style";
import mediaQuery from "./styledComponents/mediaQuery";

type Props = {
  className: string;
};

const Footer = ({ className }: Props) => {
  return (
    <footer className={className}>
      <div className="bottom-nav-bar-desktop-box">
        <div className="bottom-nav-bar-desktop-links">
          <div className="bottom-nav-bar-desktop-info-about">
            <div className="bottom-nav-bar-desktop-info-about-link">
              關於 STYLiSH
            </div>
          </div>
          <div className="bottom-nav-bar-desktop-info-service-terms">
            <div className="bottom-nav-bar-desktop-info-service-terms-link">
              服務條款
            </div>
          </div>
          <div className="bottom-nav-bar-desktop-privacy-policy">
            <div className="bottom-nav-bar-desktop-privacy-policy-link">
              隱私政策
            </div>
          </div>
          <div className="bottom-nav-bar-desktop-contact-us">
            <div className="bottom-nav-bar-desktop-contact-us-link">
              聯絡我們
            </div>
          </div>
          <div className="bottom-nav-bar-desktop-frequently-asked-questions">
            <div className="bottom-nav-bar-desktop-frequently-asked-questions-link">
              FAQ
            </div>
          </div>
        </div>
        <div className="bottom-nav-bar-desktop-social-media-links">
          <div>
            <div className="bottom-nav-bar-desktop-line-image-link">
              <img
                src="https://cdn.discordapp.com/attachments/1001702231785099304/1007138279856017418/line.png"
                alt=""
                className="bottom-nav-bar-desktop-line-image"
              />
            </div>
          </div>
          <div>
            <div className="bottom-nav-bar-desktop-twitter-image-link">
              <img
                src="https://cdn.discordapp.com/attachments/1001702231785099304/1007138279512080465/twitter.png"
                alt=""
                className="bottom-nav-bar-desktop-twitter-image"
              />
            </div>
          </div>
          <div>
            <div className="bottom-nav-bar-desktop-facebook-image-link">
              <img
                src="https://cdn.discordapp.com/attachments/1001702231785099304/1007138280220917851/facebook.png"
                alt=""
                className="bottom-nav-bar-desktop-facebook-image"
              />
            </div>
          </div>
          <div className="bottom-nav-bar-desktop-all-rights-reserved">
            © 2018. All rights reserved.
          </div>
        </div>
      </div>

      <div className="bottom-nav-bar-mobile-box-box">
        <div className="bottom-nav-bar-mobile-box">
          <div className="bottom-nav-bar-mobile-contactlist">
            <div className="bottom-nav-bar-mobile-links-part1">
              <div className="bottom-nav-bar-mobile-info-about">
                <div className="bottom-nav-bar-mobile-info-about-link">
                  關於 STYLiSH
                </div>
              </div>
              <div className="bottom-nav-bar-mobile-info-service-terms">
                <div className="bottom-nav-bar-mobile-info-service-terms-link">
                  服務條款
                </div>
              </div>
              <div className="bottom-nav-bar-mobile-privacy-policy">
                <div className="bottom-nav-bar-mobile-privacy-policy-link">
                  隱私政策
                </div>
              </div>
            </div>
            <div className="bottom-nav-bar-mobile-links-part2">
              <div className="bottom-nav-bar-mobile-contact-us">
                <div className="bottom-nav-bar-mobile-contact-us-link">
                  聯絡我們
                </div>
              </div>
              <div className="bottom-nav-bar-mobile-frequently-asked-questions">
                <div className="bottom-nav-bar-mobile-frequently-asked-questions-link">
                  FAQ
                </div>
              </div>
            </div>
            <div className="bottom-nav-bar-mobile-social-media-links">
              <div>
                <div className="bottom-nav-bar-mobile-line-image-link">
                  <img
                    src="https://cdn.discordapp.com/attachments/1001702231785099304/1007138279856017418/line.png"
                    alt=""
                    className="bottom-nav-bar-mobile-line-image"
                  />
                </div>
              </div>
              <div>
                <div className="bottom-nav-bar-mobile-twitter-image-link">
                  <img
                    src="https://cdn.discordapp.com/attachments/1001702231785099304/1007138279512080465/twitter.png"
                    alt=""
                    className="bottom-nav-bar-mobile-twitter-image"
                  />
                </div>
              </div>
              <div>
                <div className="bottom-nav-bar-mobile-facebook-image-link">
                  <img
                    src="https://cdn.discordapp.com/attachments/1001702231785099304/1007138280220917851/facebook.png"
                    alt=""
                    className="bottom-nav-bar-mobile-facebook-image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-nav-bar-mobile-all-rights-reserved">
            © 2018. All rights reserved.
          </div>
        </div>
      </div>

      <div className="bottom-nav-bar-mobile-stick">
        <div className="bottom-nav-bar-mobile-stick-cart">
          <div className="bottom-nav-bar-mobile-stick-shopping-cart-box">
            <div className="bottom-nav-bar-mobile-stick-shopping-cart-image-link">
              <img
                src="https://cdn.discordapp.com/attachments/1001702231785099304/1006534620352880671/image.png"
                alt=""
                className="bottom-nav-bar-mobile-stick-shopping-cart-image"
              />
            </div>
            <div className="bottom-nav-bar-mobile-stick-shopping-cart-text">
              購物車
            </div>
            <div className="bottom-nav-bar-mobile-stick-shopping-cart-notification-numbers">
              <div className="bottom-nav-bar-mobile-stick-shopping-cart-notification-animation"></div>
              <div className="bottom-nav-bar-mobile-stick-shopping-cart-notification-numbers-text">
                1
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-nav-bar-mobile-stick-shopping-profile-box">
          <div className="bottom-nav-bar-mobile-stick-shopping-profile-box-link">
            <img
              src="https://cdn.discordapp.com/attachments/1001702231785099304/1006055670895890453/profile.png"
              alt=""
              className="bottom-nav-bar-mobile-stick-shopping-profile-box-image"
            />
          </div>
          <div className="bottom-nav-bar-mobile-stick-shopping-profile-box-text">
            會員
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
