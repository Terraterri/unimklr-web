"use client";
import React from 'react'
import Slider from "react-slick"; 
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const TerritoriesServe = () => {

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
    slidesToShow: 4,
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
    <section  class="place-section sec-pad">
          <div  class="auto-container">
            <div  class="sec-title centred">
              <h2 ><span className="left_lne"></span> Territories We Serve <span className="right_lne"></span></h2>
            </div>

            <div className="slider-container">
              <Slider {...settings}>
              <div className="col-md-12">
                <div class="place-block-one">
                  <div  class="inner-box">
                    <img src="images/resource/deals-4.jpg" />
                    <a href="#" >
                      <div  class="text">
                        <h4 >Banglore</h4>
                      </div>
                      </a>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div class="place-block-one">
                  <div  class="inner-box">
                    <img src="images/resource/deals-4.jpg" />
                    <a href="#" >
                      <div  class="text">
                        <h4 >Banglore</h4>
                      </div>
                      </a>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div class="place-block-one">
                  <div  class="inner-box">
                    <img src="images/resource/deals-4.jpg" />
                    <a href="#" >
                      <div  class="text">
                        <h4 >Banglore</h4>
                      </div>
                      </a>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div class="place-block-one">
                  <div  class="inner-box">
                    <img src="images/resource/deals-4.jpg" />
                    <a href="#" >
                      <div  class="text">
                        <h4 >Banglore</h4>
                      </div>
                      </a>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div class="place-block-one">
                  <div  class="inner-box">
                    <img src="images/resource/deals-4.jpg" />
                    <a href="#" >
                      <div  class="text">
                        <h4 >Banglore</h4>
                      </div>
                      </a>
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

export default TerritoriesServe