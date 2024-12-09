import Header from "../components/shared/header";
import Footer from "../components/shared/footer";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { Carousel } from 'react-bootstrap';

export default function About() {
  return (
    <>

<main className="main specl_pro">
        {/* <div
          className="site-breadcrumb"
          style={{ background: "url(assets/img/model-house.jpg)" }}
        >
          
          <div className="container">
            <div className="text-right tagline_txt">


              

              
              </div>
            <h2 className="breadcrumb-title ">
              <span>About Us</span><br></br>
              the Metaverse Model House
            </h2>
          </div>
        </div> */}

        <div className="py-120 bg-metavr">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="property-single-content property-single-contentt2">
                  {/* <h3>Paragon</h3> */}
                  <div className="property-single-description">
                    <p>
                    Terraterri.com is a pioneering global real estate marketplace that harnesses cutting-edge technology to redefine how builders, developers, agents, and individual property owners connect with property seekers. Offering an immersive metaverse property exploration experience, Terraterri.com provides an unparalleled platform for showcasing properties through its Meta Listing Packages.
                    </p>
                  </div>
                </div>
                

                <div className="row align-items-center">
                  <div className="col-md-6">
                <div className="property-single-content">
                  <div className="property-single-description metaver_out">

                   <p>Through AirPropX, our innovative expo platform, builders and property buyers can connect in real-time, delivering a seamless and engaging experience. With Paragon and Builder Box features, buyers can virtually immerse themselves into model houses and builder offices, exploring properties and interacting directly to discuss their requirements.</p>

                   <p>Terraterri.com also incorporates advanced functionalities like 360-degree street views, virtual reality (VR), AI-powered digital human assistants, and geo-based property search, setting new standards for property discovery and engagement.</p>

                   <p className="mb-0">Focused on innovation and user satisfaction, Terraterri.com generates high-quality buyer leads, empowering listing subscribers to effectively reach and engage with their target </p>
                    
                  </div>
                    </div>

                  </div>
                  <div className="col-md-6 ">
<div className="about-left"> 
                   <div className="about-img">
                    <img src="assets/img/about-metavere.jpg" alt="" />
                  </div>
                  {/* <div className="about-experience">
                    <h1>
                      25 <span>+</span>
                    </h1>
                    <span className="about-experience-text">
                      Years Of Experience
                    </span>
                  </div>
                  <div className="about-shape">
                    <img src="assets/img/shape/01.svg" alt="" />
                  </div> */}
                  </div>
                  </div>
                  </div>
                 
                
                  <div className="choose-wrapper pt-5 mt-3">
              <div className="row justify-content-center">
              <div className="col-md-4 col-lg-4">
                <div className="vison_out">
                <img src="assets/img/about/01.jpg" alt="" />
                </div>
                </div>
                <div className="col-md-4 col-lg-4">
                  <div
                    className="choose-item py-2 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay=".25s"
                  >
                    {/* <div className="choose-icon">
                    <Image
                          src={"/assets/img/vision.png"}
                          width={60}
                          height={60}
                          alt="sale"
                        />


                    </div> */}
                    <h4 className="choose-title">Mission</h4>
                    <p>To become the world’s most trusted
technology-driven real estate platform,
transforming property exploration and
interactions globally
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4">
                  <div
                    className="choose-item py-2 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay=".50s"
                  >
                    {/* <div className="choose-icon">
                    <Image
                          src={"/assets/img/mission.png"}
                          width={60}
                          height={60}
                          alt="sale"
                        />
                    </div> */}
                    <h4 className="choose-title">Vision</h4>
                    <p>
                    To redefine property exploration
experiences with the use of advanced
technologies to make them seamless and
insightful.
                    </p>
                  </div>
                </div>
              
              </div>
            </div>

              </div>
            </div>
          </div>

        </div>
      </main>

      {/* <main className="main">

        <div className="about-area py-120 mb-120">
          <div className="container">
            <div className="row align-items-center pb-50">
              <div className="col-lg-6">
                <div
                  className="about-left wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay=".25s"
                >
                  <div className="about-img">
                    <img src="assets/img/about/01.jpg" alt="" />
                  </div>
                  <div className="about-experience">
                    <h1>
                      25 <span>+</span>
                    </h1>
                    <span className="about-experience-text">
                      Years Of Experience
                    </span>
                  </div>
                  <div className="about-shape">
                    <img src="assets/img/shape/01.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="about-right wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".25s"
                >
                  <div className="site-heading mb-3">
      
                    <h2 className="site-title">
                    About Terraterri

                    </h2>
                  </div>
                  <p className="about-text">Terraterri.com is a pioneering global real estate marketplace that harnesses cutting-edge technology to redefine how builders, developers, agents, and individual property owners connect with property seekers. Offering an immersive metaverse property exploration experience, Terraterri.com provides an unparalleled platform for showcasing properties through its Meta Listing Packages.</p>

                  <p className="about-text">Through AirPropX, our innovative expo platform, builders and property buyers can connect in real-time, delivering a seamless and engaging experience. With Paragon and Builder Box features, buyers can virtually immerse themselves into model houses and builder offices, exploring properties and interacting directly to discuss their requirements.</p>

                  <p className="about-text">Terraterri.com also incorporates advanced functionalities like 360-degree street views, virtual reality (VR), AI-powered digital human assistants, and geo-based property search, setting new standards for property discovery and engagement.</p>

                  <p className="about-text">Focused on innovation and user satisfaction, Terraterri.com generates high-quality buyer leads, empowering listing subscribers to effectively reach and engage with their target audience in a transformative way.</p>

                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="choose-area py-120">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 mx-auto wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay=".25s"
              >
                <div className="site-heading text-center">
                  <h2 className="site-title">Mission & Vision</h2>
                </div>
              </div>
            </div>
            <div className="choose-wrapper">
              <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                  <div
                    className="choose-item py-2 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay=".25s"
                  >
                    <div className="choose-icon">
                    <Image
                          src={"/assets/img/vision.png"}
                          width={60}
                          height={60}
                          alt="sale"
                        />


                    </div>
                    <h4 className="choose-title">Mission</h4>
                    <p>
                    We are committed to providing outstanding standards of service and expertise. We will lead the technology transformation in the real estate industry and create maximum benefits for our customers.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div
                    className="choose-item py-2 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay=".50s"
                  >
                    <div className="choose-icon">
                    <Image
                          src={"/assets/img/mission.png"}
                          width={60}
                          height={60}
                          alt="sale"
                        />
                    </div>
                    <h4 className="choose-title">Vision</h4>
                    <p>
                    We envision being the most preferred technology driven real estate services company in the world and to become a leading Indian International Compan
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div
                    className="choose-item py-2 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay=".75s"
                  >
                    <div className="choose-icon">
                    <Image
                          src={"/assets/img/target.png"}
                          width={60}
                          height={60}
                          alt="sale"
                        />
                    </div>
                    <h4 className="choose-title">Target</h4>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
              

       
      </main>
 */}


    </>

  );
}
