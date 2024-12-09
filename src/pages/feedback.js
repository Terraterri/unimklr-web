import React, { useState } from 'react'
import Link from "next/link";
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function FeedBack() {


  const [formData, setFormData] = useState({ name: "", email: "",feedback:"",message:"" });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!formData.name) errors.name = "Name is required";

    if (!formData.email) errors.email = "Email is required";

    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid";

    if (!formData.feedback) errors.feedback = "Please select a Feedback";

    if (!formData.message) errors.subject = "Message is required";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted:", formData);
    }
  };


  return (
    <>
      <main className="main">
       
        <div className="contact-area py-120">
          <div className="container">
            <div className="contact-wrapper">
              <div className="row justify-content-center">
             
                <div className="col-lg-5 align-self-center">
                  <div className="contact-form">
                    <div className="contact-form-header">
                      <h2>Feed Back</h2>
                      <p>
                      We would love to hear you!
                      </p>
                    </div>
                    <form
                     
                      id="contact-form"
                      onSubmit={handleSubmit}
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                          <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} placeholder="Your Name" />
                          {errors.name && <span>{errors.name}</span>}
                          </div>
                        </div>

                        <div className="col-md-12">
                        <div className="form-group">
                          <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} placeholder="Your Email" />

                          </div>
                        </div>
                        <div className="col-md-12">
                        <div className="form-group">
                        <select className="form-control" name="feedback" value={formData.feedback} onChange={handleChange}>

                              <option>Select Feedback</option>
                              <option>I want to report a problem</option>
                              <option>I have a suggestion</option>
                              <option>I want to report a problem</option>
                              <option>I want to compliment Terraterri</option>
                              <option>Other</option>

                            </select>
                          </div>
                        </div>
                      
                      
                      </div>
               
                      <div className="form-group">
                        <textarea
                          name="message"
                          cols={30}
                          rows={5}
                          className="form-control"
                          placeholder="Type Your Feedback"
                          value={formData.message} onChange={handleChange}
                        />
                      </div>

                      <button type="submit" className="theme-btn">
                        Send Feedback <AiOutlineArrowRight />
                      </button>

                      <div className="col-md-12 mt-3">
                        <div className="form-messege text-success" />
                      </div>
                    </form>
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
