"use client";
// import Head from "next/head";
import React, { useContext, useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Carousell from "react-multi-carousel";
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

import { BiSolidUser } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";

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
  const eliteProperties = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 767 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 2,
    },
  };
  const primeProperties = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 767 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 2,
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
          <Carousel className="carsle_out">
                <Carousel.Item>
                 <Image
                      src={"/assets/img/hero/terraterri-banner-bg.jpg"}
                      width={1000}
                      height={1000}
                      alt="property"
                    />
                </Carousel.Item>
                <Carousel.Item>
                 <Image
                      src={"/assets/img/hero/hero-1.jpg"}
                      width={1000}
                      height={1000}
                      alt="property"
                    />
                </Carousel.Item>
               
              </Carousel>
            {/* <div
              className="hero-single"
              style={{
                background: "url(assets/img/hero/terraterri-banner-bg.jpg)",
              }}
            >


          
              <div className="container">
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
              </div>
            </div> */}
            
            <div className="slide_contnt text-center">
           <div className="bannr_titls text-center"> 
            <h1>Discover Homes that Speak to You</h1>
          <p>Unimakler - Where Your Property Journey Begins</p>
          </div>
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

<div className="row align-items-center mb-0 secrch-menu">
                            <ul className="d-flex">
                              <li className="active">
                                <label class="custom-radio" htmlFor="buy">
                                  {" "}
                                  <input
                                  className="opacity-0"
                                    id="buy"
                                    type="radio"
                                    name="isSales"
                                    value="isSale"
                                    onClick={handleChangeNP}
                                    checked={params?.isSale == "1"}
                                  />{" "}
                                  <span class="radio-icon">
                                  <p>Buy</p>
                                  </span>
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
                                  <span class="radio-icon">
                                  <p>Rent</p>
                                    </span>
                                  
                                </label>
                              </li>
{/* 
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
                                  <span className="radio-icon"><p> New Projects</p></span>
                                 
                                </label>
                              </li> */}
                            </ul>
                          </div>
                      <div className="search-form">
                        <form action="#">
                          
                          <div className="row align-items-center mt-0 input-height">
                            <div className="col-lg-3">
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
                                {/*  */}
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
                                {/*  */}
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
            </div>
          </div>

<section>
  <div className="container">
  <div className="row prop_out">
              <div className="col-6 col-md-4 col-lg-2 ">
                <div
                  className="category-item wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".25s"
                >
                  <div className="text-center">
                  <h3 className="category-titlee">30<span>+</span></h3>
                  <h4 className="category-title">Cities</h4>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-2 ">
                <div
                  className="category-item wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".25s"
                >
                  <div className="text-center">
                  <h3 className="category-titlee">2<span>+</span></h3>
                  <h4 className="category-title">Countries</h4>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-2 ">
                <div
                  className="category-item wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".25s"
                >
                  <div className="text-center">
                  <h3 className="category-titlee">150<span>+</span></h3>
                  <h4 className="category-title">Projects</h4>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-2 ">
                <div
                  className="category-item wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".25s"
                >
                  <div className="text-center">
                  <h3 className="category-titlee">40<span>+</span></h3>
                  <h4 className="category-title">Developers</h4>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-2 ">
                <div
                  className="category-item wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".25s"
                >
                  <div className="text-center">
                  <h3 className="category-titlee">1532<span>+</span></h3>
                  <h4 className="category-title">Customers</h4>
                  </div>
                </div>
              </div>
           
            </div>
  </div>
</section>
          <section className="about_sec pt-5">
            <div className=""> </div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="desc_content_box">
                  <h3 className="mb-3">About Unimakler</h3>
                  <p className="text-justify">UNIMAKLER is a professional Real Estate consulting company, that includes sales and leasing of Residential, commercial, Industrial, Agriculture, Housing loans and Interiors designing services.</p>

                  <p className="text-justify">Unimakler provides bespoke exclusive project marketing services to property builders and developers by providing successful, reasonable and economical solutions that strategically position the project in the target Market.</p>

                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text-right">
                    <Image
                      src={"/assets/img/deals-1.jpg"}
                      width={500}
                      height={300}
                      alt="property"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>


