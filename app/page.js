import Image from "next/image";
import styles from "./page.module.css";
import BannerPart from "@/components/homePage/BannerPart";
import EliteProperties from "@/components/homePage/EliteProperties";
import Primepropeties from "@/components/homePage/Primepropeties";
import FuturedProperties from "@/components/homePage/FuturedProperties";
import TerritoriesServe from "@/components/homePage/TerritoriesServe";
import Testimonials from "@/components/homePage/Testimonials";
import ContactUs from "@/components/homePage/ContactUs";
import Blogs from "@/components/homePage/Blogs";
import NewprojectsListings from "@/components/homePage/NewprojectsListings";
NewprojectsListings

export default function Home() {
  return (
   <>

  <BannerPart />
  <EliteProperties />
  <Primepropeties />
  <FuturedProperties />
  <TerritoriesServe />
  <Testimonials />
  <ContactUs />
  <Blogs />
  <NewprojectsListings />

        {/* <section className="category-section centred">
    <div className="auto-container">
      <div data-wow-delay="00ms" data-wow-duration="1500ms" className="inner-container wow slideInup animated">
        <ul className="category-list clearfix">
          <li>
            <div className="category-block-one">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon-1"></i>
                </div>
                <h5>
                  <a href="#">Residential</a>
                </h5>
              </div>
            </div>
          </li>
          <li>
            <div className="category-block-one">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon-2"></i>
                </div>
                <h5>
                  <a href="#">Commercial</a>
                </h5>
              </div>
            </div>
          </li>
          <li>
            <div className="category-block-one">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon-3"></i>
                </div>
                <h5>
                  <a href="#">Plots &amp; Lands</a>
                </h5>
              </div>
            </div>
          </li>
          <li>
            <div className="category-block-one">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon-4"></i>
                </div>
                <h5>
                  <a href="#">Industrial</a>
                </h5>
              </div>
            </div>
          </li>
          <li>
            <div className="category-block-one">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon-5"></i>
                </div>
                <h5>
                  <a href="#">Investments</a>
                </h5>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section> */}




   </>
  );
}
