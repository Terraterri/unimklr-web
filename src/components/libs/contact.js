import { useState, useEffect, useContext } from "react";

import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import { Tabs } from "@mui/material";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";

import { UserContext, useUser } from "@/context/UserContext";
import { contactBuilder } from "../endPoints/websiteEndpoints";
import { getBuilderDetails } from "../endPoints/masterEndPoints";
export default function ContactTabs({
  projectName,
  builder_id,
  builderName,
  property_type,
  project_id,
  city_code,
}) {
  const [value, setValue] = useState("1");
  const [show, setShow] = useState(false);
  const [type, setType] = useState("Contact");
  const [form, setFrom] = useState({
    projectName: projectName,
    builderName: builderName,
    property_type: property_type,
  });

  const [builderDetails, setBuilderDetails] = useState({
    mobile: "",
    email: "",
  });

  useEffect(() => {
    let isMounted = true;

    const fetchBuilderDetails = async () => {
      try {
        const res = await getBuilderDetails(builder_id);
        if (isMounted) {
          const builder = res?.data;

          if (builder.location_one === city_code) {
            setBuilderDetails(() => ({
              mobile: builder.location_one_mobile,
              email: builder.location_one_email,
            }));
          }
          if (builder.location_two === city_code) {
            setBuilderDetails(() => ({
              mobile: builder.location_two_mobile,
              email: builder.location_two_email,
            }));
          }
          if (builder.location_three === city_code) {
            setBuilderDetails(() => ({
              mobile: builder.location_three_mobile,
              email: builder.location_three_email,
            }));
          }
        }
      } catch (err) {
        if (isMounted) {
          console.log(err);
        }
      }
    };

    fetchBuilderDetails();

    return () => {
      isMounted = false;
    };
  }, [builder_id]);

  const { user, setUser } = useContext(UserContext);
  const [showBuilder, setShowBuilder] = useState(false);

  const handleShow = () => setShow(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const updatedType = newValue === "1" ? "Contact" : "Request Visit";
    setType(updatedType);
    setFrom((prev) => ({ ...prev, type: updatedType }));
  };

  const handleForm = async (e) => {
    const { name, value } = e.target;
    setFrom((prev) => ({ ...prev, [name]: value }));
  };

  const handleSumit = async () => {
    console.log("form =====>", form);
  };

  const handleContact = async () => {
    setShowBuilder(true);
    const userData = {
      project_id: project_id,
      user_id: user.id,
      name: user.username,
      mobile: user.mobile,
      email: user.email,
      builder_id: builder_id,
      builderName: builderName,
    };

    const res = await contactBuilder(userData);
    if (res?.status) {
      alert(res?.message);
    }
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <TabContext value={value}>
          <div className="ct-info">
            <TabPanel value="1">
              <div className="card card-meta">
                {user == null ? (
                  <div className="login_out">
                    <ul>
                      <li>
                        Already have an Account {" "}
                        <Link href="/login">Signin</Link>
                      </li>
                      <li>
                        {" "}
                        Don't have an Account {" "}
                        <Link href="/register">Signup</Link>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <>
                    {showBuilder === true ? (
                      <div className="inside_login">
                        <div className="">
                          <h5>Builder Name : {builderName} </h5>
                          <h5>Contact Number : {builderDetails.mobile}</h5>
                          <h5>Email ID : {builderDetails.email}</h5>
                        </div>
                      </div>
                    ) : (
                      <div className="login_contact">
                        <button className="cont-btn" onClick={handleContact}>
                          Contact
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </TabPanel>
            {/* <TabPanel value="2">
              <div className="card">
                <form>
                  <ul className="d-flex mb-2">
                    <li>Iam</li>
                    <li>
                      <label class="custom-radio">
                        <input
                          type="radio"
                          name="iam"
                          value="Individual"
                          onChange={handleForm}
                        />
                        <span class="radio-icon"></span> Individual
                      </label>
                    </li>
                    <li>
                      <label class="custom-radio">
                        <input
                          type="radio"
                          name="iam"
                          value="Individual"
                          onChange={handleForm}
                        />
                        <span class="radio-icon"></span> Agent
                      </label>
                    </li>
                  </ul>

                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="Name"
                      placeholder="Name"
                      onChange={handleForm}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      className="form-control"
                      name="Mobile"
                      placeholder="Mobile"
                      onChange={handleForm}
                    />
                  </div>
                  <div className="form-group mb-1">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="Email"
                      onChange={handleForm}
                    />
                  </div>
                  <div className="form-group">
                    <label>Request your visit</label>
                    <div className="d-flex">
                      <div className="mr-2">
                        <span>Date</span>
                        <input
                          type="date"
                          className="form-control"
                          name="date"
                          onChange={handleForm}
                        />
                      </div>
                      <div>
                        <span>Time</span>
                        <input
                          type="time"
                          name="time"
                          className="form-control"
                          placeholder="time"
                          onChange={handleForm}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-0">
                    <p>
                      <input type="checkbox" /> I Agree to Terrateri'{" "}
                      <Link href="/">T&C</Link> ,{" "}
                      <Link href="/">Privacy Policy</Link> &{" "}
                      <Link href="/">Cookie Policy</Link>
                    </p>
                  </div>
                  <div className="form-group mb-0">
                    <Button variant="primary" onClick={handleSumit}>
                      Request Your Visit
                    </Button>
                  </div>
                </form>
              </div>
            </TabPanel> */}
          </div>
        </TabContext>
      </Box>

      <div className="otp_popup">
        <Modal
          show={show}
          onHide={() => setShow(false)}
          className="otp_popup_outr"
        >
          <Modal.Body>
            <div class="card-body">
              <div class="otp_boxes">
                <div class="opt_main">
                  <h4>Verify Your Number</h4>
                  <h3>
                    +91 9876543211{" "}
                    <button
                      class="btn btn-primary w-xl waves-effect waves-light"
                      type="button"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 576 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path>
                      </svg>
                    </button>
                  </h3>
                  <label>
                    Please provide the 4-Digit passcode to complete your
                    registration
                  </label>
                  <div>
                    <input
                      autocomplete="off"
                      aria-label="Please enter OTP character 1"
                    />
                    <input
                      autocomplete="off"
                      aria-label="Please enter OTP character 2"
                    />
                    <input
                      autocomplete="off"
                      aria-label="Please enter OTP character 3"
                    />
                    <input
                      autocomplete="off"
                      aria-label="Please enter OTP character 4"
                    />
                  </div>
                  <p>
                    Haven't received the passcode yet?{" "}
                    <a href="/">Resend Passcode</a>
                  </p>
                  <div class="otp_btns">
                    <button
                      class="btn btn-primary w-xl waves-effect waves-light"
                      type="button"
                    >
                      Verify &amp; Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body mt-3">
              <div className="suces_out text-center">
                <Image
                  src={"/assets/img/success.png"}
                  width={500}
                  height={300}
                  alt="property"
                />
                <h3>Thank You</h3>
                <h6>Your details are shared with the Builder</h6>
                <p>
                  Builder Details have been sent on your<br></br> Email & SMS
                </p>

                <div class="buil-detal">
                  <div class="builder-logo">
                    <img
                      alt="location"
                      loading="lazy"
                      width="600"
                      height="375"
                      src="/assets/img/model-house.jpg"
                    />
                  </div>
                  <div class="build-cnt">
                    <div class="txt_lg tex-left">VAISHNAVI</div>
                    <p class="txt_loc tex-left">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                      </svg>{" "}
                      Bandlaguda,,
                    </p>
                  </div>
                </div>

                <div className="mls_out">
                  <h5>Builder Contact Details: </h5>
                  <p className="mb-2">9876543211, 9876543211</p>
                  <h5>Mail Id:</h5>
                  <p>test@gmail.com</p>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