<section className="pt-5 pb-2 elite-prp">
<div class="sec-heading text-center">
      <h2>Elite Properties</h2>
      <p>Discover Elite Properties that align with your lifestyle.</p>
   </div>
  <div className="container">
  <Carousell
                responsive={eliteProperties}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
              >
        <div className="col-lg-12 col-md-12 col-sm-12 feature-block">
        <div data-wow-delay="300ms" data-wow-duration="1500ms" className="feature-block-one wow fadeInUp animated">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <img src="/assets/img/property/01.jpg" alt />
              </figure>

            </div>
            <div className="lower-content">
              <div className="title-text">
                <h4>
                  <a href="#">THE WORLD OF JOY</a>
                </h4>
              </div>
              <div className="price-box clearfix">
                <div className="price-info pull-left">
                  <h6> By: URBAN RISE </h6>
                  <h4> ₹97 Lakhs onwards </h4>
                  <p> Under Construction </p>
                  <p> Possession By: 31-12-2025 </p>
                </div>
              </div>
              <div className="btn-box">
                <a href="#" className="btn-lht">View </a>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="col-lg-12 col-md-12 col-sm-12 feature-block">
        <div data-wow-delay="300ms" data-wow-duration="1500ms" className="feature-block-one wow fadeInUp animated">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <img src="/assets/img/property/01.jpg" alt />
              </figure>

            </div>
            <div className="lower-content">
              <div className="title-text">
                <h4>
                  <a href="#">SIGNATURE FORTIUS</a>
                </h4>
              </div>
              <div className="price-box clearfix">
                <div className="price-info pull-left">
                  <h6> By: Signature Avenues</h6>
                  <h4> ₹54 Lakhs onwards </h4>
                  <p> Under Construction </p>
                  <p> Possession By: 31-12-2025 </p>
                </div>
              </div>
              <div className="btn-box">
                <a href="#" className="btn-lht">View </a>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="col-lg-12 col-md-12 col-sm-12 feature-block">
        <div data-wow-delay="300ms" data-wow-duration="1500ms" className="feature-block-one wow fadeInUp animated">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <img src="/assets/img/property/01.jpg" alt />
              </figure>

            </div>
            <div className="lower-content">
              <div className="title-text">
                <h4>
                  <a href="#">VEDAMSA MAA SRINIVASAM</a>
                </h4>
              </div>
              <div className="price-box clearfix">
                <div className="price-info pull-left">
                  <h6> By: Signature Avenues</h6>
                  <h4> ₹58 Lakhs onwards </h4>
                  <p> Under Construction </p>
                  <p> Possession By: 31-12-2025 </p>
                </div>
              </div>
              <div className="btn-box">
                <a href="#" className="btn-lht">View </a>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="col-lg-12 col-md-12 col-sm-12 feature-block">
        <div data-wow-delay="300ms" data-wow-duration="1500ms" className="feature-block-one wow fadeInUp animated">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <img src="/assets/img/property/01.jpg" alt />
              </figure>

            </div>
            <div className="lower-content">
              <div className="title-text">
                <h4>
                  <a href="#">SRINIDHI IRIS</a>
                </h4>
              </div>
              <div className="price-box clearfix">
                <div className="price-info pull-left">
                  <h6> By: Srinidhi Projects</h6>
                  <h4> ₹66 Lakhs onwards </h4>
                  <p> Under Construction </p>
                  <p> Possession By: 31-12-2025 </p>
                </div>
              </div>
              <div className="btn-box">
                <a href="#" className="btn-lht">View </a>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="col-lg-12 col-md-12 col-sm-12 feature-block">
        <div data-wow-delay="300ms" data-wow-duration="1500ms" className="feature-block-one wow fadeInUp animated">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <img src="/assets/img/property/01.jpg" alt />
              </figure>

            </div>
            <div className="lower-content">
              <div className="title-text">
                <h4>
                  <a href="#">LOYAL RESIDENCY</a>
                </h4>
              </div>
              <div className="price-box clearfix">
                <div className="price-info pull-left">
                  <h6> By: Loyal Residency</h6>
                  <h4> ₹64 Lakhs onwards </h4>
                  <p> Under Construction </p>
                  <p> Possession By: 31-12-2025 </p>
                </div>
              </div>
              <div className="btn-box">
                <a href="#" className="btn-lht">View </a>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="col-lg-12 col-md-12 col-sm-12 feature-block">
        <div data-wow-delay="300ms" data-wow-duration="1500ms" className="feature-block-one wow fadeInUp animated">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <img src="/assets/img/property/01.jpg" alt />
              </figure>

            </div>
            <div className="lower-content">
              <div className="title-text">
                <h4>
                  <a href="#">Shivantha Gardenia</a>
                </h4>
              </div>
              <div className="price-box clearfix">
                <div className="price-info pull-left">
                  <h6> By: Shivantha Gardenia</h6>
                  <h4> ₹38 Lakhs onwards </h4>
                  <p> Under Construction </p>
                  <p> Possession By: 31-12-2025 </p>
                </div>
              </div>
              <div className="btn-box">
                <a href="#" className="btn-lht">View </a>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="col-lg-12 col-md-12 col-sm-12 feature-block">
        <div data-wow-delay="300ms" data-wow-duration="1500ms" className="feature-block-one wow fadeInUp animated">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <img src="/assets/img/property/01.jpg" alt />
              </figure>

            </div>
            <div className="lower-content">
              <div className="title-text">
                <h4>
                  <a href="#">YUVA ROCK HILLS</a>
                </h4>
              </div>
              <div className="price-box clearfix">
                <div className="price-info pull-left">
                  <h6> By: YUVA ROCK HILLS</h6>
                  <h4> ₹8 Lakhs onwards </h4>
                  <p> Under Construction </p>
                  <p> Possession By: 31-12-2025 </p>
                </div>
              </div>
              <div className="btn-box">
                <a href="#" className="btn-lht">View </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    
              </Carousell>
  </div>
