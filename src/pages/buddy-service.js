import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const BuddyService = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <>
            <main className="main">
                <section className="buddy-banner" style={{
                    background: "url('assets/img/buddy-banner1.png')",
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
                                    <img src="assets/img/vector.png" alt width="65%" />
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
                                        <img src="assets/img/about-buddyy.png" alt />
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
                                    <img src="assets/img/line.gif" alt />
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


                <section className="buddy-gallery sec-pad">
                    <div className="auto-container">
                        <Carousel
                            responsive={responsive}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={3000}
                            showDots={true}>
                            <div className="buddy-images">
                                <img src="assets/img/buddy-3.png" alt="Buddy 3" />
                                <div className="content-3">
                                    <h3>Deal Maestro</h3>
                                    <h2>
                                        My Goal is to Ensure a Seamless and Rewarding <br />
                                        Experience in Securing the Perfect Real Estate Deal.
                                    </h2>
                                </div>
                            </div>

                            <div className="buddy-images">
                                <img src="assets/img/buddy-5.png" alt="Buddy 5" />
                                <div className="content-5">
                                    <h3>Save Your Time</h3>
                                    <h2>
                                        Searching For Properties With Me <br />
                                        Saves You Valuable Time and Energy.
                                    </h2>
                                </div>
                            </div>

                            <div className="buddy-images">
                                <img src="assets/img/buddy-2.png" alt="Buddy 2" />
                                <div className="content-2">
                                    <div className="zoom-in-zoom-out">
                                        <h4>Book</h4>
                                        <h2>My Service</h2>
                                    </div>
                                    <h3>Get Started Now!</h3>
                                </div>
                            </div>

                            <div className="buddy-images">
                                <img src="assets/img/buddy-1.jpg" alt="Buddy 1" />
                                <div className="content-1">
                                    <h2 className="typing-demo">Hi! I'm your "Buddy"</h2>
                                    <h3>
                                        Your Dedicated Partner in Achieving <br />
                                        Property Goals.
                                    </h3>
                                </div>
                            </div>

                            <div className="buddy-images">
                                <img src="assets/img/buddy-4.png" alt="Buddy 4" />
                                <div className="content-4">
                                    <h3>Showcasing the Properties</h3>
                                    <h2>
                                        Experience your dream space in an immersive <br />
                                        environment through cutting-edge technologies <br />
                                        such as AR, VR, and the Metaverse.
                                    </h2>
                                </div>
                            </div>
                        </Carousel>

                        <div className="buddy-contact-button">
                            <button className="theme-btn btn-one">Contact</button>
                        </div>
                    </div>
                </section>

            </main>

        </>
    )
}

export default BuddyService