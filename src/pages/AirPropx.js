import Header from "../components/shared/header";
import Footer from "../components/shared/footer";
import Link from "next/link";
import Image from "next/image";
import { Carousel } from 'react-bootstrap';

export default function AirPropx() {

  return (
    <>
      <main className="main specl_pro">
        <div
          className="site-breadcrumb"
          style={{ background: "url(assets/img/Airpropx.png)" }}
        >
          
          <div className="container">
            <div className="text-right tagline_txt">

              <Carousel>
                <Carousel.Item>
                <p className="slid_clr_meta1">"AirPropX: Redefining Real Estate Expos in<br></br> the Metaverse."</p>
                </Carousel.Item>
                <Carousel.Item>
                <p className="slid_clr_meta2">"Explore, Engage, and Experience the Future of <br></br>Real Estate with AirPropX"</p>
                </Carousel.Item>
              </Carousel>
              
              {/* <p>"Air drop into your dream model house in metaverse way<br></br> <span>...</span> with just one keystroke ."</p> */}
              </div>
            <h2 className="breadcrumb-title ">
              <span>AirProp<label>X</label></span><br></br>
              The Metaverse Realestate Expo
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
                    AirPropX is a virtual real estate expo platform that redefines the traditional real estate expo experience by leveraging the capabilities of the metaverse. It offers a dynamic and immersive environment where exhibitors can showcase projects and properties, and attendees can explore, interact, and engage with builders and developers. 
                    </p>
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col-md-12">
                  <div className="title_out">
                <h3>Here are the features and benefits of AirPropX.</h3>
              </div>
                    
                  </div>
                </div> */}
                <div className="row align-items-center">
                  <div className="col-md-6">
                <div className="property-single-content">
                  {/* <h4>Virtual Venue: </h4> */}
                  <div className="property-single-description metaver_out">

                  {/* <h3>Here are the features and benefits of AirPropX.</h3> */}
                  <h3>Benefits to builders using AirPropX:</h3>

                    <ul>
                          <li><span>»</span> Cost-effective showcase of projects without travel or logistical expenses.</li>
                          <li><span>»</span> Access to a global audience, increasing exposure and reach.</li>
                          <li><span>»</span> Interactive virtual booths to effectively present properties.</li>
                          <li><span>»</span> Customer analytics to gain insights into buyer interests and preferences.</li>
                        
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
                      <Image src={"/assets/img/airpropx-la1.png"} width={600}
                        height={300} />
                    </div>
                    
                  </div>
                  </div>
                  <div className="row align-items-center">
                  <div className="col-md-6">

                  <div className="spcil_ot_meta">
                    <Image src={"/assets/img/airpropx-la.png"} width={500}
                        height={500} />
                    </div>
                    
                  </div>
                  <div className="col-md-6">
                <div className="property-single-content">
                  {/* <h4>Cost-Effective and Sustainable:</h4> */}
                  <div className="property-single-description metaver_out">
                  {/* <h3>Benefits to builders using AirPropX:</h3> */}

<ul>
      <li><span>»</span> Opportunities for networking with potential buyers and industry professionals.</li>
      <li><span>»</span> Ability to participate in real estate expos without the limitations of physical events.</li>
      <li><span>»</span> AirPropX serves as a lead generation platform for builders by capturing quality prospects</li>
      
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
{/*                 
                <div className="property-single-content property-single-contentt2">
                
                  <div className="property-single-description">
                    <p className="mb-0">
                    In summary, a Metaverse Model House offers a convenient, immersive, and efficient platform for property buyers to explore, visualize, and engage with builders, ultimately enhancing the overall experience and effectiveness of the property buying process.
                    </p>
                  </div>
                </div> */}

              </div>
            </div>
          </div>
          {/* <div className="pt-5">
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
            </div> */}
        </div>
      </main>
    </>
  );
}
