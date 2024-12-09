"use client";
import Head from "next/head";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Sliderify from "react-sliderify";
import Header from "../components/shared/header";
import Footer from "../components/shared/footer";

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
import { BsStarHalf } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BiRupee } from "react-icons/bi";
import { BsArrowRightShort } from "react-icons/bs";
import { getAllMastersTypes } from "@/components/endPoints/masterEndPoints";
import PropertyTabs from "@/components/libs/propertyTabs";
import { MastersContext } from "./_app";
import { FaArrowRightLong } from "react-icons/fa6";
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
  const [selectedProperties, setSelectedProperties] = useState([]);

  const allTypes = ["propertytype", "propertysubtype"];
  const [isOpen, setIsOpen] = useState(false);

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
  "AIzaSyBYOYCmYRcZd_e-I1p1o76QZusEy4HG1bQ"

  const getUserLocation = async() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          console.log(latitude,longitude)
            await fetch(
              'https://www.mapquestapi.com/geocoding/v1/reverse?key=AIzaSyAEL1hX8EXER4NZGU2rm_vVTZPXws7kl-Q&location='+latitude+'%2C'+longitude+'&outFormat=json&thumbMaps=false',
            )
              .then((response) => response.json())
              .then((responseJson) => {
                console.log(
                  'ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson),
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

  useEffect(() => {
    allTypes.forEach(async (master) => {
      await getListingTypes(master);
    });
    getUserLocation()
  }, []);
  return (
    <>
      <main className="main">
        <div className="hero-section">
          <div
            className="hero-single"
            style={{
              background: "url(assets/img/hero/terraterri-banner-bg.jpg)",
            }}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12 mx-auto"></div>
              </div>
            </div>
          </div>
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
                    <div className="search-form">
                      <form action="#">
                        <div className="row align-items-center mb-0 secrch-menu">
                          <ul className="d-flex justify-content-start ">
                            <li className="active">Buy</li>
                            <li>Rent</li>
                            <li className="col_live live1">PG / Co-living</li>

                            <li className="live1">Coworking</li>

                            <li className="live1">New Projects</li>
                          </ul>
                        </div>
                        <div className="row align-items-center mt-0">
                          <div className="col-lg-5">
                            <div className="form-group secrch-group">
                              <SlLocationPin className="search-field-icons" />
                              <input
                                type="search"
                                id=""
                                placeholder="Search Near Hyderabad"
                              />
                              <MdMyLocation className="current-location-icon" />
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="form-group">
                              <span
                                className="nice-select select"
                                onClick={() => {
                                  setIsOpen(!isOpen);
                                }}
                              >
                                {selectedProperties.length > 0
                                  ? selectedProperties.join(",")
                                  : "Property Type"}
                              </span>
                              <AiOutlineHome className="search-field-icons" />
                            </div>
                          </div>

                          <div className="col-lg-3">
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
                          </div>
                          <div className="col-lg-2">
                            <Link
                              href="/services"
                              type="submit"
                              className="theme-btn"
                            >
                              <BiSearchAlt2 className="svg-icons" />
                              Search
                            </Link>
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
              mastersTypes={mastersTypes}
              selectedProperties={selectedProperties}
              setSelectedProperties={setSelectedProperties}
            />
          )}
        </div>

        <div className="category-area py-120">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 mx-auto wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay=".25s"
              >
                <div className="site-heading text-center">
                  <h2 className="site-title">Choose Your Property Type</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6 col-md-4 col-lg-2 ">
                <div
                  className="category-item wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".25s"
                >
                  <Link href="/property-single">
                    <div className="category-icon image">
                      <Image
                        src={"/assets/img/apartment.png"}
                        width={88}
                        height={88}
                        alt="apartments"
                      />
                    </div>
                    <div className="category-content">
                      <h4 className="category-title">Apartment</h4>
                      {/* <span className="category-property">20</span> */}
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-2">
                <div
                  className="category-item wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".50s"
                >
                  <Link href="#">
                    <div className="category-icon">
                      <Image
                        src={"/assets/img/villa.png"}
                        width={88}
                        height={88}
                        alt="villa"
                      />
                    </div>
                    <div className="category-content">
                      <h4 className="category-title">Villa</h4>
                      {/* <span className="category-property">15</span> */}
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-2">
                <div
                  className="category-item wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".75s"
                >
                  <Link href="#">
                    <div className="category-icon">
                      <Image
                        src={"/assets/img/building.png"}
                        width={88}
                        height={88}
                        alt="building"
                      />
                    </div>
                    <div className="category-content">
                      <h4 className="category-title">Whole Building</h4>
                      {/* <span className="category-property">18</span> */}
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-2">
                <div
                  className="category-item wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="1s"
                >
                  <Link href="#">
                    <div className="category-icon">
                      <Image
                        src={"/assets/img/farm-house.png"}
                        width={88}
                        height={88}
                        alt="house"
                      />
                    </div>
                    <div className="category-content">
                      <h4 className="category-title">Farmhouse</h4>
                      {/* <span className="category-property">12</span> */}
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-2">
                <div
                  className="category-item wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="1.25s"
                >
                  <Link href="#">
                    <div className="category-icon">
                      <Image
                        src={"/assets/img/offices.png"}
                        width={88}
                        height={88}
                        alt="office"
                      />
                    </div>
                    <div className="category-content">
                      <h4 className="category-title">Offices</h4>
                      {/* <span className="category-property">10</span> */}
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-2">
                <div
                  className="category-item wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="1.50s"
                >
                  <Link href="#">
                    <div className="category-icon">
                      <Image
                        src={"/assets/img/bunglow.png"}
                        width={88}
                        height={88}
                        alt="bungalow"
                      />
                    </div>
                    <div className="category-content">
                      <h4 className="category-title">Bunglow</h4>
                      {/* <span className="category-property">25</span> */}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="category-area1  py-120 pb-0 elited_nw_blk carousel-container">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="site-heading text-center">
                  <h1 className="site-title">Elite Properties</h1>
                </div>
              </div>
              <div className="col-md-12">
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={3000}
                >
                  <div className="listing-itemm">
                    <div className="elited_out">
                      <Image
                        src={"/assets/img/property/elite property (2).jpg"}
                        className="d-block w-100"
                        width={1250}
                        height={430}
                        alt="property"
                      />
                      <div className="elite_prop wave_img">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="478"
                          height="240"
                          viewBox="0 0 478 240"
                        >
                          <path
                            fill="#F3F3F3"
                            fillRule="evenodd"
                            d="M1 0c181.733.88 340.722 1.546 476.966 2C316 62.5 326.648 140.141 253.074 174 179.5 207.859 35.5 184.5 2 240 1.136 186.741.803 106.741 1 0z"
                          />
                        </svg>
                        <div className="elite_txt">
                          <h1>Vasavi Anandalayam</h1>
                          <p>
                            By: Vasavi group
                            <br />
                            @LB nagar, Hyderabad{" "}
                          </p>
                          <p>
                            Under Construction
                            <br /> Possession By: 30-12-2026
                          </p>
                          <h5>1,330 - 4,079 Sq Ft</h5>
                          <h6>
                            <span>Price</span>
                            <br />
                            <BiRupee fontSize={19} /> 93.1 Lakh Onwards
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="listing-itemm">
                    <div className="elited_out">
                      <Image
                        src={"/assets/img/property/elite property (2).jpg"}
                        className="d-block w-100"
                        width={1250}
                        height={430}
                        alt="property"
                      />
                      <div className="elite_prop wave_img">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="478"
                          height="240"
                          viewBox="0 0 478 240"
                        >
                          <path
                            fill="#F3F3F3"
                            fillRule="evenodd"
                            d="M1 0c181.733.88 340.722 1.546 476.966 2C316 62.5 326.648 140.141 253.074 174 179.5 207.859 35.5 184.5 2 240 1.136 186.741.803 106.741 1 0z"
                          />
                        </svg>
                        <div className="elite_txt">
                          <h1>Vasavi Anandalayam</h1>
                          <p>
                            By: Vasavi group
                            <br />
                            @LB nagar, Hyderabad{" "}
                          </p>
                          <p>
                            Under Construction
                            <br /> Possession By: 30-12-2026
                          </p>
                          <h5>1,330 - 4,079 Sq Ft</h5>
                          <h6>
                            <span>Price</span>
                            <br />
                            <BiRupee fontSize={19} /> 93.1 Lakh Onwards
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="listing-itemm">
                    <div className="elited_out">
                      <Image
                        src={"/assets/img/property/elite property (2).jpg"}
                        className="d-block w-100"
                        width={1250}
                        height={430}
                        alt="property"
                      />
                      <div className="elite_prop wave_img">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="478"
                          height="240"
                          viewBox="0 0 478 240"
                        >
                          <path
                            fill="#F3F3F3"
                            fillRule="evenodd"
                            d="M1 0c181.733.88 340.722 1.546 476.966 2C316 62.5 326.648 140.141 253.074 174 179.5 207.859 35.5 184.5 2 240 1.136 186.741.803 106.741 1 0z"
                          />
                        </svg>
                        <div className="elite_txt">
                          <h1>Vasavi Anandalayam</h1>
                          <p>
                            By: Vasavi group
                            <br />
                            @LB nagar, Hyderabad{" "}
                          </p>
                          <p>
                            Under Construction
                            <br /> Possession By: 30-12-2026
                          </p>
                          <h5>1,330 - 4,079 Sq Ft</h5>
                          <h6>
                            <span>Price</span>
                            <br />
                            <BiRupee fontSize={19} /> 93.1 Lakh Onwards
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="listing-itemm">
                    <div className="elited_out">
                      <Image
                        src={"/assets/img/property/elite property (2).jpg"}
                        className="d-block w-100"
                        width={1250}
                        height={430}
                        alt="property"
                      />
                      <div className="elite_prop wave_img">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="478"
                          height="240"
                          viewBox="0 0 478 240"
                        >
                          <path
                            fill="#F3F3F3"
                            fillRule="evenodd"
                            d="M1 0c181.733.88 340.722 1.546 476.966 2C316 62.5 326.648 140.141 253.074 174 179.5 207.859 35.5 184.5 2 240 1.136 186.741.803 106.741 1 0z"
                          />
                        </svg>
                        <div className="elite_txt">
                          <h1>Vasavi Anandalayam</h1>
                          <p>
                            By: Vasavi group
                            <br />
                            @LB nagar, Hyderabad{" "}
                          </p>
                          <p>
                            Under Construction
                            <br /> Possession By: 30-12-2026
                          </p>
                          <h5>1,330 - 4,079 Sq Ft</h5>
                          <h6>
                            <span>Price</span>
                            <br />
                            <BiRupee fontSize={19} /> 93.1 Lakh Onwards
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="curve_shp-btm"
        >
          <path
            fill="#e8f0fe"
            fillOpacity="1"
            d="M0,128L80,138.7C160,149,320,171,480,160C640,149,800,107,960,101.3C1120,96,1280,128,1360,144L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>

        <div className="property-listing pb-80 pb-100 mt--100">
          <div className="container-fluid px-5">
            <div className="row">
              <div
                className="col-lg-12 mx-auto wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay=".25s"
              >
                <div className="site-heading text-center mb-30">
                  <h2 className="site-title">Prime Properties</h2>
                </div>
              </div>
              <div className="property-listing-slider">
                <Carousel
                  responsive={primeProperties}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={3000}
                >
                  <Link href="/property-single">
                    <div className="listing-item">
                      <div className="listing-img">
                        <Image
                          src={"/assets/img/property/01.jpg"}
                          width={450}
                          height={300}
                          alt="property"
                        />
                      </div>
                      <div className="listing-content">
                        <h4 className="listing-title">
                          <Link href="#">APR Praveen's Crystal Avenue</Link>
                        </h4>
                        <p className="listing-sub-title">
                          <IoLocationSharp />
                          Vanasthalipuram, Hyderabad
                        </p>

                        <div className="listing-price">
                          <div className="listing-price-info">
                            <span className="listing-price-title">
                              Starts From
                            </span>
                            <h6 className="listing-price-amount">
                              <BiRupee fontSize={19} /> 1.66 crores
                            </h6>
                          </div>
                        </div>
                        <p>
                          <span className="mr-5">Ready to Move</span> Year
                          Built: 2022
                        </p>

                        <div className="listing-bottom">
                          <div className="listing-author">
                            <p className="ar_grp">
                              <span>By:</span> APR Group
                            </p>
                          </div>
                          <Link href="#" className="listing-btn">
                            View
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link href="/property-single">
                    <div className="listing-item">
                      <div className="listing-img">
                        <Image
                          src="/assets/img/property/02.jpg"
                          width={450}
                          height={300}
                          alt="property"
                        />
                      </div>
                      <div className="listing-content">
                        <h4 className="listing-title">
                          <Link href="#">APR Praveen's Crystal Avenue</Link>
                        </h4>
                        <p className="listing-sub-title">
                          <IoLocationSharp />
                          Vanasthalipuram, Hyderabad
                        </p>

                        <div className="listing-price">
                          <div className="listing-price-info">
                            <span className="listing-price-title">
                              Starts From
                            </span>
                            <h6 className="listing-price-amount">
                              <BiRupee fontSize={19} /> 1.66 crores
                            </h6>
                          </div>
                        </div>
                        <p>
                          <span className="mr-5">Ready to Move</span> Year
                          Built: 2022
                        </p>

                        <div className="listing-bottom">
                          <div className="listing-author">
                            <p className="ar_grp">
                              <span>By:</span> APR Group
                            </p>
                          </div>
                          <Link href="#" className="listing-btn">
                            View
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link href="/property-single">
                    <div className="listing-item">
                      <div className="listing-img">
                        <Image
                          src={"/assets/img/property/03.jpg"}
                          width={450}
                          height={300}
                          alt="property"
                        />
                      </div>
                      <div className="listing-content">
                        <h4 className="listing-title">
                          <Link href="#">APR Praveen's Crystal Avenue</Link>
                        </h4>
                        <p className="listing-sub-title">
                          <IoLocationSharp />
                          Vanasthalipuram, Hyderabad
                        </p>

                        <div className="listing-price">
                          <div className="listing-price-info">
                            <span className="listing-price-title">
                              Starts From
                            </span>
                            <h6 className="listing-price-amount">
                              <BiRupee fontSize={19} /> 1.66 crores
                            </h6>
                          </div>
                        </div>
                        <p>
                          <span className="mr-5">Ready to Move</span> Year
                          Built: 2022
                        </p>

                        <div className="listing-bottom">
                          <div className="listing-author">
                            <p className="ar_grp">
                              <span>By:</span> APR Group
                            </p>
                          </div>
                          <Link href="#" className="listing-btn">
                            View
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link href="property-single">
                    <div className="listing-item">
                      <div className="listing-img">
                        <Image
                          src={"/assets/img/property/04.jpg"}
                          width={450}
                          height={300}
                          alt="property"
                        />
                      </div>
                      <div className="listing-content">
                        <h4 className="listing-title">
                          <Link href="#">APR Praveen's Crystal Avenue</Link>
                        </h4>
                        <p className="listing-sub-title">
                          <IoLocationSharp />
                          Vanasthalipuram, Hyderabad
                        </p>

                        <div className="listing-price">
                          <div className="listing-price-info">
                            <span className="listing-price-title">
                              Start From
                            </span>
                            <h6 className="listing-price-amount">
                              <BiRupee fontSize={19} /> 1.66 crores
                            </h6>
                          </div>
                        </div>
                        <p>
                          <span className="mr-5">Ready to Move</span> Year
                          Built: 2022
                        </p>

                        <div className="listing-bottom">
                          <div className="listing-author">
                            <p className="ar_grp">
                              <span>By:</span> APR Group
                            </p>
                          </div>
                          <Link href="#" className="listing-btn">
                            View
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <div className="video-area counter-area pb-30">
          <div className="container-fluid px-0">
            <div
              className="video-content"
              style={{
                background: "url(assets/img/hero/terraterri-banner-bg.jpg)",
              }}
            >
              <div className="container">
                <div className="row py-100">
                  <div className="col-md-3">
                    <div className="d-flex">
                      <div className="imgl">
                        <Image
                          src={"/assets/img/sale.png"}
                          width={60}
                          height={60}
                          alt="sale"
                        />
                      </div>
                      <div className="lis_ot">
                        <h5>967</h5>
                        <p>Listings For Sale</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="d-flex">
                      <div className="imgl">
                        <Image
                          src={"/assets/img/buy-home.png"}
                          width={60}
                          height={60}
                          alt="sale"
                        />
                      </div>
                      <div className="lis_ot">
                        <h5>1276</h5>
                        <p>Listings For Rent</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="d-flex">
                      <div className="imgl">
                        <Image
                          src={"/assets/img/brokrs.png"}
                          width={60}
                          height={60}
                          alt="sale"
                        />
                      </div>
                      <div className="lis_ot">
                        <h5>396</h5>
                        <p>Estate Brokers</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="d-flex">
                      <div className="imgl">
                        <Image
                          src={"/assets/img/agents.png"}
                          width={60}
                          height={60}
                          alt="sale"
                        />
                      </div>
                      <div className="lis_ot">
                        <h5>177</h5>
                        <p>Builders</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="location-area pb-20">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-12 mx-auto wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay=".25s"
              >
                <div className="site-heading text-center">
                  <h2 className="site-title">Featured Properties</h2>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-12">
                <Carousel
                  responsive={featureProperties}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={3000}
                >
                  <div className="featur_prop">
                    <div>
                      <Image
                        src={
                          "/assets/img/feature properties/feature property 3.jpg"
                        }
                        width={600}
                        height={375}
                        alt="location"
                      />
                    </div>
                    <div className="listing-detail-wrapper">
                      <div className="listing-short-detail">
                        <h4 className="listing-name">
                          Southpride's Vanora Abodes
                        </h4>
                        <h6>By: Southpride Realty</h6> <p>ISNAPUR, Hyderabad</p>
                        <p className="small-font">Under Construction</p>
                        <p>Possession By: 23-11-2023</p>
                      </div>
                      <div className="list-price">
                        <p className="small-font">Starts form</p>
                        <h6 className="listing-card-info-price">
                          <BiRupee fontSize={19} />
                          68.8 lakhs
                        </h6>
                        <Link href="#" className="view_detls">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="featur_prop">
                    <div>
                      <Image
                        src={
                          "/assets/img/feature properties/rjgroup-current-projects.jpg"
                        }
                        width={600}
                        height={375}
                        alt="location"
                      />
                    </div>
                    <div className="listing-detail-wrapper">
                      <div className="listing-short-detail">
                        <h4 className="listing-name">
                          Southpride's Vanora Abodes
                        </h4>
                        <h6>By: Southpride Realty</h6> <p>ISNAPUR, Hyderabad</p>
                        <p className="small-font">Under Construction</p>
                        <p>Possession By: 23-11-2023</p>
                      </div>
                      <div className="list-price">
                        <p className="small-font">Starts form</p>
                        <h6 className="listing-card-info-price">
                          <BiRupee fontSize={19} />
                          68.8 lakhs
                        </h6>
                        <Link href="#" className="view_detls">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="featur_prop">
                    <div>
                      <Image
                        src={
                          "/assets/img/feature properties/rohan-anand-small-3.jpg"
                        }
                        width={600}
                        height={375}
                        alt="location"
                      />
                    </div>
                    <div className="listing-detail-wrapper">
                      <div className="listing-short-detail">
                        <h4 className="listing-name">
                          Southpride's Vanora Abodes
                        </h4>
                        <h6>By: Southpride Realty</h6> <p>ISNAPUR, Hyderabad</p>
                        <p className="small-font">Under Construction</p>
                        <p>Possession By: 23-11-2023</p>
                      </div>
                      <div className="list-price">
                        <p className="small-font">Starts form</p>
                        <h6 className="listing-card-info-price">
                          <BiRupee fontSize={19} />
                          68.8 lakhs
                        </h6>
                        <Link href="#" className="view_detls">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="featur_prop">
                    <div>
                      <Image
                        src={
                          "/assets/img/feature properties/feature property 3.jpg"
                        }
                        width={600}
                        height={375}
                        alt="location"
                      />
                    </div>
                    <div className="listing-detail-wrapper">
                      <div className="listing-short-detail">
                        <h4 className="listing-name">
                          Southpride's Vanora Abodes
                        </h4>
                        <h6>By: Southpride Realty</h6> <p>ISNAPUR, Hyderabad</p>
                        <p className="small-font">Under Construction</p>
                        <p>Possession By: 23-11-2023</p>
                      </div>
                      <div className="list-price">
                        <p className="small-font">Starts form</p>
                        <h6 className="listing-card-info-price">
                          <BiRupee fontSize={19} />
                          68.8 lakhs
                        </h6>
                        <Link href="#" className="view_detls">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="featur_prop">
                    <div>
                      <Image
                        src={
                          "/assets/img/feature properties/feature property 3.jpg"
                        }
                        width={600}
                        height={375}
                        alt="location"
                      />
                    </div>
                    <div className="listing-detail-wrapper">
                      <div className="listing-short-detail">
                        <h4 className="listing-name">
                          Southpride's Vanora Abodes
                        </h4>
                        <h6>By: Southpride Realty</h6> <p>ISNAPUR, Hyderabad</p>
                        <p className="small-font">Under Construction</p>
                        <p>Possession By: 23-11-2023</p>
                      </div>
                      <div className="list-price">
                        <p className="small-font">Starts form</p>
                        <h6 className="listing-card-info-price">
                          <BiRupee fontSize={19} />
                          68.8 lakhs
                        </h6>
                        <Link href="#" className="view_detls">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="featur_prop">
                    <div>
                      <Image
                        src={
                          "/assets/img/feature properties/feature property 3.jpg"
                        }
                        width={600}
                        height={375}
                        alt="location"
                      />
                    </div>
                    <div className="listing-detail-wrapper">
                      <div className="listing-short-detail">
                        <h4 className="listing-name">
                          Southpride's Vanora Abodes
                        </h4>
                        <h6>By: Southpride Realty</h6> <p>ISNAPUR, Hyderabad</p>
                        <p className="small-font">Under Construction</p>
                        <p>Possession By: 23-11-2023</p>
                      </div>
                      <div className="list-price">
                        <p className="small-font">Starts form</p>
                        <h6 className="listing-card-info-price">
                          <BiRupee fontSize={19} />
                          68.8 lakhs
                        </h6>
                        <Link href="#" className="view_detls">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="featur_prop">
                    <div>
                      <Image
                        src={
                          "/assets/img/feature properties/feature property 3.jpg"
                        }
                        width={600}
                        height={375}
                        alt="location"
                      />
                    </div>
                    <div className="listing-detail-wrapper">
                      <div className="listing-short-detail">
                        <h4 className="listing-name">
                          Southpride's Vanora Abodes
                        </h4>
                        <h6>By: Southpride Realty</h6> <p>ISNAPUR, Hyderabad</p>
                        <p className="small-font">Under Construction</p>
                        <p>Possession By: 23-11-2023</p>
                      </div>
                      <div className="list-price">
                        <p className="small-font">Starts form</p>
                        <h6 className="listing-card-info-price">
                          <BiRupee fontSize={19} />
                          68.8 lakhs
                        </h6>
                        <Link href="#" className="view_detls">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="featur_prop">
                    <div>
                      <Image
                        src={
                          "/assets/img/feature properties/feature property 3.jpg"
                        }
                        width={600}
                        height={375}
                        alt="location"
                      />
                    </div>
                    <div className="listing-detail-wrapper">
                      <div className="listing-short-detail">
                        <h4 className="listing-name">
                          Southpride's Vanora Abodes
                        </h4>
                        <h6>By: Southpride Realty</h6> <p>ISNAPUR, Hyderabad</p>
                        <p className="small-font">Under Construction</p>
                        <p>Possession By: 23-11-2023</p>
                      </div>
                      <div className="list-price">
                        <p className="small-font">Starts form</p>
                        <h6 className="listing-card-info-price">
                          <BiRupee fontSize={19} />
                          68.8 lakhs
                        </h6>
                        <Link href="#" className="view_detls">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <div className="location-area pb-20 category-area1">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-12 mx-auto wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay=".25s"
              >
                <div className="site-heading text-center">
                  <h2 className="site-title">Special Products</h2>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-12">
                <Carousel
                  responsive={featureProperties}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={3000}
                >
                  <div className="featur_propp">
                    <div className="spec_pro">
                      
                    <div className="spel_img">
                    <Image
                        src={
                          "/assets/img/feature properties/feature property 3.jpg"
                        }
                        width={600}
                        height={375}
                        alt="location"
                        />
                        </div>
                    <h4>Meta Model house</h4>
                    </div>
                  </div>
                 
                  <div className="featur_propp">
                    <div className="spec_pro">
                      <div className="spel_img">
                    <Image
                        src={
                          "/assets/img/feature properties/feature property 3.jpg"
                        }
                        width={600}
                        height={375}
                        alt="location"
                        />
                        </div>
                      <h4>Meta Model house</h4>
                    </div>
                  </div>
                  <div className="featur_propp">
                    <div className="spec_pro">
                      
                    <div className="spel_img">
                    <Image
                        src={
                          "/assets/img/feature properties/feature property 3.jpg"
                        }
                        width={600}
                        height={375}
                        alt="location"
                        />
                        </div>
                    <h4>Prop Arena</h4>
                    </div>
                  </div>
                  <div className="featur_propp">
                    <div className="spec_pro">
                      
                    <div className="spel_img">
                    <Image
                        src={
                          "/assets/img/feature properties/feature property 3.jpg"
                        }
                        width={600}
                        height={375}
                        alt="location"
                        />
                        </div>
                    <h4>Meta Office</h4>
                    </div>
                  </div>
                  <div className="featur_propp">
                    <div className="spec_pro">
                      
                    <div className="spel_img">
                    <Image
                        src={
                          "/assets/img/feature properties/feature property 3.jpg"
                        }
                        width={600}
                        height={375}
                        alt="location"
                        />
                        </div>
                    <h4>Digital Humans</h4>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <div className="location-area pb-20 category-area1">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-12 mx-auto wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay=".25s"
              >
                <div className="site-heading text-center">
                  <h2 className="site-title">Special Products</h2>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-12">
                <Carousel
                  responsive={primeProperties}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={3000}
                >
                 
                 <div className="agency-item">
<div className="agency-img">
<Image
                        src={
                          "/assets/img/agency/01.png"
                        }
                        width={600}
                        height={375}
                        alt="location"
                        />
</div>
<div className="agency-content">
<div className="agency-name">
<h4>The Metaverse Model House</h4>
<p>Paragon is a Metaverse Model House platform designed for property buyers to explore and experience builders' model houses in a realistic and immersive way. </p>
</div>


<a href="#" className="theme-btn">Read more <i><FaArrowRightLong /> </i></a>
</div>
                  </div>
                  <div className="agency-item">
<div className="agency-img">
<Image
                        src={
                          "/assets/img/agency/01.png"
                        }
                        width={600}
                        height={375}
                        alt="location"
                        />
</div>
<div className="agency-content">
<div className="agency-name">
<h4>Digital Humans</h4>
<p>Paragon is a Metaverse Model House platform designed for property buyers to explore and experience builders' model houses in a realistic and immersive way. </p>
</div>


<a href="#" className="theme-btn">Read more <i><FaArrowRightLong /> </i></a>
</div>
                  </div>
                  
                  <div className="agency-item">
<div className="agency-img">
<Image
                        src={
                          "/assets/img/agency/01.png"
                        }
                        width={600}
                        height={375}
                        alt="location"
                        />
</div>
<div className="agency-content">
<div className="agency-name">
<h4>Meta Model house</h4>
<p>Paragon is a Metaverse Model House platform designed for property buyers to explore and experience builders' model houses in a realistic and immersive way. </p>
</div>


<a href="#" className="theme-btn">Read more <i><FaArrowRightLong /> </i></a>
</div>
                  </div>
                  
                  <div className="agency-item">
<div className="agency-img">
<Image
                        src={
                          "/assets/img/agency/01.png"
                        }
                        width={600}
                        height={375}
                        alt="location"
                        />
</div>
<div className="agency-content">
<div className="agency-name">
<h4>Prop Arena</h4>
<p>Paragon is a Metaverse Model House platform designed for property buyers to explore and experience builders' model houses in a realistic and immersive way. </p>
</div>


                      <a href="#" className="theme-btn">Read more <i><FaArrowRightLong /> </i></a>
                      
</div>
</div>
                 
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="testimonial-area py-120 pt-0">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 mx-auto wow fadeInDown"
              data-wow-duration="1s"
              data-wow-delay=".25s"
            >
              <div className="site-heading text-center">
                <h2 className="site-title text-white">Customer Reviews</h2>
              </div>
            </div>
          </div>
          <div className="testimonial-slider owl-carousel owl-theme">
            <Carousel
              responsive={primeProperties}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
            >
              <div className="testimonial-single">
                <div className="testimonial-content">
                  <div className="testimonial-author-img">
                    <Image
                      src={"/assets/img/testimonial/01.jpg"}
                      width={80}
                      height={80}
                      alt="testimonial"
                    />
                  </div>
                  <div className="testimonial-author-info">
                    <h4>Sylvia H Green</h4>
                    <p>Clients</p>
                  </div>
                </div>
                <div className="testimonial-quote">
                  <p>
                    There are many variations of majority have suffered
                    alteration popularity belief believable in some form by
                    injected.
                  </p>
                  <div className="testimonial-quote-icon">
                    <Image
                      src={"/assets/img/icon/quote.svg"}
                      width={120}
                      height={120}
                      alt="quote"
                    />
                  </div>
                </div>
                <div className="testimonial-rate">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStar />
                </div>
              </div>
              <div className="testimonial-single">
                <div className="testimonial-content">
                  <div className="testimonial-author-img">
                    <Image
                      src={"/assets/img/testimonial/02.jpg"}
                      width={80}
                      height={80}
                      alt="testimonial"
                    />
                  </div>
                  <div className="testimonial-author-info">
                    <h4>Gordo Novak</h4>
                    <p>Clients</p>
                  </div>
                </div>
                <div className="testimonial-quote">
                  <p>
                    There are many variations of majority have suffered
                    alteration popularity belief believable in some form by
                    injected.
                  </p>
                  <div className="testimonial-quote-icon">
                    <Image
                      src={"/assets/img/icon/quote.svg"}
                      width={120}
                      height={120}
                      alt="quote"
                    />
                  </div>
                </div>
                <div className="testimonial-rate">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarHalf />
                </div>
              </div>
              <div className="testimonial-single">
                <div className="testimonial-content">
                  <div className="testimonial-author-img">
                    <Image
                      src={"/assets/img/testimonial/03.jpg"}
                      width={80}
                      height={80}
                      alt="testimonial"
                    />
                  </div>
                  <div className="testimonial-author-info">
                    <h4>Reid E Butt</h4>
                    <p>Clients</p>
                  </div>
                </div>
                <div className="testimonial-quote">
                  <p>
                    There are many variations of majority have suffered
                    alteration popularity belief believable in some form by
                    injected.
                  </p>
                  <div className="testimonial-quote-icon">
                    <Image
                      src={"/assets/img/icon/quote.svg"}
                      width={120}
                      height={120}
                      alt="quote"
                    />
                  </div>
                </div>
                <div className="testimonial-rate">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </div>
              </div>
              <div className="testimonial-single">
                <div className="testimonial-content">
                  <div className="testimonial-author-img">
                    <Image
                      src={"/assets/img/testimonial/04.jpg"}
                      width={80}
                      height={80}
                      alt="testimonial"
                    />
                  </div>
                  <div className="testimonial-author-info">
                    <h4>Parker Jimenez</h4>
                    <p>Clients</p>
                  </div>
                </div>
                <div className="testimonial-quote">
                  <p>
                    There are many variations of majority have suffered
                    alteration popularity belief believable in some form by
                    injected.
                  </p>
                  <div className="testimonial-quote-icon">
                    <Image
                      src={"/assets/img/icon/quote.svg"}
                      width={120}
                      height={120}
                      alt="quote"
                    />
                  </div>
                </div>
                <div className="testimonial-rate">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarHalf />
                </div>
              </div>
              <div className="testimonial-single">
                <div className="testimonial-content">
                  <div className="testimonial-author-img">
                    <Image
                      src={"/assets/img/testimonial/05.jpg"}
                      width={80}
                      height={80}
                      alt="testimonial"
                    />
                  </div>
                  <div className="testimonial-author-info">
                    <h4>Heruli Nez</h4>
                    <p>Clients</p>
                  </div>
                </div>
                <div className="testimonial-quote">
                  <p>
                    There are many variations of majority have suffered
                    alteration popularity belief believable in some form by
                    injected.
                  </p>
                  <div className="testimonial-quote-icon">
                    <Image
                      src={"/assets/img/icon/quote.svg"}
                      width={120}
                      height={120}
                      alt="quote"
                    />
                  </div>
                </div>
                <div className="testimonial-rate">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStar />
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
