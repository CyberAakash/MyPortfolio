import { useState } from 'react';
import './App.css'

// Components Import
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experiance from "./components/experiance/Experiance";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";



function App() {

  window.addEventListener(
    "contextmenu",
    (e) => {
      e.preventDefault();
    },
    false
  );

  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experiance />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App
