import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Sliderify from "react-sliderify";
// import Header from "../components/header";
// import Footer from "../components/footer";

// import AliceCarousel from "react-alice-carousel";
import {
  convertToIndianRupees,
  downloadURI,
} from "@/components/libs/higherOderFN";
import { AiOutlineHome } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdCheckBoxOutlineBlank, MdMyLocation } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
// import { BiBed } from "react-icons/bi";
// import { GiBathtub } from "react-icons/gi";
// import { TbGeometry } from "react-icons/tb";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { LiaCitySolid } from "react-icons/lia";
import { BsFillPlayFill, BsStarHalf } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BiRupee } from "react-icons/bi";
import { BsArrowRightShort } from "react-icons/bs";
import {
  getAllCities,
  getAllMastersTypes,
} from "@/components/endPoints/masterEndPoints";
import PropertyTabs from "@/components/libs/propertyTabs";
import { MastersContext } from "./_app";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { DNAComponent } from "@/components/loader/Loader";
import AutoCompleteComponent from "@/components/reusable/autoComplete";
import { environment } from "@/environments/environment";
import { useRouter } from "next/router";
import { getBanners } from "@/components/endPoints/websiteEndpoints";
import Specific_Tab from "@/components/libs/specification_tab";
import { SlideshowLightbox } from "lightbox.js-react";
import UnitGalleryTab from "@/components/libs/tab";
import { FiArrowDownCircle } from "react-icons/fi";
import ContactTabs from "@/components/libs/contact";

