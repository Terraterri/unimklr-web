"use client";
import React from 'react'
import { MdMyLocation } from "react-icons/md";
import Slider from "react-slick"; 
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Header from "../components/shared/header";
import Footer from "../components/shared/footer";
import Link from "next/link";
import Image from "next/image";
import { Carousel } from 'react-bootstrap';


export default function Paragon() {

  

  return (
    <>
      <main className="main specl_pro">
        <div
          className="site-breadcrumb"
          style={{ background: "url(assets/img/model-house.jpg)" }}
        >
          
          <div className="container">
            <div className="text-right tagline_txt">

            <Carousel>
                <Carousel.Item>
                <p className="slid_clr_meta1">"Air drop into your dream model house in metaverse way<br></br> <span>...</span> with just one keystroke ."</p>
                </Carousel.Item>
                <Carousel.Item>
                <p className="slid_clr_meta2">"Paragon: Immerse Yourself in Virtual Model<br></br> House Experiences."</p>
                </Carousel.Item>
              </Carousel>
              

              
              </div>
            <h2 className="breadcrumb-title ">
              <span>Paragon</span><br></br>
              the Metaverse Model House
            </h2>
          </div>
        </div>

        <div className="py-120 bg-metavr">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="property-single-content property-single-contentt2">
                  {/* <h3>Paragon</h3> */}
                  <div className="property-single-description">
                    <p>
                      Paragon is a Metaverse Model House platform designed for
                      property buyers to explore and experience builders' model
                      houses in a realistic and immersive way. It allows users
                      to visualize architectural designs, interior layouts, and
                      available features of properties through interactive
                      virtual tours.
                    </p>
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col-md-6">
                <div className="property-single-content">
                  <h4>Immersive Visualization: </h4>
                  <div className="property-single-description">
                    <p>
                      Users can explore virtual replicas of real estate model
                      houses with high-definition graphics and immersive
                      environments, providing a realistic representation of the
                      property.
                    </p>
                  </div>
                    </div>
                  
                <div className="property-single-content">
                  <h4>Interactive Elements:</h4>
                  <div className="property-single-description">
                    <p>
                      The platform offers interactive elements such as
                      customizable design options, finishes, and upgrades,
                      allowing users to personalize their virtual experience and
                      visualize their ideal living spaces.
                    </p>
                  </div>
                    </div>        
                
                <div className="property-single-content">
                  <h4>Virtual Meetings:</h4>
                  <div className="property-single-description">
                    <p>
                      Buyers can engage in virtual meetings with builders and
                      representatives directly within the model house
                      environment, facilitating discussions on project details,
                      property specifications, and negotiation terms.
                    </p>
                  </div>
                    </div>
                
                <div className="property-single-content">
                  <h4>Collaborative Decision-Making:</h4>
                  <div className="property-single-description">
                    <p>
                      The platform eliminates the need for physical travel to
                      model homes or sales centers, offering convenience and
                      accessibility to buyers from diverse geographic locations.
                    </p>
                  </div>
                    </div>
                  </div>
                  <div className="col-md-6">

                    <div className="spcil_ot_01">
                      <Image src={"/assets/img/paradox-women.jpeg"} width={600}
                        height={600} />
                    </div>
                    
                  </div>
                  </div>
                  <div className="row">
                  <div className="col-md-6">

                  <div className="spcil_ot_02">
                    <Image src={"/assets/img/pro-img4.jpeg"} width={500}
                        height={500} />
                    </div>
                    
                  </div>
                  <div className="col-md-6">
                <div className="property-single-content">
                  <h4>Convenience and Accessibility:</h4>
                  <div className="property-single-description">
                    <p>
                    The platform eliminates the need
                for physical travel to model homes or sales centers, offering
                convenience and accessibility to buyers from diverse geographic
                locations. 
                    </p>
                  </div>
                    </div>
                  
                <div className="property-single-content">
                  <h4>Cost Efficiency: </h4>
                  <div className="property-single-description">
                    <p>
                    By reducing expenses related to travel, accommodation, and transportation, the platform makes property exploration and consultation more affordable and accessible for buyers.
                    </p>
                  </div>
                    </div>
                
                <div className="property-single-content">
                  <h4>Environmental Sustainability: </h4>
                  <div className="property-single-description">
                    <p>
                    The platform contributes to environmental sustainability by reducing carbon emissions associated with commuting and physical property visits, aligning with eco-friendly practices.
                    </p>
                  </div>
                  </div>
                  
                  </div>
                </div> */}
                

                <div className="row align-items-center">
                  <div className="col-md-6">
                <div className="property-single-content">
                  {/* <h4>Virtual Venue: </h4> */}
                  <div className="property-single-description metaver_out">

                  {/* <h3>Here are the features and benefits of AirPropX.</h3> */}
                  <h3>Features and Benefits of Paragon:</h3>

                    <ul>
                          <li><span>»</span> Immersive Visualization: Offers high-definition, realistic virtual tours of model houses to help users visualize properties.</li>
                          <li><span>»</span> Interactive Elements: Provides customization options for designs, finishes, and upgrades, allowing buyers to personalize their ideal space.</li>
                          <li><span>»</span> Virtual Meetings: Enables direct communication with builders and representatives within the virtual environment for discussing project details and negotiations.</li>
                        
                        
                    </ul>
                    
                  </div>
                    </div>
{/*                   
                <div className="property-single-content">
                  <h4>Interactive Exhibitor Booths:</h4>
                  <div className="property-single-description">
                    <p>
                    Exhibitors have the opportunity to set up interactive virtual booths and displays to showcase their projects, properties, and real estate offerings.
                    </p>
                  </div>
                    </div>        
                
                <div className="property-single-content">
                  <h4>Customer Analytics:</h4>
                  <div className="property-single-description">
                    <p>
                    AirPropX offers lead generation tools and analytics features to track attendee engagement and interaction.
                    </p>
                  </div>
                    </div>
                
                <div className="property-single-content">
                  <h4>Expanded Reach and Audience Engagement:</h4>
                  <div className="property-single-description">
                    <p>
                    AirPropX extends the reach of real estate expos to a global audience, increasing attendance and participation. The immersive and interactive nature of the platform enhances attendee engagement and retention.
                    </p>
                  </div>
                    </div> */}
                  </div>
                  <div className="col-md-6">

                    <div className="spcil_ot_meta">
                      <Image src={"/assets/img/paradox-women.jpeg"} width={600}
                        height={300} />
                    </div>
                    
                  </div>
                  </div>
                  <div className="row align-items-center">
                  <div className="col-md-6">

                  <div className="spcil_ot_meta">
                    <Image src={"/assets/img/model-house.jpg"} width={500}
                        height={500} />
                    </div>
                    
                  </div>
                  <div className="col-md-6">
                <div className="property-single-content">
                  {/* <h4>Cost-Effective and Sustainable:</h4> */}
                  <div className="property-single-description metaver_out">
                  {/* <h3>Benefits to builders using AirPropX:</h3> */}

<ul>
      <li><span>»</span> Collaborative Decision-Making: Facilitates easy decision-making by offering convenient virtual access to model homes without the need for physical visits.</li>
      <li><span>»</span> Convenience and Accessibility: Eliminates the need for travel, making property exploration accessible to buyers from anywhere.</li>
      <li><span>»</span> Cost Efficiency: Reduces costs related to travel and accommodation for property viewings.</li>
      <li><span>»</span> Environmental Sustainability: Lowers carbon emissions by reducing the need for physical property visits, supporting eco-friendly practices.</li>
      
</ul>

                  </div>
                    </div>
                  
                {/* <div className="property-single-content">
                  <h4>Enhanced Networking Opportunities:</h4>
                  <div className="property-single-description">
                    <p>
                    AirPropX facilitates meaningful connections and networking opportunities between exhibitors and attendees. Attendees can interact with industry professionals, seek advice, and forge valuable partnerships within the real estate community.
Overall, AirPropX revolutionizes the real estate expo experience by providing a dynamic and immersive platform that transcends geographical boundaries and fosters meaningful connections within the global real estate community.

                    </p>
                  </div>
                    </div> */}
                
                {/* <div className="property-single-content">
                  <h4>Environmental Sustainability: </h4>
                  <div className="property-single-description">
                    <p>
                    The platform contributes to environmental sustainability by reducing carbon emissions associated with commuting and physical property visits, aligning with eco-friendly practices.
                    </p>
                  </div>
                  </div> */}
                  
                  </div>
                </div>

                
                <div className="property-single-content property-single-contentt2">
                
                  <div className="property-single-description">
                    <p className="mb-0">
                    In summary, a Metaverse Model House offers a convenient, immersive, and efficient platform for property buyers to explore, visualize, and engage with builders, ultimately enhancing the overall experience and effectiveness of the property buying process.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="pt-5">
          <div className="container">
            <div className="title_out">
              <h3>Here's How to Immerse Yourself and Navigate the Model House<br></br> Six simple steps to go.</h3>
            </div>
            <div className="row pb-50">

                  <div className="col-md-4">
                <div className="col">
                  <span className="bg-l-blue">Step <b>01</b></span>
                  <h5>Register and Login:</h5>
                  <p>Register by providing some basic information like your name, email address. Follow the prompts to complete the registration process. login to PARAGON using your registered email address and password</p>
                      </div>
                  </div>
                  <div className="col-md-4">
                <div className="col">
                <span className="bg-l-red">Step <b>02</b></span>
                  <h5>Create Your Own Avatar:</h5>
                  <p>Once registered, you'll be prompted to create your own avatar. Choose your preferred appearance, including hairstyle, clothing, and accessories. Your avatar represents you in the virtual environment.</p>
                      </div>
                  </div>
                  <div className="col-md-4">
                <div className="col">
                <span className="bg-l-blue">Step <b>03</b></span>
                  <h5>Explore the Virtual Environment:</h5>
                  <p>Go to the official website of the Metaverse Model House platform using your web browser.</p>
                      </div>
                  </div>
                  <div className="col-md-4">
                <div className="col">
                <span className="bg-l-red">Step <b>04</b></span>
                  <h5>Navigate and explore: </h5>
                  <p>Use the direction buttons on your keyboard (typically arrow keys) to move your avatar around the virtual space. take your time to explore each room and area. Use your mouse or keyboard controls to look around and move through the space.</p>
                      </div>
                  </div>
                  <div className="col-md-4">
                <div className="col">
                <span className="bg-l-blue">Step <b>05</b></span>
                  <h5>Interact with Builder: </h5>
                  <p>Look for interactive elements within the model house that allow you to engage with the builder or representative. This could include clickable objects, informational displays, or chat options for direct communication.</p>
                      </div>
                  </div>
                  <div className="col-md-4">
                <div className="col">
                <span className="bg-l-red">Step <b>06</b></span>
                  <h5>Exit the Model House:</h5>
                  <p>When you're done exploring the model house and interacting with the builder, navigate back to the exit point to leave the virtual environment.</p>
                      </div>
                  </div>

              </div>
           

              <div className="property-single-content property-single-contentt2 mt-50">
                
                  <div className="property-single-description">
                    <p className="mb-0">
                    By following above steps, property buyers can easily navigate the Metaverse Model House platform, explore virtual model houses, and engage with builders in an immersive and informative way.
                    </p>
                  </div>
              </div>
              

            </div>
            </div>
        </div>
      </main>

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

      {/* <div className="slider-container">
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
    </div> */}
  </div>
</section>
    </>
  );
}
