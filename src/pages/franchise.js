"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosMail } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { FaCity, FaPhoneAlt, FaLocationDot } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";

const Franchise = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    country: "India",
    city: "",
    PerLoaction: "",
    message: "",
  });
  const [countries, setCountries] = useState([]);
  const [phoneCode, setPhoneCode] = useState("+91");
  const [otpPopup, setOtpPopup] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [otp, setOtp] = useState("");

  // Fetch country data on component mount
  useEffect(() => {
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

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update phone code dynamically when country changes
    if (name === "country") {
      const selectedCountry = countries.find((country) => country.name === value);
      setPhoneCode(selectedCountry?.code || "");
    }

    setFormData({ ...formData, [name]: value });
  };

  // Handle OTP request
  const handleOtpRequest = () => {
    if (!formData.number) {
      toast.error("Please enter your phone number to request OTP.");
      return;
    }
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate random OTP
    setGeneratedOtp(otp);
    setOtpPopup(true);
    toast.info(`Your OTP is: ${otp} (for demo purposes)`); // Simulated OTP alert
  };

  // Verify OTP
  const handleVerifyOtp = () => {
    if (otp === generatedOtp) {
      setOtpPopup(false);
      toast.success("OTP verified successfully!");
    } else {
      toast.error("OTP does not match. Please try again.");
    }
  };

  // Handle form submission
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
        PerLoaction: "",
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
      <section className="contact-section">
        <div className="auto-container">
          <div className="sec-title centred">
            <h2>Book Your Franchise Now</h2>
          </div>
          <div className="row align-items-center clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <div className="image-box">
                <figure className="image">
                  {/* <img src="assets/img/franchise2.png" alt="Franchise" /> */}
                  <img src="assets/img/franchise1.png" alt="Franchise" />
                </figure>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content-box">
                <div className="form-inner">
                  <form onSubmit={handleSubmit} className="form-container franchiseform">
                    <div className="row clearfix align-items-center">
                      {/* Name Field */}
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <InputField
                          icon={<IoPersonSharp />}
                          type="text"
                          name="name"
                          placeholder="Enter Full Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        {/* Email Field */}
                        <InputField
                          icon={<IoIosMail />}
                          type="email"
                          name="email"
                          placeholder="Enter Email Address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-12 p-1"><p className="mb-0 fomp">Choose the country or city where you wish to establish a franchise.</p></div>
                      {/* Country Selection */}
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <SelectField
                          icon={<FaCity />}
                          name="country"
                          options={countries}
                          placeholder="Select Country"
                          value={formData.country}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        {/* City Field */}
                        <InputField
                          icon={<FaCity />}
                          type="text"
                          name="city"
                          placeholder="Enter City"
                          value={formData.city}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-lg-7 col-md-7 col-sm-7 form-group">
                        {/* Phone Number */}
                        <div className="form-group phone-input">
                          <FaPhoneAlt />
                          <span className="phone-code">{phoneCode}</span>
                          <input
                            type="number"
                            name="number"
                            placeholder="Enter Whatspp Number"
                            value={formData.number}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 col-sm-5 form-group text-center">
                        {/* OTP Button */}
                        <button type="button" className="theme-btn btn-one" onClick={handleOtpRequest}>
                          Get OTP
                        </button>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          {/* Message Field */}
                          <TextareaField
                        
                            icon={<RiMessage2Fill   className="messageic" />}
                            name="message"
                            placeholder="Enter Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                          {/* Submit Button */}
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
            />
            <button className="theme-btn btn-one" onClick={handleVerifyOtp}>Verify OTP</button>
          </div>
        </div>
      )}
    </>
  );
};

const InputField = ({ icon, ...props }) => (
  <div className="form-group">
    {icon}
    <input {...props} />
  </div>
);

const SelectField = ({ icon, options, ...props }) => (
  <div className="form-group">
    {icon}
    <select {...props}>
      <option value="">{props.placeholder}</option>
      {options.map((opt, idx) => (
        <option key={idx} value={opt.name}>
          {opt.name}
        </option>
      ))}
    </select>
  </div>
);

const TextareaField = ({ icon, ...props }) => (
  <div className="form-group">
    {icon}
    <textarea {...props}></textarea>
  </div>
);

export default Franchise;
