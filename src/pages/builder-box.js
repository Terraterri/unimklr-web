import Header from "../components/shared/header";
import Footer from "../components/shared/footer";
import Link from "next/link";
import Image from "next/image";
import { Carousel } from 'react-bootstrap';

export default function BuilderBox() {
  return (
    <>
      <main className="main specl_pro">
        <div
          className="site-breadcrumb"
          style={{ background: "url(assets/img/meta-office.jpg)" }}
        >
          <div className="container">
            <div className="text-right tagline_txt">
            <Carousel className="slid_clr_meta">
                <Carousel.Item>
                <p className="slid_clr_meta1">
                " AirDrop into Builder's metaverse office<br></br>{" "}
                <span>...</span>redefine property exploration! " </p>
                </Carousel.Item>
                <Carousel.Item>
                <p className="slid_clr_meta2">"Builder Box: Streamlining Virtual Collaboration for<br></br> Property Buyers and Builders.""</p>
                </Carousel.Item>
              </Carousel>

              {/* <p className="">
                " AirDrop into Builder's metaverse office<br></br>{" "}
                <span>...</span>redefine property exploration! "
              </p> */}
            </div>
            <h2 className="breadcrumb-title ">
              <span>Builder Box</span>
              <br></br>
              the Metaverse Builder's Office
            </h2>
          </div>
        </div>

        <div className="py-120 bg-metavr">
          <div className="container">
          
            <div className="row">
              <div className="col-md-12">
                <div className="property-single-content property-single-contentt2">
                  {/* <h3>Builder Box</h3> */}
                  <div className="property-single-description">
                    <p className="mb-3">
                      Builder Box is a revolutionary virtual office platform
                      tailored to streamline remote collaboration,
                      communication, and negotiation between property buyers and
                      builders. It serves as a dynamic hub where buyers and
                      builders converge, interact, and make informed decisions,
                      thus elevating the efficiency and effectiveness of the
                      property buying process.
                    </p>
                  </div>
                </div>

                {/* <div className="row">
                  <div className="col-md-12">
                  <div className="title_out">
                <h3>Here are the features and benefits of  Builder Box.</h3>
              </div>
                    
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="property-single-content">
                      <h4>Virtual Meetings: </h4>
                      <div className="property-single-description">
                        <p className="AirDrop">
                          Property buyers can engage in face-to-face virtual
                          meetings with builders and representatives to discuss
                          project details, property specifications, and
                          negotiation terms.
                        </p>
                      </div>
                    </div>


                    <div className="property-single-content">
                      <h4>Interactive Presentations:</h4>
                      <div className="property-single-description">
                        <p className="AirDrop">
                          Builders can deliver interactive presentations and
                          walkthroughs, highlighting key features, floor plans,
                          and design elements of their properties to potential
                          buyers.
                        </p>
                      </div>
                    </div>

                    <div className="property-single-content">
                      <h4>Collaborative Decision-Making</h4>
                      <div className="property-single-description">
                        <p className="AirDrop">
                          Buyers can involve family members, advisors, or real
                          estate agents in virtual meetings to facilitate
                          collaborative decision-making and gather diverse
                          perspectives.
                        </p>
                      </div>
                    </div>
                    <div className="property-single-content">
                      <h4>personalized Avatars: </h4>
                      <div className="property-single-description">
                        <p className="AirDrop">
                          Users can create personalized avatars to represent
                          themselves in the virtual workspace, adding a layer of
                          identity and interactivity to interactions with
                          others.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="spcil_ot_01">
                      <Image
                        src={"/assets/img/pro-img1.jpeg"}
                        width={600}
                        height={600}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="spcil_ot_02">
                      <Image
                        src={"/assets/img/pro-img3.jpeg"}
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
    

                    <div className="property-single-content">
                      <h4>Real-Time Interaction: </h4>
                      <div className="property-single-description">
                        <p className="AirDrop">
                          Provides instant communication and feedback between
                          buyers and builders, enabling prompt responses to
                          inquiries, concerns, and negotiation offers.
                        </p>
                      </div>
                    </div>
                    <div className="property-single-content">
                      <h4>Convenience: </h4>
                      <div className="property-single-description">
                        <p className="AirDrop">
                          Eliminates the need for physical travel to multiple
                          locations, saving time and reducing logistical hassles
                          associated with property visits and meetings.
                        </p>
                      </div>
                    </div>
                    <div className="property-single-content">
                      <h4>Cost Efficiency: </h4>
                      <div className="property-single-description">
                        <p className="AirDrop">
                          Reduces expenses related to travel, accommodation, and
                          transportation, making property exploration and
                          consultation more affordable and accessible for
                          buyers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              */}

                         <div className="row align-items-center">
                  <div className="col-md-6">
                <div className="property-single-content">
                  {/* <h4>Virtual Venue: </h4> */}
                  <div className="property-single-description metaver_out">

                  {/* <h3>Here are the features and benefits of AirPropX.</h3> */}
                  <h3>Features and Benefits of Builder Box:</h3>

                    <ul>
                          <li><span>»</span> Virtual Meetings: Enables face-to-face virtual discussions between buyers and builders to review property details and negotiate terms.</li>
                          <li><span>»</span> Interactive Presentations: Allows builders to deliver engaging presentations, showcasing key features, floor plans, and design elements.</li>
                          <li><span>»</span> Collaborative Decision-Making: Facilitates the involvement of family, advisors, or agents in meetings to gather diverse perspectives.</li>
                        
                        
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
                  <div className="row align-items-center pt-3">
                  <div className="col-md-6">

                  <div className="spcil_ot_meta">
                    <Image src={"/assets/img/meta-office.jpg"} width={500}
                        height={500} />
                    </div>
                    
                  </div>
                  <div className="col-md-6">
                <div className="property-single-content">
                  {/* <h4>Cost-Effective and Sustainable:</h4> */}
                  <div className="property-single-description metaver_out">
                  {/* <h3>Benefits to builders using AirPropX:</h3> */}

<ul>
      <li><span>»</span> Personalized Avatars: Users can create avatars to represent themselves, adding identity and interactivity to virtual meetings.</li>
      <li><span>»</span> Real-Time Interaction: Supports instant communication, providing prompt feedback to inquiries and negotiation offers.</li>
      <li><span>»</span> Convenience: Eliminates the need for physical visits, saving time and reducing logistical challenges.</li>
      <li><span>»</span> Cost Efficiency: Minimizes travel and accommodation expenses, making the property buying process more affordable.</li>
      
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
                      Overall, Builder Box revolutionizes the property buying
                      experience by harnessing the power of virtual technology
                      to foster collaboration, transparency, and efficiency in
                      the real estate industry. Whether buyers are searching for
                      their dream home or builders are showcasing their latest
                      developments, Builder Box serves as a centralized platform
                      for meaningful interactions and successful transactions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-5">
            <div className="container">
              <div className="title_out">
                <h3>
                  Here's a step-by-step guide for property buyers
                  to enter Builder Box
                </h3>
              </div>
              <div className="row pb-50">
                <div className="col-md-4">
                  <div className="col">
                    <span className="bg-l-blue">
                      Step <b>01</b>
                    </span>
                    <h5>Register and Login:</h5>
                    <p className="AirDrop">
                      Register by providing some basic information like your
                      name, email address. Follow the prompts to complete the
                      registration process. login to Builder Box using your
                      registered email address and password
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="col">
                    <span className="bg-l-red">
                      Step <b>02</b>
                    </span>
                    <h5>Create Your Own Avatar:</h5>
                    <p className="AirDrop">
                      Once registered, you'll be prompted to create your own
                      avatar. Choose your preferred appearance, including
                      hairstyle, clothing, and accessories. Your avatar
                      represents you in the virtual environment.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="col">
                    <span className="bg-l-blue">
                      Step <b>03</b>
                    </span>
                    <h5>Navigate and Explore:</h5>
                    <p className="AirDrop">
                      Use the direction buttons on your keyboard (such as the
                      arrow keys) to move your avatar around the virtual office.{" "}
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="col">
                    <span className="bg-l-red">
                      Step <b>04</b>
                    </span>
                    <h5>Meet the Builder representative:</h5>
                    <p className="AirDrop">
                      The builder representative will warmly welcome you and
                      guide you to the designated meeting room or area where you
                      can interact with the builder.{" "}
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="col">
                    <span className="bg-l-blue">
                      Step <b>05</b>
                    </span>
                    <h5>Explore project details: </h5>
                    <p className="AirDrop">
                      After meeting the builder, seize the opportunity to delve
                      into comprehensive details about the projects they offer.
                      Feel free to ask questions and clarify all your concerns.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="col">
                    <span className="bg-l-red">
                      Step <b>06</b>
                    </span>
                    <h5>Exit the Builder box:</h5>
                    <p className="AirDrop">
                      When you're done exploring and interacting with the
                      builder, navigate back to the exit point to leave the
                      virtual environment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="property-single-content property-single-contentt2 mt-50">
                <div className="property-single-description">
                  <p className="mb-0 AirDrop">
                    By following above steps, property buyers can easily
                    navigate the Metaverse Model House platform, explore virtual
                    model houses, and engage with builders in an immersive and
                    informative way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
