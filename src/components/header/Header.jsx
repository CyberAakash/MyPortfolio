import React from 'react';

import CTA from "./CTA";
import HeaderSocials from './HeaderSocials';

// My-PIC
import ME from "../../assets/lastPic.png";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Cyber Aakash</h1>
        <h5 className='text-light'>FullStack dev.</h5>
        {/* BUTTONS */}
        <CTA />

        {/* HEADER-SOCIALS */}
        <HeaderSocials />

        {/* MY-PIC */}
        <div className='me'>
          <img src={ME} alt="me" className='scale-[1.6]' />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header