</section>

<section className="pt-4 pb-3 gray-bg ">
<div class="sec-heading text-center">
      <h2>Prime Properties</h2>
      <p>Discover Prime Properties that align with your lifestyle.</p>
   </div>
  <div className="container">
  <Carousell
                responsive={primeProperties}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
              >
        <div className="col-lg-12 col-md-12 col-sm-12 feature-block">
        <div data-wow-delay="300ms" data-wow-duration="1500ms" className="feature-block-one wow fadeInUp animated">
          <div className="inner-box d-flex">
            <div className="image-box ">
              <figure className="image">
                <img src="/assets/img/property/01.jpg" alt />
              </figure>

            </div>
            <div className="lower-content">
              <div className="title-text">
                <h4>
                  <a href="#">Vasavi Atlantis</a>
                </h4>
              </div>
              <div className="price-box clearfix">
                <div className="price-info pull-left">
                  <h6> By: Vasavi Group </h6>
                  <h4> ₹1.78 Lakhs </h4>
                  <p> Under Construction </p>
                  <p> Possession By:<br></br> 31-12-2025 </p>
                </div>
              </div>
              <div className="btn-box">
                <a href="#" className="btn-lht">View </a>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="col-lg-12 col-md-12 col-sm-12 feature-block">
        <div data-wow-delay="300ms" data-wow-duration="1500ms" className="feature-block-one wow fadeInUp animated">
          <div className="inner-box d-flex">
            <div className="image-box">
              <figure className="image">
                <img src="/assets/img/property/01.jpg" alt />
              </figure>

            </div>
            <div className="lower-content">
              <div className="title-text">
                <h4>
                  <a href="#">Vasavi Atlantis</a>
                </h4>
              </div>
              <div className="price-box clearfix">
                <div className="price-info pull-left">
                  <h6> By: Vasavi Group </h6>
                  <h4> ₹1.78 Lakhs </h4>
                  <p> Under Construction </p>
                  <p> Possession By:<br></br> 31-12-2025 </p>
                </div>
              </div>
              <div className="btn-box">
                <a href="#" className="btn-lht">View </a>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="col-lg-12 col-md-12 col-sm-12 feature-block">
        <div data-wow-delay="300ms" data-wow-duration="1500ms" className="feature-block-one wow fadeInUp animated">
          <div className="inner-box d-flex">
            <div className="image-box">
              <figure className="image">
                <img src="/assets/img/property/01.jpg" alt />
              </figure>

            </div>
            <div className="lower-content">
              <div className="title-text">
                <h4>
                  <a href="#">Vasavi Atlantis</a>
                </h4>
              </div>
              <div className="price-box clearfix">
                <div className="price-info pull-left">
                  <h6> By: Vasavi Group </h6>
                  <h4> ₹1.78 Lakhs </h4>
                  <p> Under Construction </p>
                  <p> Possession By:<br></br> 31-12-2025 </p>
                </div>
              </div>
              <div className="btn-box">
                <a href="#" className="btn-lht">View </a>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="col-lg-12 col-md-12 col-sm-12 feature-block">
        <div data-wow-delay="300ms" data-wow-duration="1500ms" className="feature-block-one wow fadeInUp animated">
          <div className="inner-box d-flex">
            <div className="image-box">
              <figure className="image">
                <img src="/assets/img/property/01.jpg" alt />
              </figure>

            </div>
            <div className="lower-content">
              <div className="title-text">
                <h4>
                  <a href="#">Vasavi Atlantis</a>
                </h4>
              </div>
              <div className="price-box clearfix">
                <div className="price-info pull-left">
                  <h6> By: Vasavi Group </h6>
                  <h4> ₹1.78 Lakhs </h4>
                  <p> Under Construction </p>
                  <p> Possession By:<br></br> 31-12-2025 </p>
                </div>
              </div>
              <div className="btn-box">
                <a href="#" className="btn-lht">View </a>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="col-lg-12 col-md-12 col-sm-12 feature-block">
        <div data-wow-delay="300ms" data-wow-duration="1500ms" className="feature-block-one wow fadeInUp animated">
          <div className="inner-box d-flex">
            <div className="image-box">
              <figure className="image">
                <img src="/assets/img/property/01.jpg" alt />
              </figure>

            </div>
            <div className="lower-content">
              <div className="title-text">
                <h4>
                  <a href="#">Vasavi Atlantis</a>
                </h4>
              </div>
              <div className="price-box clearfix">
                <div className="price-info pull-left">
                  <h6> By: Vasavi Group </h6>
                  <h4> ₹1.78 Lakhs </h4>
                  <p> Under Construction </p>
                  <p> Possession By:<br></br> 31-12-2025 </p>
                </div>
              </div>
              <div className="btn-box">
                <a href="#" className="btn-lht">View </a>
              </div>
            </div>
          </div>
        </div>
      </div>
               
              </Carousell>
  </div>
