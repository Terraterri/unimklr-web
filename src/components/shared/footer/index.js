import React from 'react';
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-top bg-color-2">
        <div className="container-fluid">
          <div className="row clearfix">
            {/* Contact Widget */}
            <div className="col-lg-4 col-md-6 col-sm-6 footer-column">
              <div className="footer-widget contact-widget">
                <div className="footer-logo">
                  <a href="/">
                    <img
                      src="/assets/img/logo/unimakler-final.png"
                      alt="Logo"
                      width="80%"
                      className="black-logo"
                    />
                  </a>
                </div>
                <div className="offices-footer">
                  <div className="widget-title pt-3">
                    <h5>Our Offices</h5>
                  </div>
                  <select className="cities-dropdown">
                    <option value="" className="color-black">
                      Select Country
                    </option>
                    <option value="1" className="color-black">
                      India
                    </option>
                  </select>
                  <select className="cities-dropdown">
                    <option value="" selected className="color-black">
                      Select City
                    </option>
                  </select>
                </div>
                <div className="widget-title reach pt-2">
                  <h5>Reach US</h5>
                </div>
                <ul className="info-list clearfix">
                  <li>
                  <IoMdMail />
                    <a href="mailto:info@unimakler.com">info@unimakler.com</a>
                  </li>
                </ul>
                <div>
                  <ul className="icons_icons">
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=100093279117105" target="_blank" rel="noopener noreferrer">
                        
                        <FaFacebookF className='facebook_icon' />

                      </a>
                    </li>
                    <li>
                      <a href="https://x.com/unimakler138351" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter className='insta_icon' />

                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/unimakler-com/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className='facebook_icon' />

                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/unimakler/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="insta_icon" />

                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-3 col-md-6 col-sm-6 footer-column">
              <div className="footer-widget links-widget">
                <div className="widget-title">
                  <h3>Quick Links</h3>
                </div>
                <div className="widget-content">
                  <ul className="links-list">
                    <li>
                      <a href="/about">About Us</a>
                    </li>
                    <li>
                      <a href="/ourService">Our Services</a>
                    </li>
                    <li>
                      <a href="buddy-service">Buddy Service</a>
                    </li>
                    <li>
                      <a href="/Blogs">Blogs</a>
                    </li>
                    <li>
                      <a href="/Contact">Contact Us</a>
                    </li>
                    <li>
                      <a href="/Privacy-policy">Privacy policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Our Services */}
            <div className="col-lg-5 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget links-widget">
                <div className="widget-title">
                  <h3>Our Services</h3>
                </div>
                <div className="services-flex">
                  <div className="widget-content">
                    <ul className="links-list">
                      <li>
                        <a href="#">New Projects</a>
                      </li>
                      <li>
                        <a href="#">Flat for Sale</a>
                      </li>
                      <li>
                        <a href="#">Flat for Rent</a>
                      </li>
                      <li>
                        <a href="#">House for Sale</a>
                      </li>
                      <li>
                        <a href="#">House for Rent</a>
                      </li>
                      <li>
                        <a href="#">Land for Sale</a>
                      </li>
                      <li>
                        <a href="#">Plot for Sale</a>
                      </li>
                    </ul>
                  </div>
                  <div className="widget-content content">
                    <ul className="links-list">
                      <li>
                        <a href="#">Commercial Property for sale</a>
                      </li>
                      <li>
                        <a href="#">Commercial Property for Rent</a>
                      </li>
                      <li>
                        <a href="#">Shop for Sale</a>
                      </li>
                      <li>
                        <a href="#">Shop for Rent</a>
                      </li>
                      <li>
                        <a href="#">Office Space for Sale</a>
                      </li>
                      <li>
                        <a href="#">Office Space for Rent</a>
                      </li>
                      <li>
                        <a href="#">Property for Sale</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="inner-box clearfix">
            <div className="copyright pull-left">
              <p>
                <a href="#">Unimakler</a> &copy; 2023 All Right Reserved
              </p>
            </div>
            <ul className="footer-nav pull-right clearfix">
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
