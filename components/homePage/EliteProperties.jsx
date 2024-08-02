"use client";
import React from 'react'
import { MdMyLocation } from "react-icons/md";
import Slider from "react-slick"; 
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const EliteProperties = () => {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className="right_icon"><IoIosArrowForward
        color="black"
        // className={className}
        style={{
          ...style,
          display: "block",
        }}
        onClick={onClick}
        size={50}
      />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className="left_icon">
        <IoIosArrowBack
        color="black"
        // className={className}
        style={{
          ...style,
          display: "block",
        }}
        onClick={onClick}
        size={50}
      /></div>
    );
  }

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "600px",
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    swipeToSlide: true,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
   <>

<section className="feature-section sec-pad hor-line">
  <div className="auto-container">
    <div className="sec-title centred">
      <h2><span className="left_lne"></span> Elite Property <span className="right_lne"></span></h2>
    </div>

    {/* <div className="single-item">
      <div className="row clearfix">
        <div className="col-lg-5 col-md-5 col-sm-12 deals-block">
          <div className="deals-block-one">
            <div className="inner-box">
              <div className="batch">
                <i className="icon-11"></i>
              </div>
              <div className="lower-content">
                <div className="title-text">
                  <h4>
                    <a href="#">Mercury Township</a>
                  </h4>
                </div>
                <div className="price-box clearfix">
                  <div className="price-info pull-left">
                    <p> By: Divyasri Group </p>
                    <p> @Pharma City, Hyderabad </p>
                    <p> 157 - 1,097 Sq Ft </p>
                    <h6> Price </h6>
                    <h4> ₹23.55 lakhs onwards </h4>
                  </div>
                </div>
                <div className="btn-box">
                  <a href="/single-properties" className="btn-lht">View <MdMyLocation className="current-location-icon" /> </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-md-7 col-sm-12 deals-block">
          <div className="triangle triangle-4"></div>
          <div className="image-box">
            <img src="/images/banner_img.jpg" alt="" />
          </div>
        </div>
      </div>
    </div> */}

      <div className="slider-container">
      <Slider {...settings}>
        <div className="elite_lists">
            <div className="single-item">
            <div className="row clearfix">
              <div className="col-lg-5 col-md-5 col-sm-12 deals-block">
                <div className="deals-block-one">
                  <div className="inner-box">
                    <div className="batch">
                      <i className="icon-11"></i>
                    </div>
                    <div className="lower-content">
                      <div className="title-text">
                        <h4>
                          <a href="#">Mercury Township</a>
                        </h4>
                      </div>
                      <div className="price-box clearfix">
                        <div className="price-info pull-left">
                          <p> By: Divyasri Group </p>
                          <p> @Pharma City, Hyderabad </p>
                          <p> 157 - 1,097 Sq Ft </p>
                          <h6> Price </h6>
                          <h4> ₹23.55 lakhs onwards </h4>
                        </div>
                      </div>
                      <div className="btn-box">
                        <a href="/single-properties" className="btn-lht">View <MdMyLocation className="current-location-icon" /> </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-12 deals-block">
                <div className="triangle triangle-4"></div>
                <div className="image-box">
                  <img src="/images/banner_img.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elite_lists">
            <div className="single-item">
            <div className="row clearfix">
              <div className="col-lg-5 col-md-5 col-sm-12 deals-block">
                <div className="deals-block-one">
                  <div className="inner-box">
                    <div className="batch">
                      <i className="icon-11"></i>
                    </div>
                    <div className="lower-content">
                      <div className="title-text">
                        <h4>
                          <a href="#">Mercury Township</a>
                        </h4>
                      </div>
                      <div className="price-box clearfix">
                        <div className="price-info pull-left">
                          <p> By: Divyasri Group </p>
                          <p> @Pharma City, Hyderabad </p>
                          <p> 157 - 1,097 Sq Ft </p>
                          <h6> Price </h6>
                          <h4> ₹23.55 lakhs onwards </h4>
                        </div>
                      </div>
                      <div className="btn-box">
                        <a href="/single-properties" className="btn-lht">View <MdMyLocation className="current-location-icon" /> </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-12 deals-block">
                <div className="triangle triangle-4"></div>
                <div className="image-box">
                  <img src="/images/banner_img.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elite_lists">
          <div className="single-item">
            <div className="row clearfix">
              <div className="col-lg-5 col-md-5 col-sm-12 deals-block">
                <div className="deals-block-one">
                  <div className="inner-box">
                    <div className="batch">
                      <i className="icon-11"></i>
                    </div>
                    <div className="lower-content">
                      <div className="title-text">
                        <h4>
                          <a href="#">Mercury Township</a>
                        </h4>
                      </div>
                      <div className="price-box clearfix">
                        <div className="price-info pull-left">
                          <p> By: Divyasri Group </p>
                          <p> @Pharma City, Hyderabad </p>
                          <p> 157 - 1,097 Sq Ft </p>
                          <h6> Price </h6>
                          <h4> ₹23.55 lakhs onwards </h4>
                        </div>
                      </div>
                      <div className="btn-box">
                        <a href="/single-properties" className="btn-lht">View <MdMyLocation className="current-location-icon" /> </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-12 deals-block">
                <div className="triangle triangle-4"></div>
                <div className="image-box">
                  <img src="/images/banner_img.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
       
      
      </Slider>
    </div>
  </div>
</section>



   </>
  )
}

export default EliteProperties