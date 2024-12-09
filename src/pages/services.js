import Link from "next/link";
import Image from "next/image";
import { BiRupee } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { GrPrevious } from "react-icons/gr";
import FilterTabs from "@/components/libs/filter-tab";
import { useContext, useEffect, useRef, useState } from "react";
import {
  getAllCities,
  getAllMastersTypes,
} from "@/components/endPoints/masterEndPoints";
import {
  getListingLocalities,
  getAllProjectCoordinates,
} from "@/components/endPoints/websiteEndpoints";
import { getAllLocalitiesByCode } from "@/components/endPoints/websiteEndpoints";
import PropertyTabs from "@/components/libs/propertyTabs";
import {
  getAllProjects,
  getAllPropertiesByProjectName,
} from "@/components/endPoints/projectEndpoints";
import { MastersContext } from "./_app";
import GoogleMaps from "@/components/googleMaps";
import { DNAComponent } from "@/components/loader/Loader";
import { useRouter } from "next/router";
import Budget from "@/components/libs/budget";
// import Postedby from "@/components/libs/postedby";
import Postedby from "@/components/libs/postedby";
import { LiaCitySolid } from "react-icons/lia";
import AutoCompleteComponent from "@/components/reusable/autoComplete";
import { SlLocationPin } from "react-icons/sl";

import Modal from "react-bootstrap/Modal";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

