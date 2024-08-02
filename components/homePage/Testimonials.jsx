"use client";
import React from 'react';
import { ImQuotesLeft } from "react-icons/im";
import Slider from "react-slick"; 
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Testimonials = () => {
  
  // function SampleNextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div className="right_icon"><IoIosArrowForward
  //       color="black"
  //       // className={className}
  //       style={{
  //         ...style,
  //         display: "block",
  //       }}
  //       onClick={onClick}
  //       size={50}
  //     />
  //     </div>
  //   );
  // }

  // function SamplePrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div className="left_icon">
  //       <IoIosArrowBack
  //       color="black"
  //       // className={className}
  //       style={{
  //         ...style,
  //         display: "block",
  //       }}
  //       onClick={onClick}
  //       size={50}
  //     /></div>
  //   );
  // }

  // const settings = {
  //   className: "center",
  //   infinite: true,
  //   centerPadding: "600px",
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  //   swipeToSlide: true,
  //   autoplay: true,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />,
  // };

  return (
    <>
    <section class="cta-section bg-color-2">
  <div class="pattern-layer" style={{ background: "url('/images/shape/shape-2.png')", }}></div>
  <div class="auto-container">
    <div class="inner-box clearfix">
      <div class="text pull-left">
        <h2> Looking to Buy a New Property or <br />Sell an Existing One? </h2>
      </div>
      <div class="btn-box pull-right">
        <a href="#" class="theme-btn btn-three">Buy Properties</a>
        <a href="#" class="theme-btn btn-one">Sell Properties</a>
      </div>
    </div>
  </div>
</section>

<section class="testimonial-style-four centred">
   <div class="auto-container">
     <div class="inner-container">
       <div class="sec-title">
         <h2><span className="left_lne"></span> What They Say About Us <span className="right_lne"></span></h2>
       </div>
   


   <div className="row">
    <div className="col-md-6">
    <div  class="testimonial-block-three">
  <div  class="inner-box">
    <div  class="icon-box">
    <ImQuotesLeft />
    </div>
    <h4>
      <p>
       Unimakler made my dream home a reality. Their expertise, attention to detail, and personalized support are beyond our expectations. We suggest this reputable and competent real estate company.</p>
    </h4>
    <div  class="d-flex testi">
      <figure  class="image testimonial">
        <img src="https://unimakler.com/unimakler_admin/uploads//testimonial/20240429101105646.jpg" alt="competent" />
      </figure>
      <div  class="testi_cont">
        <h5 >Kavya</h5>
        <span  class="designation">Real Estate</span>
      </div>
    </div>
  </div>
</div>
    </div>
    <div className="col-md-6">
    <div  class="testimonial-block-three">
  <div  class="inner-box">
    <div  class="icon-box">
    <ImQuotesLeft />
    </div>
    <h4>
      <p>
       Unimakler made my dream home a reality. Their expertise, attention to detail, and personalized support are beyond our expectations. We suggest this reputable and competent real estate company.</p>
    </h4>
    <div  class="d-flex testi">
      <figure  class="image testimonial">
        <img src="https://unimakler.com/unimakler_admin/uploads//testimonial/20240429101105646.jpg" alt="competent" />
      </figure>
      <div  class="testi_cont">
        <h5 >Kavya</h5>
        <span  class="designation">Real Estate</span>
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

export default Testimonials