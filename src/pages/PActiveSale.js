import React from "react";
import SideNav from "@/components/SidebarPro/SideNav";
import { useEffect } from "react";
import { useState } from "react";
import { IoIosCheckboxOutline } from "react-icons/io";
import { TbCheckbox } from "react-icons/tb";
import { RiCheckboxIndeterminateLine } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
const PActiveSale = () => {
  const [ActiveBox, setActiveBox] = useState(false);
  const [ExpiredBox, setExpiredBox] = useState(false);
  const [FutureBox, setFutureBox] = useState(false);
  const handleActive = () => {
    setActiveBox(true);
    setExpiredBox(false);
    setFutureBox(false);
  };
  const handleExpired = () => {
    setActiveBox(false);
    setExpiredBox(true);
    setFutureBox(false);
  };
  const handleFuture = () => {
    setActiveBox(false);
    setExpiredBox(false);
    setFutureBox(true);
  };
  return (
    <>
      

          
      <main className="main">
   

   <div className="row">
           <div className="col-md-2">
             <SideNav />
           </div>
           <div className="col-md-10">
           <div className="dashbrd_cont">
          
      {" "}
      <div className="dashbrd_cont profile-details">
        <div className="profile-det-titls">
          <h3 className="PremiumAccount">PREMIUM LISTINGS</h3>
          <h3 className="PremiumAccount1">Account Information</h3>
        </div>
        <div className="row">
          <div className="col-md-12 text-center mt-3 mb-4">
            <div className="row mt-2 mb-4">
              <div className="col-md-6 col-lg-4">
                <button
                  onClick={handleActive}
                  type="button"
                  className="handleActive"
                >
                  <div
                    className={
                      ActiveBox
                        ? "dashboard-widget-color-active dashboard-widget1"
                        : "dashboard-widget1 dashboard-widget-color-1"
                    }
                  >
                    <div className="dashboard-widget-info">
                      <h2 class="card__title">
                        <IoIosCheckboxOutline className="iconCheck" />
                        55&nbsp;
                        <span class="card__titlee">Active Packages</span>
                      </h2>
                    </div>
                  </div>
                </button>
              </div>
              <div className="col-md-6 col-lg-4">
                <button
                  onClick={handleFuture}
                  type="button"
                  className="handleActive"
                >
                  {/* <div className="dashboard-widget1 dashboard-widget-color-3"> */}
                  <div
                    className={
                      FutureBox
                        ? "dashboard-widget-color-1-active dashboard-widget1"
                        : "dashboard-widget1 dashboard-widget-color-3"
                    }
                  >
                    <div className="dashboard-widget-info">
                      <h2 class="card__title3">
                        <TbCheckbox className="iconCheck" /> 79&nbsp;
                        <span class="card__titlee3">Future Packages</span>
                      </h2>
                    </div>
                  </div>
                </button>
              </div>
              <div className="col-md-6 col-lg-4">
                <button
                  onClick={handleExpired}
                  type="button"
                  className="handleActive"
                >
                  {/* <div className="dashboard-widget1 dashboard-widget-color-2"> */}
                  <div
                    className={
                      ExpiredBox
                        ? "dashboard-widget-color-2-active dashboard-widget1"
                        : "dashboard-widget1 dashboard-widget-color-2"
                    }
                  >
                    <div className="dashboard-widget-info">
                      <h2 class="card__title2">
                        <RiCheckboxIndeterminateLine className="iconCheck" />
                        49&nbsp;
                        <span class="card__titlee2">Expired Packages</span>
                      </h2>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {ActiveBox && (
              <div className="packSection">
                <h4 className="ActiveHead">Active Packages</h4>
                <table className="activeTable mt-4 mb-5">
                  <thead>
                    <tr>
                      <th className="ActTh">Package</th>
                      <th className="ActTh">Active On</th>
                      <th className="ActTh">Expires By</th>
                    </tr>
                  </thead>
                  <tbody className="ActTBody">
                    <tr>
                      <td className="ActTd">
                        Gold Premium <span> HYD</span>
                      </td>
                      <td className="ActTd">11-11-2023</td>
                      <td className="ActTd">11-11-2023</td>
                    </tr>
                    <tr>
                      <td className="ActTd">
                        Gold Premium <span> HYD</span>
                      </td>
                      <td className="ActTd">11-11-2023</td>
                      <td className="ActTd">11-11-2023</td>
                    </tr>
                    <tr>
                      <td className="ActTd">
                        Gold Premium <span> HYD</span>
                      </td>
                      <td className="ActTd">11-11-2023</td>
                      <td className="ActTd">11-11-2023</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {ExpiredBox && (
              <div className="packSection">
                <h4 className="ExpiredHead">Expired Packages</h4>
                <table className="ExpiredTable mt-4 mb-5">
                  <thead>
                    <th className="ExpiredTh">Package</th>
                    <th className="ExpiredTh">Active On</th>
                    <th className="ExpiredTh">Expires By</th>
                  </thead>
                  <tbody className="ExpiredBody">
                    <tr>
                      <td className="ExpiredTd">
                        Gold Premium <span> HYD</span>
                      </td>
                      <td className="ExpiredTd">11-11-2023</td>
                      <td className="ExpiredTd">11-11-2023</td>
                    </tr>
                    <tr>
                      <td className="ExpiredTd">
                        Gold Premium <span> HYD</span>
                      </td>
                      <td className="ExpiredTd">11-11-2023</td>
                      <td className="ExpiredTd">11-11-2023</td>
                    </tr>
                    <tr>
                      <td className="ExpiredTd">
                        Gold Premium <span> HYD</span>
                      </td>
                      <td className="ExpiredTd">11-11-2023</td>
                      <td className="ExpiredTd">11-11-2023</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {FutureBox && (
              <div className="packSection">
                <h4 className="FutureHead">Future Packages</h4>
                <table className="FutureTable mt-4 mb-5">
                  <thead>
                    <th className="FutureTh">Package</th>
                    <th className="FutureTh">Active On</th>
                    <th className="FutureTh">Expires By</th>
                  </thead>
                  <tbody className="FutureTBody">
                    <tr>
                      <td className="FutureTd">
                        Gold Premium <span> HYD</span>
                      </td>
                      <td className="FutureTd">11-11-2023</td>
                      <td className="FutureTd">11-11-2023</td>
                    </tr>
                    <tr>
                      <td className="FutureTd">
                        Gold Premium <span> HYD</span>
                      </td>
                      <td className="FutureTd">11-11-2023</td>
                      <td className="FutureTd">11-11-2023</td>
                    </tr>
                    <tr>
                      <td className="FutureTd">
                        Gold Premium <span> HYD</span>
                      </td>
                      <td className="FutureTd">11-11-2023</td>
                      <td className="FutureTd">11-11-2023</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            <div className="row mt-4 pt-5 pacRow">
              <div className="col-md-4">
                <h4 className="Package">Package : 1</h4>
                <p className="Package1">Gold Premium Hyd</p>
              </div>
              <div className="col-md-8 ActiveExpires">
                <span className="mr-3">
                  <b>Active On:</b> 11-11-2023
                </span>
                <span>
                  <b>Expires By: </b>11-11-2023
                </span>
              </div>
            </div>
            <div className="table_out mb-5 pb-2">
              <table className="table">
                <thead>
                  <tr>
                    <th>Listings</th>
                    <th>Responses</th>
                    <th>Requested Visits</th>
                    <th>Scheduled Visits</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="listTBody">
                    <td>
                      <p className="list_data mb-2">
                        Project Name / Apartment / BHK / SFT / Price / Location
                        / City
                      </p>
                      <div className="d-flex">
                        <p className="mb-0 mr-5 highlighted">
                          <b>ID</b> : 123456
                        </p>
                        <p className="highlighted">
                          <b>Posted On</b>: 11-11-2023
                        </p>
                      </div>
                    </td>
                    <td
                      className="highlighted40"
                      onClick={(e) => {
                        handleChange(e, "40");
                      }}
                    >
                      40
                    </td>
                    <td
                      className="highlighted40"
                      onClick={(e) => {
                        handleChange(e, "7");
                      }}
                    >
                      20
                    </td>
                    <td
                      className="highlighted40"
                      onClick={(e) => {
                        handleChange(e, "8");
                      }}
                    >
                      20
                    </td>
                    <td>
                      <MdEdit className="edit" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="row mt-4 pacRow">
              <div className="col-md-4">
                <h4 className="Package">Package : 2</h4>
                <p className="Package1">Gold Premium Hyd</p>
              </div>
              <div className="col-md-8 ActiveExpires">
                <span className="mr-3">
                  <b>Active On:</b> 11-11-2023
                </span>
                <span>
                  <b>Expires By: </b>11-11-2023
                </span>
              </div>
            </div>
            <div className="table_out">
              <table className="table">
                <thead>
                  <tr>
                    <th>Listings</th>
                    <th>Responses</th>
                    <th>Requested Visits</th>
                    <th>Scheduled Visits</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="listTBody">
                    <td>
                      <p className="list_data mb-2">
                        Project Name / Apartment / BHK / SFT / Price / Location
                        / City
                      </p>
                      <div className="d-flex">
                        <p className="mb-0 mr-5 highlighted">
                          <b>ID</b> : 123456
                        </p>
                        <p className="highlighted">
                          <b>Posted On</b>: 11-11-2023
                        </p>
                      </div>
                    </td>
                    <td>40</td>
                    <td>10</td>
                    <td>10</td>
                    <td>
                      <MdEdit className="edit" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
               </div>
           </div>
         </div>
      </main>

   
    </>
  );
};

export default PActiveSale;
