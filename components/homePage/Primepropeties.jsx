"use client";
import React from 'react'
import { MdMyLocation } from "react-icons/md";
import Slider from "react-slick"; 
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Primepropeties = () => {

  
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
    slidesToShow: 2,
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

<section className="deals-section sec-pad hor-line">
  <div className="auto-container">
  <div className="sec-title centred">
      <h2><span className="left_lne"></span> Prime Property <span className="right_lne"></span></h2>
    </div>
    {/* <div className="row clearfix ">
      <div className="col-lg-6 col-md-6 col-sm-6 feature-block">
        <div data-wow-delay="300ms" data-wow-duration="1500ms" className="feature-block-one wow fadeInUp animated">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <img src="images/feature-3.jpg" alt />
              </figure>
              <div className="batch">
                <i className="icon-11"></i>
              </div>
            </div>
            <div className="lower-content">
              <div className="title-text">
                <h4>
                  <a href="#">Vasavi Atlantis</a>
                </h4>
              </div>
              <div className="price-box clearfix">
                <div className="price-info pull-left">
                  <h6> By: Vasavi Group </h6>
                  <h4> ₹1.78 crores onwards </h4>
                  <p> Under Construction </p>
                  <p> Possession By: 31-12-2025 </p>
                </div>
              </div>
              <div className="btn-box">
                <a href="#" className="btn-lht">View <MdMyLocation className="current-location-icon" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6 feature-block">
        <div data-wow-delay="300ms" data-wow-duration="1500ms" className="feature-block-one wow fadeInUp animated">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
              <img src="images/feature-3.jpg" alt />
              </figure>
              <div className="batch">
                <i className="icon-11"></i>
              </div>
            </div>
            <div className="lower-content">
              <div className="title-text">
                <h4>
                  <a href="#">Vasavi Atlantis</a>
                </h4>
              </div>
              <div className="price-box clearfix">
                <div className="price-info pull-left">
                  <h6> By: Vasavi Group </h6>
                  <h4> ₹1.78 crores onwards </h4>
                  <p> Under Construction </p>
                  <p> Possession By: 31-12-2025 </p>
                </div>
              </div>
              <div className="btn-box">
                <a href="#" className="btn-lht">View <MdMyLocation className="current-location-icon" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}

    <div className="slider-container">
      <Slider {...settings}>
      
      <div className="col-lg-12 col-md-12 col-sm-12 feature-block">
        <div data-wow-delay="300ms" data-wow-duration="1500ms" className="feature-block-one wow fadeInUp animated">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <img src="images/feature-3.jpg" alt />
              </figure>
              <div className="batch">
                <i className="icon-11"></i>
              </div>
            </div>
            <div className="lower-content">
              <div className="title-text">
                <h4>
                  <a href="#">Vasavi Atlantis</a>
                </h4>
              </div>
              <div className="price-box clearfix">
                <div className="price-info pull-left">
                  <h6> By: Vasavi Group </h6>
                  <h4> ₹1.78 crores onwards </h4>
                  <p> Under Construction </p>
                  <p> Possession By: 31-12-2025 </p>
                </div>
              </div>
              <div className="btn-box">
                <a href="#" className="btn-lht">View <MdMyLocation className="current-location-icon" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12 feature-block">
        <div data-wow-delay="300ms" data-wow-duration="1500ms" className="feature-block-one wow fadeInUp animated">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <img src="images/feature-3.jpg" alt />
              </figure>
              <div className="batch">
                <i className="icon-11"></i>
              </div>
            </div>
            <div className="lower-content">
              <div className="title-text">
                <h4>
                  <a href="#">Vasavi Atlantis</a>
                </h4>
              </div>
              <div className="price-box clearfix">
                <div className="price-info pull-left">
                  <h6> By: Vasavi Group </h6>
                  <h4> ₹1.78 crores onwards </h4>
                  <p> Under Construction </p>
                  <p> Possession By: 31-12-2025 </p>
                </div>
              </div>
              <div className="btn-box">
                <a href="#" className="btn-lht">View <MdMyLocation className="current-location-icon" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12 feature-block">
        <div data-wow-delay="300ms" data-wow-duration="1500ms" className="feature-block-one wow fadeInUp animated">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <img src="images/feature-3.jpg" alt />
              </figure>
              <div className="batch">
                <i className="icon-11"></i>
              </div>
            </div>
            <div className="lower-content">
              <div className="title-text">
                <h4>
                  <a href="#">Vasavi Atlantis</a>
                </h4>
              </div>
              <div className="price-box clearfix">
                <div className="price-info pull-left">
                  <h6> By: Vasavi Group </h6>
                  <h4> ₹1.78 crores onwards </h4>
                  <p> Under Construction </p>
                  <p> Possession By: 31-12-2025 </p>
                </div>
              </div>
              <div className="btn-box">
                <a href="#" className="btn-lht">View <MdMyLocation className="current-location-icon" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12 feature-block">
        <div data-wow-delay="300ms" data-wow-duration="1500ms" className="feature-block-one wow fadeInUp animated">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <img src="images/feature-3.jpg" alt />
              </figure>
              <div className="batch">
                <i className="icon-11"></i>
              </div>
            </div>
            <div className="lower-content">
              <div className="title-text">
                <h4>
                  <a href="#">Vasavi Atlantis</a>
                </h4>
              </div>
              <div className="price-box clearfix">
                <div className="price-info pull-left">
                  <h6> By: Vasavi Group </h6>
                  <h4> ₹1.78 crores onwards </h4>
                  <p> Under Construction </p>
                  <p> Possession By: 31-12-2025 </p>
                </div>
              </div>
              <div className="btn-box">
                <a href="#" className="btn-lht">View <MdMyLocation className="current-location-icon" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12 feature-block">
        <div data-wow-delay="300ms" data-wow-duration="1500ms" className="feature-block-one wow fadeInUp animated">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <img src="images/feature-3.jpg" alt />
              </figure>
              <div className="batch">
                <i className="icon-11"></i>
              </div>
            </div>
            <div className="lower-content">
              <div className="title-text">
                <h4>
                  <a href="#">Vasavi Atlantis</a>
                </h4>
              </div>
              <div className="price-box clearfix">
                <div className="price-info pull-left">
                  <h6> By: Vasavi Group </h6>
                  <h4> ₹1.78 crores onwards </h4>
                  <p> Under Construction </p>
                  <p> Possession By: 31-12-2025 </p>
                </div>
              </div>
              <div className="btn-box">
                <a href="#" className="btn-lht">View <MdMyLocation className="current-location-icon" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12 feature-block">
        <div data-wow-delay="300ms" data-wow-duration="1500ms" className="feature-block-one wow fadeInUp animated">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <img src="images/feature-3.jpg" alt />
              </figure>
              <div className="batch">
                <i className="icon-11"></i>
              </div>
            </div>
            <div className="lower-content">
              <div className="title-text">
                <h4>
                  <a href="#">Vasavi Atlantis</a>
                </h4>
              </div>
              <div className="price-box clearfix">
                <div className="price-info pull-left">
                  <h6> By: Vasavi Group </h6>
                  <h4> ₹1.78 crores onwards </h4>
                  <p> Under Construction </p>
                  <p> Possession By: 31-12-2025 </p>
                </div>
              </div>
              <div className="btn-box">
                <a href="#" className="btn-lht">View <MdMyLocation className="current-location-icon" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12 feature-block">
        <div data-wow-delay="300ms" data-wow-duration="1500ms" className="feature-block-one wow fadeInUp animated">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <img src="images/feature-3.jpg" alt />
              </figure>
              <div className="batch">
                <i className="icon-11"></i>
              </div>
            </div>
            <div className="lower-content">
              <div className="title-text">
                <h4>
                  <a href="#">Vasavi Atlantis</a>
                </h4>
              </div>
              <div className="price-box clearfix">
                <div className="price-info pull-left">
                  <h6> By: Vasavi Group </h6>
                  <h4> ₹1.78 crores onwards </h4>
                  <p> Under Construction </p>
                  <p> Possession By: 31-12-2025 </p>
                </div>
              </div>
              <div className="btn-box">
                <a href="#" className="btn-lht">View <MdMyLocation className="current-location-icon" /></a>
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

export default Primepropeties