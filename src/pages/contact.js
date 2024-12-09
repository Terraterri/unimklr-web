import Header from "../components/shared/header";
import Footer from "../components/shared/footer";
import Link from "next/link";

import { BiPaperPlane } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";
import { MdOutlineAccessTime } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";

import { useState } from "react";

import { postContactDetails } from "@/components/endPoints/websiteEndpoints";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    country: "",
    city: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!formData.name) errors.name = "Name is required";

    if (!formData.mobile) errors.mobile = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.mobile))
      errors.mobile = "Phone number must be 10 digits";

    if (!formData.email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Email is invalid";

    if (!formData.country) errors.country = "Please select a Country";

    if (!formData.city) errors.country = "Please select a City";

    if (!formData.subject) errors.subject = "Subject is required";
    if (!formData.message) errors.message = "Message is required";

    setErrors(errors);

    // Log errors to console
    if (Object.keys(errors).length > 0) {
      console.log("Validation errors:", errors);
    } else {
      console.log("Form is valid:", formData);
    }

    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      let res = await postContactDetails(formData);
      if (res?.status) {
      }
    }
  };

  return (
    <>
      <main className="main">
        <div className="contact-area py-120">
          <div className="container">
            <div className="contact-wrapper">
              <div className="row">
                <div className="col-lg-4">
                  <div className="contact-content">
                    <div className="contact-info">
                      <div className="contact-info-icon">
                        <TiLocation className="svg-icons" />
                      </div>
                      <div className="contact-info-content">
                        <h5>Reach Us</h5>
                        <p>
                          #504, Magna's Lakeview, Hitex Road, Khanampet,
                          Kondapur, Hyderabad - 500084
                        </p>
                      </div>
                    </div>

                    <div className="contact-info">
                      <div className="contact-info-icon">
                        <BiPaperPlane className="svg-icons" />
                      </div>
                      <div className="contact-info-content">
                        <h5>Email Us</h5>
                        <p>
                          <Link
                            href="mailto:info@terraterri.com"
                            className="__cf_email__"
                          >
                            info@terraterri.com
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="contact-info">
                      <div className="contact-info-icon">
                        <MdOutlineAccessTime className="svg-icons" />
                      </div>
                      <div className="contact-info-content">
                        <h5>Office Timings</h5>
                        <p>Mon - Sat (10.00AM - 05.30PM)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 align-self-center">
                  <div className="contact-form">
                    <div className="contact-form-header">
                      <h2>Get In Touch</h2>
                      <p>
                        Let's Connect to Build Your Real Estate Journey".We're
                        Here to Help You .
                      </p>
                    </div>
                    <form
                      // method="post"
                      // action=""
                      id="contact-form"
                      onSubmit={handleSubmit}
                    >
                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-group">
                            {/* <input
                              type="text"
                              className="form-control"
                              name="name"
                              placeholder="Your Name"
                              required=""
                            /> */}
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Your Name"
                              required
                            />
                            {errors.name && <span>{errors.name}</span>}
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="form-group">
                            <input
                              type="tel"
                              name="mobile"
                              className="form-control"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="Your Phone"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Your Email"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <select
                              className="form-control"
                              name="country"
                              value={formData.country}
                              onChange={handleChange}
                            >
                              <option>Select Country</option>
                              <option>India</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <select
                              className="form-control"
                              name="city"
                              value={formData.country}
                              onChange={handleChange}
                            >
                              <option>Select City</option>
                              <option>Hyderabad</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <input
                          type="text"
                          name="subject"
                          className="form-control"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Subject"
                        />
                      </div>

                      <div className="form-group">
                        <textarea
                          name="message"
                          cols={30}
                          rows={5}
                          className="form-control"
                          placeholder="Write Your Message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>

                      <button type="submit" className="theme-btn mt-0">
                        Submit <AiOutlineArrowRight />
                      </button>

                      {/* <div className="col-md-12 mt-3">
                        <div className="form-messege text-success" />
                      </div> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60894.47748842728!2d78.375792!3d17.464268!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93cd96b9871b%3A0xdb6e625e6542f415!2sHitex%20Road%2C%20Khanammet%2C%20Hyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1695808801786!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </main>
    </>
  );
}
