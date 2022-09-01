import Props from "./types/styleComponentsType";
import { Link } from "@tanstack/react-location";
import { useRef } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import { isLoadingStateContext } from "./lib/isLoadingStateCreateContext";

const Footer = ({ className }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  return (
    <isLoadingStateContext.Provider value={isVisible}>
      <footer className={className} ref={ref} data-visible={isVisible}>
        <div className="bottom-nav-bar-desktop">
          <div className="bottom-nav-bar-desktop-box">
            <div className="bottom-nav-bar-desktop-about">
              <Link to="aboutus" className="bottom-nav-bar-desktop-about-link">
                關於 STYLiSH
              </Link>
            </div>
            <div className="bottom-nav-bar-desktop-service-terms">
              <Link
                to="serviceterms"
                className="bottom-nav-bar-desktop-service-terms-link"
              >
                服務條款
              </Link>
            </div>
            <div className="bottom-nav-bar-desktop-privacy-policy">
              <Link
                to="privacypolicy"
                className="bottom-nav-bar-desktop-privacy-policy-link"
              >
                隱私政策
              </Link>
            </div>
            <div className="bottom-nav-bar-desktop-contact-us">
              <Link
                to="contactus"
                className="bottom-nav-bar-desktop-contact-us-link"
              >
                聯絡我們
              </Link>
            </div>
            <div className="bottom-nav-bar-desktop-frequently-asked-questions">
              <Link
                to="FAQ"
                className="bottom-nav-bar-desktop-frequently-asked-questions-link"
              >
                FAQ
              </Link>
            </div>
          </div>
          <div className="bottom-nav-bar-desktop-social-media-links">
            <div className="bottom-nav-bar-desktop-line-image-box">
              <Link
                to="line"
                className="bottom-nav-bar-desktop-line-image-link"
              >
                <img
                  src="https://cdn.discordapp.com/attachments/1001702231785099304/1007138279856017418/line.png"
                  alt=""
                  className="bottom-nav-bar-desktop-line-image"
                />
              </Link>
            </div>
            <div className="bottom-nav-bar-desktop-twitter-image-box">
              <Link
                to="twitter"
                className="bottom-nav-bar-desktop-twitter-image-link"
              >
                <img
                  src="https://cdn.discordapp.com/attachments/1001702231785099304/1007138279512080465/twitter.png"
                  alt=""
                  className="bottom-nav-bar-desktop-twitter-image"
                />
              </Link>
            </div>
            <div className="bottom-nav-bar-desktop-facebook-image-box">
              <Link
                to="facebook"
                className="bottom-nav-bar-desktop-facebook-image-link"
              >
                <img
                  src="https://cdn.discordapp.com/attachments/1001702231785099304/1007138280220917851/facebook.png"
                  alt=""
                  className="bottom-nav-bar-desktop-facebook-image"
                />
              </Link>
            </div>
            <div className="bottom-nav-bar-desktop-all-rights-reserved">
              © 2018. All rights reserved.
            </div>
          </div>
        </div>

        <div className="bottom-nav-bar-mobile">
          <div className="bottom-nav-bar-mobile-box">
            <div className="bottom-nav-bar-mobile-contactlist">
              <div className="bottom-nav-bar-mobile-links-part1">
                <div className="bottom-nav-bar-mobile-about">
                  <Link
                    to="aboutus"
                    className="bottom-nav-bar-mobile-about-link"
                  >
                    關於 STYLiSH
                  </Link>
                </div>
                <div className="bottom-nav-bar-mobile-service-terms">
                  <Link
                    to="serviceterms"
                    className="bottom-nav-bar-mobile-service-terms-link"
                  >
                    服務條款
                  </Link>
                </div>
                <div className="bottom-nav-bar-mobile-privacy-policy">
                  <Link
                    to="privacypolicy"
                    className="bottom-nav-bar-mobile-privacy-policy-link"
                  >
                    隱私政策
                  </Link>
                </div>
              </div>
              <div className="bottom-nav-bar-mobile-links-part2">
                <div className="bottom-nav-bar-mobile-contact-us">
                  <Link
                    to="contactus"
                    className="bottom-nav-bar-mobile-contact-us-link"
                  >
                    聯絡我們
                  </Link>
                </div>
                <div className="bottom-nav-bar-mobile-frequently-asked-questions">
                  <Link
                    to="FAQ"
                    className="bottom-nav-bar-mobile-frequently-asked-questions-link"
                  >
                    FAQ
                  </Link>
                </div>
              </div>
              <div className="bottom-nav-bar-mobile-social-media-links">
                <div className="bottom-nav-bar-mobile-line-image-box">
                  <Link
                    to="line"
                    className="bottom-nav-bar-mobile-line-image-link"
                  >
                    <img
                      src="https://cdn.discordapp.com/attachments/1001702231785099304/1007138279856017418/line.png"
                      alt=""
                      className="bottom-nav-bar-mobile-line-image"
                    />
                  </Link>
                </div>
                <div className="bottom-nav-bar-mobile-twitter-image-box">
                  <Link
                    to="twitter"
                    className="bottom-nav-bar-mobile-twitter-image-link"
                  >
                    <img
                      src="https://cdn.discordapp.com/attachments/1001702231785099304/1007138279512080465/twitter.png"
                      alt=""
                      className="bottom-nav-bar-mobile-twitter-image"
                    />
                  </Link>
                </div>
                <div className="bottom-nav-bar-mobile-facebook-image-box">
                  <Link
                    to="facebook"
                    className="bottom-nav-bar-mobile-facebook-image-link"
                  >
                    <img
                      src="https://cdn.discordapp.com/attachments/1001702231785099304/1007138280220917851/facebook.png"
                      alt=""
                      className="bottom-nav-bar-mobile-facebook-image"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="bottom-nav-bar-mobile-all-rights-reserved">
              © 2018. All rights reserved.
            </div>
          </div>
        </div>

        <div className="bottom-nav-bar-mobile-stick">
          <Link to="checkout" className="bottom-nav-bar-mobile-stick-cart">
            <div className="bottom-nav-bar-mobile-stick-shopping-cart">
              <div className="bottom-nav-bar-mobile-stick-shopping-cart-image-box">
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
          </Link>
          <Link
            to="profile"
            className="bottom-nav-bar-mobile-stick-shopping-profile"
          >
            <div className="bottom-nav-bar-mobile-stick-shopping-profile-image-box">
              <img
                src="https://cdn.discordapp.com/attachments/1001702231785099304/1006055670895890453/profile.png"
                alt=""
                className="bottom-nav-bar-mobile-stick-shopping-profile-image"
              />
            </div>
            <div className="bottom-nav-bar-mobile-stick-shopping-profile-text">
              會員
            </div>
          </Link>
        </div>
      </footer>
    </isLoadingStateContext.Provider>
  );
};

export default Footer;
