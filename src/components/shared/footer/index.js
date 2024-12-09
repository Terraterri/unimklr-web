import Link from "next/link";
import Image from "next/image";
import { BiLogoFacebook } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();

  const handleSearch = (param) => {
    localStorage.setItem("query", param);
    const url = `/services/`;
    router.push(url);
  };

  return (
    <>
      <footer className="footer-area">
        <div className="footer-widget pt-20 pb-20">
          <div className="container">
            <div className="row footer-widget-wrapper ">
              <div className="col-md-6 col-lg-3">
                <div className="footer-widget-box about-us">
                  {/* <Link href="#" className="footer-logo">
                <img src="assets/img/logo/terraterri-logo.png" alt="" />
              </Link> */}
                  <h4 class="footer-widget-title">Reach Us</h4>
                  <div className=" padin-lef">
                    <Link href="mainto:info@terraterri.com">
                      <div className="link-icons">
                        <IoIosMail className="contact-icon" />

                        {/* <BiPaperPlane className="contact-icon" /> */}
                      </div>
                      info@terraterri.com{" "}
                    </Link>
                  </div>
                  {/* <h4 className="footer-widget-title">About Terraterri</h4> */}
                  {/* <p className="mb-4">
                    Terraterri.com is designed with advanced technologies and
                    features like 360 street view, AR & VR, AI Digital Human
                    bot, Geo based property search. Terraterri.com generates
                    real estate buyer-leads to terraterri's listing subscribers.
                  </p> */}
                  <div>
                    {/* <input
                      className={"form-control news-letter"}
                      type="text"
                      id="emailletter"
                    /> */}
                  </div>
                  <ul className="footer-social">
                    <li>
                      <Link
                        href="https://www.facebook.com/terraterriproptech/"
                        target="_blank"
                      >
                        <BiLogoFacebook />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://x.com/terraterri82320"
                        target="_blank"
                      >
                        <FaXTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.linkedin.com/company/terraterri/"
                        target="_blank"
                      >
                        <FaLinkedinIn />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.instagram.com/terraterri_proptech/"
                        target="_blank"
                      >
                        <BsInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.youtube.com/channel/UCHRWsU3s6wpgj979heLTPNw"
                        target="_blank"
                      >
                        <FaYoutube />
                      </Link>
                    </li>
                  </ul>
                  <div className="d-flex mt-3 app_icons">
                    <Image
                      src={"/assets/img/app-store.png"}
                      width={200}
                      height={200}
                      alt="quote"
                    />
                    <Image
                      src={"/assets/img/google-store.png"}
                      width={200}
                      height={200}
                      alt="quote"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="footer-widget-box list">
                  <h4 className="footer-widget-title">Quick Links</h4>
                  <div className="row">
                    <div className="col-md-6 pr-0">
                      <ul className="footer-list">
                        <li>
                          <Link href="/about">About Us</Link>
                        </li>
                        <li>
                          <Link href="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li>
                          <Link href="/contact">Contact us</Link>
                        </li>
                        <li>
                          <Link href="/blog">Blog</Link>
                        </li>
                        
                      </ul>
                    </div>
                    <div className="col-md-6 pr-0">
                      <ul className="footer-list">
                        {/* <li>
                          <Link href="/">Careers</Link>
                        </li> */}
                        <li>
                          <Link href="/feedback">Feed Back</Link>
                        </li>
                        <li>
                          <Link href="/help-center">Help Center</Link>
                        </li>
                       
                        <li>
                          <Link href="/terms-and-conditions">
                            Terms & Conditions
                          </Link>
                        </li>
                        <li>
                          <Link href="/site-map">Site Map</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="footer-widget-box list">
                  <h4 className="footer-widget-title">Our Services</h4>
                  <div className="row">
                    <div className="col-md-6 pr-0">
                      <ul className="footer-list">
                        <li>
                          <Link href="#">Real Estate in India </Link>
                        </li>
                        <li
                          onClick={() =>
                            handleSearch(
                              "property_type_id=1&property_sub_type_id=38"
                            )
                          }
                        >
                          <span>Flats for Sale</span>
                        </li>
                        <li
                          onClick={() =>
                            handleSearch(
                              "property_type_id=1&property_sub_type_id=38&isRent=1"
                            )
                          }
                        >
                          <span>Flats for Rent</span>
                        </li>
                        <li
                          onClick={() =>
                            handleSearch(
                              "property_type_id=1&property_sub_type_id=39"
                            )
                          }
                        >
                          <span>Houses for Sale</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6 pr-0">
                      <ul className="footer-list">
                        <li
                          onClick={() =>
                            handleSearch(
                              "property_type_id=1&property_sub_type_id=39&isRent=1"
                            )
                          }
                        >
                          <span>Houses for Rent</span>
                        </li>
                        
                        <li
                          onClick={() => {
                            handleSearch(
                              "property_type_id=1&property_sub_type_id=40"
                            );
                          }}
                        >
                          <span>Plots for Sale</span>
                        </li>

                        <li>
                          <Link
                            className="nav-link"
                            href="https://builder.admin.terraterri.com"
                          >
                            Advertise
                          </Link>
                        </li>
                        <li>
                          <Link href="#">Site Map</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="footer-widget-box list">
                  <h4 className="footer-widget-title">AirPropX</h4>
                  <div className="row">
                    <div className="col-md-6 pr-0">
                      <ul className="footer-list">
                        
                        {/* <li>
                          <Link href="#">AirPropX </Link>
                        </li> */}
                        <li>
                          <Link href="https://expo.terraterri.com/whyexhibit" target="_blank">Why Exhibit</Link>
                        </li>
                        <li>
                          <Link href="https://expo.terraterri.com/whyVisit" target="_blank">Why Visit</Link>
                        </li>
                        <li>
                          <Link href="https://builder.admin.terraterri.com" target="_blank">Book Your Stall</Link>
                        </li>
                        <li>
                          <Link href="https://expo.terraterri.com/" target="_blank">Expo Registration</Link>
                        </li>
                       
                      {/* Why Exhibit
                      Why Visit
                      Book Your Stall
                      Expo Registration */}
                      </ul>
                    </div>
                    <div className="col-md-6 pr-0">
                      <ul className="footer-list">
                        <li>
                          <Link href="/MainLogin">Sign In</Link>
                        </li>
                        {/* <li>
                          <Link href="#">Solution</Link>
                        </li> */}
                        <li>
                        <Link href="https://expo.terraterri.com/costomisedExpo" target="_blank">Exclusive Builder Expos</Link>
                        </li>
                        <li>
                        <Link href="https://expo.terraterri.com/phygiverse" target="_blank">Phygiverse Expos</Link>
                        </li>
                        <li>
                          <Link href="https://expo.terraterri.com/hostbrandexpo" target="_blank">Host Your Branded Expos</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="col-md-6 col-lg-3">
                <div className="footer-widget-box list">
                  <h4 className="footer-widget-title">Contact Us</h4>
                  <ul className="footer-contact">
                    <li>
                      <Link href="tel:+21236547898">
                        <div className="link-icons">
                          <BiPhoneCall className="contact-icon" />
                        </div>
                        +2 123 654 7898
                      </Link>
                    </li>
                   
                    <li>
                      <Link href="mainto:info@terraterri.com">
                        <div className="link-icons">
                          <BiPaperPlane className="contact-icon" />
                        </div>
                        info@terraterri.com{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>

            {/* footer-links */}

            {/* <div className="row border-top">
              <div className="col-md-3">
                <div className="menu-widget">
                  <ul className="footer-menu">
                    <li><Link href="#"> New Projects in Hyderabad </Link></li>
                    <li><Link href="#"> New Projects in Banglore </Link></li>
                    <li><Link href="#"> New Projects in Mumbai</Link></li>
                    <li><Link href="#"> New Projects in Chennai</Link></li>
                    <li><Link href="#"> New Projects in Pune </Link></li>
                    <li><Link href="#"> New Projects in New Delhi </Link></li>
                    <li><Link href="#"> New Projects in Kochi </Link></li>
                    <li><Link href="#"> New Projects in Thiruvananthapuram </Link></li>
                    <li><Link href="#"> New Projects in Kolkata </Link></li>
                    <li><Link href="#"> New Projects in Gurgaon </Link></li>
                    <li><Link href="#"> New Projects in Noida </Link></li>
                    <li><Link href="#"> New Projects in Navi Mumbai </Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="menu-widget">
                  <ul className="footer-menu">
                    <li><Link href="#"> Flats For Sale in Hyderabad </Link></li>
                    
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="menu-widget">
                  <ul className="footer-menu">
                    <li><Link href="#"> New Projects in Hyderabad </Link></li>
                    <li><Link href="#"> New Projects in Banglore </Link></li>
                    <li><Link href="#"> New Projects in Mumbai</Link></li>
                    <li><Link href="#"> New Projects in Chennai</Link></li>
                    <li><Link href="#"> New Projects in Pune </Link></li>
                    <li><Link href="#"> New Projects in New Delhi </Link></li>
                    <li><Link href="#"> New Projects in Kochi </Link></li>
                    <li><Link href="#"> New Projects in Thiruvananthapuram </Link></li>
                    <li><Link href="#"> New Projects in Kolkata </Link></li>
                    <li><Link href="#"> New Projects in Gurgaon </Link></li>
                    <li><Link href="#"> New Projects in Noida </Link></li>
                    <li><Link href="#"> New Projects in Navi Mumbai </Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="menu-widget">
                  <ul className="footer-menu">
                    <li><Link href="#"> New Projects in Hyderabad </Link></li>
                    <li><Link href="#"> New Projects in Banglore </Link></li>
                    <li><Link href="#"> New Projects in Mumbai</Link></li>
                    <li><Link href="#"> New Projects in Chennai</Link></li>
                    <li><Link href="#"> New Projects in Pune </Link></li>
                    <li><Link href="#"> New Projects in New Delhi </Link></li>
                    <li><Link href="#"> New Projects in Kochi </Link></li>
                    <li><Link href="#"> New Projects in Thiruvananthapuram </Link></li>
                    <li><Link href="#"> New Projects in Kolkata </Link></li>
                    <li><Link href="#"> New Projects in Gurgaon </Link></li>
                    <li><Link href="#"> New Projects in Noida </Link></li>
                    <li><Link href="#"> New Projects in Navi Mumbai </Link></li>
                  </ul>
                </div>
              </div>
            </div> */}

            {/* footer-links */}
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12 align-item-center">
                <p className="copyright-text">
                  © Copyright <span id="date" />{" "}
                  <Link href="#"> Terraterri </Link> All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
