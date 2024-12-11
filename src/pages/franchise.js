"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosMail } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { FaCity, FaPhoneAlt, FaLocationDot } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { GiFamilyHouse, GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineLocationCity,MdAssuredWorkload,MdAddHomeWork } from "react-icons/md";
import { FaHandHoldingDollar,FaShareNodes,FaHouseFlag } from "react-icons/fa6";
import { AiOutlineDropbox } from "react-icons/ai";
import { BsHouseUpFill } from "react-icons/bs";
import { FcMultipleInputs } from "react-icons/fc";
import { IoSettings } from "react-icons/io5";







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

  return (
    <>
      <main className="main">
        <div className="banner-buy-area banner-1">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 col-sm-12">
                <div className="banner-buy-content">
                  <span className="sub-title">

                    <h3>Unimakler Invites</h3>
                  </span>
                  <h1> Ambitious and Visionary Entrepreneurs to the Real Estate industry</h1>
                </div>

              </div>
              <div className="col-lg-4">
                <div className="banner-right">
                  <p className="p">Join Unimakler Franchise </p>
                  <p className="pp">Unlock the Doors to a Rewarding Real Estate </p>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="video-overview-area ptb-100">
          <div className="container">
            <div className="franchise">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-10 col-xs-12">
                  <div className="fran-image">
                    <img src="assets/img/carousel3.jpg" alt="image" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-10 col-xs-12">
                  <div className="fran-head">
                    <span className="test">
                      <h3>Franchising Unimakler</h3>
                    </span>
                  </div>
                  <div className="video-overview-content">
                    <div className="overview-inner-box ">
                      <p>With 15+ years of sound Real Estate industry expertize. Unimakler offers new franchise model and
                        inviting upcoming investors for strategic partnership to expand their foot print via Franchising.</p>
                      <p> The vision of Unimakler is to achieve the Highest possible standards of Real Estate market while
                        establishing the our franchises as the premier and preferred Real Estate consultants in India.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="choose" className="choosereal with-black-bg ptb-100">
          <div className="container">
            <div className="main-section-title">
              <span className="test">
                <h3>Choose Franchise of Your Choice</h3>
                <h5 className="orange-text">pathway to unparalleled success </h5>

              </span>
            </div>
            <div className="row">
              <div className="col-md-6">
                <ol class="ol-cards">
                  <li>
                    <div class="icon bg-bluer">
                      <FaCity />

                    </div>
                    <div class="title">Residential REAL ESTATE franchise</div>

                  </li>
                  <li>
                    <div class="icon bg-orng"><GiFamilyHouse /></div>
                    <div class="title">LUXURY REAL ESTATE franchise</div>

                  </li>
                  <li >
                    <div class="icon bg-bluer"><MdOutlineLocationCity />
                    </div>
                    <div class="title">COMMERCIAL REAL ESTATE franchise</div>

                  </li>
                  <li >
                    <div class="icon bg-orng"><GiTakeMyMoney />

                    </div>
                    <div class="title">INTERNATIONAL real estate franchise</div>

                  </li>
                </ol>
              </div>
              <div className="col-md-6">
                <ol class="ol-cards">
                  <li  >
                    <div class="icon bg-orng"><AiOutlineDropbox />
                    </div>
                    <div class="title">PLOTTING franchise</div>

                  </li>
                  <li>
                    <div class="icon bg-bluer"><FaHandHoldingDollar /></div>
                    <div class="title">LEASING &amp; Rental franchise</div>

                  </li>
                  <li >
                    <div class="icon bg-orng"><BsHouseUpFill />
                    </div>
                    <div class="title">HOUSING LOAN franchise</div>

                  </li>
                  <li >
                    <div class="icon bg-bluer"><FaHouseFlag />
                    </div>
                    <div class="title">INTERIOR franchise</div>

                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>



        {/* <div id="services" className="core-service-area with-black-bg pt-100 pb-70">
          <div className="container">
            <div className="row justify-content-center">
              <div className="main-section-title">
                <span className="text-white">
                  <h3>Our Core Services</h3>
                </span>
              </div>
              <div className="col-md-3 col-sm-4 col-xs-6">

                <div className="card mt-3">
                  <div className="card-body flip">
                    <div className="front">
                      <img src="styles/img/service-1.png" className="service-icon" alt="image" />
                      <h5 className="card-title">Residential <br /> Real Estate </h5>
                    </div>
                    <div className="back">
                      <h6 className="card-title">Residential Real Estate </h6>
                      <p>Facilitating the buying, selling, or renting of homes, apartments, and other residential properties
                        and providing professional guidance and expertise to clients throughout the entire transaction.</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-md-3 col-sm-4 col-xs-6">


                <div className="card mt-3">
                  <div className="card-body flip">
                    <div className="front">
                      <img src="styles/img/service-2.png" className="service-icon" alt="image" />
                      <h5 className="card-title">Commercial <br /> Real Estate</h5>
                    </div>
                    <div className="back">
                      <h6 className="card-title">Commercial Real Estate</h6>
                      <p>Unimakler’s Commercial real estate involves providing professional services related to the buying,
                        selling, leasing, and management of commercial properties. which includes various property types such
                        as office buildings, retail spaces, industrial facilities, warehouses, and more.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-xs-6">
                <div className="card mt-3">
                  <div className="card-body flip">
                    <div className="front">
                      <img src="styles/img/service-3.png" className="service-icon" alt="image" />
                      <h5 className="card-title">Industrial <br /> Real Estate</h5>
                    </div>
                    <div className="back">
                      <h6 className="card-title">Industrial Real Estate</h6>
                      <p>Unimakler’s Industrial real estate involves providing specialized services related to the buying,
                        selling, leasing, and management of industrial properties. Which include warehouses, distribution
                        centers, manufacturing facilities, logistics hubs, and other types of properties designed for
                        industrial activities.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-4 col-xs-6">

                <div className="card mt-3">
                  <div className="card-body flip">
                    <div className="front">
                      <img src="styles/img/service-5.png" className="service-icon" alt="image" />
                      <h5 className="card-title">Luxury <br /> Real Estate</h5>
                    </div>
                    <div className="back">
                      <h6 className="card-title">Luxury Real Estate</h6>
                      <p>Unimakler’s Luxury real estate INVOLVES high-end properties With exceptional quality, unique
                        features, and a premium level of craftsmanship, design, and amenities.</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-md-3 col-sm-4 col-xs-6">



                <div className="card mt-3">
                  <div className="card-body flip">
                    <div className="front">
                      <img src="styles/img/service-6.png" className="service-icon" alt="image&quot;" />
                      <h5 className="card-title">Housings <br /> Loans</h5>
                    </div>
                    <div className="back">
                      <h6 className="card-title">Housings Loans</h6>
                      <p>Unimakler facilitates the process of obtaining a housing loan for individuals looking to purchase or
                        refinance a home. Unimakler act as intermediaries between borrowers and lenders, helping clients
                        navigate the complexities of the loan application and approval process. </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-xs-6">

                <div className="card mt-3">
                  <div className="card-body flip">
                    <div className="front">
                      <img src="styles/img/service-7.png" className="service-icon" alt="image" />
                      <h5 className="card-title">Interiors <br /> Designing</h5>
                    </div>
                    <div className="back">
                      <h6 className="card-title">Interiors Designing</h6>
                      <p>professional planning, coordination, and execution of interior spaces to enhance the overall
                        aesthetic appeal, functionality, and comfort. Whether for residential or commercial spaces, interior
                        designers bring creativity and expertise to create well-designed and harmonious interiors.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-xs-6">



                <div className="card mt-3">
                  <div className="card-body flip">
                    <div className="front">
                      <img src="styles/img/service-8.png" className="service-icon" alt="image" />
                      <h5 className="card-title">Real Estate <br /> Investments</h5>
                    </div>
                    <div className="back">
                      <h6 className="card-title">Real Estate Investments</h6>
                      <p>Unimakler deals in buying, selling, of real estate internationally. It involves transactions and
                        investments in real estate assets that are located in different countries.</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-md-3 col-sm-4 col-xs-6">



                <div className="card mt-3">
                  <div className="card-body flip">
                    <div className="front">
                      <img src="styles/img/service-9.png" className="service-icon" alt="image" />
                      <h5 className="card-title">International <br /> Real Estate</h5>
                    </div>
                    <div className="back">
                      <h6 className="card-title">International Real Estate</h6>
                      <p>Unimakler helps Real estate investors in acquiring, owning, and managing properties to generate
                        income through rental payments or capital appreciation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}


        <div id="services" className=" with-black-bg pt-100 pb-70">
          <div className="container">
            <div className="row justify-content-center">
              <div className="main-section-title">
                <span className="text">
                  <h3>Our Core Services</h3>
                </span>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="cccc-blue">
                    <h2>Residential Real Estate
                    </h2>
                    <p>Facilitating the buying, selling, or renting of homes, apartments, and other residential properties and providing professional guidance and expertise to clients throughout the entire transaction.</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="cccc-ornge">
                    <h2>Commercial Real Estate
                    </h2>
                    <p>Unimakler’s Commercial real estate involves providing professional services related to the buying, selling, leasing, and management of commercial properties. which includes various property types such as office buildings, retail spaces, industrial facilities, warehouses, and more.</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="cccc-blue">
                    <h2>Industrial Real Estate
                    </h2>
                    <p>Unimakler’s Industrial real estate involves providing specialized services related to the buying, selling, leasing, and management of industrial properties. Which include warehouses, distribution centers, manufacturing facilities, logistics hubs, and other types of properties designed for industrial activities.</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="cccc-ornge">
                    <h2>Luxury Real Estate
                    </h2>
                    <p>Unimakler’s Luxury real estate INVOLVES high-end properties With exceptional quality, unique features, and a premium level of craftsmanship, design, and amenities.</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="cccc-blue">
                    <h2>Housings Loans

                    </h2>
                    <p>Unimakler facilitates the process of obtaining a housing loan for individuals looking to purchase or refinance a home. Unimakler act as intermediaries between borrowers and lenders, helping clients navigate the complexities of the loan application and approval process.

                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="cccc-ornge">
                    <h2>Interiors Designing

                    </h2>
                    <p>professional planning, coordination, and execution of interior spaces to enhance the overall aesthetic appeal, functionality, and comfort. Whether for residential or commercial spaces, interior designers bring creativity and expertise to create well-designed and harmonious interiors.

                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="cccc-blue">
                    <h2>Real Estate Investments
                    </h2>
                    <p>Unimakler deals in buying, selling, of real estate internationally. It involves transactions and investments in real estate assets that are located in different countries.

                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="cccc-ornge">
                    <h2>International Real Estate

                    </h2>
                    <p>Unimakler helps Real estate investors in acquiring, owning, and managing properties to generate income through rental payments or capital appreciation.

                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>


        {/* <div id="services" className=" with-black-bg pt-100 pb-70">
          <div className="container">
            <div className="row justify-content-center">
              <div className="main-section-title">
                <span className="text-white">
                  <h3>Our Core Services</h3>
                </span>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="cccc2blue">
                    <div className="cccc2inner">
                      <h2>Lorem Ipsum
                      </h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est explicabo suscipit amet officia.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="cccc2orng">
                    <div className="cccc2inner">
                      <h2>Lorem Ipsum
                      </h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est explicabo suscipit amet officia.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="cccc2blue">
                    <div className="cccc2inner">
                      <h2>Lorem Ipsum
                      </h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est explicabo suscipit amet officia.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="cccc2orng">
                    <div className="cccc2inner">
                      <h2>Lorem Ipsum
                      </h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est explicabo suscipit amet officia.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="cccc2blue">
                    <div className="cccc2inner">
                      <h2>Lorem Ipsum
                      </h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est explicabo suscipit amet officia.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="cccc2orng">
                    <div className="cccc2inner">
                      <h2>Lorem Ipsum
                      </h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est explicabo suscipit amet officia.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="cccc2blue">
                    <div className="cccc2inner">
                      <h2>Lorem Ipsum
                      </h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est explicabo suscipit amet officia.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="cccc2orng">
                    <div className="cccc2inner">
                      <h2>Lorem Ipsum
                      </h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est explicabo suscipit amet officia.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div> */}



        <div id="technology" className="technology-section ptb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="main-section-title">
                <span className="test">
                  <h3>Technology</h3>
                  <h5 className="orange-text">"Franchise with Unimakler : Lead with Tech Excellence."</h5>
                </span>
              </div>

              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="tech1-img">
                      <img src="assets/img/digital-2.png" alt="image" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="digital">
                      <h5>Advanced CRM (Customer Relationship Management):</h5>
                      <p>Streamlined Communication: With our advanced CRM system, franchisees can efficiently manage client
                        interactions, track leads, and nurture relationships throughout the sales process.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="row">

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="digital">
                      <h5>Website Listings:</h5>
                      <p>Increased Visibility: Franchisees will benefit from having their listings prominently featured on our
                        website, reaching a wider audience of potential buyers and sellers.</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="tech2-img">
                      <img src="assets/img/digital-6.jpg" alt="image" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="tech1-img">
                      <img src="assets/img/digital-5.jpg" alt="image" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="digital">
                      <h5>Metaverse Real Estate Expo:</h5>
                      <p>Innovative Marketing Opportunity: Our bi-annual metaverse real estate expo offers franchisees a
                        unique
                        platform to showcase their real estate projects to a global audience in a virtual environment.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="row">

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="digital">
                      <h5>Automated Digital Bot:</h5>
                      <p>24/7 Customer Support: Our automated digital bot provides round-the-clock assistance to franchisee
                        customers, answering frequently asked questions, scheduling appointments, and providing instant access
                        to information.</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="tech2-img">
                      <img src="assets/img/digital-1.jpg" alt="image" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div id="support" className="matter  with-black-bg ptb-100">
          <div className="container">
            <div className="main-section-title">
              <span className="test">
                <h3>Our Support to Franchise</h3>
              </span>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-6 col-xs-12">

                {/* <div className="card realestate">
                  <div className="card_image">
                    <img src="assets/img/support-1.png" className="image" />
                  </div>
                  <div>
                    <div className="card_heading">
                      Start-Up Support
                    </div>
                    <div className="card_paragraph">
                      <p className="paragraph"> Comprehensive assistance right from area selection to the set-up &amp; starting of
                        franchise operations.</p>
                    </div>
                  </div>
                </div> */}
                <div class="card">
                  <figure class="card__thumb">
                    <img src="assets/img/support-1.png" className="image" />
                    <figcaption class="card__caption">
                      <h2 class="card__title">
                        Start-Up Support
                      </h2>
                      <p class="card__snippet">
                        Comprehensive assistance right from area selection to the set-up &amp; starting of
                        franchise operations.
                      </p>

                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">

                <div class="card">
                  <figure class="card__thumb">
                    <img src="assets/img/support-2.png" className="image" />
                    <figcaption class="card__caption">
                      <h2 class="card__title">
                        Business Training
                      </h2>
                      <p class="card__snippet">
                        Comprehensive training to the franchise &amp; centre staff on operations, sales and
                        business development activities.
                      </p>

                    </figcaption>
                  </figure>
                </div>

                {/* <div className="card realestate">
                  <div className="card_image">
                    <img src="assets/img/support-2.png" className="image" />
                  </div>
                  <div>
                    <div className="card_heading">
                      Business Training
                    </div>
                    <div className="card_paragraph">
                      <p className="paragraph"> Comprehensive training to the franchise &amp; centre staff on operations, sales and
                        business development activities.</p>
                    </div>
                  </div>
                </div> */}

              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">

                <div class="card">
                  <figure class="card__thumb">
                    <img src="assets/img/support-3.png" className="image" />
                    <figcaption class="card__caption">
                      <h2 class="card__title">
                        Monitoring
                      </h2>
                      <p class="card__snippet">
                        Our pro-active business monitoring system make sure that best practices get
                        implemented
                      </p>

                    </figcaption>
                  </figure>
                </div>

                {/* <div className="card realestate">
                  <div className="card_image">
                    <img src="assets/img/support-3.png" className="image" />
                  </div>
                  <div>
                    <div className="card_heading">
                      Monitoring
                    </div>
                    <div className="card_paragraph">
                      <p className="paragraph"> Our pro-active business monitoring system make sure that best practices get
                        implemented </p>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">

                <div class="card">
                  <figure class="card__thumb">
                    <img src="assets/img/support-4.png" className="image" />
                    <figcaption class="card__caption">
                      <h2 class="card__title">
                        Technology Support
                      </h2>
                      <p class="card__snippet">
                        Unimakler uses cutting edge technology tools &amp; systems to support the slaes ,
                        marketing &amp; lead management.
                      </p>

                    </figcaption>
                  </figure>
                </div>

                {/* <div className="card realestate">
                  <div className="card_image">
                    <img src="assets/img/support-4.png" className="image" />
                  </div>
                  <div>
                    <div className="card_heading">
                      Technology Support
                    </div>
                    <div className="card_paragraph">
                      <p className="paragraph"> Unimakler uses cutting edge technology tools &amp; systems to support the slaes ,
                        marketing &amp; lead management.</p>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">

                <div class="card">
                  <figure class="card__thumb">
                    <img src="assets/img/support-5.png" className="image" />
                    <figcaption class="card__caption">
                      <h2 class="card__title">
                        Assured Lead Support
                      </h2>
                      <p class="card__snippet">
                        Centrally generated high quality leads are sent to unit franchise on a regular
                        basis maximize sales.
                      </p>

                    </figcaption>
                  </figure>
                </div>

                {/* <div className="card realestate">
                  <div className="card_image">
                    <img src="assets/img/support-5.png" className="image" />
                  </div>
                  <div>
                    <div className="card_heading">
                      Assured Lead Support
                    </div>
                    <div className="card_paragraph">
                      <p className="paragraph"> Centrally generated high quality leads are sent to unit franchise on a regular
                        basis maximize sales.</p>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">

                <div class="card">
                  <figure class="card__thumb">
                    <img src="assets/img/support-6.png" className="image" />
                    <figcaption class="card__caption">
                      <h2 class="card__title">
                        Business Promotions
                      </h2>
                      <p class="card__snippet">
                        Assistance in organising city base, territory based promotional activities &amp;
                        events.
                      </p>

                    </figcaption>
                  </figure>
                </div>

                {/* 
                <div className="card realestate">
                  <div className="card_image">
                    <img src="assets/img/support-6.png" className="image" />
                  </div>
                  <div>
                    <div className="card_heading">
                      Business Promotions
                    </div>
                    <div className="card_paragraph">
                      <p className="paragraph"> Assistance in organising city base, territory based promotional activities &amp;
                        events.</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div id="keybenefits" className="get-introduced-area ptb-100">
          <div className="container">
            <span className="test text-center pb-5">
              <h3>Key Benefits to franchise</h3>
            </span>
            <div className="row">
              <div className="col-lg-6 col-md-10 col-sm-12">
                <div className="get-introduced-content">

                  <div className="row justify-content-center">
                    <div className="col-lg-10 col-md-12 col-sm-10">
                      <div className="introduced-inner-box blue-bg">
                        <div className="icon">
                        <FcMultipleInputs />
                          <span>Multiple Revenue Streams</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-10 col-md-12 col-sm-10">
                      <div className="introduced-inner-box orange-bg">
                        <div className="icon">
                        <FaCity />
                          <span>Pan India Community</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-10 col-md-12 col-sm-10">
                      <div className="introduced-inner-box blue-bg">
                        <div className="icon">
                        <FaShareNodes />
                          <span>Best Revenue Sharing</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-10 col-md-12 col-sm-10">
                      <div className="introduced-inner-box orange-bg">
                        <div className="icon">
                        <IoSettings />
                          <span>Next-Level Business Training</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-10 col-md-12 col-sm-10">
                      <div className="introduced-inner-box blue-bg">
                        <div className="icon">
                        <MdAssuredWorkload />
                          <span>Assured Projects-Specific Leads</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-10 col-md-12 col-sm-10">
                      <div className="introduced-inner-box orange-bg">
                        <div className="icon">
                        <MdAddHomeWork />
                          <span>Business Development Manager Support</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="introduced-counter-item">
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-10 col-sm-10">
                <div className="get-introduced-image">
                  <img src="assets/img/about-intro-bk.jpg" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="about" className="video-overview-area ptb-100">
          <div className="container">
            <div className="about-head">
              <span className="test text-center">
                <h3>About Unimakler</h3>
              </span>
            </div>
            <div className="about-section">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <div className="about-image">
                    <img src="assets/img/banner-1.jpg" alt="image" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="video-overview-content">
                    <div className="overview-inner-box ">
                      <p>UNIMAKLER RELATORS PRIVATE LIMITED is a professional Real Estate consulting company, that includes
                        sales and leasing of Residential, commercial, Industrial, Agriculture, Housing loans and Interiors
                        designing services.</p>
                      <p> Unimakler provides bespoke exclusive project marketing services to property builders and developers
                        by providing successful, reasonable and economical solutions that strategically position the project
                        in the target Market.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="contact-section">
          <div className="auto-container">
            <div className="sec-title centred">
              <h2>Book Your Franchise Now</h2>
            </div>
            <div className="row align-items-center clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="image-box">
                  <figure className="image">

                    <img src="assets/img/franchise1.jpg" alt="Franchise" />
                    {/* <img src="assets/img/fan2.jpg" alt="Franchise" /> */}
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

                            icon={<RiMessage2Fill className="messageic" />}
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
      </main>
    </>
  );
};

export default Franchise;
