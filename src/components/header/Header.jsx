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
        <h5 className='text-[var(--color-bg-variant)]'>Hello I'm</h5>
        <h1 className='my__name'>Cyber Aakash</h1>
        <div className="">
          <h5 className="text-light flicker">FullStack Dev.</h5>
        </div>

        {/* BUTTONS */}
        <CTA />

        {/* HEADER-SOCIALS */}
        <HeaderSocials />

        {/* MY-PIC */}
        <div className="me">
          <img src={ME} alt="me" className="scale-[1.8]" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header