"use client";
// import Head from "next/head";
import React, { useContext, useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
// import Carousel from "react-multi-carousel";
import { Carousel } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
// import Sliderify from "react-sliderify";
// import Header from "../components/header";
// import Footer from "../components/footer";

// import AliceCarousel from "react-alice-carousel";
import { AiOutlineHome } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdMyLocation } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
// import { BiBed } from "react-icons/bi";
// import { GiBathtub } from "react-icons/gi";
// import { TbGeometry } from "react-icons/tb";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { LiaCitySolid } from "react-icons/lia";
import { BsStarHalf } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BiRupee } from "react-icons/bi";
import { BsArrowRightShort } from "react-icons/bs";
import { MdArrowForwardIos } from "react-icons/md";

import {
  getAllCities,
  getAllMastersTypes,
} from "@/components/endPoints/masterEndPoints";
import {
  getAllLocalitiesByCode,
  getListingLocalities,
} from "@/components/endPoints/websiteEndpoints";
import PropertyTabs from "@/components/libs/propertyTabs";
import { MastersContext } from "./_app";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { DNAComponent } from "@/components/loader/Loader";
import AutoCompleteComponent from "@/components/reusable/autoComplete";
import { environment } from "@/environments/environment";
import { useRouter } from "next/router";
import { getBanners } from "@/components/endPoints/websiteEndpoints";

