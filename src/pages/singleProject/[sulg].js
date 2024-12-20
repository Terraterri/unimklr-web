"use-strict";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoLocationSharp } from "react-icons/io5";
import { FiArrowDownCircle } from "react-icons/fi";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { getAllProjects } from "@/components/endPoints/projectEndpoints";
import Specific_Tab from "@/components/libs/specification_tab";
import ContactTabs from "@/components/libs/contact";  
import { useContext, useEffect, useState } from "react";

import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox } from "lightbox.js-react";
import {
  getAmenitiesByProjectId,
  getApporvedBanksByProjectId,
  getProjectById,
  getSpecialFeaturesByProjectId,
  getUnitGalleryByProjectId,
  getUnitSizesByProjectId,
  getGalleryImages,
  getSpecifications,
  getFurnishing,
} from "@/components/endPoints/projectEndpoints";
import { MastersContext, ProjectContext } from "../_app";
import { useRouter } from "next/router";
import { DNAComponent } from "@/components/loader/Loader";
import UnitGalleryTab from "@/components/libs/tab";
import ImageDialog from "@/components/reusable/imageDialog";
import { convertToIndianRupees } from "@/components/libs/higherOderFN";
import UnitSizePrice from "@/components/libs/unitSizePrice";

import Modal from "react-bootstrap/Modal";
import GoogleMapsSingleProperty from "@/components/googleMaps/singlePropMap";

import { UserContext, useUser } from "@/context/UserContext";

