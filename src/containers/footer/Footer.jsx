import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";


const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>

      <div className="gpt3__footer-btn">
        <a>Request Early Access</a>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <a href="">Links</a>
          <a href="">Overons</a>
          <a href="">Social Media</a>
          <a href="">Counters</a>
          <a href="">Contact</a>
        </div>
        <div className="gpt3__footer-links_div">
          <a href="">Company</a>
          <a href="">Terms & Conditions</a>
          <a href="">Privacy Policy Media</a>
          <a href="">Contact</a>
        </div>
        <div className="gpt3__footer-links_div">
          <a href="">Get in touch</a>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <a href="">info@payme.net</a>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
      <p>@2021 GPT-3. All rights reserved.</p>
    </div>

    </div>
  );
};

export default Footer;
