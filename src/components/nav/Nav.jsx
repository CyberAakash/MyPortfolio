import React from 'react';

import "./Nav.css";

// ICONS
import {AiOutlineHome} from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import {BiBook} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri";
import {BiMessageSquareDetail} from "react-icons/bi";
import {SiRobotframework} from "react-icons/si";

import { useState, useEffect } from 'react';


const Nav = () => {
  // Set Active Nav
  const [activeNav, setActiveNav] = useState("#");

  //navbar scroll changeBackground function
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 860) {
      setActiveNav("#about");
    }
    if (window.scrollY >= 1560) {
      setActiveNav("#experience");
    }
    if (window.scrollY >= 2230) {
      setActiveNav("#services");
    }
    if (window.scrollY >= 3570) {
      setActiveNav("#portfolio");
    }
    if (window.scrollY >= 5180) {
      setActiveNav("#contact");
    }
    if (window.scrollY == 0) {
      setActiveNav("#");
    }
  };

    useEffect(() => {
      changeBackground();
      // adding the event when scroll change background
      window.addEventListener("scroll", changeBackground );
    });

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <SiRobotframework />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Nav