export default function Services({ data, totalPages, currentPage }) {
  const [show, setShow] = useState(false);

  // * pagenation variables
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(30);
  const [total, setTotal] = useState(0);

  const [isOpen, setIsOpen] = useState("");
  const [projectsList, setProjectsList] = useState([]);
  const [mastersTypes, setMastersTypes] = useState({
    propertyfacing: [],
    propertysizes: [],
    amenities: [],
    communityTypes: [],
    specialfeatures: [],
    bhksizes: [],
    farmhousetypes: [],
    villatypes: [],
    propertytype: [],
    listingtype: [],
    propertysubtype: [],
  });
  const [selectedProperties, setSelectedProperties] = useState([]);
  const [selectedSubProperties, setSelectedSubProperties] = useState("");
  const [selectedMoreFilters, setSelectedMoreFilters] = useState([]);
  const [selectedPostedBy, setSelectedPostedBy] = useState("");
  const [loading, setLoading] = useState(false);
  const { masters, setMasters } = useContext(MastersContext);
  const [type, setType] = useState("");
  const [params, setParams] = useState({});
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedLocality, setSelectedLocality] = useState("");
  const popupRef = useRef(null);
  const [allCities, setAllCities] = useState([]);
  const [allLocalities, setAllLocalities] = useState([]);
  const [zoomData, setZoomData] = useState("");
  const zoomTimeoutRef = useRef(null);
  const [propLoc, setPropLoc] = useState([
    // { latitude: 17.3519681, longitude: 78.366936 },
    // { latitude: 17.00000, longitude: 78.2131398 }
  ]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [listingData, setListingData] = useState([]);
  const [opendProject, setOpenProject] = useState({});

  const [listLocationsData, setListLocData] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  const [isSaleOrRent, setIsSaleOrRent] = useState("");
  const [city, setCity] = useState("");
  const [localityy, setLocality] = useState("");
  const [property, setProperty] = useState("");
  const [subProperty, setSubProperty] = useState("");
  const [listingType, setListingType] = useState("");
  const [searchResponse, setSearchResponse] = useState("");

  // ? property listings count

  const [agentPropertiesCount, setAPCount] = useState(0);
  const [ownerPropertiesCount, setOPCount] = useState(0);

  const [originalData, setOriginalData] = useState([]); // Preserve full data
  const [filteredCategory, setFilteredCategory] = useState(""); // Track filter state

  const allTypes = [
    "listingtype",
    "propertyfacing",
    "propertysizes",
    "amenities",
    "communityTypes",
    "specialfeatures",
    "bhksizes",
    "farmhousetypes",
    "villatypes",
    "propertytype",
    "propertysubtype",
  ];

  const parsePrice = (priceStr) => {
    if (typeof priceStr === "number") return priceStr;
    if (!priceStr) return 0;
    priceStr = priceStr.trim().toLowerCase();
    let numericValue = parseFloat(priceStr.replace(/[^\d.-]/g, ""));
    if (priceStr.includes("lacs")) {
      numericValue *= 100000;
    } else if (priceStr.includes("cr")) {
      numericValue *= 10000000;
    }
    return numericValue;
  };

  const filterProjectsByPrice = (minPrice, maxPrice) => {
    const min = parsePrice(minPrice);
    const max = parsePrice(maxPrice);

    setParams((prevParams) => ({
      ...prevParams,
      minPrice: min,
      maxPrice: max,
    }));
  };

  const router = useRouter();
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

  function toggle(type) {
    if (type === isOpen) {
      type = "";
    }
    setIsOpen(type);
    setLoading(false);
  }

  const getCities = async () => {
    const apiResponse = await getAllCities();
    if (apiResponse?.status) {
      const sortedData = apiResponse?.data?.sort((a, b) =>
        a.city_name.localeCompare(b.city_name)
      );

      setAllCities(sortedData);
      // handleUpdateNames(sortedData)
    }
  };

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
        const response = await getAllProjects(
          `/?${query}&skip=${offset}&limit=${limit}`
        );
        if (response?.status) {
          setProjectsList(response?.data);
          setTotal(response?.totalNoOfProjects);
          setSearchResponse(response?.queryMessage);
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
    if (zoomData?.length > 0) {
      const query = `?swLat=${zoomData?.[0]?.sw?.lat}&neLat=${zoomData?.[0]?.ne?.lat}&swLng=${zoomData?.[0]?.sw?.lng}&neLng=${zoomData?.[0]?.ne?.lng}`;
      getLatLongs(query);
    }
  }, [zoomData]);

  useEffect(() => {
    if (params) {
      const city_code = params.city_code;
      const locality = params.locality;
      const property_type_id = params.property_type_id;
      const property_sub_type_id = params.property_sub_type_id;
      const listing_type_id = params.listing_type_id;

      if (city_code) {
        let cityyy = allCities.find((city) => city.city_code === city_code);
        if (cityyy) {
          setCity(cityyy.city_name);
        }
      }
      if (locality) {
        setLocality(locality);
      }
      const setTile =
        subProperty + "For sale" + " in " + localityy + " " + city;
      setSearchValue(setTile);
    }
  }, [params]);

  useEffect(() => {
    const query = localStorage.getItem("query");

    if (query) {
      // Convert query string into an object
      const params = new URLSearchParams(query);

      const isSale = params.get("isSale");
      const isRent = params.get("isRent");
      const city_code = params.get("city_code");
      const locality = params.get("locality");
      const property_type_id = params.get("property_type_id");
      const property_sub_type_id = params.get("property_sub_type_id");
      const listing_type_id = params.get("listing_type_id");

      if (isSale) {
        setIsSaleOrRent("For Sale ");
      }
      if (isRent) {
        setIsSaleOrRent("For Rent");
      }
      if (city_code) {
        getLocalities(city_code);
        setParams((prev) => ({
          ...prev,
          city_code: city_code,
        }));
        let cityyy = allCities.find((city) => city.city_code === city_code);
        if (cityyy) {
          setCity(cityyy.city_name);
          setSelectedCity(cityyy.city_name);
        }
      }
      if (locality) {
        let locaityyy = allLocalities.find((loc) => loc.locality === locality);
        if (locaityyy) {
          setLocality(locaityyy.name);
        }
      }
      const setTile = subProperty + isSaleOrRent + " in " + localityy + city;

      if (subProperty && isSaleOrRent && localityy && city) {
        setSearchValue(setTile);
      }
    }
  }, []);

  const getLatLongs = async (query) => {
    const apiResponse = await getAllProjectCoordinates(query);
    setPropLoc(apiResponse.date);
  };

  useEffect(() => {
    async function initialize() {
      await getCities();
      await getProjects();
      await ListingLocalities();
      allTypes.forEach(async (master) => {
        await getListingTypes(master);
      });
      setLoading(false);
    }
    initialize();
  }, []);

  useEffect(() => {
    getProjects();
  }, [params]);

  useEffect(() => {
    getProjects();
  }, [offset, limit]);

  // Listen for route changes to the services page
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (url === "/services") {
        getProjects();
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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

  const ListingLocalities = async (city_code) => {
    let query = `/?${localStorage.getItem("query")}`;
    if (city_code !== undefined && city_code != null) {
      query = `?city_code=${city_code}&limit=10&skip=0`;
    }
    const apiResponse = await getListingLocalities(query);
    if (apiResponse?.status) {
      setListLocData(apiResponse?.data);
    }
  };

  const handleChangeCity = async (event) => {
    if (event != null) {
      await getLocalities(event.city_code);
      await ListingLocalities(event.city_code);
      setParams({
        city_code: event.city_code,
      });
      setSelectedCity(event.city_name);
    }
  };

  const handleChangeSearch = (event) => {
    setParams((prevParams) => ({
      ...prevParams,
      locality: event?.locality_name,
    }));
    setSelectedLocality(event?.locality_name);
  };

  const handleChangefooterSearch = async (city_code, locality, subtype) => {
    if ((city_code != null, locality != null, subtype != null)) {
      setSelectedCity(() => {
        const city = allCities.find((city) => city.city_code === city_code);
        return city?.city_name || "";
      });
      await getLocalities(city_code);
      setSelectedLocality(locality);
      const propType = subtype == 7 ? "Apartment" : "Villa";
      setSelectedProperties(propType);
      setParams({
        city_code: city_code,
        locality: locality,
        property_type_id: 8,
        property_sub_type_id: subtype,
      });
    }
  };

  useEffect(() => {
    if (minPrice && maxPrice) {
      const filteredProjects = filterProjectsByPrice(minPrice, maxPrice);
    }
  }, [minPrice, maxPrice]);

  const handleClose = () => setShow(false);

  const handleShow = async (project_name_id, id) => {
    const project = projectsList.find((project) => project.id === id);
    let AddedListings = [project];

    try {
      const res = await getAllPropertiesByProjectName(project_name_id);
      if (res?.status && res?.data.length > 0) {
        AddedListings = [project, ...res.data];
        console.log(AddedListings);

        const agentProperties = AddedListings.filter(
          (list) => list.created_by_type === "Agent"
        );
        setAPCount(agentProperties.length);

        const ownerProperties = AddedListings.filter(
          (list) => list.created_by_type === "Owner"
        );
        setOPCount(ownerProperties.length);
      }
    } catch (error) {
      console.error("Error fetching properties:", error);
    }

    // Preserve original data for resets
    setOriginalData([...AddedListings]);
    setOpenProject(project);
    setListingData([...AddedListings]);
    setShow(true);
  };

  const handleFilterProperties = (postedby) => {
    // Toggle between filtered and original data
    if (filteredCategory === postedby || postedby === "Builder") {
      setListingData([...originalData]); // Reset to original data
      setFilteredCategory(""); // Reset filter state
    } else {
      const filteredProperties = originalData.filter(
        (list) => list.created_by_type === postedby
      );
      setListingData(filteredProperties); // Set filtered data
      setFilteredCategory(postedby); // Track current filter
    }
  };

  const handleNext = () => {
    if (offset * 10 + limit < total) {
      setOffset(offset + 1);
    }
  };

  const handlePrevious = () => {
    if (offset > 0) {
      setOffset(offset - 1);
    }
  };

  const altDate = (date) => {
    const newDate = new Date(date);
    const formattedDate = `${String(newDate.getDate()).padStart(
      2,
      "0"
    )}-${String(newDate.getMonth() + 1).padStart(
      2,
      "0"
    )}-${newDate.getFullYear()}`;

    return formattedDate;
  };

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
        <div className="ser-main">
          <main className="main">
            {/* <div
            className="site-breadcrumb"
            style={{ background: "url(assets/img/breadcrumb/01.jpg)" }}
          ></div> */}
            {/* <div className="divider-blo"></div> */}
            <div className="hero-content text-center search-bar filter-bar">
              <div className="container">
                <div className="hero-content-wrapper">
                  {/* <h1 className="hero-title">Find Your <span>Dream</span> Home</h1> */}
                  {/* <p>Find new & featured property located in your local city</p> */}
                  <div className="search-wrapper">
                    {/* <div className="search-nav">
                      <ul
                        className="nav nav-pills mb-0 justify-content-center"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="pills-tab-2"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-2"
                            type="button"
                            role="tab"
                            aria-controls="pills-2"
                            aria-selected="false"
                          >
                            For Sale
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="pills-tab-3"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-3"
                            type="button"
                            role="tab"
                            aria-controls="pills-3"
                            aria-selected="false"
                          >
                            For Rent
                          </button>
                        </li>
                      </ul>
                    </div> */}
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="pills-1"
                        role="tabpanel"
                        aria-labelledby="pills-tab-1"
                        tabIndex={0}
                      >
                        <div className="search-form service-frm">
                          <form action="#">
                            <div className="row align-items-center">
                              <div className="col-lg-2">
                                <div className="form-group secrch-group">
                                  <LiaCitySolid className="search-field-icons" />
                                  <AutoCompleteComponent
                                    data={allCities}
                                    handleChange={handleChangeCity}
                                    keyValue={"city_name"}
                                    placeHolder={"Search For City"}
                                    value={selectedCity}
                                  />
                                </div>
                              </div>

                              <div className="col-lg-2">
                                <div className="form-group secrch-group">
                                  <SlLocationPin className="search-field-icons" />
                                  <AutoCompleteComponent
                                    data={allLocalities}
                                    handleChange={handleChangeSearch}
                                    keyValue={"locality_name"}
                                    placeHolder={"Search For Locality"}
                                    value={selectedLocality}
                                  />
                                </div>
                              </div>

                              <div className="col-lg-2">
                                <div className="form-group">
                                  <span
                                    isOpen
                                    className={`nice-select select ${
                                      isOpen === "budget" ? "clsactive" : ""
                                    }`}
                                    ref={popupRef}
                                    onClick={() => {
                                      toggle("budget");
                                    }}
                                  >
                                    Budget
                                  </span>
                                </div>
                              </div>

                              <div className="col-lg-2">
                                <div className="form-group">
                                  <span
                                    ref={popupRef}
                                    isOpen
                                    className={`nice-select select ${
                                      isOpen === "property" ? "clsactive" : ""
                                    }`}
                                    onClick={() => {
                                      toggle("property");
                                    }}
                                  >
                                    {selectedProperties.length > 0
                                      ? selectedProperties
                                      : "Property Type"}
                                  </span>
                                </div>
                              </div>
                              <div className="col-lg-2">
                                <div className="form-group">
                                  <span
                                    ref={popupRef}
                                    isOpen
                                    className={`nice-select select ${
                                      isOpen === "postedby" ? "clsactive" : ""
                                    }`}
                                    onClick={() => {
                                      toggle("postedby");
                                    }}
                                  >
                                    {selectedPostedBy != ""
                                      ? selectedPostedBy
                                      : "Posted by"}
                                  </span>
                                </div>
                              </div>
                              <div className="col-lg-2">
                                <div className="form-group">
                                  <span
                                    ref={popupRef}
                                    isOpen
                                    className={`nice-select select ${
                                      isOpen === "more" ? "clsactive" : ""
                                    }`}
                                    onClick={() => {
                                      toggle("more");
                                    }}
                                  >
                                    More
                                  </span>
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

              {isOpen == "more" && (
                <FilterTabs
                  reference={popupRef}
                  mastersTypes={mastersTypes}
                  selectedMoreFilters={selectedMoreFilters}
                  setSelectedMoreFilters={setSelectedMoreFilters}
                  setParams={setParams}
                />
              )}
              {isOpen == "property" && (
                <PropertyTabs
                  reference={popupRef}
                  mastersTypes={mastersTypes}
                  selectedProperties={selectedProperties}
                  setSelectedProperties={setSelectedProperties}
                  selectedSubProperties={selectedSubProperties}
                  setSelectedSubProperties={setSelectedSubProperties}
                  setParams={setParams}
                />
              )}
              {isOpen == "budget" && (
                <Budget
                  reference={popupRef}
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  setMinPrice={setMinPrice}
                  setMaxPrice={setMaxPrice}
                />
              )}
              {isOpen == "postedby" && (
                <Postedby
                  reference={popupRef}
                  setParams={setParams}
                  setPostedBy={setSelectedPostedBy}
                />
              )}
            </div>
            <div className="services_sub">
              <div className="container-fluid px-20">
                <div className="row pt-10 pb-20">
                  <div className="col-lg-6">
                    <div className="map_out">
                      <GoogleMaps
                        projectId={1}
                        lat={17.3519681}
                        long={78.366936}
                        propLoc={propLoc}
                        radius={1000}
                        show={false}
                        setZoomData={setZoomData}
                        // type={"school"}
                      />
                      <div className="map"></div>
                    </div>
                  </div>
                  <div className="col-lg-6 ovr_ht-scrll">
                    <div className="ovr_ht-scrl">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="d-flex align-items-center justify-content-between">
                            <h6>{searchValue}</h6>
                            <p>{total} results</p>
                          </div>
                          {searchResponse && (
                            <div className="d-flex justify-content-center mb-3 mt-3">
                              <h6>{searchResponse}</h6>
                            </div>
                          )}
                        </div>
                        {projectsList?.length &&
                          projectsList.map((item) => (
                            <div className="col-md-6" key={item?.id}>
                              <Link
                                href={`/singleProject/${item?.id}`}
                                className="list-itms"
                              >
                                <div className="listing-item">
                                  {item?.listing_type_id === 3 && (
                                    <h5 className="met_out">Meta View</h5>
                                  )}
                                  {item?.project_first_gallery_image != null ? (
                                    <div className="listing-img">
                                      <Image
                                        src={item?.project_first_gallery_image}
                                        width={450}
                                        height={300}
                                        alt="property"
                                      />
                                    </div>
                                  ) : (
                                    <div className="listing-img">
                                      <Image
                                        src={"/assets/img/property/01.jpg"}
                                        width={450}
                                        height={300}
                                        alt="property"
                                      />
                                    </div>
                                  )}

                                  <div className="listing-content">
                                    <h4 className="listing-title">
                                      {item?.project_name}
                                    </h4>
                                    <p className="ar_grp">
                                      <IoLocationSharp />
                                      {item?.locality}, {item?.sub_locality},
                                      {item?.city_code}
                                    </p>
                                    <p className=" listing-sub-title">
                                      <span>By:</span> {item?.builder_name}
                                    </p>
                                    <div className="listing-price">
                                      <div className="listing-price-info">
                                        <span className="listing-price-title by_titls">
                                          {/* Starts From */}
                                          <span className="mr-0">
                                            {item?.possession_status}
                                          </span>
                                          <span>
                                            {item?.possession_status ===
                                            "Ready to Move" ? (
                                              <>
                                                Year Built:{" "}
                                                {altDate(item?.possession_by)}
                                              </>
                                            ) : (
                                              <>
                                                Possesion By:{" "}
                                                {altDate(item?.possession_by)}
                                              </>
                                            )}
                                          </span>
                                        </span>
                                        <h6 className="listing-price-amount">
                                          <span>Starts From</span>
                                          <br></br>
                                          <BiRupee fontSize={19} />
                                          {item?.total_base_price}
                                        </h6>
                                      </div>
                                    </div>

                                    <p className="d-flex align-items-center justify-content-between"></p>

                                    <div className="listing-bottom">
                                      <div className="listing-author">
                                        <p className="ar_grp">
                                          {item?.created_by_type ===
                                            "Builder" && (
                                            <>
                                              <span>BUILDER:</span>{" "}
                                              {item?.created_name}
                                            </>
                                          )}
                                          {item?.created_by_type ===
                                            "Agent" && (
                                            <>
                                              <span>AGENT:</span>{" "}
                                              {item?.created_name}
                                            </>
                                          )}
                                          {item?.created_by_type ===
                                            "Exclusive Sales Partner" && (
                                            <>
                                              <span>EXL. AGENT:</span>{" "}
                                              {item?.created_name}
                                            </>
                                          )}
                                          {item?.created_by_type ===
                                            "Owner" && (
                                            <>
                                              <span>OWNER:</span>{" "}
                                              {item?.created_name}
                                            </>
                                          )}
                                          {(item?.created_by_type == "Admin" ||
                                            item?.created_by_type == "executive") && (
                                            <>
                                              <span>TerraTerri</span>{" "}
                                            </>
                                          )}
                                        </p>
                                      </div>
                                      <Link
                                        href={`/singleProject/${item?.id}`}
                                        className="listing-btn"
                                      >
                                        View
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                              {item.total_matching_projects > 0 && (
                                <button
                                  className="lists_out"
                                  onClick={() =>
                                    handleShow(item.project_name_id, item.id)
                                  }
                                  href="#"
                                  role="button"
                                  style={{ color: "#000" }}
                                >
                                  +{item.total_matching_projects} Listings
                                </button>
                              )}
                            </div>
                          ))}
                      </div>

                      <div className="pagenate-icon d-flex  justify-content-end align-items-center mt-4">
                        <button
                          onClick={handlePrevious}
                          className={`px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700 ${
                            offset === 0 && "opacity-50 cursor-not-allowed"
                          }`}
                          disabled={offset === 0}
                        >
                          <BsChevronLeft />
                        </button>
                        <div className="text-gray-700">
                          {Math.ceil((offset * 10) / limit) + 1} of{" "}
                          {Math.ceil(total / limit)}
                        </div>
                        <button
                          onClick={handleNext}
                          className={`px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700 ${
                            offset + limit >= total &&
                            "opacity-50 cursor-not-allowed"
                          }`}
                          disabled={offset + limit >= total}
                        >
                          <BsChevronRight />
                        </button>
                      </div>

                      <div>
                        <div className="widget service_lsts">
                          <div className="row">
                            <ul className="lisitin_out col-md-3">
                              {listLocationsData.map((item, index) => (
                                <li
                                  key={item.id}
                                  onClick={() => {
                                    handleChangefooterSearch(
                                      item.city_code,
                                      item.locality,
                                      7
                                    );
                                  }}
                                >
                                  <a href="#">
                                    {" "}
                                    Flats For Sale in {item.locality_name}{" "}
                                  </a>
                                </li>
                              ))}
                            </ul>

                            <ul className="lisitin_out col-md-3">
                              {listLocationsData.map((item, index) => (
                                <li
                                  key={item.id}
                                  onClick={() => {
                                    handleChangefooterSearch(
                                      item.city_code,
                                      item.locality,
                                      7
                                    );
                                  }}
                                >
                                  <Link href="#">
                                    {" "}
                                    Flats For Sale in {item.locality_name}{" "}
                                  </Link>
                                </li>
                              ))}
                            </ul>

                            <ul className="lisitin_out col-md-3">
                              {listLocationsData.map((item, index) => (
                                <li
                                  key={item?.id}
                                  onClick={() => {
                                    handleChangefooterSearch(
                                      item.city_code,
                                      item.locality,
                                      8
                                    );
                                  }}
                                >
                                  <Link href="#">
                                    {" "}
                                    Villa For Sale in {item?.locality_name}{" "}
                                  </Link>
                                </li>
                              ))}
                            </ul>

                            <ul className="lisitin_out col-md-3">
                              {listLocationsData.map((item, index) => (
                                <li
                                  key={item.id}
                                  onClick={() => {
                                    handleChangefooterSearch(
                                      item.city_code,
                                      item.locality,
                                      8
                                    );
                                  }}
                                >
                                  <Link href="#">
                                    {" "}
                                    Villa For Sale in {item.locality_name}{" "}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Modal
              show={show}
              onHide={handleClose}
              className="listings_popup services_sub"
            >
              <Modal.Header closeButton>
                <div className="prjt-detls">
                  <h4>{opendProject?.project_name}</h4>
                  <p>
                    <IoLocationSharp /> {opendProject?.locality},{" "}
                    {opendProject?.sub_locality},{opendProject?.city_code}
                  </p>
                  <p>By : {opendProject.builder_name}</p>
                </div>

                <ul className="d-flex justify-content-ceter lsts_tab mt-3">
                  <li onClick={() => handleFilterProperties("Builder")}>
                    Builder Listings
                  </li>
                  <li onClick={() => handleFilterProperties("Agent")}>
                    {agentPropertiesCount} Agent Listing
                  </li>
                  <li onClick={() => handleFilterProperties("Owner")}>
                    {ownerPropertiesCount} Owner Listing
                  </li>
                </ul>
              </Modal.Header>
              <div className="user-form-card ser-main">
                <div className="row">
                  {listingData?.length &&
                    listingData.map((item) => (
                      <div className="col-md-6" key={item?.id}>
                        <Link
                          href={`/singleProject/${item?.id}`}
                          className="list-itms"
                        >
                          <div className="listing-item">
                            {(item?.listing_type_id === 3 ||
                              item?.listing_type_id === 4) && (
                              <h5 className="met_out">Meta View</h5>
                            )}
                            {item?.project_first_gallery_image != null ? (
                              <div className="listing-img">
                                <Image
                                  src={item?.project_first_gallery_image}
                                  width={450}
                                  height={300}
                                  alt="property"
                                />
                              </div>
                            ) : (
                              <div className="listing-img">
                                <Image
                                  src={"/assets/img/property/01.jpg"}
                                  width={450}
                                  height={300}
                                  alt="property"
                                />
                              </div>
                            )}

                            <div className="listing-content">
                              <h4 className="listing-title">
                                {item?.project_name}
                              </h4>
                              <p className="ar_grp">
                                <IoLocationSharp />
                                {item?.locality}, {item?.sub_locality},
                                {item?.city_code}
                              </p>
                              <p className=" listing-sub-title">
                                <span>By:</span> {item?.builder_name}
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title by_titls">
                                    {/* Starts From */}
                                    <span className="mr-0">
                                      {item?.possession_status}
                                    </span>
                                    <span>
                                      {item?.possession_status ===
                                      "Ready to Move" ? (
                                        <>
                                          Year Built:{" "}
                                          {altDate(item?.possession_by)}
                                        </>
                                      ) : (
                                        <>
                                          Possesion By:{" "}
                                          {altDate(item?.possession_by)}
                                        </>
                                      )}
                                    </span>
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <span>Starts From</span>
                                    <br></br>
                                    <BiRupee fontSize={19} />
                                    {item?.total_base_price}
                                  </h6>
                                </div>
                              </div>

                              <p className="d-flex align-items-center justify-content-between"></p>

                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    {item?.created_by_type === "Builder" && (
                                      <>
                                        <span>BUILDER:</span>{" "}
                                        {item?.created_name}
                                      </>
                                    )}
                                    {item?.created_by_type === "Agent" && (
                                      <>
                                        <span>AGENT:</span> {item?.created_name}
                                      </>
                                    )}
                                    {item?.created_by_type ===
                                      "Exclusive Sales Partner" && (
                                      <>
                                        <span>EXL. AGENT:</span>{" "}
                                        {item?.created_name}
                                      </>
                                    )}
                                    {item?.created_by_type === "Owner" && (
                                      <>
                                        <span>OWNER:</span> {item?.created_name}
                                      </>
                                    )}
                                    {(item?.created_by_type == "1" ||
                                      item?.created_by_type == "2") && (
                                      <>
                                        <span>Admin:</span>{" "}
                                      </>
                                    )}
                                  </p>
                                </div>
                                <Link
                                  href={`/singleProject/${item?.id}`}
                                  className="listing-btn"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button
                          className="lists_out"
                          onClick={() =>
                            handleShow(item.project_name_id, item.id)
                          }
                          href="#"
                          role="button"
                          style={{ color: "#000" }}
                        >
                          +{item.total_matching_projects} Listings
                        </button>
                      </div>
                    ))}
                </div>
              </div>
            </Modal>
          </main>
        </div>
      )}
    </>
  );
}