const villapage = () => {
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

  const featureProperties1 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
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

  const unitSizes = [
    {
      id: 48,
      super_built_up_area: "1200",
      base_price: "4000",
      total_base_price: "4800000",
      amenities_charges: "400000",
      car_parking_charges: "500000",
      club_house_charges: "50000",
      corpus_fund: "50000",
      advance_maintenance_charges: "400000",
      advance_maintenance_for_months: 2,
      legal_charges: null,
      estimated_total_price: "6200000",
      gst_charges: "310000",
      registration_charges: "378200",
      others_1_charges_name: null,
      others_1_charges: null,
      others_2_charges_name: null,
      others_2_charges: null,
      others_3_charges_name: null,
      others_3_charges: null,
      floor_plan:
        "https://terraterri-website-images.s3.us-east-2.amazonaws.com/Wye26adU37RMDo4iGwsK589ztesPSUT66nsuqfxk.png",
      carpet_area: "900",
      bhk_name: "2 BHK",
      property_facing: "East",
    },
  ];

  const project = {
    id: 47,
    project_listing_name: "Ma Srininvasam",
    property_type: "Residential",
    property_sub_type: "Apartment",
    listing_type: "Project",
    country_code: "IN",
    state_code: "TG",
    city_code: "HYD",
    locality: "Isnapur",
    sub_locality: null,
    street_name: null,
    door_number: null,
    total_project_land_area: "2",
    approval_authority: "GHMC",
    approval_number: "23345678",
    approval_year: "2024-08-14",
    approval_document_path:
      "https://terraterri-website-images.s3.us-east-2.amazonaws.com/3grF7ATR8pLqDKW6v9cd7zYOQbEOQK4lS9f5v8VK.png",
    real_estate_authority: "RERA",
    real_estate_approval_number: "34567856",
    real_estate_approval_year: "2024-08-06",
    real_estate_approval_document_path:
      "https://terraterri-website-images.s3.us-east-2.amazonaws.com/t7ycWonHREgclDYzwzQJiltJuqrqK6FsFBuHGQNb.png",
    broucher_path: null,
    total_project_land_area_size: "Acre",
    property_min_size: "1200",
    property_max_size: "1800",
    property_size_representation: null,
    project_description: "<p>Testing</p>",
    project_specification: null,
    project_name: "Skypx Iris",
    builder_name: "Skypx",
    possession_status: "Ready to Move",
    possession_description: "Test Description",
    project_layout_document_path:
      "https://terraterri-website-images.s3.us-east-2.amazonaws.com/vvVML4tBfPukC9VMgviw7OJztdmxn0NCJjxeiMpI.png",
  };

  const projectImages = [
    {
      id: 222,
      project_listing_id: 47,
      image_url:
        "https://terraterri-website-images.s3.us-east-2.amazonaws.com/e1eEGU91aXJd3j5zMn7Scgxk7droEMC3rkdlY9th.jpg",
      thumnail:
        "https://terraterri-website-images.s3.us-east-2.amazonaws.com/e1eEGU91aXJd3j5zMn7Scgxk7droEMC3rkdlY9th.jpg",
      meta: "test",
    },
    {
      id: 223,
      project_listing_id: 47,
      image_url:
        "https://terraterri-website-images.s3.us-east-2.amazonaws.com/V7ovZo5ACfHQa2YKHCn6fHXnOQfaVYGYaEis8SWN.jpg",
      thumnail:
        "https://terraterri-website-images.s3.us-east-2.amazonaws.com/V7ovZo5ACfHQa2YKHCn6fHXnOQfaVYGYaEis8SWN.jpg",
      meta: "test",
    },
    {
      id: 224,
      project_listing_id: 47,
      image_url:
        "https://terraterri-website-images.s3.us-east-2.amazonaws.com/sisiFji9OGDiHir3XANGHqv0yI2JDgKhwz9rmNUo.jpg",
      thumnail:
        "https://terraterri-website-images.s3.us-east-2.amazonaws.com/sisiFji9OGDiHir3XANGHqv0yI2JDgKhwz9rmNUo.jpg",
      meta: "test",
    },
    {
      id: 225,
      project_listing_id: 47,
      image_url:
        "https://terraterri-website-images.s3.us-east-2.amazonaws.com/r14zEUAu1187ECKSLEM0g3FgZrEt7BP3Q9iI9KgK.jpg",
      thumnail:
        "https://terraterri-website-images.s3.us-east-2.amazonaws.com/r14zEUAu1187ECKSLEM0g3FgZrEt7BP3Q9iI9KgK.jpg",
      meta: "test",
    },
  ];

  return (
    <>
      <main className="main">
        <>
          {project == null && <h1>Project Not Found</h1>}
          {project != null && (
            <main className="main">
              <div className="property-single py-120 top">
                <div className="container-fluid px-20">
                  <div className="row">
                    <div className="col-lg-12 mb-0">
                      <div className="property-single-wrapper">
                        <div className="row">
                          <div className="col-md-9">
                            <div className="row">
                              <div className="col-md-10">
                                <Carousel
                                  responsive={featureProperties1}
                                  infinite={true}
                                  autoPlay={true}
                                  autoPlaySpeed={3000}
                                >
                                  {projectImages.map((img) => (
                                    <div className="slider-gallery d-flex justify-content-center">
                                      <img src={img.image_url} loading="lazy" />
                                      {/* <img src="" /> */}
                                    </div>
                                  ))}
                                </Carousel>
                              </div>
                              <div className="col-md-2">
                                <ul className="gallery-thumb no-scroll">
                                  {projectImages.map((img) => (
                                    <li>
                                      <img src={img.image_url} loading="lazy" />
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="property-single-meta">
                              <div className="property-single-meta-left">
                                <h4>Skypx Iris</h4>
                                <p>
                                  <IoLocationSharp /> Isnapur,,
                                </p>

                                <p>By : Skypx</p>
                                <p className="price_nme">
                                  <label className="starts_cls">
                                    Price Starts From
                                  </label>
                                  <b>₹ 4,000 - 4,000</b>{" "}
                                </p>
                                <p className="rng_ot">
                                  <span className="starts_cls">
                                    Size Ranges
                                  </span>{" "}
                                  <span>165 - 180 Sq Yard</span>
                                </p>
                                <div className="card">
                                  <p className="d-flex">
                                    <span>Ready to Move </span>{" "}
                                    <span> Year Built: 2023</span>
                                  </p>

                                  <p className="d-flex">
                                    <span>Posted on:</span>{" "}
                                    <span>08-05-2023</span>
                                  </p>
                                  <p className="d-flex">
                                    <span>Property Id:</span> <span>917</span>
                                  </p>
                                </div>
                              </div>
                              {/* <div className="property-single-meta-right">
                    <div className="property-single-rating-box">
                      <h6 className="property-single-price">$20,000</h6>
                      <div className="property-single-rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <span>5.0 (50 reviews)</span>
                      </div>
                    </div>
                    <div className="property-single-meta-option">
                      <a href="">
                        <i className="far fa-share-alt" />
                      </a>
                      <a href="">
                        <i className="far fa-print" />
                      </a>
                      <a href="">
                        <i className="far fa-heart" />
                      </a>
                      <a href="">
                        <i className="far fa-arrows-repeat" />
                      </a>
                    </div>
                  </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="contnt-sep">
                  <div
                    className={
                      "property-anchor-nav fixed-sidebar"
                      // "property-anchor-nav fixed-sidebar tab_sectnew"
                    }
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <div
                            className={
                              true
                                ? "d-flex tab_sect"
                                : "d-flex tab_sect tab_sectnew"
                            }
                          >
                            <a href="#orviw-id">
                              <div className="tab active">Overview</div>
                            </a>
                            <a href="#loact-id">
                              <div className="tab">Location</div>
                            </a>
                            <a href="#aprvd-id">
                              <div className="tab">Approvals</div>
                            </a>
                            <a href="#projdet-id">
                              <div className="tab">Project Details</div>
                            </a>
                            <a href="#propty-id">
                              <div className="tab">Property Details</div>
                            </a>
                            <a href="#pric-id">
                              <div className="tab">Pricing</div>
                            </a>
                            <a href="#specif-id">
                              <div className="tab">Specifications</div>
                            </a>
                            <a href="#ament-id">
                              <div className="tab">Amenities</div>
                            </a>
                            <a href="#bankln-id">
                              <div className="tab">Bank Loans</div>
                            </a>
                            <a href="#galery-id">
                              <div className="tab">Gallery</div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container">
                    <div>
                      <section
                        id="orviw-id"
                        className="property-single-content"
                      >
                        <h4>Overview</h4>
                        <div className="property-single-description ">
                          <div className="block-body">
                            <div className="prt-detail-title-desc row">
                              <div className="col-md-3">
                                <span className="small-font">Project Name</span>
                                <p className="d-inline">
                                  {project?.project_listing_name}
                                </p>
                              </div>
                              <div className="col-md-3">
                                <span className="small-font">
                                  Property Type
                                </span>
                                <p className="d-inline">
                                  {project?.property_type}
                                </p>
                              </div>
                              <div className="col-md-3">
                                <span className="small-font">Type</span>
                                <p className="d-inline">
                                  {project?.property_sub_type}
                                </p>
                              </div>
                              <div className="col-md-3">
                                <span className="small-font">
                                  Community Type
                                </span>
                                <p className="d-inline">Gated</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                    {/* --------------------------------- popup buton -------------------------------- */}

                    {/* <div
                                  className="position_lable"
                                  onClick={() => {
                                      handleOpenDialog();
                                  }}
                              >
                                  {"contact builder"}
                              </div> */}

                    {/* --------------------------------- popup buton -------------------------------- */}
                    <div className="row rigth_frm">
                      <div className="col-md-8">
                        <div className="property-single-content" id="aprvd-id">
                          <h4>Approvals</h4>
                          <div className="property-single-description">
                            <div className="block-body">
                              <div className="prt-detail-title-desc row">
                                <div className="col-md-3">
                                  <span className="small-font">
                                    Permission Authority:
                                  </span>
                                  <p className="d-inline">
                                    {project?.approval_authority}
                                  </p>
                                </div>
                                <div className="col-md-3">
                                  <span className="small-font">
                                    Approval Number:
                                  </span>
                                  <p className="d-inline">
                                    {project?.approval_number}
                                  </p>
                                </div>
                                <div className="col-md-3">
                                  <span className="small-font">
                                    Year of Approval:
                                  </span>
                                  <p className="d-inline">
                                    {project?.approval_year
                                      .split("-")
                                      .reverse()
                                      .join("-")}
                                  </p>
                                </div>
                                <div className="col-md-3">
                                  <span className="small-font">
                                    Approval Document:
                                  </span>
                                  <p
                                    className="d-inline colr-blu activeText"
                                    onClick={() => {
                                      handleOpen(
                                        project.approval_document_path
                                      );
                                    }}
                                  >
                                    View
                                  </p>
                                </div>
                              </div>
                              <div className="prt-detail-title-desc row">
                                <div className="col-md-3">
                                  <span className="small-font">
                                    Real Estate Authority:
                                  </span>
                                  <p className="d-inline">RERA</p>
                                </div>
                                <div className="col-md-3">
                                  <span className="small-font">
                                    Real Estate Number:
                                  </span>
                                  <p className="d-inline">
                                    {project?.real_estate_approval_number}
                                  </p>
                                </div>
                                <div className="col-md-3">
                                  <span className="small-font">
                                    Year of Approval:
                                  </span>
                                  <p className="d-inline ">
                                    {project?.real_estate_approval_year
                                      .split("-")
                                      .reverse()
                                      .join("-")}
                                  </p>
                                </div>
                                <div className="col-md-3">
                                  <span className="small-font">
                                    Approval Document:
                                  </span>
                                  <p
                                    className="d-inline colr-blu activeText"
                                    onClick={() => {
                                      handleOpen(
                                        project.real_estate_approval_document_path
                                      );
                                    }}
                                  >
                                    View
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="property-single-content"
                          id="projdet-id"
                        >
                          <h4>Project Details</h4>
                          <div className="property-single-description">
                            <div className="block-body">
                              <ul className="row">
                                <li className="col-md-3">
                                  <span>Project Land Area</span>
                                  <br></br>{" "}
                                  <span className="lnd_ot">
                                    {project.total_project_land_area}{" "}
                                    {project.total_project_land_area_size}
                                  </span>
                                </li>
                                <li className="col-md-3">
                                  <span>Num Of Villas</span>
                                  <br></br> <span className="lnd_ot">2</span>
                                </li>

                                <li className="col-md-3">
                                  <span>Community Type</span>
                                  <span className="lnd_ot">Gated</span>
                                </li>
                              </ul>
                              <div className="project_details__layout_img">
                                <div className="layot_img row justify-content-center">
                                  <div className="col-md-6">
                                    <h6>Project Layout Plan</h6>
                                    <div className="plan_ot">
                                      <img
                                        src={
                                          project.project_layout_document_path
                                        }
                                        className="d-block w-100"
                                        width={400}
                                        height={100}
                                        alt="thumbnail"
                                        loading="lazy"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="about-project">
                                <div className="row justify-content-center">
                                  <div className="col-md-10">
                                    <h6>About Project</h6>

                                    <div className="card">
                                      <p
                                        dangerouslySetInnerHTML={{
                                          __html: project?.project_description,
                                        }}
                                      ></p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="property-single-content" id="propty-id">
                          <h4>Various Unit Sizes Available in this Project</h4>
                          {/* <div className="property-single-description">
                      <div className="prices_lsts">
                        <UnitSizes data={unitSizes} />
                      </div>
                    </div> */}
                          <div className="property-single-description">
                            <div className="table_out">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>S.No</th>
                                    <th>Villa Type</th>
                                    <th>Built Up Size</th>
                                    <th>Plot Size</th>
                                    <th>Facing</th>
                                    <th>Floorplan</th>
                                    <th>Price</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {unitSizes.map((unit, index) => (
                                    <tr>
                                      <td>{index + 1}</td>
                                      <td>Duplex</td>
                                      <td>{unit.super_built_up_area}</td>
                                      <td>{unit.super_built_up_area}</td>
                                      <td>{unit.property_facing}</td>
                                      <td
                                        className="colr-blu"
                                        onClick={() => {
                                          handleOpenUnitImage(unit.floor_plan);
                                        }}
                                      >
                                        View
                                      </td>
                                      <td
                                        className="colr-blu"
                                        onClick={() => {
                                          handleOpenUnitPrice(unit);
                                        }}
                                      >
                                        View
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>

                              <div class="block-body">
                                <div class="prt-detail-title-desc row">
                                  <div className="col-md-12">
                                    <h5>Dimensions</h5>
                                  </div>
                                  <div class="col-md-3">
                                    <span class="small-font">Plot Size</span>
                                    <p class="d-inline">1200 sq.ft</p>
                                  </div>
                                  <div class="col-md-3">
                                    <span class="small-font">Length </span>
                                    <p class="d-inline">1000 sq.ft</p>
                                  </div>
                                  <div class="col-md-3">
                                    <span class="small-font">Breadth</span>
                                    <p class="d-inline">1400 sq.ft</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* <section className="property-single-content" id="loact-id">
                      <h4>Explore neighbourhood</h4>
                      <div className="property-single-description">
                        <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.8805165306853!2d78.37105547497025!3d17.46543200055249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93d289e5269d%3A0x38002a017a88c8b3!2sMAGNA%E2%80%99S%20LAKEVIEW%20APARTMENT!5e0!3m2!1sen!2sin!4v1695989606575!5m2!1sen!2sin"
                    width={750}
                    height={400}
                  ></iframe>
                        {type == "hospital" && (
                          <GoogleMaps
                            projectId={sulg}
                            lat={17.0138152}
                            long={82.2483217}
                            radius={1000}
                            type={type}
                          />
                        )}
                        {type == "school" && (
                          <GoogleMaps
                            projectId={sulg}
                            lat={17.0138152}
                            long={82.2483217}
                            radius={1000}
                            type={type}
                          />
                        )}
                        {type == "restaurant" && (
                          <GoogleMaps
                            projectId={sulg}
                            lat={17.0138152}
                            long={82.2483217}
                            radius={1000}
                            type={type}
                          />
                        )}
                        {type == "bank" && (
                          <GoogleMaps
                            projectId={sulg}
                            lat={17.0138152}
                            long={82.2483217}
                            radius={1000}
                            type={type}
                          />
                        )}
                        {type == "park" && (
                          <GoogleMaps
                            projectId={sulg}
                            lat={17.0138152}
                            long={82.2483217}
                            radius={1000}
                            type={type}
                          />
                        )}
                        {type == "airport" && (
                          <GoogleMaps
                            projectId={sulg}
                            lat={17.0138152}
                            long={82.2483217}
                            radius={1000}
                            type={type}
                          />
                        )}
                        {type == "train_station" && (
                          <GoogleMaps
                            projectId={sulg}
                            lat={17.0138152}
                            long={82.2483217}
                            radius={1000}
                            type={type}
                          />
                        )}
                        <div className="row loca_out mt-0">
                          <div className="col-md-3 text-left">
                            <p>Near by Info</p>
                          </div>
                          <div className="col-md-9">
                            <div className="d-flex even-space">
                              <li
                                className={
                                  type == "restaurant"
                                    ? "active-class-maps"
                                    : ""
                                }
                                onClick={() => {
                                  setType("restaurant");
                                }}
                              >
                                Restuarants
                              </li>
                              <li
                                className={
                                  type == "school" ? "active-class-maps" : ""
                                }
                                onClick={() => {
                                  setType("school");
                                }}
                              >
                                Schools
                              </li>
                              <li
                                className={
                                  type == "bank" ? "active-class-maps" : ""
                                }
                                onClick={() => {
                                  setType("bank");
                                }}
                              >
                                Banks
                              </li>
                              <li
                                className={
                                  type == "park" ? "active-class-maps" : ""
                                }
                                onClick={() => {
                                  setType("park");
                                }}
                              >
                                Parks
                              </li>
                              <li
                                className={
                                  type == "hospital" ? "active-class-maps" : ""
                                }
                                onClick={() => {
                                  setType("hospital");
                                }}
                              >
                                Hospitals
                              </li>
                              <li
                                className={
                                  type == "airport" ? "active-class-maps" : ""
                                }
                                onClick={() => {
                                  setType("airport");
                                }}
                              >
                                Airport
                              </li>
                              <li
                                className={
                                  type == "train_station"
                                    ? "active-class-maps"
                                    : ""
                                }
                                onClick={() => {
                                  setType("train_station");
                                }}
                              >
                                Railstation
                              </li>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section> */}

                        {/* <div className="property-single-content">
                      <h4>Special Features</h4>
                      <div className="property-single-description">
                        <div className="block-body">
                          {Object.keys(specialFeatures).length > 0 &&
                            Object.keys(specialFeatures).map(
                              (specialFeatureName) => (
                                <>
                                  <div className="row">
                                    <h5>{specialFeatureName}</h5>
                                    <ul className="special_featrs">
                                      {specialFeatures[specialFeatureName]
                                        .length > 0 &&
                                        specialFeatures[specialFeatureName].map(
                                          (feature) => (
                                            <li>{feature.room_name}</li>
                                          )
                                        )}
                                    </ul>
                                  </div>
                                </>
                              )
                            )}
                        </div>
                      </div>
                    </div> */}
                        <div className="property-single-content">
                          <div className="row">
                            <div className="col-md-12">
                              <h4>Possession Status</h4>
                            </div>
                            {/* <div className="col-md-6">
                          <h4>Contact Times</h4>
                        </div> */}
                          </div>

                          <div className="property-single-description">
                            <div className="row">
                              <div className="col-md-4">
                                <p className="mb-1">
                                  {project.possession_status}
                                </p>
                                {/* <p>Year Built: 2023</p> */}
                              </div>
                              {project?.possession_by && (
                                <div className="col-md-4">
                                  <span className="small-font">
                                    Possession by:
                                  </span>
                                  <p className="d-inline">
                                    {project?.possession_by
                                      .split("-")
                                      .reverse()
                                      .join("-")}
                                  </p>
                                </div>
                              )}
                              {project.age_of_possession && (
                                <div className="col-md-4">
                                  <span className="small-font d-block mx-3">
                                    Possession by
                                  </span>
                                  <p className="d-inline">
                                    {project.age_of_possession}
                                  </p>
                                  {/* <p>Year Built: 2023</p> */}
                                </div>
                              )}

                              {/* <div className="col-md-6">
                            <p>Times: From 9:30 To 18:30</p>
                          </div> */}
                            </div>
                          </div>
                        </div>
                        {/* <div className="property-single-content" id="pric-id">
                    <div className="d-flex">
                      <div className="col-md-4">
                        <h4>Estimated Price</h4>
                      </div>
                      <div className="col-md-6">
                        <ul className="d-flex">
                          <li>Project Name: </li>
                          <li>3bhk: </li>
                          <li>Unit Size: </li>
                          <li>Facing: </li>
                        </ul>
                      </div>
                    </div>
                   
                  </div> */}
                        <div className="property-single-content" id="ament-id">
                          <h4>Furnishing Status</h4>
                          <div className="property-single-description">
                            <div className="roww mb-4">
                              <h5>Furnished</h5>
                              <ul className="special_featrs">
                                <li>Furnished</li>
                                <li>Semi Furnished</li>
                                <li>Un Furnished</li>
                              </ul>
                            </div>
                            <div className="block-body">
                              <ul className="special_featrs mb-3">
                                <li>
                                  Lights <span>10</span>
                                </li>
                                <li>
                                  Fans <span>10</span>
                                </li>
                                <li>
                                  AC <span>10</span>
                                </li>
                                <li>
                                  TV <span>10</span>
                                </li>
                                <li>
                                  Geyser <span>10</span>
                                </li>
                                <li>
                                  Book Shelves <span>10</span>
                                </li>
                              </ul>
                            </div>
                            <div className="row mb-4">
                              <div className="col-12 col-md-3 col-lg-3">
                                <div className="property-single-info-item">
                                  {" "}
                                  <MdCheckBoxOutlineBlank /> Stereo System
                                </div>
                              </div>
                              <div className="col-12 col-md-3 col-lg-3">
                                <div className="property-single-info-item">
                                  {" "}
                                  <MdCheckBoxOutlineBlank /> Desks and Chairs
                                </div>
                              </div>
                              <div className="col-12 col-md-3 col-lg-3">
                                <div className="property-single-info-item">
                                  {" "}
                                  <MdCheckBoxOutlineBlank /> Sofa
                                </div>
                              </div>
                              <div className="col-12 col-md-3 col-lg-3">
                                <div className="property-single-info-item">
                                  {" "}
                                  <MdCheckBoxOutlineBlank /> Stove
                                </div>
                              </div>
                              <div className="col-12 col-md-3 col-lg-3">
                                <div className="property-single-info-item">
                                  {" "}
                                  <MdCheckBoxOutlineBlank /> Fridge
                                </div>
                              </div>
                              <div className="col-12 col-md-3 col-lg-3">
                                <div className="property-single-info-item">
                                  {" "}
                                  <MdCheckBoxOutlineBlank /> Chimney
                                </div>
                              </div>
                              <div className="col-12 col-md-3 col-lg-3">
                                <div className="property-single-info-item">
                                  {" "}
                                  <MdCheckBoxOutlineBlank /> Maditation Hall
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="property-single-content" id="ament-id">
                          <h4>Amenities</h4>
                          <div class="property-single-description">
                            <h5>Club House</h5>
                            <div class="row">
                              <ul class="special_featrs">
                                <li>Entrance Lounge / Reception</li>
                                <li>Saloon and Spa</li>
                                <li>Multi-porpose Hall</li>
                              </ul>
                            </div>
                            <h5>Fitness</h5>
                            <div class="row">
                              <ul class="special_featrs">
                                <li>Gymnasium</li>
                                <li>Tennis Court</li>
                              </ul>
                            </div>
                            <h5>Convinience</h5>
                            <div class="row">
                              <ul class="special_featrs">
                                <li>Power Backup</li>
                                <li>Lift</li>
                              </ul>
                            </div>
                            <h5>Safity &amp; Security</h5>
                            <div class="row">
                              <ul class="special_featrs">
                                <li>24hrs Security</li>
                                <li>Air Condition</li>
                                <li>Fire Fighting Equipment</li>
                              </ul>
                            </div>
                            <h5>Others</h5>
                            <div class="row">
                              <ul class="special_featrs">
                                <li>Barbeque Pit</li>
                                <li>Maintaince Staff</li>
                              </ul>
                            </div>
                            <h5>Land Scaping</h5>
                            <div class="row">
                              <ul class="special_featrs">
                                <li>Senior Citizen Park</li>
                              </ul>
                            </div>
                            <h5>Network &amp; Connectivity</h5>
                            <div class="row">
                              <ul class="special_featrs">
                                <li>Wi-fi</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* <div className="property-single-content" id="ament-id">
                      <h4>Amenities</h4>
                      <div className="property-single-description">
                        {Object.keys(amenities).length > 0 &&
                          Object.keys(amenities).map((eminityName) => (
                            <>
                              <h5>{eminityName}</h5>
                              <div className="row">
                                <ul className="special_featrs">
                                  {amenities[eminityName].length > 0 &&
                                    amenities[eminityName].map(
                                      (aminityResource) => (
                                        <li>{aminityResource.aminity_name}</li>
                                      )
                                    )}
                                </ul>
                              </div>
                            </>
                          ))}
                      </div>
                    </div> */}
                        <div className="property-single-content" id="specif-id">
                          <h4>Specifications</h4>
                          <div className="property-single-description">
                            <div className="spec_tab">
                              <Specific_Tab />
                            </div>
                          </div>
                        </div>
                        <div className="property-single-content" id="galery-id">
                          <h4>Gallery</h4>
                          <div className="px-4 gallery-tab-align">
                            <SlideshowLightbox lightboxIdentifier="galleryImage">
                              {projectImages.map((img) => (
                                <img
                                  src={img.image_url}
                                  data-lightboxjs="galleryImage"
                                  loading="lazy"
                                />
                              ))}
                            </SlideshowLightbox>
                          </div>
                        </div>
                        {/* <div className="property-single-content" id="galery-id">
                      <h4>Unit Gallery</h4>
                      <div className="property-single-description">
                        <div className="singgaller mt-2">
                          <div className="d-flex">
                            <UnitGalleryTab unitGallery={unitGallery} />
                          </div>
                        </div>
                      </div>
                    </div> */}
                        <div
                          className="property-single-content"
                          id="brocher-id"
                        >
                          <div className="row">
                            <div className="col-md-4">
                              <h4>E-Brochure</h4>
                              <div className="property-single-description">
                                <>
                                  <a
                                    className="download-brocher"
                                    href={project.broucher_path}
                                    target="_blank"
                                  >
                                    Download
                                  </a>
                                </>
                              </div>
                            </div>
                            <div className="col-md-8">
                              <h4>Videos</h4>
                              <div className="property-single-description">
                                <div className="video-contentt">
                                  <div className="row align-items-center">
                                    <div className="col-lg-3">
                                      <div
                                        className="video-content video-wrapper"
                                        style={{
                                          background:
                                            "url(assets/img/hero/terraterri-banner-bg.jpg)",
                                        }}
                                      >
                                        <Link
                                          className="play-btn popup-youtube"
                                          href=""
                                        >
                                          <i></i>
                                          <BsFillPlayFill className="svg-icons" />
                                        </Link>
                                      </div>
                                    </div>
                                    <div className="col-lg-3">
                                      <div
                                        className="video-content video-wrapper"
                                        style={{
                                          background:
                                            "url(assets/img/hero/terraterri-banner-bg.jpg)",
                                        }}
                                      >
                                        <Link
                                          className="play-btn popup-youtube"
                                          href=""
                                        >
                                          <i></i>
                                          <BsFillPlayFill className="svg-icons" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="floating-btn-position">
                          {/* <button className="btn btn-primary">
                        Contact Builder{" "}
                        <span>
                          <FiArrowDownCircle />
                        </span>
                      </button> */}
                        </div>
                        <div
                          // className={
                          //     fix
                          //         ? "sidebar fixed property-contact-content"
                          //         : "sidebar"
                          // }
                          id="contact-id"
                        >
                          <div className="cont_inform">
                            <h6 className="text-center text-uppercase text-white">
                              Contact Builder
                            </h6>
                            <div className="txt_lg tex-center">
                              Signatures Avenue Pvt Limited
                            </div>
                          </div>

                          <ContactTabs />
                          {/* </div> */}
                        </div>
                      </div>
                    </div>

                    <div className="">
                      <div className="container">
                        <div className="property-single-content" id="vidoe-id">
                          <div className="property-single-description video-bg-img">
                            <div className="video-contentt">
                              <div className="row align-items-center">
                                <div className="col-md-8">
                                  <div className="metCap_ot text-center">
                                    <h2>
                                      Would you like to explore the model house
                                      <br></br> through an immersive experience{" "}
                                    </h2>
                                    <button>Explore</button>
                                    <h2>
                                      Right now, we'd love to meet you in
                                      Metaverse
                                      <br></br> at our office
                                    </h2>
                                    <button className="mb-0">join us</button>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="benifts_out">
                                    <ul>
                                      <li>
                                        Unlock the Metaverse: Explore your dream
                                        property in a New Dimension.
                                      </li>
                                      <li className="color-blue-pattern">
                                        "Immerse Yourself: Navigate your
                                        property Beyond Boundaries."
                                      </li>
                                      <li>
                                        Explore model houses in Virtual and
                                        immersive Environment.
                                      </li>
                                      <li className="color-blue-pattern">
                                        Engage in face-to-face Virtual meetings
                                        with builders
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="location-area pb-20 pt-50">
                      <div className="container">
                        <div className="row">
                          <div
                            className="col-lg-6 mx-auto wow fadeInDown"
                            data-wow-duration="1s"
                            data-wow-delay=".25s"
                          >
                            <div className="site-heading text-center">
                              <h2 className="site-title">Recently Viewed</h2>
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
                                    <h6>By: Southpride Realty</h6>{" "}
                                    <p>ISNAPUR, Hyderabad</p>
                                    <p className="small-font">
                                      Under Construction
                                    </p>
                                    <p>Possession By: 23-11-2023</p>
                                  </div>
                                  <div className="list-price">
                                    <p className="small-font">Starts form</p>
                                    <h6 className="listing-card-info-price">
                                      {convertToIndianRupees(6880000)}
                                    </h6>
                                    <Link href="" className="view_detls">
                                      View Details
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="featur_prop">
                                <div>
                                  <img
                                    src="https://source.unsplash.com/1920x720/?villa"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="listing-detail-wrapper">
                                  <div className="listing-short-detail">
                                    <h4 className="listing-name">
                                      Southpride's Vanora Abodes
                                    </h4>
                                    <h6>By: Southpride Realty</h6>{" "}
                                    <p>ISNAPUR, Hyderabad</p>
                                    <p className="small-font">
                                      Under Construction
                                    </p>
                                    <p>Possession By: 23-11-2023</p>
                                  </div>
                                  <div className="list-price">
                                    <p className="small-font">Starts form</p>
                                    <h6 className="listing-card-info-price">
                                      {convertToIndianRupees(6880000)}
                                    </h6>
                                    <Link href="" className="view_detls">
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
                                    <h6>By: Southpride Realty</h6>{" "}
                                    <p>ISNAPUR, Hyderabad</p>
                                    <p className="small-font">
                                      Under Construction
                                    </p>
                                    <p>Possession By: 23-11-2023</p>
                                  </div>
                                  <div className="list-price">
                                    <p className="small-font">Starts form</p>
                                    <h6 className="listing-card-info-price">
                                      {convertToIndianRupees(6880000)}
                                    </h6>
                                    <Link href="" className="view_detls">
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
                                    <h6>By: Southpride Realty</h6>{" "}
                                    <p>ISNAPUR, Hyderabad</p>
                                    <p className="small-font">
                                      Under Construction
                                    </p>
                                    <p>Possession By: 23-11-2023</p>
                                  </div>
                                  <div className="list-price">
                                    <p className="small-font">Starts form</p>
                                    <h6 className="listing-card-info-price">
                                      {convertToIndianRupees(6880000)}
                                    </h6>
                                    <Link href="" className="view_detls">
                                      View Details
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="featur_prop">
                                <div>
                                  <img src="https://source.unsplash.com/1920x720/?appartment" />
                                </div>
                                <div className="listing-detail-wrapper">
                                  <div className="listing-short-detail">
                                    <h4 className="listing-name">
                                      Southpride's Vanora Abodes
                                    </h4>
                                    <h6>By: Southpride Realty</h6>{" "}
                                    <p>ISNAPUR, Hyderabad</p>
                                    <p className="small-font">
                                      Under Construction
                                    </p>
                                    <p>Possession By: 23-11-2023</p>
                                  </div>
                                  <div className="list-price">
                                    <p className="small-font">Starts form</p>
                                    <h6 className="listing-card-info-price">
                                      {convertToIndianRupees(6880000)}
                                    </h6>
                                    <Link href="" className="view_detls">
                                      View Details
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="featur_prop">
                                <div>
                                  <img src="https://source.unsplash.com/1920x720/?offices" />
                                </div>
                                <div className="listing-detail-wrapper">
                                  <div className="listing-short-detail">
                                    <h4 className="listing-name">
                                      Southpride's Vanora Abodes
                                    </h4>
                                    <h6>By: Southpride Realty</h6>{" "}
                                    <p>ISNAPUR, Hyderabad</p>
                                    <p className="small-font">
                                      Under Construction
                                    </p>
                                    <p>Possession By: 23-11-2023</p>
                                  </div>
                                  <div className="list-price">
                                    <p className="small-font">Starts form</p>
                                    <h6 className="listing-card-info-price">
                                      {convertToIndianRupees(6880000)}
                                    </h6>
                                    <Link href="" className="view_detls">
                                      View Details
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="featur_prop">
                                <div>
                                  <img src="https://source.unsplash.com/1920x720/?farmhouse" />
                                </div>
                                <div className="listing-detail-wrapper">
                                  <div className="listing-short-detail">
                                    <h4 className="listing-name">
                                      Southpride's Vanora Abodes
                                    </h4>
                                    <h6>By: Southpride Realty</h6>{" "}
                                    <p>ISNAPUR, Hyderabad</p>
                                    <p className="small-font">
                                      Under Construction
                                    </p>
                                    <p>Possession By: 23-11-2023</p>
                                  </div>
                                  <div className="list-price">
                                    <p className="small-font">Starts form</p>
                                    <h6 className="listing-card-info-price">
                                      {convertToIndianRupees(6880000)}
                                    </h6>
                                    <Link href="" className="view_detls">
                                      View Details
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="featur_prop">
                                <div>
                                  <img src="https://source.unsplash.com/1920x720/?villa" />
                                </div>
                                <div className="listing-detail-wrapper">
                                  <div className="listing-short-detail">
                                    <h4 className="listing-name">
                                      Southpride's Vanora Abodes
                                    </h4>
                                    <h6>By: Southpride Realty</h6>{" "}
                                    <p>ISNAPUR, Hyderabad</p>
                                    <p className="small-font">
                                      Under Construction
                                    </p>
                                    <p>Possession By: 23-11-2023</p>
                                  </div>
                                  <div className="list-price">
                                    <p className="small-font">Starts form</p>
                                    <h6 className="listing-card-info-price">
                                      {convertToIndianRupees(6880000)}
                                    </h6>
                                    <Link href="" className="view_detls">
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
                  </div>
                </div>
              </div>
              {/* <div className="">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="property-single-content" id="bankln-id">
                    <h4>Approved Bank Loans</h4>
                    <div className="box_ot"> </div>
                    <div className="property-single-description">
                      <div className="row mt-3 align-items-center">
                        {banks.map((bank) => (
                          <div className="col-md-2 text-left lon-img">
                            <img
                              src={bank.logo}
                              className="d-block w-100"
                              width={400}
                              height={100}
                              alt="thumbnail"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="property-single-content loan-bx-shadow">
                    <div className="prpty_loan lon_txt">
                      <h3>Need A Home Loan, Right? Get Pre-Approval.</h3>
                      <div className="d-flex">
                        <button>Get Pre Approved Now</button>
                        <button>EMI Caluculator</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8"></div>
                <div className={`col-md-4 ${!openForm ? "toggleClass" : ""}`}>
                </div>
              </div>

              <div className="property-single-content" id="vidoe-id">
                <div className="property-single-description video-bg-img">
                  <div className="video-contentt">
                    <div className="row align-items-center">
                      <div className="col-md-8">
                        <div className="metCap_ot text-center">
                          <h2>
                            Would you like to explore the model house
                            <br></br> through an immersive experience{" "}
                          </h2>
                          <button>Explore</button>
                          <h2>
                            Right now, we'd love to meet you in Metaverse
                            <br></br> at our office
                          </h2>
                          <button className="mb-0">join us</button>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="benifts_out">
                          <ul>
                            <li>
                              Unlock the Metaverse: Explore your dream property
                              in a New Dimension.
                            </li>
                            <li className="color-blue-pattern">
                              "Immerse Yourself: Navigate your property Beyond
                              Boundaries."
                            </li>
                            <li>
                              Explore model houses in Virtual and immersive
                              Environment.
                            </li>
                            <li className="color-blue-pattern">
                              Engage in face-to-face Virtual meetings with
                              builders
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="location-area pb-20 pt-50">
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-6 mx-auto wow fadeInDown"
                  data-wow-duration="1s"
                  data-wow-delay=".25s"
                >
                  <div className="site-heading text-center">
                    <h2 className="site-title">Recently Viewed</h2>
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
                          <h6>By: Southpride Realty</h6>{" "}
                          <p>ISNAPUR, Hyderabad</p>
                          <p className="small-font">Under Construction</p>
                          <p>Possession By: 23-11-2023</p>
                        </div>
                        <div className="list-price">
                          <p className="small-font">Starts form</p>
                          <h6 className="listing-card-info-price">
                            {convertToIndianRupees(6880000)}
                          </h6>
                          <Link href="" className="view_detls">
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="featur_prop">
                      <div>
                        <img
                          src="https://source.unsplash.com/1920x720/?villa"
                          loading="lazy"
                        />
                      </div>
                      <div className="listing-detail-wrapper">
                        <div className="listing-short-detail">
                          <h4 className="listing-name">
                            Southpride's Vanora Abodes
                          </h4>
                          <h6>By: Southpride Realty</h6>{" "}
                          <p>ISNAPUR, Hyderabad</p>
                          <p className="small-font">Under Construction</p>
                          <p>Possession By: 23-11-2023</p>
                        </div>
                        <div className="list-price">
                          <p className="small-font">Starts form</p>
                          <h6 className="listing-card-info-price">
                            {convertToIndianRupees(6880000)}
                          </h6>
                          <Link href="" className="view_detls">
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
                          <h6>By: Southpride Realty</h6>{" "}
                          <p>ISNAPUR, Hyderabad</p>
                          <p className="small-font">Under Construction</p>
                          <p>Possession By: 23-11-2023</p>
                        </div>
                        <div className="list-price">
                          <p className="small-font">Starts form</p>
                          <h6 className="listing-card-info-price">
                            {convertToIndianRupees(6880000)}
                          </h6>
                          <Link href="" className="view_detls">
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
                          <h6>By: Southpride Realty</h6>{" "}
                          <p>ISNAPUR, Hyderabad</p>
                          <p className="small-font">Under Construction</p>
                          <p>Possession By: 23-11-2023</p>
                        </div>
                        <div className="list-price">
                          <p className="small-font">Starts form</p>
                          <h6 className="listing-card-info-price">
                            {convertToIndianRupees(6880000)}
                          </h6>
                          <Link href="" className="view_detls">
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="featur_prop">
                      <div>
                        <img src="https://source.unsplash.com/1920x720/?appartment" />
                      </div>
                      <div className="listing-detail-wrapper">
                        <div className="listing-short-detail">
                          <h4 className="listing-name">
                            Southpride's Vanora Abodes
                          </h4>
                          <h6>By: Southpride Realty</h6>{" "}
                          <p>ISNAPUR, Hyderabad</p>
                          <p className="small-font">Under Construction</p>
                          <p>Possession By: 23-11-2023</p>
                        </div>
                        <div className="list-price">
                          <p className="small-font">Starts form</p>
                          <h6 className="listing-card-info-price">
                            {convertToIndianRupees(6880000)}
                          </h6>
                          <Link href="" className="view_detls">
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="featur_prop">
                      <div>
                        <img src="https://source.unsplash.com/1920x720/?offices" />
                      </div>
                      <div className="listing-detail-wrapper">
                        <div className="listing-short-detail">
                          <h4 className="listing-name">
                            Southpride's Vanora Abodes
                          </h4>
                          <h6>By: Southpride Realty</h6>{" "}
                          <p>ISNAPUR, Hyderabad</p>
                          <p className="small-font">Under Construction</p>
                          <p>Possession By: 23-11-2023</p>
                        </div>
                        <div className="list-price">
                          <p className="small-font">Starts form</p>
                          <h6 className="listing-card-info-price">
                            {convertToIndianRupees(6880000)}
                          </h6>
                          <Link href="" className="view_detls">
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="featur_prop">
                      <div>
                        <img src="https://source.unsplash.com/1920x720/?farmhouse" />
                      </div>
                      <div className="listing-detail-wrapper">
                        <div className="listing-short-detail">
                          <h4 className="listing-name">
                            Southpride's Vanora Abodes
                          </h4>
                          <h6>By: Southpride Realty</h6>{" "}
                          <p>ISNAPUR, Hyderabad</p>
                          <p className="small-font">Under Construction</p>
                          <p>Possession By: 23-11-2023</p>
                        </div>
                        <div className="list-price">
                          <p className="small-font">Starts form</p>
                          <h6 className="listing-card-info-price">
                            {convertToIndianRupees(6880000)}
                          </h6>
                          <Link href="" className="view_detls">
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="featur_prop">
                      <div>
                        <img src="https://source.unsplash.com/1920x720/?villa" />
                      </div>
                      <div className="listing-detail-wrapper">
                        <div className="listing-short-detail">
                          <h4 className="listing-name">
                            Southpride's Vanora Abodes
                          </h4>
                          <h6>By: Southpride Realty</h6>{" "}
                          <p>ISNAPUR, Hyderabad</p>
                          <p className="small-font">Under Construction</p>
                          <p>Possession By: 23-11-2023</p>
                        </div>
                        <div className="list-price">
                          <p className="small-font">Starts form</p>
                          <h6 className="listing-card-info-price">
                            {convertToIndianRupees(6880000)}
                          </h6>
                          <Link href="" className="view_detls">
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div> */}
            </main>
          )}
          {/* {open && <ImageDialog open={open} handleClose={handleClose} src={src} />}
      {openUnitImage && (
        <ImageDialog
          open={openUnitImage}
          handleClose={handleCloseUnitImage}
          src={src}
        />
      )} */}
          {/* {openForm && (
              <FormDialog open={openForm} handleClose={handleCloseForm} />
          )} */}
          {/* {openUnitPrice && (
        <UnitSizePrice
          open={openUnitPrice}
          each={singleUnitPriceData}
          handleClose={handleCloseUnitPrice}
        />
      )} */}
        </>
      </main>
    </>
  );
};

export default villapage;
