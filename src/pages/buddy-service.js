import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import { Carousel } from "react-bootstrap";


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


                                <Carousel className=""
                                    responsive={responsive}
                                    infinite={true}
                                    autoPlay={true}
                                    autoPlaySpeed={3000}
                                    showDots={false}
                                    arrows={false}
                                >

                                    <div>
                                        <p>Your dedicated partner in achieving property goals</p>
                                    </div>
                                    <div>
                                        <p>Understands your unique Real Estate needs and deliver tailored solutions</p>
                                    </div>
                                    <div>
                                        <p>Professionalism, Integrity, and Transparency are at the core of everything we do</p>
                                    </div>

                                </Carousel>

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
                        <div class="row align-items-center clearfix justify-content-center">
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
                                            <h2>About Unimakler Buddy Service
                                            </h2>
                                        </div>
                                        <div class="text">
                                            <p> Unimakler Buddy is your dedicated real estate professional, committed to facilitating seamless property transactions. Whether you’re buying, selling, or renting, our Buddies bring in-depth knowledge of the local market to help you price properties accurately, market listings effectively, and negotiate deals to achieve the best outcomes. Acting as a reliable intermediary, your Buddy guides you through the complex processes, handles legal documentation, and ensures a smooth experience tailored to your needs.</p>
                                            <p> The ultimate goal of a Unimakler Buddy is to deliver successful real estate transactions while keeping your priorities at the forefront. </p>
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
                            <div class="col-lg-2 col-md-12 col-sm-12">
                                <div class="why-sec-title">
                                    <h2>Why</h2>
                                    <h2 class="why-1">Choose</h2>
                                    <h2 class="why-2">Buddy ?</h2>
                                </div>
                                <div class="line">
                                    <img src="assets/img/line.gif" alt />
                                </div>
                            </div>
                            <div class="col-lg-10 col-md-12 col-sm-12">
                                <div class="content_block_3">
                                    <div class="content-box">
                                        <div class="row align-items-center clearfix justify-content-center">
                                            <div className='col-md-7'>
                                                <div className='row align-items-center'>
                                                    <div className='col-md-4 '>
                                                        <div class="abcd-box orange-bg wi-50">
                                                            <h5> CLIENT-CENTRIC APPROACH </h5>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-4 ' >
                                                        <div class="abcd-box blue-bg onee mb-2 wi-50">
                                                            <h5> PROFESSIONAL SERVICE </h5>
                                                        </div>
                                                        <div class="abcd-box blue-bg twoo wi-50">
                                                            <h5> DEDICATED <br /> SERVICE </h5>

                                                        </div>
                                                    </div>
                                                    <div className='col-md-4 '>
                                                        <div class="abcd-box grey-bg wi-50">
                                                            <h5> TECH
                                                            SAVVY </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='col-md-5'>
                                                <div className='row align-items-center'>
                                                    <div className='col-md-6'>
                                                        <div class="abcd-box orange-bg twoo wi-50">
                                                            <h5> DOMAIN <br /> EXPERT </h5>

                                                        </div>
                                                        <div class="abcd-box orange-bg mt-2 wi-50">
                                                            <h5> SAVES TIME AND EFFORTS </h5>
                                                        </div>

                                                    </div>
                                                    <div className='col-md-6 wi-50'>
                                                        <div class="abcd-box blue-bg wi-50">
                                                            <h5> MARKET <br /> KNOWLEDGE </h5>
                                                        </div>
                                                    </div>
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