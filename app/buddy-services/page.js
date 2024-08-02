import React from 'react'

const page = () => {
  return (
    <>
    <section className="buddy-banner" style={{
        background: "url('/images/buddy-banner1.jpg')",
      }}>
  <div className="auto-container">
    <div className="row">
      <div className="col-md-7 col-sm-8 col-xs-12">
        <div className="block1">
          <p> Your dedicated partner in achieving property goals </p>
        </div>
        <div className="block2">
          <p> Understands your unique Real Estate needs and deliver tailored solutions </p>
        </div>
        <div className="block3">
          <p> Professionalism, Integrity, and Transparency are at the core of everything we do </p>
        </div>
      </div>
      <div className="col-md-5 col-sm-4 col-xs-12 buddy-m">
        <div className="image-box">
          <img src="images/vector.png" alt width="65%" />
        </div>
      </div>
    </div>
  </div>
</section>

<section class="about-buddy sec-pad">
  <div class="auto-container">
    <div class="row align-items-center clearfix">
      <div class="col-lg-6 col-md-6 col-sm-6">
        <div class="image_block_2">
          <div class="image-box about-b1">
            <img src="images/about-buddyy.png" alt />
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 content-column">
        <div class="content_block_3">
          <div class="content-box">
            <div class="sec-title">
              <h2>About Buddy</h2>
            </div>
            <div class="text">
              <p> Unimakler Buddy is a dedicated real estate professional who facilitates the buying, selling, or renting of properties on behalf of clients. With in-depth knowledge of the local real estate market, assist clients in pricing properties, market listings, and negotiate deals. Acting as intermediary Buddy guide clients through the complex process, handle legal paperwork, and strive to achieve the best possible outcomes. </p>
              <p> Ultimately, Buddy goal is to facilitate successful real estate transactions while prioritizing their clients' needs. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="why-buddy sec-pad">
  <div class="auto-container">
    <div class="row align-items-center clearfix">
      <div class="col-lg-5 col-md-12 col-sm-12">
        <div class="why-sec-title">
          <h2>Why</h2>
          <h2 class="why-1">Choose</h2>
          <h2 class="why-2">Buddy ?</h2>
        </div>
        <div class="line">
          <img src="images/line.gif" alt />
        </div>
      </div>
      <div class="col-lg-7 col-md-12 col-sm-12">
        <div class="content_block_3">
          <div class="content-box">
            <div class="row align-items-center clearfix justify-content-center">
              <div class="col-lg-4 col-md-12 col-sm-12">
                <div class="abcd-box blue-bg">
                  <h5> PROFESSIONAL SERVICE </h5>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 col-sm-12">
                <div class="abcd-box orange-bg">
                  <h5> DOMAIN <br /> EXPERT </h5>
                </div>
              </div>
            </div>
            <div class="row align-items-center clearfix justify-content-center">
              <div class="col-lg-4 col-md-12 col-sm-12">
                <div class="abcd-box orange-bg">
                  <h5> CLIENT-CENTRIC APPROACH </h5>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 col-sm-12">
                <div class="abcd-box grey-bg">
                  <h5 class="blue"> TECH <br /> SAVVY </h5>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 col-sm-12">
                <div class="abcd-box blue-bg">
                  <h5> MARKET <br /> KNOWLEDGE </h5>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 col-sm-12">
                <div class="abcd-box blue-bg">
                  <h5>DEDICATED SERVICE</h5>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 col-sm-12">
                <div class="abcd-box orange-bg">
                  <h5> SAVES VALUABLE TIME AND EFFORTS </h5>
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

export default page