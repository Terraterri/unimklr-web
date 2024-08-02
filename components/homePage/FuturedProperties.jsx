"use client";
import React from 'react'
import { MdMyLocation } from "react-icons/md";
import Slider from "react-slick"; 
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const FuturedProperties = () => {
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
    slidesToShow: 3,
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
    
    <section className="page-content featured pt-4 px-4 hor-line">
   

         
<div className="sec-title centred">
      <h2><span className="left_lne"></span> Featured Properties <span className="right_lne"></span></h2>
    </div>
   
    <div className="slider-container">
    <Slider {...settings}>
      
    <div className="deals-block-one col-lg-12 col-md-12 col-sm-12">
      <div className="inner-box">
        <div className="image-box">
          <figure className="image">
            <img src="images/resource/deals-3.jpg" alt="" />
          </figure>
        </div>
        <div className="lower-content">
          <div className="title-text">
            <h4>
              <a href="#">Signature Fortius</a>
            </h4>
          </div>
          <div className="price-box clearfix">
            <div className="price-info pull-left">
              <h6> By: Signature Avenues llp </h6>
              <p> @ISNAPUR, Hyderabad </p>
              <p> Under Construction </p>
              <p> Possession By: 31-07-2023 </p>
              <div className="d-flex price">
                <h6>Price</h6>
                <h4> ₹1.78 crores onwards </h4>
              </div>
            </div>
          </div>
          <div className="other-info-box clearfix">
            <div className="btn-box pull-left">
              <a href="#" className="btn-lht">View <MdMyLocation className="current-location-icon" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="deals-block-one col-lg-12 col-md-12 col-sm-12">
      <div className="inner-box">
        <div className="image-box">
          <figure className="image">
            <img src="images/resource/deals-3.jpg" alt="" />
          </figure>
        </div>
        <div className="lower-content">
          <div className="title-text">
            <h4>
              <a href="#">Signature Fortius</a>
            </h4>
          </div>
          <div className="price-box clearfix">
            <div className="price-info pull-left">
              <h6> By: Signature Avenues llp </h6>
              <p> @ISNAPUR, Hyderabad </p>
              <p> Under Construction </p>
              <p> Possession By: 31-07-2023 </p>
              <div className="d-flex price">
                <h6>Price</h6>
                <h4> ₹1.78 crores onwards </h4>
              </div>
            </div>
          </div>
          <div className="other-info-box clearfix">
            <div className="btn-box pull-left">
              <a href="#" className="btn-lht">View <MdMyLocation className="current-location-icon" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="deals-block-one col-lg-12 col-md-12 col-sm-12">
      <div className="inner-box">
        <div className="image-box">
          <figure className="image">
            <img src="images/resource/deals-3.jpg" alt="" />
          </figure>
        </div>
        <div className="lower-content">
          <div className="title-text">
            <h4>
              <a href="#">Signature Fortius</a>
            </h4>
          </div>
          <div className="price-box clearfix">
            <div className="price-info pull-left">
              <h6> By: Signature Avenues llp </h6>
              <p> @ISNAPUR, Hyderabad </p>
              <p> Under Construction </p>
              <p> Possession By: 31-07-2023 </p>
              <div className="d-flex price">
                <h6>Price</h6>
                <h4> ₹1.78 crores onwards </h4>
              </div>
            </div>
          </div>
          <div className="other-info-box clearfix">
            <div className="btn-box pull-left">
              <a href="#" className="btn-lht">View <MdMyLocation className="current-location-icon" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>


    </Slider>
    </div>


</section>

</>
  )
}

export default FuturedProperties