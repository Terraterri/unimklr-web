import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdMyLocation } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { ImQuotesLeft } from "react-icons/im";
import { FaArrowRightLong } from "react-icons/fa6";

const BannerPart = () => {
  return (
    <>
    <section  className="banner-section"  style={{background: "url('/images/banner_img.jpg')",}}>
          <div className="auto-container">
            <div className="inner-container">
              <div className="content-box centred">
                <h2>Unimakler</h2>
                {/* <div  className="content1">
                  <h3 >
                    Where Your Property Journey Begins
                  </h3>
                </div>
                <div  className="content2">
                  <h3 >
                    Unlocking Doors to Your Ideal Home
                  </h3>
                </div>
                <div  className="content3">
                  <h3 >
                    Discover Homes that Speak to You
                  </h3>
                </div> */}
                
                <div className="hero-content-wrapper">
              <div className="search-wrapper">
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-1"
                    role="tabpanel"
                    aria-labelledby="pills-tab-1"
                    tabIndex={0}
                  >
                    <div className="search-form">
                      <form action="#">
                        <div className="row align-items-center mb-0 secrch-menu">
                          <ul className="d-flex justify-content-start ">
                            <li className="active">Buy</li>
                            <li>Rent</li>
                            {/* <li className="col_live live1">PG / Co-living</li>

                            <li className="live1">Coworking</li> */}

                            <li className="live1">New Projects</li>
                          </ul>
                        </div>
                        <div className="row align-items-center mt-0">
                          <div className="col-lg-5">
                            <div className="form-group secrch-group">
                              <SlLocationPin className="search-field-icons" />
                              <input
                                type="search"
                                id=""
                                placeholder="Search Near Hyderabad"
                              />
                              <MdMyLocation className="current-location-icon" />
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="form-group">
                            <select className="nice-select select">
                                <option value="">Property Type</option>
                                <option value={1}>Residential</option>
                                <option value={2}>Commercial</option>
                                <option value={3}>Industrial</option>
                                <option value={3}>Agriculture</option>
                              </select>
                              <AiOutlineHome className="search-field-icons" />
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <div className="form-group">
                              <select className="nice-select select">
                                <option value="">Budget</option>
                                <option value={1}>Residential</option>
                                <option value={2}>Commercial</option>
                                <option value={3}>Industrial</option>
                                <option value={3}>Agriculture</option>
                              </select>
                              <HiOutlineCurrencyRupee className="search-field-icons" />
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <a  href="#" className="theme-btn" >
                              <BiSearchAlt2 className="svg-icons" />
                              Search
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                
              </div>
            </div>
          </div>
        </section>
        
    </>
  )
}

export default BannerPart