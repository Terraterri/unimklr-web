import React from 'react';
import { Carousel } from 'react-bootstrap';

const international = () => {
  return (
    <>
    <div className='main'>
        <div className='inter_banr'>
        <img src={"/assets/img/international-3.jpg"}   alt="property" />
        <div className='container'>

            <div className='int_iner_sec'>
            <div className='text-center inner_text'>
            <h4>Launching Soon..</h4>
            <h3>Unimakler International</h3>
            </div>

            <Carousel>

                <Carousel.Item>
                    <h2> "Your Passport to Premier Properties<br></br> Worldwide." </h2>
                </Carousel.Item>
                <Carousel.Item>
                <h2>  "Unlock International Opportunities with<br></br> unimakler Homes."  </h2>
                </Carousel.Item>

            </Carousel>
              </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default international