"use client"; // Add this line at the top
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Franchise = () => {

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    country: "",
    city: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost/tt-expo-admin-be/unimaklerF/create.php", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      console.log("Server Response:", response.data);
      toast.success("Your franchise request has been submitted!");
  
      setFormData({
        name: "",
        number: "",
        email: "",
        country: "",
        city: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      if (error.response) {
        toast.error(`Error: ${error.response.status} - ${error.response.data.message}`);
      } else if (error.request) {
        toast.error("No response from server. Please check your API.");
      } else {
        toast.error(`Error: ${error.message}`);
      }
    }
  };



  return (
    <>
      <section class="contact-section bg-color-1">
        <div class="auto-container">
          <div class="sec-title centred">
            <h2 >Book Your Franchise Now</h2>
          </div>
          <div class="row align-items-center clearfix">
            <div class="col-lg-6 col-md-12 col-sm-12 image-column">
              <div data-wow-delay="00ms" data-wow-duration="3000ms" class="image-box wow fadeInRight animated">
                <figure class="image">
                  <img src="images/contact.jpg" alt />
                </figure>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 content-column">
              <div class="content-box">
                <div class="form-inner">
                  <form
                    noValidate
                    method="post"
                    className="form-container"
                    onSubmit={handleSubmit}
                  >
                    <div className="row clearfix">
                      {/* Name Field */}
                      <div className="col-lg-12 col-md-6 col-sm-12 form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Phone Number Field */}
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input
                          type="text"
                          name="number"
                          placeholder="Phone"
                          value={formData.number}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Email Field */}
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Country Select */}
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <select
                          name="country"
                          onChange={handleChange}
                          value={formData.country}
                          required
                        >
                          <option value="">Select Country</option>
                          <option value="India">India</option>
                          <option value="America">America</option>
                          <option value="UAE">UAE</option>
                        </select>
                      </div>

                      {/* City Select */}
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <select
                          name="city"
                          onChange={handleChange}
                          value={formData.city}
                          required
                        >
                          <option value="">Select City</option>
                          <option value="Kakinada">Kakinada</option>
                          <option value="Hyderabad">Hyderabad</option>
                          <option value="Bengaluru">Bengaluru</option>
                        </select>
                      </div>

                      {/* Message Textarea */}
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <textarea
                          className="p-2"
                          name="message"
                          placeholder="Message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>

                      {/* Submit Button */}
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                        <button type="submit" className="theme-btn btn-one">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                  <ToastContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )

}
export default Franchise