// BsPatchCheckFill
export default function PropertySingle() {
  const { user, setUser } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [zoomData, setZoomData] = useState({});
  const [params, setParams] = useState({});
  const [loading, setLoading] = useState(false);
  const [projectsList, setProjectsList] = useState([]);

  const [scrollEle, setScrollEle] = useState("");
  const [isActive, setIsActive] = useState(false);
  function isYouTubeUrl(url) {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
    return youtubeRegex.test(url);
  }

  // const scrollToElement = (id) => {
  //   setScrollEle(id);
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  // const scrollToElement = (id) => {
  //   setScrollEle(id);
  // };
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -180; // Adjust the offset value as needed
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }

    // Toggle the active state
    setIsActive((prevState) => !prevState);
  };

  const images = [
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      width: 320,
      height: 174,
      isSelected: true,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      width: 320,
      height: 212,
      tags: [
        { value: "Ocean", title: "Ocean" },
        { value: "People", title: "People" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      width: 320,
      height: 212,
    },
  ];

  const featureProperties = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
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



  const [fix, setFix] = useState(false);
  const { projects, setProjects } = useContext(ProjectContext);
  const { masters } = useContext(MastersContext);
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const router = useRouter();
  const { sulg } = router.query;
  const [unitSizes, setUnitSizes] = useState([]);
  const [amenities, setAmenities] = useState({});
  const [specialFeatures, setSpecialFeatures] = useState({});
  const [unitGallery, setUnitGallery] = useState({});
  const [Furnish, setFurnished] = useState({});
  const [Furnished, setFurnishdata] = useState({});
  const [banks, setBanks] = useState([]);
  const [projectImages, setProjectImages] = useState([]);
  const [open, setOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [src, setSrc] = useState("");
  const [type, setType] = useState("hospital");
  const [openUnitImage, setOpenUnitImage] = useState(false);
  const [openUnitPrice, setOpenUnitPrice] = useState(false);

  const [singleUnitPriceData, setSingleUnitPriceData] = useState({});
  const [projectAnalyzeData, setProjectAnalyzeData] = useState({});
  const [specationData, setspecationData] = useState({});

  const handleOpenUnitImage = (img_url) => {
    setOpenUnitImage(true);
    setSrc(img_url);
  };

  const toggleForm = () => {
    setOpenForm(!openForm);
  };

  const handleCloseUnitImage = () => {
    setOpenUnitImage(false);
  };

  const handleOpenUnitPrice = (unit_price) => {
    setOpenUnitPrice(true);
    setSingleUnitPriceData(unit_price);
  };

  const handleCloseUnitPrice = () => {
    setOpenUnitPrice(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
  };

  const handleOpen = (url) => {
    setSrc(url);
    setOpen(true);
  };
  const handleOpenDialog = () => {
    setOpenForm(true);
  };

  function setFixedsidebar() {
    if (window.scrollY >= 1200) {
      setFix(true);
    } else setFix(false);
  }

  const updateDimensions = (e) => {
    setWidth(window.innerWidth);
    setHeight(window.scrollY);
  };
  useEffect(() => {
    updateDimensions();
    setTimeout(() => {
      setOpenForm(true);
    }, 10000);
    window.addEventListener("scroll", updateDimensions);
    return () => window.removeEventListener("scroll", updateDimensions);
    // if (typeof (window != undefined)) {
    //     window.addEventListener("scroll", setFixedsidebar);
    // }
  }, []);

  const getUnitSizes = async (id) => {
    try {
      const response = await getUnitSizesByProjectId(id);
      if (response?.status) {
        setUnitSizes(response?.data);
        console.log("ressss", response?.data);
        if (response?.data.length > 0) {
          getMinMax(response?.data);
        }
      } else {
        console.log("error in unitsizes=======", response?.error);
      }
      setIsLoading(false);
    } catch (error) {
      console.log("error in unitsizes===", error);
    }
    setIsLoading(false);
  };

  const getprojectdetails = async (id) => {
    try {
      const response = await getGalleryImages(id);
      if (response?.status) {
        setProjectImages(response?.data);
      } else {
        console.log("error in unitsizes=======", response?.error);
      }
      setIsLoading(false);
    } catch (error) {
      console.log("error in unitsizes===", error);
    }
  };

  const getSpecificationsdata = async (id) => {
    try {
      const response = await getSpecifications(id);
      if (response?.data) {
        setspecationData(response?.data);
        console.log("s data =========", response?.data);
      } else {
        console.log("", response?.error);
      }
      setIsLoading(false);
    } catch (error) {
      console.log("error in unitsizes===", error);
    }
  };

  const getMinMax = (arr) => {
    // const items = arr.map((each) => {
    //   return each.base_price;
    // });
    const items = arr.map((each) => {
      return each.total_base_price;
    });

    const min = items.reduce((acc, val) => {
      return acc < val ? acc : val;
    });
    // const max = items.reduce((acc, val) => {
    //   return acc > val ? acc : val;
    // });
    setProjectAnalyzeData({ min });
  };

  const getAmenities = async (id) => {
    try {
      const response = await getAmenitiesByProjectId(id);
      if (response?.status) {
        setAmenities(response?.data);
      } else {
        console.log("error in unitsizes=======", response?.error);
      }
      setIsLoading(false);
    } catch (error) {
      console.log("error in unitsizes===", error);
    }
    setIsLoading(false);
  };

  const getSpecialFeatures = async (id) => {
    try {
      const response = await getSpecialFeaturesByProjectId(id);
      if (response?.status) {
        setSpecialFeatures(response?.data);
      } else {
        console.log("error in unitsizes=======", response?.error);
      }
      setIsLoading(false);
    } catch (error) {
      console.log("error in unitsizes===", error);
    }
    setIsLoading(false);
  };

  const getFurnishingdata = async (id) => {
    try {
      const response = await getFurnishing(id);
      if (response?.status) {
        const furnished = JSON.parse(response?.data[0]?.furnished);
        setFurnished(furnished);
        const furnishedData = JSON.parse(response?.data[0]?.feature_names);
        setFurnishdata(furnishedData);
      } else {
        console.log("error in unitsizes=======", response?.error);
      }
      setIsLoading(false);
    } catch (error) {
      console.log("error in unitsizes===", error);
    }
    setIsLoading(false);
  };

  const getUnitGalleries = async (id) => {
    try {
      const response = await getUnitGalleryByProjectId(id);
      if (response?.status) {
        setUnitGallery(response?.data);
      } else {
        console.log("error in unitsizes=======", response?.error);
      }
      setIsLoading(false);
    } catch (error) {
      console.log("error in unitsizes===", error);
    }
    setIsLoading(false);
  };

  const getApprovedBanks = async (id) => {
    try {
      const response = await getApporvedBanksByProjectId(id);
      if (response?.status) {
        setBanks(response?.data);
      } else {
        console.log("error in unitsizes=======", response?.error);
      }
      setIsLoading(false);
    } catch (error) {
      console.log("error in unitsizes===", error);
      setIsLoading(false);
    }
  };

  const getProperty = async (id) => {
    const apiResponse = await getProjectById(id);
    if (apiResponse?.status) {
      if (apiResponse?.data.length > 0) {
        const data = apiResponse?.data[0];
        data.loc = { lat: 17.3519681, lng: 78.366936 };
        setProject(data);
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    console.log("orviw-id=", sulg);
    if (sulg != undefined) {
      getProperty(sulg);
      getUnitSizes(sulg);
      getAmenities(sulg);
      getSpecialFeatures(sulg);
      getUnitGalleries(sulg);
      getApprovedBanks(sulg);
      getprojectdetails(sulg);
      getSpecificationsdata(sulg);
      getFurnishingdata(sulg);
    }
  }, [sulg]);

  const getProjects = async () => {
    setLoading(true);
    let query = localStorage.getItem("query");
    if (Object.keys(params) !== "" && Object.keys(params).length !== 0) {
      const queryString = Object.keys(params)
        .filter((key) => params[key] !== undefined && params[key] !== null)
        .map((key) => `${key}=${encodeURIComponent(params[key])}`)
        .join("&");
      query = queryString;
    }
    try {
      if (query !== "") {
        const response = await getAllProjects(`/?${query}`);
        if (response?.status) {
          const data = response?.data.filter((project) => project.id != sulg);
          setProjectsList(data);
        } else {
          setProjectsList([]);
        }
      }
    } catch (error) {
      console.log("error");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    async function initialize() {
      await getProjects();
      setLoading(false);
    }
    initialize();
  }, []);

  useEffect(() => {
    getProjects();
  }, [params]);

  return (
    <>
      {isLoading && <DNAComponent />}
      {project == null && !isLoading && <h1>Project Not Found</h1>}
      {project != null && !isLoading && (
        <main className="main">
          <div className="property-single py-120">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 mb-0">
                  <div className="property-single-wrapper">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="row">
                          <div className="col-md-10">
                            <Carousel
                              responsive={featureProperties1}
                              infinite={true}
                              autoPlay={true}
                              autoPlaySpeed={3000}
                            >
                              {projectImages?.map((img) => (
                                <div className="slider-gallery d-flex justify-content-center">
                                  <img src={img.image_url} loading="lazy" />
                                </div>
                              ))}
                            </Carousel>
                          </div>
                          <div className="col-md-2">
                            <ul className="gallery-thumb no-scroll row">
                              {projectImages?.map((img) => (
                                <li>
                                  <img src={img.image_url} loading="lazy" />
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="property-single-meta">
                          <div className="property-single-meta-left">
<div className="row">
<div className="col-md-4">
  <div className="size_rnge">
  <h4>{project?.project_name}</h4>

<p className="mb-0">
  <IoLocationSharp /> {project?.locality} ,{" "}
  {project?.sub_locality} , {project?.city_name}
</p>

<p className="buldr_name">
  By : <span>{project?.builder_name}</span>
</p>
  </div>
</div>
<div className="col-md-4">
  <div className="size_rnge">
  <p className="price_name">
                              {project?.listing_type_id == 1 ? (
                                <label className="starts_cls">
                                  Price Starts From
                                </label>
                              ) : (
                                <label className="starts_cls">Price</label>
                              )}
                              <b>
                                {convertToIndianRupees(projectAnalyzeData?.min)}
                              </b>{" "}
                            </p>
                            <p className="rng_ott">
                              {project.listing_type_id == 1 ? (

                                <>
                                  <span className="starts_clss">
                                    Size Ranges
                                  </span>{" "}
                                  <span>
                                    {project?.property_min_size} -{" "}
                                    {project?.property_max_size}{" "}
                                    <small className="sml_out">
                                      {" "}
                                      {project?.sizeRepresentation}
                                    </small>
                                  </span>

                                </>
                              ) : (
                                <>
                                  <span className="starts_clss">Size</span>
                                  <span>
                                    {project?.super_built_up_area}
                                    <small className="sml_out">
                                      {" "}
                                      {project?.sizeRepresentation}
                                    </small>
                                  </span>
                                </>
                              )}
                            </p>
  </div>
</div>

<div className="col-md-4">
<div className="card p-0">
                              <p className="d-flex">
                                <span>{project?.possession_status} </span>{" "}
                                <span>{project?.possession_by}</span>
                              </p>

                              <p className="d-flex">
                                <span>Posted on :</span>{" "}
                                <span>{project?.posted_on}</span>
                              </p>
                              <p className="d-flex">
                                <span>Property Id :</span>{" "}
                                <span>{project?.propertyId}</span>
                              </p>
                            </div>
</div>

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
                  height <= 500
                    ? "property-anchor-nav fixed-sidebar"
                    : "property-anchor-nav fixed-sidebar tab_sectnew"
                }
              >
                <div className="container">
       
                      <div className="d-flex tab_sect row">
                        <a  onClick={() => scrollToElement("target-id")}
        className={isActive ? "active" : ""}>
        
                          <div className="tab">Overview</div>
                        </a>
                        <a onClick={() => scrollToElement("loact-id")}
        className={isActive ? "active" : ""}     >
                          <div className="tab">Location</div>
                        </a>
                        <a onClick={() => scrollToElement("aprvd-id")}>
                          <div className="tab">Approvals</div>
                        </a>
                        <a onClick={() => scrollToElement("projdet-id")}>
                          <div className="tab">Project Details</div>
                        </a>
                        <a onClick={() => scrollToElement("propty-id")}>
                          <div className="tab">Unit Sizes and Pricing</div>
                        </a>
                        {/* <a onClick={() => scrollToElement("pric-id")}>
                          <div className="tab">Pricing</div>
                        </a> */}
                        <a onClick={() => scrollToElement("specif-id")}>
                          <div className="tab">Specifications</div>
                        </a>
                        <a onClick={() => scrollToElement("ament-id")}>
                          <div className="tab">Amenities</div>
                        </a>
                        <a onClick={() => scrollToElement("bankln-id")}>
                          <div className="tab">Bank Approval</div>
                        </a>
                        <a onClick={() => scrollToElement("galery-id")}>
                          <div className="tab">Gallery</div>
                        </a>
                      </div>
             
                </div>
              </div>
              <div className="container">
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
                <div className="row rigth_frm mt-2">
                  <div className="col-md-8">
                    <div
                      className={
                        scrollEle === "target-id"
                          ? "property-single-content scroll_class"
                          : "property-single-content"
                      }
                      id="target-id"
                    >
                      <h4>Overview</h4>
                      <div className="property-single-description ">
                        <div className="block-body">
                          <div className="prt-detail-title-desc row">
                            <div className="col-md-3">
                              <span className="small-font">Project Name</span>
                              <p className="d-inline">
                                {project?.project_name}
                              </p>
                            </div>
                            <div className="col-md-3">
                              <span className="small-font">Property Type</span>
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
                              <span className="small-font">Community Type</span>
                              <p className="d-inline">
                                {" "}
                                {project?.community_type}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={
                        scrollEle === "aprvd-id"
                          ? "property-single-content scroll_class"
                          : "property-single-content"
                      }
                      id="aprvd-id"
                    >
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
                              {project?.approval_year != null && (
                                <p className="d-inline">
                                  {project?.approval_year
                                    ?.split("-")
                                    ?.join("-")}
                                </p>
                              )}
                            </div>
                            <div className="col-md-3">
                              <span className="small-font">
                                Approval Document:
                              </span>
                              <p
                                className="d-inline colr-blu activeText"
                                onClick={() => {
                                  handleOpen(project.approval_document_path);
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
                              <p className="d-inline">
                                {project?.real_estate_authority}
                              </p>
                            </div>
                            <div className="col-md-3">
                              <span className="small-font">
                                Real Estate Number:
                              </span>
                              <p className="d-inline">
                                {project?.real_estate_approval_number}
                              </p>
                            </div>
                            {project?.real_estate_approval_year != null && (
                              <div className="col-md-3">
                                <span className="small-font">
                                  Year of Approval:
                                </span>
                                <p className="d-inline ">
                                  {project?.real_estate_approval_year
                                    .split("-")

                                    .join("-")}
                                </p>
                              </div>
                            )}
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

                    <div className="property-single-content" id="projdet-id">
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
                            {(project.property_sub_type == "Apartment" ||
                              project.property_sub_type == "Retail Mall") && (
                              <li className="col-md-3">
                                <span>Num Of Blocks</span>
                                <br></br>{" "}
                                <span className="lnd_ot">
                                  {project?.totalNumberOfBlocks}
                                </span>
                              </li>
                            )}
                            {(project.property_sub_type == "Apartment" ||
                              project.property_sub_type == "Retail Mall") && (
                              <li className="col-md-3">
                                <span>Num Of Floors/Block</span>
                                <br></br>
                                <span className="lnd_ot">
                                  {project?.numberOfFloorsBlocks}
                                </span>
                              </li>
                            )}
                            {(project.property_sub_type == "Apartment" ||
                              project.property_sub_type == "Retail Mall") && (
                              <li className="col-md-3">
                                <span>Total Num Of Units</span>
                                <span className="lnd_ot">
                                  {Object.keys(unitSizes).length}
                                </span>
                              </li>
                            )}

                            {/* {(project.property_sub_type == "Apartment" ||
                              project.property_sub_type == "Retail Mall") && (
                              <li className="col-md-3">
                                <span>Total Num Of Units</span>
                                <span className="lnd_ot">
                                  {Object.keys(unitSizes).length}
                                </span>
                              </li>
                            )} */}

                            {project.property_sub_type == "Villa" && (
                              <li className="col-md-3">
                                <span>Total Num Of Villas</span>
                                <span className="lnd_ot">
                                  {Object.keys(unitSizes).length}
                                </span>
                              </li>
                            )}
                          </ul>
                          <div className="project_details__layout_img">
                            <div className="layot_img row justify-content-center">
                              <div className="col-md-6">
                                <h6 className="mb-2">Project Layout Plan</h6>

                                <div className="plan_ot">
                                  <button
                                    class="lists_outt"
                                    onClick={() => setShow(true)}
                                    href="#"
                                    role="button"
                                  >
                                    <img
                                      src={project.project_layout_document_path}
                                      className="d-block w-100"
                                      width={400}
                                      height={100}
                                      alt="thumbnail"
                                      loading="lazy"
                                    />
                                  </button>

                                  <Modal
                                    show={show}
                                    onHide={() => setShow(false)}
                                    className="listings_popup services_sub"
                                  >
                                    <Modal.Header closeButton></Modal.Header>

                                    <img
                                      src={project.project_layout_document_path}
                                      className="d-block w-100"
                                      width={400}
                                      height={100}
                                      alt="thumbnail"
                                      loading="lazy"
                                    />
                                  </Modal>
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
                      <h4>Unit Sizes and Pricing</h4>
                      <div className="property-single-description">
                        <div className="table_out">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>S.No</th>
                                <th>BHK</th>
                                {project.property_sub_type == "Villa" && (
                                  <th>Villa Type</th>
                                )}
                                {project.property_sub_type == "Villa" && (
                                  <th>Plot Size</th>
                                )}
                                <th>Built Up Size</th>
                                <th>Facing</th>
                                <th>Floorplan</th>
                                <th>Price</th>
                              </tr>
                            </thead>
                            <tbody>
                              {unitSizes.map((unit, index) => (
                                <tr>
                                  <td>{index + 1}</td>
                                  <td>{unit.bhk_name}</td>
                                  {project.property_sub_type == "Villa" && (
                                    <td>{unit.villatype}</td>
                                  )}
                                  {project.property_sub_type == "Villa" && (
                                    <td>{unit.plot_size}</td>
                                  )}
                                  <td>{unit.super_built_up_area}</td>
                                  <td>{unit.property_facing}</td>
                                  <td
                                    className="colr-blu text-underline activeText"
                                    onClick={() => {
                                      handleOpenUnitImage(unit.floor_plan);
                                    }}
                                  >
                                    View
                                  </td>
                                  <td
                                    className="colr-blu activeText"
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
                        </div>
                      </div>
                    </div>

                    <div className="property-single-content" id="loact-id">
                      <h4>Location & Explore neighbourhood</h4>
                      <div className="property-single-description">
                        <div className="GoogleMaps">
                          {type == "hospital" && (
                            <GoogleMapsSingleProperty
                              projectId={sulg}
                              radius={5000}
                              type={type}
                              findNBLoc={project?.loc}
                              height={450}
                              setZoomData={setZoomData}
                              singleProp={true}
                            />
                          )}
                          {type == "school" && (
                            <GoogleMapsSingleProperty
                              projectId={sulg}
                              radius={5000}
                              type={type}
                              findNBLoc={project?.loc}
                              height={450}
                              setZoomData={setZoomData}
                              singleProp={true}
                            />
                          )}
                          {type == "restaurant" && (
                            <GoogleMapsSingleProperty
                              projectId={sulg}
                              radius={5000}
                              type={type}
                              findNBLoc={project?.loc}
                              height={450}
                              setZoomData={setZoomData}
                              singleProp={true}
                            />
                          )}
                          {type == "bank" && (
                            <GoogleMapsSingleProperty
                              projectId={sulg}
                              radius={5000}
                              type={type}
                              findNBLoc={project?.loc}
                              height={450}
                              setZoomData={setZoomData}
                              singleProp={true}
                            />
                          )}
                          {type == "park" && (
                            <GoogleMapsSingleProperty
                              projectId={sulg}
                              radius={5000}
                              type={type}
                              findNBLoc={project?.loc}
                              height={450}
                              setZoomData={setZoomData}
                              singleProp={true}
                            />
                          )}
                          {type == "airport" && (
                            <GoogleMapsSingleProperty
                              projectId={sulg}
                              radius={35000}
                              type={type}
                              findNBLoc={project?.loc}
                              height={450}
                              setZoomData={setZoomData}
                              singleProp={true}
                            />
                          )}
                          {type == "train_station" && (
                            <GoogleMapsSingleProperty
                              projectId={sulg}
                              radius={25000}
                              type={type}
                              findNBLoc={project?.loc}
                              height={450}
                              setZoomData={setZoomData}
                              singleProp={true}
                            />
                          )}
                        </div>
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
                    </div>

                    <div className="property-single-content" id="spl-id">
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
                    </div>

                    <div className="property-single-content" id="posses-id">
                      <div className="row">
                        <div className="col-md-12">
                          <h4>Possession Status</h4>
                        </div>
                      </div>

                      <div className="property-single-description">
                        <div className="row">
                          <div className="col-md-4">
                            <h5 className="mb-1">Status</h5>

                            <ul class="special_featrs">
                              <li>{project.possession_status}</li>
                            </ul>
                          </div>

                          {project?.possession_by && (
                            <div className="col-md-4">
                              <h5>Possession By</h5>
                              <ul class="special_featrs">
                                <li>
                                  {project?.possession_by
                                    .split("-")
                                    .reverse()
                                    .join("-")}
                                </li>
                              </ul>
                            </div>
                          )}

                          {project.age_of_possession &&
                            project.possession_status === "Ready to Move" && (
                              <div className="col-md-4">
                                <h5>Age of Property</h5>
                                <ul class="special_featrs">
                                  <li>
                                    {project.age_of_possession
                                      .split("-")
                                      .reverse()
                                      .join("-")}
                                  </li>
                                </ul>
                              </div>
                            )}
                        </div>
                      </div>
                    </div>

                    {project?.furnished_status === "Furnished" && (
                      <div className="property-single-content" id="furni-id">
                        <h4>Furnishing Status</h4>
                        <div className="property-single-description">
                          <div className="roww mb-4">
                            <h5>Furnished</h5>
                            <ul className="special_featrs">
                              {Furnish.map((fur, index) => (
                                <li key={index}>{fur.furnished}</li>
                              ))}
                            </ul>

                            <ul className="special_featrs">
                              {Furnished.map((Fursh, index) => (
                                <li key={index}>
                                  {Fursh.item.name} {Fursh.item.value}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    <div
                      className="property-single-content aminits_lne"
                      id="ament-id"
                    >
                      <h4>Amenities</h4>
                      <div className="property-single-description">
                        <div className="row">
                          {Object.keys(amenities).length > 0 &&
                            Object.keys(amenities).map((eminityName) => (
                              <>
                                <div className="col-md-6">
                                  <h5>{eminityName}</h5>
                                  <div className="row">
                                    <ul className="special_featrs">
                                      {amenities[eminityName].length > 0 &&
                                        amenities[eminityName].map(
                                          (aminityResource) => (
                                            <li>
                                              {aminityResource.aminity_name}
                                            </li>
                                          )
                                        )}
                                    </ul>
                                  </div>
                                </div>
                              </>
                            ))}
                        </div>
                      </div>
                    </div>

                    <div className="property-single-content" id="specif-id">
                      <h4>Specifications</h4>
                      <div className="property-single-description">
                        <div className="spec_tab">
                          <Specific_Tab specationData={specationData} />
                        </div>
                      </div>
                    </div>

                    <div className="property-single-content" id="water-id">
                      <h4>Water Availability</h4>
                      <div className="property-single-description ">
                        <div className="block-body">
                          <div className="prt-detail-title-desc row">
                            <div className="col-md-3">
                              <span className="small-font">Water Source</span>
                              <p className="d-inline">
                                {project?.water_source}
                              </p>
                            </div>
                            <div className="col-md-3">
                              <span className="small-font">
                                No.Of Borewells
                              </span>
                              <p className="d-inline">
                                {project?.number_of_borewells}
                              </p>
                            </div>
                            <div className="col-md-3">
                              <span className="small-font">
                                Groud Water Depth
                              </span>
                              <p className="d-inline">
                                {project?.ground_water_depth}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="property-single-content" id="galery-id">
                      <h4>Gallery</h4>
                      <div className="px-4 gallery-tab-align">
                        <SlideshowLightbox lightboxIdentifier="galleryImage">
                          {projectImages?.map((img) => (
                            <img
                              src={img.image_url}
                              data-lightboxjs="galleryImage"
                              loading="lazy"
                            />
                          ))}
                        </SlideshowLightbox>
                      </div>
                    </div>

                    <div
                      className="property-single-content"
                      id="unitgallery-id"
                    >
                      <h4>Unit Gallery</h4>
                      <div className="property-single-description">
                        <div className="singgaller mt-2">
                          <div className="d-flex">
                            <UnitGalleryTab unitGallery={unitGallery} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="property-single-content" id="brocher-id">
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

                        {isYouTubeUrl(project.video1) &&
                          isYouTubeUrl(project.video2) && (
                            <div className="col-md-8">
                              <h4>Videos</h4>
                              <div className="property-single-description">
                                <div className="video-contentt">
                                  <div className="row align-items-center">
                                    <div className="col-lg-5">
                                      <iframe
                                        width="100%"
                                        height="175"
                                        src={`${project.video1}?si=Jwnbg8WB6x7LLXKR`}
                                      ></iframe>

                                      {/* <div
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
                                    </div> */}
                                    </div>
                                    <div className="col-lg-5">
                                      <iframe
                                        width="100%"
                                        height="175"
                                        src={`${project.video2}?si=Jwnbg8WB6x7LLXKR`}
                                        allowfullscreen
                                      ></iframe>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                      </div>
                    </div>
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
                    {/* <div
                      className={
                        height <= 500 || height >= 3700
                          ? "property-anchor-nav fixed-sidebar"
                          : "property-anchor-nav fixed-sidebar tab_sectneww"
                      }
                      id="contact-id"
                    > */}
                    {/* <div
                      
                      id="contact-id"
                    >
                      <div className="cont_inform">
                        <h6 className="text-left mb-2 text-uppercase text-white">
                          Contact Builder
                        </h6>
                        <div className="buil-detal">
                          <div className="builder-logo">
                            <Image
                              src={"/assets/img/model-house.jpg"}
                              width={600}
                              height={375}
                              alt="location"
                            />
                          </div>
                          <div className="build-cnt">
                            <div className="txt_lg tex-left">
                              {project?.builder_name}
                            </div>
                            <p className="txt_loc tex-left">
                              <IoLocationSharp /> {project?.locality} ,{" "}
                              {project?.sub_locality} {project?.city_name}
                            </p>
                          </div>
                        </div>
                      </div>
                      <ContactTabs
                        builder_id={project.builder_id}
                        builderName={project.builder_name}
                        project_id={project.id}
                        city_code={project.city_code}
                      />
                      {(project.listing_type_id === 3 ||
                        project.listing_type_id === 4) && (
                        <>
                          <div className="entran_out card mt-3">
                            <h3>
                              Experience Our <span>Model House</span> <br />
                              <span class="meta_nme">in Metaverse</span>
                            </h3>
                            <button>Enter Now</button>
                          </div>
                          <div className="entran_out card mt-3">
                            <h3>
                              Step into Our <span>Office</span> <br />
                              <span class="meta_nme">in Metaverse</span>
                            </h3>
                            <button>Visit Now</button>
                          </div>
                        </>
                      )}
                    </div> */}

                    <div className="box-generic">
                    <h3>Franchise Agent</h3>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
               
                </div>
                <div className="col-md-4">
                  {/* <div className="property-single-content loan-bx-shadow">
                    <div className="prpty_loan lon_txt">
                      <div className="d-flex">
                        <button>Get Pre Approved Now</button>
                        <button>EMI Caluculator</button>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="row">
                <div className="col-md-8"></div>
                <div className={`col-md-4 ${!openForm ? "toggleClass" : ""}`}>
                  {/* <div className="fixed-form"> */}
                </div>
              </div>

              {(project.listing_type_id === 3 ||
                project.listing_type_id === 4) && (
                <div className="property-single-content" id="vidoe-id">
                  <div className="property-single-description video-bg-img">
                    <div className="video-contentt">
                      <div className="row align-items-center">
                        <div className="col-md-8">
                          <div className="metCap_ot text-left">
                            <div
                              className="meta-house mb-4"
                              style={{
                                background:
                                  "url(/assets/img/metaverse-model-bg.jpg)",
                              }}
                            >
                              <div className="row align-items-center">
                                <div className="col-md-7">
                                  <h3>
                                    Experience Our <span>Model House</span>{" "}
                                    <br></br>
                                    <span className="meta_nme">
                                      in Metaverse
                                    </span>
                                  </h3>
                                  <p className="pb-4">
                                    Experience every room, detail, from anywhere
                                    in the world. With immersive 3D technology,
                                    you can visualize your dream space, and make
                                    informed decisions—all without leaving your
                                    seat.
                                  </p>
                                  <button>Explore Model House</button>
                                </div>
                                <div className="col-md-5">
                                  <Image
                                    src={"/assets/img/model-house.jpg"}
                                    width={600}
                                    height={375}
                                    alt="location"
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              className="meta-house"
                              style={{
                                background:
                                  "url(/assets/img/metaverse-model-bg.jpg)",
                              }}
                            >
                              <div className="row align-items-center">
                                <div className="col-md-7">
                                  <h3>
                                    Step into Our <span>Office</span> <br></br>
                                    <span className="meta_nme">
                                      in Metaverse
                                    </span>
                                  </h3>
                                  <p>
                                    Connect with our team in a dynamic virtual
                                    space designed for seamless communication
                                    and collaboration. Our metaverse office
                                    offers a unique and immersive way to
                                    interact with us—no matter where you are.{" "}
                                  </p>
                                  <button>Visit Our Office</button>
                                </div>
                                <div className="col-md-5">
                                  <Image
                                    src={"/assets/img/meta-office.jpg"}
                                    width={600}
                                    height={375}
                                    alt="location"
                                  />
                                </div>
                              </div>
                            </div>
                            {/* <h2>
                                                        Right now, we'd love to
                                                        meet you in Metaverse
                                                        <br></br> at our office
                                                    </h2>
                                                    <button className="mb-0">
                                                        join us
                                                    </button> */}
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
              )}
            </div>
          </div>
          {/* <div className="location-area pb-20 pt-50">
                        <div className="container">
                            <div className="row">
                                <div
                                    className="col-lg-12 mx-auto wow fadeInDown"
                                    data-wow-duration="1s"
                                    data-wow-delay=".25s"
                                >
                                    <div className="site-heading text-left">
                                        <h2 className="site-title">
                                            Listings within This Project
                                        </h2>
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
                                                        Southpride's Vanora
                                                        Abodes
                                                    </h4>
                                                    <h6>
                                                        By: Southpride Realty
                                                    </h6>{" "}
                                                    <p>ISNAPUR, Hyderabad</p>
                                                    <p className="small-font">
                                                        Under Construction
                                                    </p>
                                                    <p>
                                                        Possession By:
                                                        23-11-2023
                                                    </p>
                                                </div>
                                                <div className="list-price">
                                                    <p className="small-font">
                                                        Starts form
                                                    </p>
                                                    <h6 className="listing-card-info-price">
                                                        {convertToIndianRupees(
                                                            6880000
                                                        )}
                                                    </h6>
                                                    <Link
                                                        href=""
                                                        className="view_detls"
                                                    >
                                                        View
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
                                                        Southpride's Vanora
                                                        Abodes
                                                    </h4>
                                                    <h6>
                                                        By: Southpride Realty
                                                    </h6>{" "}
                                                    <p>ISNAPUR, Hyderabad</p>
                                                    <p className="small-font">
                                                        Under Construction
                                                    </p>
                                                    <p>
                                                        Possession By:
                                                        23-11-2023
                                                    </p>
                                                </div>
                                                <div className="list-price">
                                                    <p className="small-font">
                                                        Starts form
                                                    </p>
                                                    <h6 className="listing-card-info-price">
                                                        {convertToIndianRupees(
                                                            6880000
                                                        )}
                                                    </h6>
                                                    <Link
                                                        href=""
                                                        className="view_detls"
                                                    >
                                                        View
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
                                                        Southpride's Vanora
                                                        Abodes
                                                    </h4>
                                                    <h6>
                                                        By: Southpride Realty
                                                    </h6>{" "}
                                                    <p>ISNAPUR, Hyderabad</p>
                                                    <p className="small-font">
                                                        Under Construction
                                                    </p>
                                                    <p>
                                                        Possession By:
                                                        23-11-2023
                                                    </p>
                                                </div>
                                                <div className="list-price">
                                                    <p className="small-font">
                                                        Starts form
                                                    </p>
                                                    <h6 className="listing-card-info-price">
                                                        {convertToIndianRupees(
                                                            6880000
                                                        )}
                                                    </h6>
                                                    <Link
                                                        href=""
                                                        className="view_detls"
                                                    >
                                                        View
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
                                                        Southpride's Vanora
                                                        Abodes
                                                    </h4>
                                                    <h6>
                                                        By: Southpride Realty
                                                    </h6>{" "}
                                                    <p>ISNAPUR, Hyderabad</p>
                                                    <p className="small-font">
                                                        Under Construction
                                                    </p>
                                                    <p>
                                                        Possession By:
                                                        23-11-2023
                                                    </p>
                                                </div>
                                                <div className="list-price">
                                                    <p className="small-font">
                                                        Starts form
                                                    </p>
                                                    <h6 className="listing-card-info-price">
                                                        {convertToIndianRupees(
                                                            6880000
                                                        )}
                                                    </h6>
                                                    <Link
                                                        href=""
                                                        className="view_detls"
                                                    >
                                                        View
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
                                                        Southpride's Vanora
                                                        Abodes
                                                    </h4>
                                                    <h6>
                                                        By: Southpride Realty
                                                    </h6>{" "}
                                                    <p>ISNAPUR, Hyderabad</p>
                                                    <p className="small-font">
                                                        Under Construction
                                                    </p>
                                                    <p>
                                                        Possession By:
                                                        23-11-2023
                                                    </p>
                                                </div>
                                                <div className="list-price">
                                                    <p className="small-font">
                                                        Starts form
                                                    </p>
                                                    <h6 className="listing-card-info-price">
                                                        {convertToIndianRupees(
                                                            6880000
                                                        )}
                                                    </h6>
                                                    <Link
                                                        href=""
                                                        className="view_detls"
                                                    >
                                                        View
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
                                                        Southpride's Vanora
                                                        Abodes
                                                    </h4>
                                                    <h6>
                                                        By: Southpride Realty
                                                    </h6>{" "}
                                                    <p>ISNAPUR, Hyderabad</p>
                                                    <p className="small-font">
                                                        Under Construction
                                                    </p>
                                                    <p>
                                                        Possession By:
                                                        23-11-2023
                                                    </p>
                                                </div>
                                                <div className="list-price">
                                                    <p className="small-font">
                                                        Starts form
                                                    </p>
                                                    <h6 className="listing-card-info-price">
                                                        {convertToIndianRupees(
                                                            6880000
                                                        )}
                                                    </h6>
                                                    <Link
                                                        href=""
                                                        className="view_detls"
                                                    >
                                                        View
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
                                                        Southpride's Vanora
                                                        Abodes
                                                    </h4>
                                                    <h6>
                                                        By: Southpride Realty
                                                    </h6>{" "}
                                                    <p>ISNAPUR, Hyderabad</p>
                                                    <p className="small-font">
                                                        Under Construction
                                                    </p>
                                                    <p>
                                                        Possession By:
                                                        23-11-2023
                                                    </p>
                                                </div>
                                                <div className="list-price">
                                                    <p className="small-font">
                                                        Starts form
                                                    </p>
                                                    <h6 className="listing-card-info-price">
                                                        {convertToIndianRupees(
                                                            6880000
                                                        )}
                                                    </h6>
                                                    <Link
                                                        href=""
                                                        className="view_detls"
                                                    >
                                                        View
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
                                                        Southpride's Vanora
                                                        Abodes
                                                    </h4>
                                                    <h6>
                                                        By: Southpride Realty
                                                    </h6>{" "}
                                                    <p>ISNAPUR, Hyderabad</p>
                                                    <p className="small-font">
                                                        Under Construction
                                                    </p>
                                                    <p>
                                                        Possession By:
                                                        23-11-2023
                                                    </p>
                                                </div>
                                                <div className="list-price">
                                                    <p className="small-font">
                                                        Starts form
                                                    </p>
                                                    <h6 className="listing-card-info-price">
                                                        {convertToIndianRupees(
                                                            6880000
                                                        )}
                                                    </h6>
                                                    <Link
                                                        href=""
                                                        className="view_detls"
                                                    >
                                                        View
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div> */}
          {/* <div className="location-area pb-20 pt-20">
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-12 mx-auto wow fadeInDown"
                  data-wow-duration="1s"
                  data-wow-delay=".25s"
                >
                  <div className="site-heading text-left">
                    <h2 className="site-title">Near By Projects</h2>
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
                    {projectsList?.map((item, index) => (
                      <div className="featur_prop">
                        <div>
                          <Image
                            src={item?.project_first_gallery_image}
                            width={600}
                            height={375}
                            alt="location"
                          />
                        </div>
                        <div className="listing-detail-wrapper">
                          <div className="listing-short-detail">
                            <h4 className="listing-name">
                              {item?.project_name}
                            </h4>
                            <h6>By: {item?.builder_name}</h6>{" "}
                            <p>
                              {item?.locality}, {item?.sub_locality},
                              {item?.city_code}
                            </p>
                            <p className="small-font">
                              {item?.possession_status}
                            </p>
                            <p>Possession By: </p>
                          </div>
                          <div className="list-price">
                            <p className="small-font">Starts form</p>
                            <h6 className="listing-card-info-price">
                              {convertToIndianRupees(item?.price)}
                            </h6>
                            <Link
                              href={`/singleProject/${item?.id}`}
                              className="view_detls"
                            >
                              View
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>
          </div> */}
        </main>
      )}
      {open && <ImageDialog open={open} handleClose={handleClose} src={src} />}
      {openUnitImage && (
        <ImageDialog
          open={openUnitImage}
          handleClose={handleCloseUnitImage}
          src={src}
        />
      )}
      {/* {openForm && (
                <FormDialog open={openForm} handleClose={handleCloseForm} />
            )} */}
      {openUnitPrice && (
        <UnitSizePrice
          open={openUnitPrice}
          each={singleUnitPriceData}
          id={sulg}
          handleClose={handleCloseUnitPrice}
        />
      )}
    </>
  );
}
