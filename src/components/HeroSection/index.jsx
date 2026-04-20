import React, { useState } from 'react'
import './heroSection.css'
import credLogo from '../../common/styles/images/credLogo.svg';
import credLogo2 from '../../common/styles/images/credLogo2.svg';
import plusIcon from '../../common/styles/images/plusIcon.svg';
import arrow from '../../common/styles/images/arrow.svg';

const HeroSection = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    console.log("clicked");
    setShowMenu(prev => !prev);
  }
  return (
    <div className='hero-section-wrapper'>
      <video autoPlay loop muted className='video'>
        <source src='https://web-images.credcdn.in/v2/_next/assets/videos/landing/desktop/hero-desktop.mp4?tr=q-95' type='video/mp4' />
      </video>
      <div className='menu-wrapper'>
        <div className='flex header'>
          <div className="logo-wrapper flex ">
            <img src={credLogo} alt="CRED Logo" className="cred-logo desktop-logo" />
            <img src={credLogo2} alt="CRED Logo" className="cred-logo mobile-logo" />
            <img src={plusIcon} alt="plus icon" className="plus-icon mobile-logo" />
          </div>
          <div className="menu-button-wrapper">
            <div className="menu-card-promo only-desktop">
              <span className="promo-line1">CRED INDUSIND BANK</span>
              <span className="promo-line2">RUPAY CREDIT CARD</span>
            </div>
            <button className={`hamburger hamburger--collapse ${showMenu ? "is-active" : ""}`} type="button" onClick={toggleMenu}>
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className='flex absolute-center flex-col hero-section'>
        <div className='hero-heading'>
          crafted for the
          <br />
          creditworthy
        </div>
        <div className='hero-subheading'>
          CRED is a members-only club that enables the
          <br />
          trustworthy to make financial progress
        </div>
        <div className='footer-new non-desktop'>
          <div className='flex qr-wrapper'>
            <div className='download-text'>DOWNLOAD CRED</div>
            <img src={arrow} alt='arrow' className='hero-arrow-image' />
          </div>
        </div>
      </div>
      <div className='footer only-desktop'>
        <div className='flex qr-wrapper'>
          <img src='https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/qr-final.png' alt='CRED QR Code' className='hero-qr-image' />
          <div className='qr-text'>download <br /> CRED</div>
        </div>
      </div>


    </div>
  )
}

export default HeroSection