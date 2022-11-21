import Props from './types/styleComponentsType';
import { Link } from '@tanstack/react-router';

const Header = ({ className }: Props) => {
  return (
    <header className={className}>
      <nav className='top-nav'>
        <div className='top-nav-bar-box'>
          <Link to='.' className='top-nav-bar-website-logo-link'>
            <img
              src='https://cdn.discordapp.com/attachments/1001702231785099304/1006055669914406982/logo.png'
              alt=''
              className='top-nav-bar-website-logo'
            />
          </Link>
          <div className='top-nav-bar-desktop-women-dresses'>
            <Link
              to='?category=women'
              className='top-nav-bar-desktop-women-dresses-link'
            >
              女裝
            </Link>
          </div>
          <div className='top-nav-bar-desktop-men-dresses'>
            <Link
              to='?category=men'
              className='top-nav-bar-desktop-men-dresses-link'
            >
              男裝
            </Link>
          </div>
          <div className='top-nav-bar-desktop-accessories'>
            <Link
              to='?category=accessories'
              className='top-nav-bar-desktop-accessories-link'
            >
              配件
            </Link>
          </div>

          <input
            type='text'
            placeholder=''
            title='search-bar'
            value=''
            className='top-nav-bar-desktop-search-bar'
          />

          <div className='top-nav-bar-desktop-shopping-cart-box'>
            <Link
              to='checkout'
              className='top-nav-bar-desktop-shopping-cart-box-link'
            >
              <img
                src='https://cdn.discordapp.com/attachments/1001702231785099304/1007154394585894962/image.png'
                alt=''
                className='top-nav-bar-desktop-shopping-cart-image'
              />
              <div className='top-nav-bar-desktop-shopping-cart-notification-numbers'>
                <div className='top-nav-bar-desktop-shopping-cart-notification-animation'></div>
                <div className='top-nav-bar-desktop-shopping-cart-notification-numbers-text'>
                  1
                </div>
              </div>
            </Link>
          </div>

          <div className='top-nav-bar-desktop-profile-box'>
            <Link to='profile' className='top-nav-bar-desktop-profile-link'>
              <img
                src='https://cdn.discordapp.com/attachments/1001702231785099304/1007154394904666112/profile.png'
                alt=''
                className='top-nav-bar-desktop-profile-image'
              />
            </Link>
          </div>

          <input
            type='text'
            placeholder=''
            title='search-bar'
            value=''
            className='top-nav-bar-mobile-search'
          />
        </div>

        <div className='top-nav-bar-below'>
          <div className='top-nav-bar-below-mobile-women-dresses'>
            <Link
              to='?category=women'
              className='top-nav-bar-below-mobile-women-dresses-link'
            >
              女裝
            </Link>
          </div>
          <div className='top-nav-bar-below-mobile-men-dresses'>
            <Link
              to='?category=men'
              className='top-nav-bar-below-mobile-men-dresses-link'
            >
              男裝
            </Link>
          </div>
          <div className='top-nav-bar-below-mobile-accessories'>
            <Link
              to='?category=accessories'
              className='top-nav-bar-below-mobile-accessories-link'
            >
              配件
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