export default function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const primeProperties = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const featureProperties = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const { masters, setMasters } = useContext(MastersContext);
  const [mastersTypes, setMastersTypes] = useState({
    propertytype: [],
    propertysubtype: [],
  });
  const [selectedProperties, setSelectedProperties] = useState("");
  const [selectedSubProperties, setSelectedSubProperties] = useState("");
  const [loading, setLoading] = useState(true);

  const allTypes = ["propertytype", "propertysubtype"];
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);
  const [allCities, setAllCities] = useState([]);
  const [allLocalities, setAllLocalities] = useState([]);
  const [params, setParams] = useState({ isSale: "1" });
  const [propertyBanners, setPropertyBanners] = useState([]);
  const [elite, setElite] = useState([]);
  const [prime, setPrime] = useState([]);
  const [featured, setFeatured] = useState([]);
  const router = useRouter();
  const [newProject, setNewProject] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedLocality, setSelectedLocality] = useState("");

  const getListingTypes = async (type) => {
    let response = [];
    if (masters?.[type] != undefined) {
      response = masters?.[type];
    } else {
      const apiResponse = await getAllMastersTypes(type);
      if (apiResponse?.status) {
        response = apiResponse?.data;
        setMasters((prev) => ({
          ...prev,
          [type]: response,
        }));
      }
    }
    setMastersTypes((prev) => ({
      ...prev,
      [type]: response,
    }));
  };
  ("AIzaSyBYOYCmYRcZd_e-I1p1o76QZusEy4HG1bQ");

  const getUserLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          console.log(latitude, longitude);
          await fetch(
            "https://www.mapquestapi.com/geocoding/v1/reverse?key=AIzaSyAEL1hX8EXER4NZGU2rm_vVTZPXws7kl-Q&location=" +
              latitude +
              "%2C" +
              longitude +
              "&outFormat=json&thumbMaps=false"
          )
            .then((response) => response.json())
            .then((responseJson) => {
              console.log(
                "ADDRESS GEOCODE is BACK!! => " + JSON.stringify(responseJson)
              );
            });
        },
        (error) => {
          // display an error if we cant get the users position
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const handleChangeCity = async (event) => {
    if (event != null) {
      await getLocalities(event.city_code);
      setParams((prevParams) => ({
        ...prevParams,
        city_code: event.city_code,
      }));
      setSelectedCity(event.city_name);
    }
  };

  const handleChangeNP = async (event) => {
    const { value, checked } = event.target;

    setParams((prevParams) => {
      const updatedParams = { ...prevParams };
      if (checked) {
        if (value === "isSale") {
          delete updatedParams.isRent;
          delete updatedParams.listing_type_id;
        } else if (value === "isRent") {
          delete updatedParams.isSale;
          delete updatedParams.listing_type_id;
        } else if (value === "listing_type_id") {
          delete updatedParams.isSale;
          delete updatedParams.isRent;
        }
        updatedParams[value] = 1;
      } else {
        delete updatedParams[value];
      }

      return updatedParams;
    });
  };

  const handleChangeSearch = (event) => {
    setParams((prevParams) => ({
      ...prevParams,
      locality: event?.locality_name,
    }));
    setSelectedLocality(event?.locality_name);
  };

  const navigateTo = () => {
    const queryString = Object.keys(params)
      .filter((key) => params[key] !== undefined && params[key] !== null)
      .map((key) => `${key}=${encodeURIComponent(params[key])}`)
      .join("&");
    localStorage.setItem("query", queryString);
    const url = `/services/`;

    router.push(url);
  };

  // get cities by country api
  const getCities = async () => {
    const apiResponse = await getAllCities();
    if (apiResponse?.status) {
      const sortedData = apiResponse?.data.sort((a, b) =>
        a.city_name.localeCompare(b.city_name)
      );
      setAllCities(sortedData);
    }
    setLoading(false);
  };

  // get localities by city code
  const getLocalities = async (city_code) => {
    const query = `?city_code=${city_code}`;
    const apiResponse = await getListingLocalities(query);
    if (apiResponse?.status) {
      const sortedLocalities = apiResponse?.data.sort((a, b) =>
        a.locality_name.localeCompare(b.locality_name)
      );
      setAllLocalities(sortedLocalities);
    }
  };

  const getAllPropertiesBanners = async () => {
    setLoading(true);
    const response = await getBanners("HYD");
    if (response?.status) {
      const uniqueArray = response?.data.filter(
        (value, index, self) =>
          index === self.findIndex((t) => t.id === value.id)
      );
      setElite(uniqueArray.filter((item) => item.banner_type_id === 7));
      setPrime(uniqueArray.filter((item) => item.banner_type_id === 5));
      setFeatured(uniqueArray.filter((item) => item.banner_type_id === 4));
      setPropertyBanners(uniqueArray);
      console.log("Prop banner", uniqueArray);
    }
    setLoading(false);
  };

  useEffect(() => {
    localStorage.setItem("auth", environment.token);
    allTypes.forEach(async (master) => {
      await getListingTypes(master);
    });
    getUserLocation();
    getCities();
    getAllPropertiesBanners();
  }, []);

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setIsOpen("");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {loading && <DNAComponent />}
      {!loading && (
        <main className="mainn">
          <div className="hero-section">
            <div
              className="hero-single"
              style={{
                background: "url(assets/img/hero/terraterri-banner-bg.jpg)",
              }}
            >

<h1>Your next home is here</h1>

<div className="hero-content text-center">
            <div className="container">
           
              <div className="hero-content-wrapper">
                <div className="search-wrapper">
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-1"
                      role="tabpanel"
                      aria-labelledby="pills-tab-1"
                      tabIndex={0}
                    >
                      <div className="search-form">
                        <form action="#">
                          <div className="row align-items-center mb-0 secrch-menu">
                            <ul className="d-flex justify-content-start ">
                              <li className="active">
                                <label class="custom-radio" htmlFor="buy">
                                  {" "}
                                  <input
                                    id="buy"
                                    type="radio"
                                    name="isSales"
                                    value="isSale"
                                    onClick={handleChangeNP}
                                    checked={params?.isSale == "1"}
                                  />{" "}
                                  <span class="radio-icon"></span>Buy
                                </label>
                              </li>
                              <li className="active">
                                <label class="custom-radio" htmlFor="rent">
                                  {" "}
                                  <input
                                    id="rent"
                                    type="radio"
                                    name="isRent"
                                    value="isRent"
                                    onClick={handleChangeNP}
                                    checked={params?.isRent == "1"}
                                  />{" "}
                                  <span class="radio-icon"></span>Rent
                                </label>
                              </li>

                              <li className="live1">
                                <label
                                  className="custom-radio"
                                  htmlFor="newProject"
                                >
                                  <input
                                    id="newProject"
                                    type="radio"
                                    name="standardPrice"
                                    value="listing_type_id"
                                    onClick={handleChangeNP}
                                  />
                                  <span className="radio-icon"></span>
                                  New Projects
                                </label>
                              </li>
                            </ul>
                          </div>
                          <div className="row align-items-center mt-0 input-height">
                            <div className="col-lg-4">
                              <div
                                className="form-group city-icon"
                                onClick={() => {
                                  setIsOpen(false);
                                }}
                              >
                                <LiaCitySolid className="search-field-icons" />
                                <AutoCompleteComponent
                                  data={allCities}
                                  handleChange={handleChangeCity}
                                  keyValue={"city_name"}
                                  placeHolder={"Search For City"}
                                  value={selectedCity}
                                />
                                {/* <MdMyLocation className="current-location-icon" /> */}
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div
                                className="form-group area-icon"
                                onClick={() => {
                                  setIsOpen(false);
                                }}
                              >
                                <SlLocationPin className="search-field-icons" />
                                <AutoCompleteComponent
                                  data={allLocalities}
                                  handleChange={handleChangeSearch}
                                  keyValue={"locality_name"}
                                  placeHolder={"Search For Locality"}
                                  value={selectedLocality}
                                />
                                {/* <MdMyLocation className="current-location-icon" /> */}
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="form-group prop-icon">
                                <span
                                  className="nice-select select"
                                  ref={popupRef}
                                  onClick={() => {
                                    setIsOpen(!isOpen);
                                  }}
                                >
                                  <span className="prp-typ">
                                    {selectedProperties
                                      ? selectedProperties
                                      : "Select Property"}
                                  </span>
                                  {/* <span className="pr_txt">Select Property</span> */}
                                </span>
                                <AiOutlineHome className="search-field-icons" />
                              </div>
                            </div>

                            {/* <div className="col-lg-3">
                              <div className="form-group">
                                <select className="nice-select select">
                                  <option value="">Budget</option>
                                  <option value={1}>Residential</option>
                                  <option value={2}>Commercial</option>
                                  <option value={3}>Industrial</option>
                                  <option value={3}>Agriculture</option>
                                </select>
                                <HiOutlineCurrencyRupee className="search-field-icons" />
                              </div>
                            </div> */}
                            <div className="col-lg-2">
                              <div
                                className={`theme-btn home-search-btn ${
                                  !params.city_code ? "disabled" : ""
                                }`}
                                onClick={params.city_code ? navigateTo : null}
                                style={
                                  !params.city_code
                                    ? { pointerEvents: "none", opacity: 0.5 }
                                    : {}
                                }
                              >
                                Search <BiSearchAlt2 className="svg-icons" />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {isOpen && (
              <PropertyTabs
                reference={popupRef}
                mastersTypes={mastersTypes}
                selectedProperties={selectedProperties}
                setSelectedProperties={setSelectedProperties}
                selectedSubProperties={selectedSubProperties}
                setSelectedSubProperties={setSelectedSubProperties}
                setParams={setParams}
                setIsOpen={setIsOpen}
              />
            )}
          </div>
          
              {/* <div className="container">
                <div className="com fadeinout1">
                  <div className="row align-items-center">
                    <div className="col-lg-12 mx-auto">
                      <h2>
                        Explore, Immerse and Navigate your dream house <br></br>
                        <span>...</span> in the Metaverse Way.
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="com fadeinout2">
                  <div className="row align-items-center">
                    <div className="col-lg-12 mx-auto">
                      <h2>
                        Terraterri.com<br></br> Where Real Estate becomes
                        Ultimate Experience.
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="com fadeinout3">
                  <div className="row align-items-center">
                    <div className="col-lg-12 mx-auto">
                      <h2>
                        Immerse Yourself Navigate your property <br></br>
                        Beyond Boundaries.
                      </h2>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

    
          {/* <section className="about_sec pt-5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="abot-txt">
                    <p>
                      {" "}
                      Welcome to Terraterri.com, your gateway to a revolutionary
                      property search experience! Step into our metaverse
                      listings and take off on an immersive journey through a
                      world of unparalleled possibilities. Explore with ease and
                      redefine the way you search for real estate. Welcome to a
                      new era of property discovery!{" "}
                    </p>
                    <p className="text-right mt-4 fndr-txt">
                      <b>Vijaya Reddy</b>
                      <br></br>
                      <span>-Founder</span>
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text-right">
                    <Image
                      src={"/assets/img/about-intro.jpg"}
                      width={500}
                      height={300}
                      alt="property"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section> */}


          <div className="hme_lone_sec pb-5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="lon_img text-center">
                    <Image
                      src={"/assets/img/loan-img.jpg"}
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="lon_txt">
                    <h3>You need a home loan, right? Get Pre-approval.</h3>
                    <p>
                      Get pre-approval from a lender with competitive Homeloan
                      interest rates
                    </p>
                    <div className="d-flex mt-4">
                      <button>Get Pre Approved</button>
                      <button>EMI Calculator</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
         
        </main>
      )}
    </>
  );
}
