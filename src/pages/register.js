import Link from "next/link";
import { useState } from "react";
import { userRegister } from "@/components/Auth/authEndPoints";
import { useRouter } from "next/router";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    otp: "",
    country: "",
  });

  const router = useRouter();

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let validationErrors = {};
    let isValid = true;
    if (!formData.username) {
      validationErrors.username = "Username is required";
      isValid = false;
    }
    if (!formData.email) {
      validationErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is invalid";
      isValid = false;
    }
    // Validate Phone
    if (!formData.otp) {
      validationErrors.otp = "Enter 6 Digits otp";
      isValid = false;
    }
    if (!formData.mobile) {
      validationErrors.mobile = "Mobile is required";
      isValid = false;
    }
    // Check if phone number is exactly 10 characters long
    else if (formData.mobile.length !== 10) {
      validationErrors.mobile = "Must be exactly 10 digits";
      isValid = false;
    }
    if (!formData.country) {
      validationErrors.country = "Please select a country";
    }
    setErrors(validationErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        let res;
        res = await userRegister(formData);
        if (res?.status) {
          alert("Registeres Successfully");
          router.push(`/login`);
        } else {
          console.log(res);
        }
      } catch (err) {
        console.log("registration error ", err);
      }
    } else {
      console.log("Form errors:", errors);
    }
  };

  return (
    <main classNameName="main">
      <div
        className="login-bg login-area pt-120 pb-120"
        style={{ background: "url('assets/img/login-bg.webp')" }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6">
              <div className="buyr_login_txt">
                <h2>
                  Welcome ! Let’s make <br></br>
                  <span>your property search even easier today.</span>
                </h2>
              </div>
            </div>
            <div className="col-md-4 tabHome">
              <div className="log" id="demo">
                <h6 className="SignUp">Buyer Signup</h6>
                <h2 className="anyTab">
                  <form
                    className="formForm text-center"
                    onSubmit={handleSubmit}
                  >
                    <div className="mb-2 buyr-lg">
                      <label>Name</label>

                      <input
                        type="text"
                        name="username"
                        placeholder="Enter UserName"
                        value={formData.username}
                        className="inputForm form-control"
                        onChange={handleChange}
                      />
                      {errors.username && (
                        <p className="error">{errors.username}</p>
                      )}
                    </div>
                    <div className="mb-3 buyr-lg">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="inputForm form-control"
                      />
                      {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="mb-3 buyr-lg">
                      <label>Phone Number</label>
                      <div className="d-flex">
                        <div className="w-100 p-relative">
                          <input
                            type="number"
                            name="mobile"
                            pattern="[0-9]*"
                            placeholder="Enter Number"
                            className="inputForm form-control"
                            value={formData.mobile}
                            onChange={handleChange}
                          />

                          {errors.mobile && (
                            <p className="error">{errors.mobile}</p>
                          )}
                        </div>
                        <button className="gt-otp">Get OTP</button>
                      </div>
                    </div>
                    <div className="mb-3 buyr-lg">
                      <label>Otp</label>
                      <input
                        type="number"
                        name="otp"
                        placeholder="Enter OTP"
                        className="inputForm form-control"
                        value={formData.otp || ""}
                        onChange={handleChange}
                      />
                      {errors.otp && <p className="error">{errors.otp}</p>}
                    </div>

                    <p className="trms-condts">
                      <label class="custom-checkbox">
                        <input type="checkbox" />
                        <span></span> I agree to Terraterri.com{" "}
                        <Link href="/terms-and-conditions">T&C</Link>,{" "}
                        <Link href="/privacy-policy">Privacy Policy</Link>, &{" "}
                        <Link href="/cookie-policy">Cookie Policy</Link>
                      </label>
                    </p>

                    <button type="submit" className="theme-btn">
                      Signup
                    </button>
                    <p class="text-center mt-3 alreadyaccount">
                      Have an account already? -
                      <Link href="/login">Sign In</Link>
                    </p>
                  </form>
                </h2>
              </div>

              <div class="card-body br-1 pt-3 mt-3 d-none">
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

              <div class="card-body br-1 pt-3 mt-3 bg-white p-4 d-none">
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
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
