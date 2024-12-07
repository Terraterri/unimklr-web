"use client"; // Add this line at the top
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosMail } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { FaCity } from "react-icons/fa";
import { PiCityBold } from "react-icons/pi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiMessage2Fill } from "react-icons/ri";
import Link from "next/link";




const Franchise = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    country: "",
    city: "",
    message: "",
  });

  const [countries, setCountries] = useState([]);
  const [phoneCode, setPhoneCode] = useState("");
  const [otpPopup, setOtpPopup] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [otp, setOtp] = useState("");

  useEffect(() => {
    // Fetch country data on component mount
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countryData = response.data.map((country) => ({
          name: country.name.common,
          code: country.idd.root
            ? `${country.idd.root}${country.idd.suffixes ? country.idd.suffixes[0] : ""}`
            : "",
        }));
        setCountries(countryData);
      } catch (error) {
        console.error("Error fetching countries:", error);
        toast.error("Failed to load country data.");
      }
    };

    fetchCountries();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "country") {
      // Dynamically set phone code when country changes
      const selectedCountry = countries.find((country) => country.name === value);
      setPhoneCode(selectedCountry?.code || "");
    }

    setFormData({ ...formData, [name]: value });
  };


  const handleOtpRequest = () => {
    if (!formData.number) {
      toast.error("Please enter your phone number to request OTP.");
      return;
    }

    // Generate a random OTP for demo purposes
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);
    setOtpPopup(true);
    toast.info(`Your OTP is: ${otp} (for demo purposes)`); // Temporary alert to simulate OTP
  };

  const handleVerifyOtp = () => {
    if (otp === generatedOtp) {
      setOtpPopup(false);
      toast.success("OTP verified successfully!");
    } else {
      toast.error("OTP does not match. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost/tt-expo-admin-be/unimaklerF/create.php",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

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
      <section className="contact-section ">
        <div className="auto-container">
          <div className="sec-title centred">
            <h2>Book Your Franchise Now</h2>
          </div>
          <div className="row align-items-center clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <div className="image-box">
                <figure className="image">
                  <img src="images/contact.jpg" alt="Franchise" />
                </figure>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content-box">
                <div className="form-inner">
                  <form
                    noValidate
                    method="post"
                    className="form-container franchiseform"
                    onSubmit={handleSubmit}
                  >
                    <div className="row clearfix align-items-center">
                      {/* Name Field */}
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <IoPersonSharp />
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter Full Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Email Field */}
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <IoIosMail />
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter Email address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-12 p-1"><p className="mb-0 fomp">Choose the country or city where you wish to establish a franchise.</p></div>
                      {/* Country Select */}
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <FaCity />
                        <select
                          name="country"
                          onChange={handleChange}
                          value={formData.country}
                          required
                        >
                          <option value="">Select Country</option>
                          {countries.map((country, index) => (
                            <option key={index} value={country.name}>
                              {country.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* City Select */}
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <PiCityBold />
                        <input
                          type="text"
                          placeholder="Enter City"
                          name="city"
                          onChange={handleChange}
                          value={formData.city}
                          required
                        />

                      </div>

                      {/* Phone Number Field */}
                      <div className="col-lg-7 col-md-7 col-sm-7 form-group">
                        <div className="phone-input">
                          <FaPhoneAlt />
                          <span className="phone-code">  {phoneCode}</span>
                          <input
                            type="number"
                            name="number"
                            placeholder="Enter Number"
                            value={formData.number}
                            onChange={handleChange}
                            required
                          />

                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 col-sm-5 form-group text-center">
                        <button
                          type="button"
                          className="theme-btn btn-one"
                          onClick={handleOtpRequest}
                        >
                          Get OTP
                        </button>
                      </div>

                      <div className="col-lg-12 col-md-12 form-group">

                        <FaLocationDot />
                        <input
                          type="text"
                          name="PerLoaction"
                          placeholder="Enter Perfer Loaction"
                          value={formData.PerLoaction}
                          onChange={handleChange}
                          required
                        />

                      </div>



                      {/* Message Textarea */}
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <RiMessage2Fill className="messageic" />
                        <textarea
                          className=""
                          name="message"
                          placeholder="Enter Message"
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

      {/* OTP Popup */}
      {otpPopup && (
        <div className="otp-popup">
          <div className="popup-content">
            <div className="d-flex justify-content-between">
               <h5>Enter OTP</h5>
              <span
                onClick={() => setOtpPopup(false)}
                className="closebtn"
              >
                X
              </span></div>

            <input
              type="text"
              placeholder="X X X X X X"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="form-input"
            />
            <div className="popup-buttons">
              <button onClick={handleVerifyOtp} className="theme-btn btn-one">
                Verify OTP
              </button>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Franchise;
