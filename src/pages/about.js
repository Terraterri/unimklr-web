import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"

const AboutUs = () => {

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <main className="main">
      {/* Page Title Section */}
      <section
        className="page-title text-center"

      >
        <div className="auto-container">
          <div className="content-box clearfix">
            <h1>About Us</h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section about-page pb-0">
        <div className="auto-container">
          <div className="inner-container">
            <div className="row align-items-center clearfix">
              {/* Image Column */}
              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="image_block_2">
                  <div className="image-box">
                    <figure className="image">
                      <img
                        src="assets/img/aboutim.png"
                        alt="about"
                      />
                    </figure>
                    <div className="text wow fadeInLeft animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                      <h2>20</h2>
                      <h4>
                        Years of <br /> Experience
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content_block_3">
                  <div className="content-box">
                    <div className="sec-title">
                      <h2>About Us</h2>
                    </div>
                    <div className="text">
                      <p>
                        UNIMAKLER REALTORS PRIVATE LIMITED is a professional Real Estate services company, providing a
                        broad range of services in Real Estate consultancy, Project Marketing and Loans. Combining
                        unmatched experience and specialized skills.
                      </p>
                      <p>
                        UNIMAKLER REALTORS PRIVATE LIMITED have successfully offered our services to major Real estate
                        developers in Hyderabad to market a wide range of properties including apartments, flats in
                        gated communities, villas, commercial properties such as office spaces, retail and showroom
                        spaces etc.
                      </p>
                      <p>
                        For Real estate and property developers, UNIMAKLER provides end to end real estate project
                        marketing solutions. Our project marketing services covers selling the new projects on a mandate
                        basis from the concept stage to managing the entire process of marketing &amp; sales.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="sec-pad">
        <div className="auto-container">
          <div className="inner-container">
            {/* Mission */}
            <div className="row align-items-center clearfix mission">
              <div className="col-lg-6 col-md-6 col-sm-6 content-column">
                <div className="content_block_3">
                  <div className="content-box">
                    <div className="sec-title">
                      <h2>Our Mission</h2>
                    </div>
                    <div className="text">
                      <p>
                        We lead the technology transformation in real estate and create maximum benefits for our
                        customers by providing outstanding service standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="mission-image">
                  <img
                    src="assets/img/missio.png"
                    alt="Our Mission"
                  />
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="row align-items-center clearfix mission reverse">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="mission-image">
                  <img
                    src="assets/img/vison.png"
                    alt="Our Vision"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 content-column">
                <div className="content_block_3">
                  <div className="content-box">
                    <div className="sec-title">
                      <h2>Our Vision</h2>
                    </div>
                    <div className="text">
                      <p>We envision being the most preferred technology-driven Global real estate services company.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="clients-section sec-pad bg-color-1 centred">
        <div
          className="pattern-layer"

        ></div>
        <div className="auto-container">
          <div className="sec-title">
            <h2>Our Esteemed Partners</h2>
          </div>
          <Carousel className=""
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            pauseOnHover={true}
          >
            <div className="partner-img">
              <img src="assets/img/p-1.png" alt="image" />
            </div>
            <div className="partner-img">
              <img src="assets/img/p-2.png" alt="image" />
            </div>
            <div className="partner-img">
              <img src="assets/img/p-3.png" alt="image" />
            </div>
            <div className="partner-img">
              <img src="assets/img/p-4.png" alt="image" />
            </div>
            <div className="partner-img">
              <img src="assets/img/p-5.png" alt="image" />
            </div>
            <div className="partner-img">
              <img src="assets/img/p-6.png" alt="image" />
            </div>

          </Carousel>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
