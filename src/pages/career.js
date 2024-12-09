import Header from "../components/shared/header";
import Footer from "../components/shared/footer";
import Link from "next/link";
import Image from "next/image";
import { Carousel } from 'react-bootstrap';

export default function Careers() {

  return (
    <>
      <main className="main specl_pro">
      <div className="py-120 bg-metavr">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="property-single-content property-single-contentt2 mb-0">
                  {/* <h3>Paragon</h3> */}
                  <div className="career_out text-center">
                  <h2 className="clr-whire mb-3">CURRENT OPENINGS</h2>
            <p className="text-left mb-0">
              It is a long established fact that a reader will be distracted by
              the readable
              <br /> content of a page when looking at its layout.
            </p>
                  </div>
                </div>
                

         <div className="positions_out">
         <div className="positions_hd">
          <div className="d-flex justify-content-between">
              <h3>Open Positions </h3>
              {/* <div className="form-check form-switch">
                  <label className="form-check-label togtext" for="toggleSwitch">Remote Only</label>
                  <input className="form-check-input" type="checkbox" id="toggleSwitch" />
              </div> */}
          </div>
            <form>
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label>Choose Postion</label>
                            <div className="custom-dropdown">
                                <select className="form-control">
                                    <option disabled="">Select Position</option>
                                    <option value="all">All</option>
                                    <option value="python">Python</option>
                                    <option value="full-stack">Full Stack Developer </option>
                                    <option value="data-science">Data Science </option>
                                    <option value="full-stack">Full Stack Engineer </option>
                                    <option value="java">Java Developer </option>
                                    <option value="qa">QA Engineer </option>
                                    <option value="rust">Rust Developer </option>
                                    <option value="c++">C++ </option>
                                    <option value="front-end">Sr.Frontend Developer</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label>Choose Work Type</label>
                            <div className="custom-dropdown">
                                <select className="form-control">
                                    <option disabled="">Select Work</option>
                                    <option value="all">All</option>
                                    <option value="contract">Contract</option>
                                    <option value="full-time">Full Time</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label>Choose Location</label>
                            <div className="custom-dropdown">
                                <select className="form-control">
                                    <option disabled="">Select Location</option>
                                    <option value="hyd">Hyderabad</option>
                                    <option value="bglr">Bengaluru</option>
                                    <option value="chennai">Chennai</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 ">
                        <div className="form-group">
                        <label>Search job</label>
                            <input className="from-control" type="text" id="name" name="name" placeholder="Search Job..." />
                        </div>
                    </div>
                    <div className="col-md-12 mt-4">
                        <div className="form-group text-right">
                            {/* <input className="from-control" type="s" id="name" name="name" placeholder="Search Job..." /> */}
                            <button className="btn">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div className="positions_bd">
          <div className="row">
          <div class="col-lg-12">
              <div class="single-circular-box">
                <div class="circular-title">
                  <h3>Reactjs/Typescript</h3>
                  <p>We are actively seeking talented developers proficient in Javascript/Typescript to join our ambitious team dedicated to pushing the frontiers of AI technology. This opportunity is tailored for professionals who thrive on developing innovative solutions and aspire to be at the forefront of AI advancements. You will work with different companies in the US who are looking to develop cutting-edge commercial and research AI solutions.</p>
                </div>
                <div class="circular-btn">
                  <Link href="/single-careers">APPLY THIS JOB</Link>
                </div>
              </div>
              <div class="single-circular-box">
                <div class="circular-title">
                  <h3>Nodejs/Typescript</h3>
                  <p>We are actively seeking talented developers proficient in Javascript/Typescript to join our ambitious team dedicated to pushing the frontiers of AI technology. This opportunity is tailored for professionals who thrive on developing innovative solutions and aspire to be at the forefront of AI advancements. You will work with different companies in the US who are looking to develop cutting-edge commercial and research AI solutions.</p>
                </div>
                <div class="circular-btn">
                  <Link href="/single-careers">APPLY THIS JOB</Link>
                </div>
              </div>
              <div class="single-circular-box">
                <div class="circular-title">
                  <h3>Nextjs/Typescript</h3>
                  <p>We are actively seeking talented developers proficient in Javascript/Typescript to join our ambitious team dedicated to pushing the frontiers of AI technology. This opportunity is tailored for professionals who thrive on developing innovative solutions and aspire to be at the forefront of AI advancements. You will work with different companies in the US who are looking to develop cutting-edge commercial and research AI solutions.</p>
                </div>
                <div class="circular-btn">
                  <Link href="/single-careers">APPLY THIS JOB</Link>
                </div>
              </div>
              <div class="single-circular-box">
                <div class="circular-title">
                  <h3>Larvel/Php</h3>
                  <p>We are actively seeking talented developers proficient in Javascript/Typescript to join our ambitious team dedicated to pushing the frontiers of AI technology. This opportunity is tailored for professionals who thrive on developing innovative solutions and aspire to be at the forefront of AI advancements. You will work with different companies in the US who are looking to develop cutting-edge commercial and research AI solutions.</p>
                </div>
                <div class="circular-btn">
                  <Link href="/single-careers">APPLY THIS JOB</Link>
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
      </main>
    </>
  );
}
