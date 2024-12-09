import Header from "../components/shared/header";
import Footer from "../components/shared/footer";
import Link from "next/link";
import Image from "next/image";
import { Carousel } from 'react-bootstrap';


export default function EstellaMeta() {
  return (
    <>
      <main className="main specl_pro">
        <div
          className="site-breadcrumb"
          style={{ background: "url(assets/img/breadcrumb/01.jpg)" }}
        >
          <div className="container">
            <div className="text-right tagline_txt">

            <Carousel>
                <Carousel.Item>
                <p className="slid_clr_meta1">
                "Estella: Your personal real estate concierge, <br></br>{" "}
                <span>...</span>from preference to property."
              </p>
                </Carousel.Item>
                <Carousel.Item>
                <p className="slid_clr_meta2">"Estella: Your Virtual Guide for Seamless<br></br> Property Buying."</p>
                </Carousel.Item>
              </Carousel>
             
            </div>
            <h2 className="breadcrumb-title ">
              <span>Estella</span>
              <br></br>
              the digital human 
            </h2>
          </div>
        </div>

        <div className="py-120 bg-metavr">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="property-single-content property-single-contentt2 mb-3">
                  {/* <h3>Estella</h3> */}
                  <div className="property-single-description">
                    <p className="mb-3">
                      "Estella, the digital human bot, acts as a vital bridge
                      connecting property buyers and builders seamlessly through
                      natural voice-to-voice interactions, akin to human
                      conversations. Estella offers end-to-end service, guiding
                      property buyers through every stage of their journey, from
                      initial inquiry to property visits.
                    </p>
                
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col-md-12">
                  <div className="title_out">
                <h3>Here are the features and benefits of  Estella.</h3>
              </div>
                    
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="property-single-content">
                      <h4>Intuitive Customer Interaction: </h4>
                      <div className="property-single-description">
                        <p className="AirDrop">
                          Estella engages customers in natural, voice-to-voice
                          interactions, providing a user-friendly experience
                          similar to talking to a human agent.Its conversational
                          interface enables customers to express their
                          requirements and preferences effortlessly.
                        </p>
                      </div>
                    </div>

                    <div className="property-single-content">
                      <h4>Multi-Language Support:</h4>
                      <div className="property-single-description">
                        <p className="AirDrop">
                          Estella is equipped with multi-language capabilities,
                          allowing it to communicate with customers in their
                          preferred language.This feature enhances accessibility
                          and inclusivity, catering to a diverse customer base.
                        </p>
                      </div>
                    </div>

                    <div className="property-single-content">
                      <h4>24/7 Availability:</h4>
                      <div className="property-single-description">
                        <p className="AirDrop">
                          Estella provides round-the-clock service, ensuring
                          that customers can access assistance and property
                          information at any time, regardless of their time zone
                          or location. This continuous availability enhances
                          customer satisfaction and convenience.
                        </p>
                      </div>
                    </div>

                    <div className="property-single-content">
                      <h4>Requirement Analysis and Recommendations:</h4>
                      <div className="property-single-description">
                        <p className="AirDrop">
                          Estella analyzes customer requirements and preferences
                          to deliver tailored property recommendations.By
                          understanding customer needs, it assists in narrowing
                          down options and presenting relevant properties that
                          match their criteria.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="spcil_ot_01">
                      <Image
                        src={"/assets/img/extilla.jpeg"}
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
                        src={"/assets/img/pro-img2.jpeg"}
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
              

                    <div className="property-single-content">
                      <h4>Scheduling Property Visits: </h4>
                      <div className="property-single-description">
                        <p className="AirDrop">
                          Estella assists customers in scheduling property site
                          visits based on their availability and preferences. It
                          coordinates with builders and agents to arrange visits
                          and ensure a seamless experience for customers.
                        </p>
                      </div>
                    </div>

                    <div className="property-single-content">
                      <h4>Enhanced Customer Experience:</h4>
                      <div className="property-single-description">
                        <p className="AirDrop">
                          Estella delivers a personalized and intuitive
                          experience, catering to individual customer needs and
                          preferences.Its user-friendly interface and
                          round-the-clock availability contribute to a positive
                          customer experience.
                        </p>
                      </div>
                    </div>

                    <div className="property-single-content">
                      <h4>Increased Efficiency and Productivity: </h4>
                      <div className="property-single-description">
                        <p className="AirDrop">
                          Estella streamlines the property search process by
                          automating tasks such as property analysis,
                          recommendations, and scheduling.This frees up human
                          agents' time, allowing them to focus on higher-value
                          activities and customer interactions.
                        </p>
                      </div>
                    </div>

                
                    <div className="property-single-content">
                      <h4>Cost-Effective Solution: </h4>
                      <div className="property-single-description">
                        <p className="AirDrop">
                          Estella offers a cost-effective alternative to
                          traditional customer service and sales channels,
                          reducing operational expenses and overhead costs. Its
                          automated capabilities help optimize resource
                          allocation and maximize ROI for real estate
                          businesses.
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
                  <h3>Features and Benefits of Estella:</h3>

                    <ul>
                          <li><span>»</span> Intuitive Customer Interaction: Provides natural, voice-to-voice conversations similar to human interactions, making it easy for customers to express their needs.</li>
                          <li><span>»</span> Multi-Language Support: Communicates in multiple languages, ensuring accessibility for a diverse audience.</li>
                          <li><span>»</span> 24/7 Availability: Offers round-the-clock service for property information and assistance, improving customer convenience.</li>
                          <li><span>»</span> Requirement Analysis and Recommendations: Analyzes customer preferences to offer tailored property recommendations.</li>
                        
                        
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
                    <Image
                        src={"/assets/img/extilla.jpeg"}
                        width={600}
                        height={600}
                      />
                    </div>
                    
                  </div>
                  </div>
                  <div className="row align-items-center">
                  <div className="col-md-6">

                  <div className="spcil_ot_meta">
                  <Image
                        src={"/assets/img/pro-img2.jpeg"}
                        width={500}
                        height={500}
                      />
                    </div>
                    
                  </div>
                  <div className="col-md-6">
                <div className="property-single-content">
                  {/* <h4>Cost-Effective and Sustainable:</h4> */}
                  <div className="property-single-description metaver_out">
                  {/* <h3>Benefits to builders using AirPropX:</h3> */}

<ul>
      <li><span>»</span> Scheduling Property Visits: Coordinates property visits based on customer availability, ensuring a seamless process.</li>
      <li><span>»</span> Enhanced Customer Experience: Delivers a personalized, always-available, and user-friendly service.</li>
      <li><span>»</span> Increased Efficiency and Productivity: Automates tasks to streamline property search and booking, allowing human agents to focus on higher-value activities.</li>
      <li><span>»</span> Cost-Effective Solution: Reduces operational expenses compared to traditional customer service models, optimizing resource use.</li>
      
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
                      Estella revolutionizes the property search process by
                      combining advanced artificial intelligence technology with
                      personalized customer interactions. This leads to improved
                      customer satisfaction, improved efficiency, and increased
                      business success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-5">
            <div className="container">
              <div className="title_out">
                <h3>Six Simple Steps to Interact with Estella.</h3>
              </div>
              <div className="row pb-50">
                <div className="col-md-4">
                  <div className="col">
                    <span className="bg-l-red">
                      Step <b>01</b>
                    </span>
                    <h5>Access Estella:</h5>
                    <p className="AirDrop">
                      Log in to the designated platform or website where Estella
                      is available. You can typically find Estella on the real
                      estate company's website or through a dedicated app.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="col">
                    <span className="bg-l-blue">
                      Step <b>02</b>
                    </span>
                    <h5>Initiate Conversation:</h5>
                    <p className="AirDrop">
                      Once logged in, look for the chat or interaction window
                      where you can initiate a conversation with Estella. Click
                      on the chat icon or designated area to begin.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="col ">
                    <span className="bg-l-red">
                      Step <b>03</b>
                    </span>
                    <h5>Introduce Yourself:</h5>
                    <p className="AirDrop">
                      Start the conversation by introducing yourself or stating
                      your purpose for interacting with Estella. This helps
                      Estella understand your needs and preferences better.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="col ">
                    <span className="bg-l-blue">
                      Step <b>04</b>
                    </span>
                    <h5>Ask Questions or Seek Information: </h5>
                    <p className="AirDrop">
                      Feel free to ask Estella any questions you have about
                      properties, real estate trends, available listings, or any
                      other relevant topics.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="col ">
                    <span className="bg-l-red">
                      Step <b>05</b>
                    </span>
                    <h5>Your Preferences: </h5>
                    <p className="AirDrop">
                      Share your preferences, requirements, and criteria for the
                      type of property you're looking for. This could include
                      location preferences, budget constraints, desired
                      amenities, and any specific features you prioritize.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="col ">
                    <span className="bg-l-blue">
                      Step <b>06</b>
                    </span>
                    <h5>Recommendations and Guidance:</h5>
                    <p className="AirDrop">
                      "Estella offers personalized recommendations and guidance
                      tailored to your preferences, facilitating the search for
                      suitable properties. 
                      {/* From scheduling site visits to
                      coordinating negotiations and navigating the deal-closing
                      process. */}
                    </p>
                  </div>
                </div>
              </div>

              <div className="property-single-content property-single-contentt2 mt-50">
                <div className="property-single-description">
                  {/* <p className="mb-0 AirDrop"> */}
                  <p className="mb-0">
                    Estella provides comprehensive support at every stage of
                    your real estate journey.By following above steps, you can
                    effectively interact with Estella to explore properties,
                    receive guidance, and make informed decisions in your
                    property search journey.
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
