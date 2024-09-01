import React from "react";
import "./home.css";
import HeroSection from "../herosection/HeroSection";
import About from "../aboutUs/About";
import Services from "../services/Services";
import Features from "../feautures/Features";
import Testimonial from "../testimonial/Testimonial";
import Footer from "../footer/Footer";

const Home = () => (
  <div className="home-page">
    <HeroSection />
    <About />
    <Services />
    <Features/>
    <Testimonial/>
    <Footer/>
  </div>
);

export default Home;
