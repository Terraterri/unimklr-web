import React from 'react'

const page = () => {
  return (
    <>
    <section className="page-title centred" style={{
        background: "url('/images/background/page-title-3.jpg')",
      }}>
          <div className="auto-container">
            <div className="content-box clearfix">
              <h1>About Us</h1>
            </div>
          </div>
        </section>

        <section className="about-section about-page pb-0">
  <div className="auto-container">
    <div className="inner-container">
      <div className="row align-items-center clearfix">
        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
          <div className="image_block_2">
            <div className="image-box">
              <figure className="image">
                <img src="/images/about-img.jpg" alt />
              </figure>
              <div data-wow-delay="00ms" data-wow-duration="1500ms" className="text wow fadeInLeft animated">
                <h2>20</h2>
                <h4> Years of <br />Experience </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
          <div className="content_block_3">
            <div className="content-box">
              <div className="sec-title">
                <h2>About Us</h2>
              </div>
              <div className="text">
                <p>UNIMAKLER REALTORS PRIVATE LIMITED is a professional Real Estate services company, providing a broad range of services in Real Estate consultancy, Project Marketing and Loans. Combining unmatched experience and specialized skills.</p>

<p>UNIMAKLER REALTORS PRIVATE LIMITED have successfully offered our services to major Real estate developers in Hyderabad to market a wide range of properties including apartments, flats in gated communities, villas, commercial properties such as office spaces, retail and showroom spaces etc.</p>

<p>For Real estate and property developers, UNIMAKLER provides end to end real estate project marketing solutions. Our project marketing services covers selling the new projects on a mandate basis from the concept stage to managing the entire process of marketing & sales.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </section>

        <section className="sec-pad">
            <div className="auto-container">
            <div className="inner-container">
                <div className="row align-items-center clearfix mission">
                <div className="col-lg-6 col-md-6 col-sm-6 content-column">
                    <div className="content_block_3">
                    <div className="content-box">
                        <div className="sec-title">
                        <h2>Our Mission</h2>
                        </div>
                        <div className="text">
                        <p>We lead the technology transformation in real estate and create maximum benefits for our customers by providing outstanding service standards.</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="mission-image">
                    <img src="/images/mission.jpg" alt />
                    </div>
                </div>
                </div>
                <div className="row align-items-center clearfix mission reverse">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="mission-image">
                    <img src="/images/vision.jpg" alt />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 content-column">
                    <div className="content_block_3">
                    <div className="content-box">
                        <div className="sec-title">
                        <h2>Our Vision</h2>
                        </div>
                        <div className="text">
                        <p>We envision being the most preferred technology-driven Global real estate services company .</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        <section className="clients-section sec-pad bg-color-1 centred">
            <div className="pattern-layer" style={{
        background: "url('/images/shape/shape-1.png')",
      }}></div>
            <div className="auto-container">
                <div className="sec-title">
                <h2>Our Esteemed Partners</h2>
                </div>
            </div>
        </section>
    </>
  )
}

export default page