import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaUserLarge } from "react-icons/fa6";
import { BiSolidLogIn } from "react-icons/bi";
import { FaBars } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";



const index = () => {
  return (
    
    <div>
       <header  className="main-header">
       <div className="header-top">
   <div className="top-inner clearfix">
     <div className="left-column pull-left">
       <ul className="info clearfix"></ul>
     </div>
     <div className="right-column pull-right">
       <div className="sign-box">
         <Link href="#">
         <FaUserLarge /> Login </Link>
       </div>
       <div className="sign-box">
         <Link href="#">
         <BiSolidLogIn /> Register </Link>
       </div>
     </div>
   </div>
 </div>
        </header>
        
        <nav  className="nav-header">
        <div className="header-lower">
    <div className="container-fluid">
      <div className="outer-box">
        <div className="main-box">
          <div className="logo-box">
            <Link routerlink="/" href="/">
            <img src="/images/unimaklerlogo.png" alt />
            </Link>
          </div>
          <div className="menu-area">
            <button className="mobile-nav-toggler"></button>
            <div className="main-menu navbar-expand-md navbar-light">
              <div className="collapse navbar-collapse">
                <ul className="navigation">
                  <li>
                    <Link href="/">
                    <span>Home</span>
                    </Link>
                  </li>
                  <li className="dropdown">
                    <Link href="/javascript:(0  )">
                    <span>About Us</span> 
                    <MdKeyboardArrowDown />
                    </Link>
                    <ul>
                      <li>
                        <Link href="/aboutus">About Us</Link>
                      </li>
                      <li>
                        <Link href="/services">Our Services</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/international">
                    <span>International</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://unimakler.com/unimakler_landingpage/">
                    <span>Partner With Us</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/buddy-services">
                    <span>Buddy Services</span>
                    </Link>
                  </li>
                  <li className="dropdown">
                    <Link href="/javascript:void%280%29">
                    <span>Emi Calculator</span>
                    <MdKeyboardArrowDown />
                    </Link>
                    <ul>
                      <li>
                        <Link href="/emi-calculator">Emi Calculator</Link>
                      </li>
                      <li>
                        <Link href="/emi-calculator">Homeloan Calculator</Link>
                      </li>
                      <li>
                        <Link href="/eligibility-calculator">Eligibility Calculator</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown toggle">
                    <span className="bar_ot"><FaBars /></span>
                    <ul>
                      <li>
                        <Link href="/contactus">Contact</Link>
                      </li>
                      <li>
                        <Link href="/carrers">Careers</Link>
                      </li>
                      <li>
                        <Link href="/blogs">Blogs</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <Link className="theme-btn btn-one" href="/%23">Post Your Property</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
        </nav>

    </div>
  )
}

export default index