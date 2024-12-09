import SideNav from "@/components/SidebarPro/SideNav";
import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { useState } from "react";
import { expoClient } from "../components/endPoints/expoEndpoints";
import { DNAComponent } from "@/components/loader/Loader";
import { FaLocationDot } from "react-icons/fa6";
import { SiExpo } from "react-icons/si";
import { MdDateRange } from "react-icons/md";
import { MdAccountBalance } from "react-icons/md";
import { MdMeetingRoom } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { MdSubdirectoryArrowLeft } from "react-icons/md";
// import Login from "./Auth/login";

const BookaStall = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [form, setForm] = useState({});
  const [expoType, setExpoType] = useState([]);
  const [cities, setCities] = useState([]);
  const [stalls, setStalls] = useState([]);
  const [expoData, setExpoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stallName, setStallName] = useState({});
  const [standard, setStandard] = useState([]);
  const [gold, setGold] = useState([]);
  const [platinum, setPlatinum] = useState([]);
  const [diamond, setDiamond] = useState([]);
  const [activeStallsIds, setactiveStallsIds] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [stallBookingDates, setStallDatesValue] = useState([]);
  const [selectedStallIds, setSelectedStallIds] = useState([]);

  const onChange = (e, duration) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      ["duration"]: duration,
    });
    console.log("=========formdata", form);
  };

  ///////////////button id functionality///////////////

  const selectStallDates = (index) => {
    selectedStallIds.splice(0, selectedStallIds.length);
    let count = form.duration.slice(0, 1);
    let arrayIndex = index;
    for (let i = 0; i < Number(count); i++) {
      if (stallBookingDates[arrayIndex].bookingStatus == 1) {
        selectedStallIds.splice(0, selectedStallIds.length);
      } else {
        selectedStallIds.push(stallBookingDates[arrayIndex].expo_id);
      }
      arrayIndex++;
    }
    console.log(selectedStallIds);
  };

  const handleClick = (e) => {
    // setactiveStallsIds(e);

    let newActiveStallsids = [...activeStallsIds];

    console.log(activeStallsIds);
    if (newActiveStallsids.includes(e.target.id)) {
      newActiveStallsids = newActiveStallsids.filter(
        (activeId) => activeId !== e.target.id
      );
    } else {
      newActiveStallsids.push(e.target.id);
    }

    // Check how many buttons are active
    if (newActiveStallsids.length > 1) {
      alert("Maximum Stalls Selected");
      return;
    }
    setactiveStallsIds(newActiveStallsids);
    stallAvailDates(newActiveStallsids, form.type);
  };

  const isActive = (id) => activeStallsIds.includes(id);
  const isBooked = (id) => selectedStallIds.includes(id);

  const openPopup = (value) => {
    console.log("valueeeeeeeeeeeeee", value);
    if (value == "gold" || value == "diamond" || value == "platinum") {
      setIsPopupOpen(true);
    } else {
      alert("Please select stall");
    }
  };

  const standardPopup = () => {
    if (form.city && form.type && form.standardPrice) {
      setIsPopupOpen(true);
    } else {
      alert("Please select city and expo type");
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const getcities = async () => {
    try {
      setLoading(true);

      const response = await expoClient("expo/get_expo_cities.php", "GET");
      if (response?.data?.status) {
        setCities(response?.data?.data);
      }
    } catch (error) {
      // toastError(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const getTypes = async () => {
    try {
      setLoading(true);
      const response = await expoClient(`expotype/expo_type.php`, "GET");
      if (response?.data?.status) {
        setExpoType(response?.data?.data);
      }
    } catch (error) {
      // toastError(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const stallAvailDates = async (stallid, type_code) => {
    try {
      setLoading(true);
      const response = await expoClient(
        `stallBookings/get_stalls_bookings_data.php?stallId=${stallid}&expo_type=${type_code}`,
        "GET"
      );
      if (response?.data?.status) {
        setStallDatesValue(response?.data?.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getExpos = async (city, type_code) => {
    try {
      setLoading(true);
      const res = await expoClient(
        `expo/get_expo_data.php?city=${city}&expo_type=${type_code}`,
        "GET"
      );
      if (res?.data?.status) {
        setExpoData(res?.data?.data);
        console.log("===========>stallsdata", expoData);
      }
    } catch (err) {
      // toastError('something error');
    } finally {
      setLoading(false);
    }
  };

  const allStalls = async (city, type_code) => {
    try {
      setLoading(true);
      const res = await expoClient(
        `stall_pricings/stall_pricings.php?city=${city}&expo_type=${type_code}`,
        "GET"
      );
      if (res?.data?.status) {
        setStalls(res?.data?.data);
        console.log("===========>stallsdata", stalls);
      }
    } catch (err) {
      // toastError('something error');
    } finally {
      setLoading(false);
    }
  };

  getExpos;

  useEffect(() => {
    if (form.city && form.type) {
      getExpos(form.city, form.type);
    }
  }, [form.city && form.type]);

  useEffect(() => {
    getcities();
    getTypes();
    if (form.city && form.type) {
      allStalls(form.city, form.type);
    }
  }, [form.city && form.type]);

  return (
    <>
      <div className="row">
        <div className="col-md-2">
          <SideNav />
        </div>
        <div className="col-md-10">
          <div className="dashbrd_cont">
            <div className="pk-nme text-center">
              <div className="profile-det-titls">
                <h3 className="PremiumAccount">AIRPROPX</h3>
                <h3 className="PremiumAccount1">Book a stall</h3>
              </div>

              <h6 className="mt-3">THE METAVERSE REALESTATE EXPO</h6>
              <p className="showcase">
                Showcase Your Projects at the Premier Metaverse Realestate Expo
              </p>
            </div>
            <form>
              <div className="row slet_out">
                <div className="col-md-3 stateBox">
                  <div className="d-flex sel_blo">
                    <span>Select City:</span>
                    <select
                      className="form-select formcontrol"
                      name="city"
                      onChange={onChange}
                      value={form?.city || ""}
                    >
                      <option value="">Select</option>
                      {cities?.map((cityData, index) => (
                        <option key={index} value={cityData.city}>
                          {cityData.city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="d-flex sel_blo sel_bloo">
                    <span>Expo Type:</span>
                    <select
                      className="form-select formcontrol"
                      name="type"
                      onChange={onChange}
                      value={form?.type || ""}
                    >
                      <option value="">Select</option>
                      {expoType?.map((type, index) => (
                        <option key={index} value={type.type_code}>
                          {type.type_name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="row mt-5 airprx_ot">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <div className="bg-color1 bg-color-pnk">
                    <div className="pricing-item text-center">
                      <h2 className="gold">AIRPROPX</h2>
                      <h6>THE METAVERSE REALESTATE EXPO</h6>
                      <h6 className="vald-ot">Expo Date: 10-March-2024</h6>

                      <h3>
                        ₹{" "}
                        {
                          stalls.filter(
                            (stall) => stall.stall_type == "Standard"
                          )[0]?.price
                        }
                        / 1 Expo{" "}
                      </h3>
                      <ul>
                        <li>
                          <b>STANDARD STALL</b>
                        </li>
                      </ul>

                      <div className="airpox-l">
                        {stalls
                          .filter((stall) => stall.stall_type == "Standard")
                          .map((sStall) => (
                            <div key={sStall.id}>
                              <label className="custom-radio">
                                <input
                                  type="radio"
                                  name="standardPrice"
                                  onChange={(e) => onChange(e, sStall.duration)}
                                  checked={selectedValue === "sStall.price"}
                                  value={sStall.price || ""}
                                />
                                <span className="radio-icon"></span>
                                {sStall.price}/{sStall.duration}
                              </label>
                            </div>
                          ))}
                      </div>

                      <button
                        className="purchage-btn"
                        type="button"
                        onClick={standardPopup}
                      >
                        Purchase
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-3"></div>
              </div>

              <div className="row mt-5 airprx_ot">
                <div className="col-md-4">
                  <div className="bg-color1">
                    <div className="pricing-item text-center">
                      <h2 className="gold">AIRPROPX</h2>
                      <h6>The Metaverse Realestate Expo</h6>
                      <h6 className="vald-ot">Expo Date: 10-March-2024</h6>

                      {stalls
                        .filter((stall) => stall.stall_type == "Gold")
                        .map((sStall) => (
                          <h3 key={sStall.id}>
                            ₹{sStall.price}/{sStall.duration}
                          </h3>
                        ))}
                      <ul>
                        <li>
                          <b>GOLD STALL</b>
                        </li>
                      </ul>
                      <button
                        type="button"
                        className="purchage-btn"
                        onClick={() => openPopup("gold")}
                      >
                        Purchase
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-color2">
                    <div className="pricing-item text-center">
                      +<h2 className="gold">AIRPROPX</h2>
                      <h6>The Metaverse Realestate Expo</h6>
                      <h6 className="vald-ot">Expo Date: 10-March-2024</h6>
                      {stalls
                        .filter((stall) => stall.stall_type == "Platinum")
                        .map((sStall) => (
                          <h3 key={sStall.id}>
                            ₹{sStall.price}/ {sStall.duration}
                          </h3>
                        ))}
                      <ul>
                        <li>
                          <b>PLATINUM STALL</b>
                        </li>
                      </ul>
                      <button
                        type="button"
                        className="purchage-btn"
                        onClick={() => openPopup("platinum")}
                      >
                        Purchase
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-color3">
                    <div className="pricing-item text-center">
                      <h2 className="gold">AIRPROPX</h2>
                      <h6>The Metaverse Realestate Expo</h6>
                      <h6 className="vald-ot">Expo Date: 10-March-2024</h6>
                      {stalls
                        .filter((stall) => stall.stall_type == "Diamond")
                        .map((sStall) => (
                          <h3 key={sStall.id}>
                            ₹{sStall.price}/ {sStall.duration}
                          </h3>
                        ))}
                      <ul>
                        <li>
                          <b> DAIMOND STALL </b>
                        </li>
                      </ul>
                      <button
                        type="button"
                        className="purchage-btn"
                        onClick={() => openPopup("diamond")}
                      >
                        Purchase
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <p className="viw_wnt">
                Want to learn more about AirPropx and its sponsorships?
                <a className="dropdown-item">View</a>
              </p>
            </form>
          </div>
        </div>
      </div>
      {isPopupOpen && (
        <form>
          <div className="row popbackla">
            <div className="row open-popup pach">
              <div className="col-md-12 pop_close">
                <IoMdClose onClick={closePopup} />
              </div>
              {/* <div className="col-md-1"></div> */}

              <div className="col-md-6">
                <div className="miniouter">
                  <div className="row pop_head">
                    <div className="col-md-12 rootmap">Expo Layout-Plan</div>
                  </div>

                  <div className="popupOut ">
                    <div className="row">
                      <div className="col-md-6 d-flex justify-content-center gap-1 border-r">
                        <div className="bmain-btn">
                          <button
                            id="G1"
                            type="button"
                            className={isActive("G1") ? "active" : ""}
                            onClick={(e) => handleClick(e)}

                            // className={`slot ${
                            //   isBooked ? "booked" : "available"
                            // }`}
                          >
                            G1
                          </button>
                        </div>
                        <div className="bmain-btn">
                          {" "}
                          <button
                            id="G2"
                            className={isActive("G2") ? "active" : ""}
                            onClick={(e) => handleClick(e)}
                            type="button"
                          >
                            G2
                          </button>
                        </div>
                      </div>
                      <div className="col-md-6 d-flex justify-content-center gap-1">
                        <div className="bmain-btn">
                          {" "}
                          <button
                            id="G3"
                            className={isActive("G3") ? "active" : ""}
                            onClick={(e) => handleClick(e)}
                            type="button"
                          >
                            G3
                          </button>
                        </div>
                        <div className="bmain-btn">
                          {" "}
                          <button
                            id="G4"
                            className={isActive("G4") ? "active" : ""}
                            onClick={(e) => handleClick(e)}
                            type="button"
                          >
                            G4
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6 d-flex justify-content-between gap-1 pr-0 border-r">
                        <div className="bmain-btn">
                          <button
                            id="S6"
                            className={isActive("S6") ? "active" : ""}
                            onClick={(e) => handleClick(e)}
                            type="button"
                          >
                            S6
                          </button>
                        </div>
                        <div className="bmain-btn">
                          {" "}
                          <button
                            id="S7"
                            className={isActive("S7") ? "active" : ""}
                            onClick={(e) => handleClick(e)}
                            type="button"
                          >
                            S7
                          </button>
                        </div>
                      </div>
                      <div className="col-md-6 d-flex justify-content-between gap-1 pl-0">
                        <div className="bmain-btn">
                          {" "}
                          <button
                            id="S18"
                            className={isActive("S18") ? "active" : ""}
                            onClick={(e) => handleClick(e)}
                            type="button"
                          >
                            S18
                          </button>
                        </div>
                        <div className="bmain-btn">
                          {" "}
                          <button
                            id="S19"
                            className={isActive("S19") ? "active" : ""}
                            onClick={(e) => handleClick(e)}
                            type="button"
                          >
                            S19
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6 d-flex justify-content-between gap-1 pr-0 border-r">
                        <div className="bmain-btn">
                          <button
                            id="S5"
                            className={isActive("S5") ? "active" : ""}
                            onClick={(e) => handleClick(e)}
                            type="button"
                          >
                            S5
                          </button>
                        </div>
                        <div className="bmain-btn">
                          {" "}
                          <button
                            id="S8"
                            className={isActive("S8") ? "active" : ""}
                            onClick={(e) => handleClick(e)}
                            type="button"
                          >
                            S8
                          </button>
                        </div>
                      </div>
                      <div className="col-md-6 d-flex justify-content-between gap-1 pl-0">
                        <div className="bmain-btn">
                          {" "}
                          <button
                            id="S17"
                            className={isActive("S17") ? "active" : ""}
                            onClick={(e) => handleClick(e)}
                            type="button"
                          >
                            S17
                          </button>
                        </div>
                        <div className="bmain-btn">
                          {" "}
                          <button
                            id="S20"
                            className={isActive("S20") ? "active" : ""}
                            onClick={(e) => handleClick(e)}
                            type="button"
                          >
                            S20
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6 d-flex justify-content-between gap-1 pr-0 border-r">
                        <div className="bmain-btn">
                          <button
                            id="S4"
                            className={isActive("S4") ? "active" : ""}
                            onClick={(e) => handleClick(e)}
                            type="button"
                          >
                            S4
                          </button>
                        </div>
                        <div className="bmain-btn">
                          {" "}
                          <button
                            id="S9"
                            className={isActive("S9") ? "active" : ""}
                            onClick={(e) => handleClick(e)}
                            type="button"
                          >
                            S9
                          </button>
                        </div>
                      </div>
                      <div className="col-md-6 d-flex justify-content-between gap-1 pl-0">
                        <div className="bmain-btn">
                          {" "}
                          <button
                            id="S16"
                            className={isActive("S16") ? "active" : ""}
                            onClick={(e) => handleClick(e)}
                            type="button"
                          >
                            S16
                          </button>
                        </div>
                        <div className="bmain-btn">
                          {" "}
                          <button
                            id="S21"
                            className={isActive("S21") ? "active" : ""}
                            onClick={(e) => handleClick(e)}
                            type="button"
                          >
                            S21
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6 d-flex justify-content-between gap-1 pr-0 border-r">
                        <div className="bmain-btn">
                          <button
                            id="S3"
                            className={isActive("S3") ? "active" : ""}
                            onClick={(e) => handleClick(e)}
                            type="button"
                          >
                            S3
                          </button>
                        </div>
                        <div className="bmain-btn">
                          {" "}
                          <button
                            id="S10"
                            className={isActive("S10") ? "active" : ""}
                            onClick={(e) => handleClick(e)}
                            type="button"
                          >
                            S10
                          </button>
                        </div>
                      </div>
                      <div className="col-md-6 d-flex justify-content-between gap-1 pl-0">
                        <div className="bmain-btn">
                          {" "}
                          <button
                            id="S15"
                            className={isActive("S15") ? "active" : ""}
                            onClick={(e) => handleClick(e)}
                            type="button"
                          >
                            S15
                          </button>
                        </div>
                        <div className="bmain-btn">
                          {" "}
                          <button
                            id="S22"
                            className={isActive("S22") ? "active" : ""}
                            onClick={(e) => handleClick(e)}
                            type="button"
                          >
                            S22
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6 d-flex justify-content-between gap-1 pr-0 border-r">
                        <div className="bmain-btn">
                          <button
                            id="S2"
                            className={isActive("S2") ? "active" : ""}
                            onClick={(e) => handleClick(e)}
                            type="button"
                          >
                            S2
                          </button>
                        </div>
                        <div className="bmain-btn">
                          {" "}
                          <button
                            id="S11"
                            className={isActive("S11") ? "active" : ""}
                            onClick={(e) => handleClick(e)}
                            type="button"
                          >
                            S11
                          </button>
                        </div>
                      </div>
                      <div className="col-md-6 d-flex justify-content-between gap-1 pl-0">
                        <div className="bmain-btn">
                          {" "}
                          <button
                            id="S14"
                            className={isActive("S14") ? "active" : ""}
                            onClick={(e) => handleClick(e)}
                            type="button"
                          >
                            S14
                          </button>
                        </div>
                        <div className="bmain-btn">
                          {" "}
                          <button
                            id="S23"
                            className={isActive("S23") ? "active" : ""}
                            onClick={(e) => handleClick(e)}
                            type="button"
                          >
                            S23
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6 d-flex justify-content-between gap-1 pr-0 border-r">
                        <div className="bmain-btn">
                          <button
                            id="S1"
                            className={isActive("S1") ? "active" : ""}
                            onClick={(e) => handleClick(e)}
                            type="button"
                          >
                            S1
                          </button>
                        </div>
                        <div className="bmain-btn">
                          {" "}
                          <button
                            id="S12"
                            className={isActive("S12") ? "active" : ""}
                            onClick={(e) => handleClick(e)}
                            type="button"
                          >
                            S12
                          </button>
                        </div>
                      </div>
                      <div className="col-md-6 d-flex justify-content-between gap-1 pl-0">
                        <div className="bmain-btn">
                          {" "}
                          <button
                            id="S13"
                            className={isActive("S13") ? "active" : ""}
                            onClick={(e) => handleClick(e)}
                            type="button"
                          >
                            S13
                          </button>
                        </div>
                        <div className="bmain-btn">
                          {" "}
                          <button
                            id="S24"
                            className={isActive("S24") ? "active" : ""}
                            onClick={(e) => handleClick(e)}
                            type="button"
                          >
                            S24
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 d-flex pl-60 ">
                        <div className="bmain-btn po-s">
                          <p className="mb-0">
                            Enter{" "}
                            <span>
                              <IoIosArrowUp />
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6 d-flex justify-content-between ">
                        <div className="bmain-btn cent-btn">
                          <p className="mb-0">
                            Enter{" "}
                            <span>
                              <IoIosArrowUp />
                            </span>
                          </p>
                        </div>
                        <div className="bmain-btn bg-red">
                          <p className="mb-0">
                            Exit{" "}
                            <span>
                              <IoIosArrowUp />
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="diman-ntnrow">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="bmain-btn p1 mb-2">
                            <button
                              id="P1"
                              className={isActive("P1") ? "active" : ""}
                              onClick={(e) => handleClick(e)}
                              type="button"
                            >
                              P1
                            </button>
                          </div>
                          <div className="bmain-btn p1">
                            {" "}
                            <button
                              id="P2"
                              className={isActive("P2") ? "active" : ""}
                              onClick={(e) => handleClick(e)}
                              type="button"
                            >
                              P2
                            </button>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="bmain-btn wi-hi d-flex justify-content-center">
                            {" "}
                            <button
                              id="D1"
                              className={isActive("D1") ? "active" : ""}
                              onClick={(e) => handleClick(e)}
                              type="button"
                            >
                              Diamond Stall
                            </button>
                          </div>
                          <div className="bmain-btn mt-3 ps-5">
                            <p className="mb-0">
                              Enter{" "}
                              <span>
                                <IoIosArrowUp />
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12 text-center">
                        <div className="resp">Reception</div>
                      </div>
                    </div>

                    <div className="hall-1">Hall 1</div>
                    <div className="hall-2">Hall 2</div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                {/* <div className="col-md-1"></div> */}
                <div className="heds">
                  <h6>Payment Acknowledgement</h6>
                </div>
                <div className="card-data">
                  <ul>
                    <li>
                      {" "}
                      <FaLocationDot />
                      <span>{form?.city}</span>
                    </li>
                    <li>
                      {" "}
                      <SiExpo />
                      <span>Expo Type : </span> <span>{form?.type}</span>
                    </li>
                    <li>
                      {" "}
                      <MdMeetingRoom />
                      <span>Stall Name:</span>
                    </li>

                    <li></li>

                    <li>
                      {" "}
                      <MdAccountBalance /> <span>Stall ID :</span>
                      <span className="stallbg">
                        {activeStallsIds.join(", ")}
                      </span>
                    </li>

                    <li>
                      <FaRupeeSign /> <span>Price/Expo :</span>
                      <div className="d-flex">
                        {stalls
                          .filter((stall) => stall.stall_type == "Standard")
                          .map((sStall) => (
                            <div key={sStall.id}>
                              <label className="custom-radio">
                                <input
                                  type="radio"
                                  name="standardPrice"
                                  onChange={(e) => onChange(e, sStall.duration)}
                                  checked={selectedValue === "sStall.price"}
                                  value={sStall.price || ""}
                                />
                                <span className="radio-icon"></span>
                                {sStall.price}/{sStall.duration}
                              </label>
                            </div>
                          ))}
                      </div>
                    </li>

                    <li>
                      {" "}
                      <MdDateRange />
                      <span> Available Dates:-</span>
                    </li>
                    <div className="row b_dates ">
                      {stallBookingDates.map((dates, index) => (
                        <div className="col-md-4">
                          {" "}
                          <div
                            className={
                              "w-100 s_date" +
                              (dates.bookingStatus == 1 ? " colorGrey" : "") +
                              (dates?.expo_id ==
                              selectedStallIds.includes(dates?.expo_id)
                                ? " active"
                                : "")
                            }
                            key={index}
                            onClick={() => selectStallDates(index)}
                          >
                            {dates.start_date}
                          </div>
                          {/* <div
                            if={dates.bookingStatus == 1}
                            className="w-100 s_date colorGrey"
                            key={index}
                          >
                            {dates.start_date}
                          </div>
                          <div
                            if={dates.bookingStatus == ("" || null)}
                            className="w-100 s_date"
                            key={index}
                          >
                            {dates.start_date}
                          </div> */}
                        </div>
                      ))}
                    </div>
                  </ul>
                </div>
                <div className="row btns-p">
                  <div className="col-md-12">
                    <button className="grn">Proceed to payment</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
      ;
    </>
  );
};

export default BookaStall;