</section>
<section>
<div className="hme_lone_sec pb-5 pt-50">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 pr-3">
                  <div className="lon_img text-center">
                    <img
                      src={"/assets/img/tieup_img.png"}
                 
                    />
                    {/* <img
                      src={"/assets/img/franchise.jpg"}
                 
                    /> */}
                  </div>
                </div>
                <div className="col-md-6 pl-3">
                  <div className="lon_txt lon_txt-right">
                    <h3>Franchising Unimakler</h3>
                    <p> With 15+ years of sound Real Estate industry expertize. Unimakler offers new franchise model and inviting upcoming investors for strategic partnership to expand their foot print via Franchising.</p>
<p>The vision of Unimakler is to achieve the Highest possible standards of Real Estate market while establishing the our franchises as the premier and preferred Real Estate consultants in India.
                    </p>
                    <div className="d-flex mt-4">
                      <button>Book your Franchise</button>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
</section>
          
<section>
<div className="hme_lone_sec pb-5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="lon_txt lon_txt-left">
                    <h3>You need a home loan, right? Get Pre-approval.</h3>
                    <p>
                      Get pre-approval from a lender with competitive Homeloan
                      interest rates
                    </p>
                    <p>The vision of Unimakler is to achieve the Highest possible standards of Real Estate market while establishing the our franchises as the premier and preferred Real Estate consultants in India.</p>
                    <div className="d-flex mt-4">
                      <button>Get Pre Approved</button>
                      {/* <button>EMI Calculator</button> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="lon_img text-center">
                  <img
                      src={"/assets/img/loan-immg.jpg"}
                 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
</section>

<section className="pt-4 pb-3 gray-bg ">
  <div className="container">
      <div class="sec-heading text-center mb-4">
          <h2>Our Distinguished Services</h2>
          <p>Explore top-tier properties curated to match your needs.</p>
      </div>

      <div className="row">
      <div class="col-md-4">
                <Link href="#" class="curated-box" style={{
              background: "url(assets/img/new-project.webp)",
            }}>
                    <h3 class="title">Residential Realestate </h3>
                </Link>
            </div>
      <div class="col-md-4">
                <Link href="#" class="curated-box" style={{
              background: "url(assets/img/ready-to-move.webp)",
            }}>
                    <h3 class="title">Commercial Realestate</h3>
                </Link>
            </div>
      <div class="col-md-4">
                <Link href="#" class="curated-box" style={{
              background: "url(assets/img/yuva-city.jpg)",
            }}>
                    <h3 class="title">Interior Designing</h3>
                </Link>
            </div>
      <div class="col-md-3 px-2">
                <Link href="#" class="curated-box" style={{
              background: "url(assets/img/new-project.webp)",
            }}>
                    <h3 class="title">Housing Loans</h3>
                </Link>
</div>
      <div class="col-md-3 px-2">
                <Link href="#" class="curated-box" style={{
              background: "url(assets/img/new-project.webp)",
            }}>
                    <h3 class="title">Luxury<br></br>Realestate</h3>
                </Link>
</div>
      <div class="col-md-3 px-2">
                <Link href="#" class="curated-box" style={{
              background: "url(assets/img/new-project.webp)",
            }}>
                    <h3 class="title">International<br></br>Realestate</h3>
                </Link>
</div>
      <div class="col-md-3 px-2">
                <Link href="#" class="curated-box" style={{
              background: "url(assets/img/new-project.webp)",
            }}>
                    <h3 class="title">Plots & Lands</h3>
                </Link>
</div>
      </div>
  </div>


</section>
          

<section className="blog_main py-120">
          <div className="container">
          <div class="sec-heading text-center mb-4">
              <h2>Cities Where Our Presence Is...</h2>
              <p>The Noteworthy Real Estate in India</p>
          </div>
       
        <div className="container">
  <Carousell
                responsive={primeProperties}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
              >
<div className="col-md-12 px-3">
<div className="item">
 <img src={"/assets/img/hyderabad.jpg"} />

 </div>
</div>
<div className="col-md-12 px-3">
<div className="item">
 <img src={"/assets/img/bengaluru.jpg"} />

 </div>
</div>
<div className="col-md-12 px-3">
<div className="item">
 <img src={"/assets/img/chennai.jpg"} />

 </div>
</div>
<div className="col-md-12 px-3">
<div className="item">
 <img src={"/assets/img/kolkata.jpg"} />

 </div>
</div>
<div className="col-md-12 px-3">
<div className="item">
 <img src={"/assets/img/dubai-BK.jpg"} />

 </div>
</div>

              </Carousell>
  </div>
      </div>

</section>
<section className="blog_main py-120">
          <div className="container">
          <div class="sec-heading text-center mb-4">
      <h2>Latest News</h2>
      <p>The Noteworthy Real Estate in India</p>
   </div>
        <div className="row">
              <div className="col-md-6 col-lg-4">
              <div className="blog-item">
                <div className="blog-item-img">
                <img src={"/assets/img/support-1.png"} />
                </div>
              <div className="blog-item-info">
              <h4 className="blog-title">
              <Link href="#">There are many variations of passages available suffer</Link>
              </h4>
              <div className="blog-item-meta">
              <ul>
              <li><Link href="#"><BiSolidUser /> By Mohan Reddy</Link></li>
              <li><Link href="#"><MdDateRange />  May 12, 2025</Link></li>
              </ul>
              </div>
              <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
              </p>
              <Link className="theme-btn" href="/blog-single">Read More <AiOutlineArrowRight /></Link>
              </div>
              </div>
              </div>
              <div className="col-md-6 col-lg-4">
              <div className="blog-item">
                <div className="blog-item-img">
                <img src={"/assets/img/support-1.png"} />
                </div>
              <div className="blog-item-info">
              <h4 className="blog-title">
              <Link href="#">There are many variations of passages available suffer</Link>
              </h4>
              <div className="blog-item-meta">
              <ul>
              <li><Link href="#"><BiSolidUser /> By Mohan Reddy</Link></li>
              <li><Link href="#"><MdDateRange />  May 12, 2025</Link></li>
              </ul>
              </div>
              <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
              </p>
              <Link className="theme-btn" href="/blog-single">Read More <AiOutlineArrowRight /></Link>
              </div>
              </div>
              </div>
              <div className="col-md-6 col-lg-4">
              <div className="blog-item">
                <div className="blog-item-img">
                <img src={"/assets/img/support-1.png"} />
                </div>
              <div className="blog-item-info">
              <h4 className="blog-title">
              <Link href="#">There are many variations of passages available suffer</Link>
              </h4>
              <div className="blog-item-meta">
              <ul>
              <li><Link href="#"><BiSolidUser /> By Mohan Reddy</Link></li>
              <li><Link href="#"><MdDateRange />  May 12, 2025</Link></li>
              </ul>
              </div>
              <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
              </p>
              <Link className="theme-btn" href="/blog-single">Read More <AiOutlineArrowRight /></Link>
              </div>
              </div>
              </div>
      </div>
      </div>

</section>
         

        </main>
      )}
    </>
  );
}
