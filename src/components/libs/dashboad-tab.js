import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { BsFillPhoneFill } from "react-icons/bs";
import { MdSpaceDashboard } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { TbPackages } from "react-icons/tb";
import { IoCardSharp } from "react-icons/io5";
import { AiFillLock } from "react-icons/ai";
import { RiLogoutCircleRFill } from "react-icons/ri";

export default function DasboardTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <div className="row">
          <div className="col-md-3">
            <div className="user-profile-sidebar">
              <div className="user-profile-sidebar-top">
                <div className="user-profile-img">
                  {/* <img src="assets/img/account/user.jpg" alt=""> */}
                  <img src="https://source.unsplash.com/1920x720/?house" />
                  <button type="button" className="profile-img-btn"></button>
                </div>
                <h4>John Williams</h4>
                <p>
                  {" "}
                  <BsFillPhoneFill className="svg-icons" /> +9198765431
                </p>
              </div>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example">
                  <MdSpaceDashboard className="svg-icons" />
                  <Tab label="Dashboard" value="1" />
                  <FaUserAlt className="svg-icons" />
                  <Tab label="Profile" value="2" />
                  <TbPackages className="svg-icons" />
                  <Tab label="Post New Property" value="6" />
                  <TbPackages className="svg-icons" />
                  <Tab label="Buy Packages" value="3" />
                  <IoCardSharp className="svg-icons" />
                  <Tab label="Your Listings" value="4" />
                  <IoCardSharp className="svg-icons" />
                  <Tab label="Requested Visits" value="7" />
                  <IoCardSharp className="svg-icons" />
                  <Tab label="Scheduled Visits" value="8" />
                  <AiFillLock className="svg-icons" />
                  <Tab label="Security" value="5" />
                  <RiLogoutCircleRFill className="svg-icons" />
                  <Tab label="Logout" />
                </TabList>
              </Box>
            </div>
          </div>
          <div className="col-md-9">
            <div className="user-profile-card user-profile-property">
              <TabPanel value="1">
                <div className="user-profile-wrapper">
                  <div className="row">
                    <div className="col-md-6 col-lg-4">
                      <div className="dashboard-widget dashboard-widget-color-1">
                        <div className="dashboard-widget-info">
                          <h1>0</h1>
                          <span>Approved Listings</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="dashboard-widget dashboard-widget-color-2">
                        <div className="dashboard-widget-info">
                          <h1>0</h1>
                          <span>Pending Listings</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="dashboard-widget dashboard-widget-color-3">
                        <div className="dashboard-widget-info">
                          <h1>0</h1>
                          <span>Rejected Listings</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="dashboard-widget dashboard-widget-color-3">
                        <div className="dashboard-widget-info">
                          <h1>0</h1>
                          <span>Your current active packages</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="dashboard-widget dashboard-widget-color-3">
                        <div className="dashboard-widget-info">
                          <h1>0</h1>
                          <span>Total Leads</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="cur-pakage">Your Current Packages</h3>
                <div className="table_out">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Package Name</th>
                        <th>Num of Listings </th>
                        <th>City</th>
                        <th>Active Date </th>
                        <th>Expire Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                        <td>3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabPanel>
              <TabPanel value="2">
                <div className="dashbrd_cont profile-details">
                  <div className="profile-det-titls">
                    <h3>Account Information</h3>
                  </div>
                  <div className="row default-edit">
                    <div className="col-md-8">
                      <form className="row">
                        <div className="form-group col-md-6">
                          <label>First name</label>
                          <input
                            type="text"
                            className="form-control"
                            value="Suresh"
                          ></input>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Last name</label>
                          <input
                            type="text"
                            className="form-control"
                            value="Malladi"
                          ></input>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Username</label>
                          <input
                            type="text"
                            className="form-control"
                            value="Suresh Malladi"
                          ></input>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Phone</label>
                          <input
                            type="tel"
                            className="form-control"
                            value="+9112345678"
                          ></input>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Email</label>
                          <input
                            type="text"
                            className="form-control"
                            value="teast@gmail.com"
                          ></input>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Birthday</label>
                          <input
                            type="tel"
                            className="form-control"
                            value="11/10/2023"
                          ></input>
                        </div>
                        <div className="form-group col-md-12">
                          <label>Short description</label>
                          <textarea
                            className="form-control"
                            value="Suresh"
                          ></textarea>
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            type="submit"
                            className="mt-2"
                            value="Edit Profile"
                          ></input>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-4">
                      <div className="avathar_icon">
                        <h3>Profile picture</h3>
                        <img src="https://source.unsplash.com/1920x720/?house" />
                      </div>
                    </div>
                  </div>
                  <div className="row edit">
                    <div className="col-md-8">
                      <form className="row">
                        <div className="form-group col-md-6">
                          <label>First name</label>
                          <input type="text" className="form-control"></input>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Last name</label>
                          <input type="text" className="form-control"></input>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Username</label>
                          <input type="text" className="form-control"></input>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Phone</label>
                          <input type="tel" className="form-control"></input>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Email</label>
                          <input type="text" className="form-control"></input>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Birthday</label>
                          <input type="tel" className="form-control"></input>
                        </div>
                        <div className="form-group col-md-12">
                          <label>Short description</label>
                          <textarea className="form-control"></textarea>
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            type="submit"
                            className="mt-2"
                            value="Save"
                          ></input>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-4">
                      <div className="avathar_icon">
                        <h3>Profile picture</h3>
                        <div className="upload_img">
                          <img src="https://source.unsplash.com/1920x720/?house" />
                          {/* <span>Upload Image</span> */}
                        </div>
                        <div>
                          <button>Upload Image</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="3">
                <div className="dashbrd_cont">
                  <div className="profile-det-titls">
                    <h3>Packages</h3>
                  </div>
                  <div className="pakcblo_title">
                    <h5>Unlock Your Listing's Potential: Buy a KeyRite Package Today!"</h5>
                    <h4><span>Venture Beyond Limits:</span> Harness the Power of Metaverse Listings on terraterri!"</h4>
                    <h3 className="mb-0">Choose the Right plan for your real estate
                    </h3>
                  </div>
                  <div className="row">
                    <div className="col-md-12 text-center mt-3 mb-4">
                     
                      <div className="d-flex sel_blo listing_tbs justify-content-center">

                          <button className="actv">Premium Listings </button>
                          <button >Metaverse Listings</button>
                          <button >AirPropx Expo</button>
                          
                      </div>
                    </div>
                  </div>
                  <div className="pk-nme">
                    <h2>Premium Listing Packages</h2>
                  </div>
                  <div className="row slet_out">
                    <div className="col-md-6">
                      <div className="d-flex sel_blo">
                        <span>Select City:</span>
                        <select>
                          <option value="575">Hyderabad</option>
                          <option value="579">Vishakapatnam</option>
                          <option value="580">Bengaluru</option>
                          <option value="581">Mumbai</option>
                          <option value="583">Pune</option>
                          <option value="586">Vijayawada</option>
                          <option value="588">Delhi</option>
                          <option value="597">Sangareddy</option>
                          <option value="598">Ahmedabad</option>
                          <option value="599">Kolkata</option>
                          <option value="600">Chennai</option>
                          <option value="601">Surat</option>
                          <option value="602">Kochi</option>
                          <option value="603">Trivendrum</option>
                          <option value="604">Agra</option>
                          <option value="605">Mysore</option>
                          <option value="606">Patna</option>
                          <option value="607">Amritsar</option>
                          <option value="608">Nagpur</option>
                          <option value="609">Bhopal</option>
                          <option value="610">Rajkot</option>
                          <option value="611">Ranchi</option>
                          <option value="612">Goa</option>
                        </select>
                      </div>
                      {/* Didn't find your city in the dropdown? Select Others */}
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex sel_blo justify-content-end listi-blo">
                        <span>Select No of Listings: </span>
                        <select>
                          <option value="575">1</option>
                          <option value="579">2</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-md-4">
                      <div className="bg-color1">
                        <div className="pricing-item text-center">
                          <h2>GOLD</h2>
                          <h6>15 Days</h6>
                          <h3>₹ 999</h3>
                          <ul>
                            <li>Listings: 1</li>
                          </ul>
                          <button className="purchage-btn">Purchase</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="bg-color2">
                        <div className="pricing-item text-center">
                          <h2>PLATINUM</h2>
                          <h6>90 Days</h6>
                          <h3>₹ 1,750</h3>
                          <ul>
                            <li>Listings: 1</li>
                          </ul>
                          <button className="purchage-btn">Purchase</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="bg-color3">
                        <div className="pricing-item text-center">
                          <h2>DIAMOND</h2>
                          <h6>90 Days</h6>
                          <h3>₹ 3,000</h3>
                          <ul>
                            <li>Listings: 1</li>
                          </ul>
                          <button className="purchage-btn">Purchase</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="pk-nme text-center">
                    <h2>Metaverse Listing Packages</h2>
                    <span>PLATFORM ONLY</span>
                    <p>Connect, Engage, Sell: Leverage Metaverse Listings to Reach New Heights!</p>
                  </div>
                  <div className="row slet_out">
                    <div className="col-md-6">
                      <div className="d-flex sel_blo">
                        <span>Select City:</span>
                        <select>
                          <option value="575">Hyderabad</option>
                          <option value="579">Vishakapatnam</option>
                          <option value="580">Bengaluru</option>
                          <option value="581">Mumbai</option>
                          <option value="583">Pune</option>
                          <option value="586">Vijayawada</option>
                          <option value="588">Delhi</option>
                          <option value="597">Sangareddy</option>
                          <option value="598">Ahmedabad</option>
                          <option value="599">Kolkata</option>
                          <option value="600">Chennai</option>
                          <option value="601">Surat</option>
                          <option value="602">Kochi</option>
                          <option value="603">Trivendrum</option>
                          <option value="604">Agra</option>
                          <option value="605">Mysore</option>
                          <option value="606">Patna</option>
                          <option value="607">Amritsar</option>
                          <option value="608">Nagpur</option>
                          <option value="609">Bhopal</option>
                          <option value="610">Rajkot</option>
                          <option value="611">Ranchi</option>
                          <option value="612">Goa</option>
                        </select>
                      </div>
                      {/* Didn't find your city in the dropdown? Select Others */}
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex sel_blo justify-content-end listi-blo">
                        <span>Select No of Listings: </span>
                        <select>
                          <option value="575">1</option>
                          <option value="579">2</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-md-4">
                      <div className="bg-color1">
                        <div className="pricing-item text-center">
                          <h2>PARAGON</h2>
                          <h6>Metaverse Model House</h6>
                          <h6 className="vald-ot">Validity: 90 Days</h6>
                          <h3>₹ 6000 <span>/month</span></h3>
                          <ul>
                            <li><b>Paid Quatarly</b></li>
                            <li>Listings: 1</li>
                          </ul>
                          <button className="purchage-btn">Purchase</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="bg-color2">
                      <div className="pricing-item text-center">
                          <h2>BUILDER BOX</h2>
                          <h6>Metaverse Builder's Office</h6>
                          <h6 className="vald-ot">Validity: 90 Days</h6>
                          <h3>₹ 6000 <span>/month</span></h3>
                          <ul>
                            <li><b>Paid Quatarly</b></li>
                            <li>Listings: 1</li>
                          </ul>
                          <button className="purchage-btn">Purchase</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="bg-color3">
                        <div className="pricing-item text-center">
                          <h2>COMBO</h2>
                          <h6>Paragon + Builder Box</h6>
                          <h6 className="vald-ot">Validity: 90 Days</h6>
                          <h3>₹ 9,000 <span>/month</span></h3>
                          <ul>
                          <li><b>Paid Quatarly</b></li>
                            <li>Listings: 1+1</li>
                          </ul>
                          <button className="purchage-btn">Purchase</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr></hr>

                  <div className="pk-nme text-center">
                    <h2>Metaverse Listing Packages</h2>
                    <span>PLATFORM + PROMOTION</span>
                    <p>Connect, Engage, Sell: Leverage Metaverse Listings to Reach New Heights!</p>
                  </div>
                  <div className="row slet_out">
                    <div className="col-md-6">
                      <div className="d-flex sel_blo">
                        <span>Select City:</span>
                        <select>
                          <option value="575">Hyderabad</option>
                          <option value="579">Vishakapatnam</option>
                          <option value="580">Bengaluru</option>
                          <option value="581">Mumbai</option>
                          <option value="583">Pune</option>
                          <option value="586">Vijayawada</option>
                          <option value="588">Delhi</option>
                          <option value="597">Sangareddy</option>
                          <option value="598">Ahmedabad</option>
                          <option value="599">Kolkata</option>
                          <option value="600">Chennai</option>
                          <option value="601">Surat</option>
                          <option value="602">Kochi</option>
                          <option value="603">Trivendrum</option>
                          <option value="604">Agra</option>
                          <option value="605">Mysore</option>
                          <option value="606">Patna</option>
                          <option value="607">Amritsar</option>
                          <option value="608">Nagpur</option>
                          <option value="609">Bhopal</option>
                          <option value="610">Rajkot</option>
                          <option value="611">Ranchi</option>
                          <option value="612">Goa</option>
                        </select>
                      </div>
                      {/* Didn't find your city in the dropdown? Select Others */}
                    </div>
                   
                    <div className="col-md-6">
                      <div className="d-flex sel_blo justify-content-end listi-blo">
                        <span>Select No of Listings: </span>
                        <select>
                          <option value="575">1</option>
                          <option value="579">2</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 text-center mt-3">
                      <h6>Package Types</h6>
                      <div className="d-flex sel_blo justify-content-center">

                          <button className="actv">Generator</button>
                          <button >Enhancer</button>
                          <button >Turbo Charger</button>
                          
                      </div>
<p>View Details</p>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-md-4">
                      <div className="bg-color1">
                        <div className="pricing-item text-center">
                          <h2>PARAGON</h2>
                          <h6>Metaverse Model House</h6>
                          <h6 className="vald-ot">Validity: 90 Days</h6>
                          <h3>₹ 15000 <span>/month</span></h3>
                          <ul>
                            <li><b>Paid Quatarly</b></li>
                            <li>Listings: 1</li>
                          </ul>
                          <button className="purchage-btn">Purchase</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="bg-color2">
                      <div className="pricing-item text-center">
                          <h2>BUILDER BOX</h2>
                          <h6>Metaverse Builder's Office</h6>
                          <h6 className="vald-ot">Validity: 90 Days</h6>
                          <h3>₹ 15000 <span>/month</span></h3>
                          <ul>
                            <li><b>Paid Quatarly</b></li>
                            <li>Listings: 1</li>
                          </ul>
                          <button className="purchage-btn">Purchase</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="bg-color3">
                        <div className="pricing-item text-center">
                          <h2>COMBO</h2>
                          <h6>Paragon + Builder Box</h6>
                          <h6 className="vald-ot">Validity: 90 Days</h6>
                          <h3>₹ 27000 <span>/month</span></h3>
                          <ul>
                          <li><b>Paid Quatarly</b></li>
                            <li>Listings: 1+1</li>
                          </ul>
                          <button className="purchage-btn">Purchase</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr></hr>

<div className="pk-nme text-center">
  <h2>AIRPROPX</h2>
  <h6 className="mt-3">THE METAVERSE REALESTATE EXPO</h6>
  <p>Showcase Your Projects at the Premier Metaverse Expo"<br></br>Expand Your Horizons</p>
</div>
<div className="row slet_out">
  <div className="col-md-6">
    <div className="d-flex sel_blo">
      <span>Select City:</span>
      <select>
        <option value="575">Hyderabad</option>
        <option value="579">Vishakapatnam</option>
        <option value="580">Bengaluru</option>
        <option value="581">Mumbai</option>
        <option value="583">Pune</option>
        <option value="586">Vijayawada</option>
        <option value="588">Delhi</option>
        <option value="597">Sangareddy</option>
        <option value="598">Ahmedabad</option>
        <option value="599">Kolkata</option>
        <option value="600">Chennai</option>
        <option value="601">Surat</option>
        <option value="602">Kochi</option>
        <option value="603">Trivendrum</option>
        <option value="604">Agra</option>
        <option value="605">Mysore</option>
        <option value="606">Patna</option>
        <option value="607">Amritsar</option>
        <option value="608">Nagpur</option>
        <option value="609">Bhopal</option>
        <option value="610">Rajkot</option>
        <option value="611">Ranchi</option>
        <option value="612">Goa</option>
      </select>
    </div>
  </div>
  <div className="col-md-6">
    <div className="d-flex sel_blo sel_bloo">
      <span>Select Expo Dates:</span>
      <select>
        <option value="575">12-March-2024</option>
        <option value="575">12-March-2024</option>
        <option value="575">12-March-2024</option>

      </select>
    </div>
  </div>
 
  
</div>

<div className="row mt-5 airprx_ot">
  <div className="col-md-3">
    {/* <div className="bg-color1">
      <div className="pricing-item text-center">
        <h2>PARAGON</h2>
        <h6>Metaverse Model House</h6>
        <h6 className="vald-ot">Validity: 90 Days</h6>
        <h3>₹ 15000 <span>/month</span></h3>
        <ul>
          <li><b>Paid Quatarly</b></li>
          <li>Listings: 1</li>
        </ul>
        <button className="purchage-btn">Purchase</button>
      </div>
    </div> */}
  </div>
  <div className="col-md-6">
    <div className="bg-color1 bg-color-pnk">
    <div className="pricing-item text-center">
        <h2>AIRPROPX</h2>
        <h6>THE METAVERSE REALESTATE EXPO
</h6>
        <h6 className="vald-ot">Expo Date: 10-March-2024</h6>
        <h3>₹ 30000 </h3>
        <ul>
          <li><b>STANDARD STALL</b></li>
        
        </ul>
        <button className="purchage-btn">Purchase</button>
      </div>
    </div>
  </div>
  <div className="col-md-3">
    {/* <div className="bg-color3">
      <div className="pricing-item text-center">
        <h2>COMBO</h2>
        <h6>Paragon + Builder Box</h6>
        <h6 className="vald-ot">Validity: 90 Days</h6>
        <h3>₹ 27000 <span>/month</span></h3>
        <ul>
        <li><b>Paid Quatarly</b></li>
          <li>Listings: 1+1</li>
        </ul>
        <button className="purchage-btn">Purchase</button>
      </div>
    </div> */}
  </div>
</div>


                  <div className="row mt-5 airprx_ot">
                    <div className="col-md-4">
                      <div className="bg-color1">
                        <div className="pricing-item text-center">
                          <h2>AIRPROPX</h2>
                          <h6>The Metaverse Realestate Expo</h6>
                          <h6 className="vald-ot">Expo Date: 10-March-2024</h6>
                          <h3>₹ 90000</h3>
                          <ul>
                            <li><b>GOLD STALL</b></li>
                           
                          </ul>
                          <button className="purchage-btn">Purchase</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="bg-color2">
                      <div className="pricing-item text-center">
                          <h2>AIRPROPX</h2>
                          <h6>The Metaverse Realestate Expo</h6>
                          <h6 className="vald-ot">Expo Date: 10-March-2024</h6>
                          <h3>₹ 1,80,000</h3>
                          <ul>
                            <li><b>PREMIUM STALL</b></li>
                         
                          </ul>
                          <button className="purchage-btn">Purchase</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="bg-color3">
                        <div className="pricing-item text-center">
                          <h2>AIRPROPX</h2>
                          <h6>The Metaverse Realestate Expo</h6>
                          <h6 className="vald-ot">Expo Date: 10-March-2024</h6>
                          <h3>₹  2,70,000</h3>
                          <ul>
                          <li><b> DAIMOND STALL </b></li>
                            
                          </ul>
                          <button className="purchage-btn">Purchase</button>
                        </div>
                      </div>
                    </div>
                  </div>
<p className="viw_wnt">Want to learn more about AirPropx and its sponsorships?  <a className="dropdown-item" href="#">View</a> </p>
                </div>
              </TabPanel>
              <TabPanel value="4">
                <div className="dashbrd_cont">
                  <div className="profile-det-titls">
                    <h3>Your Listings</h3>
                  </div>

                  <div className="row mt-4">
                    <div className="col-md-6">
                      <h4>Package: 1</h4>
                    </div>
                    <div className="col-md-6 text-right">
                      <span className="mr-3">
                        <b>Purchased On:</b> 11-11-2023
                      </span>{" "}
                      <span>
                        <b>Expires By: </b>11-11-2023
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <ul className="d-flex listing_out">
                        <li>
                          <h5>
                            Active: <span>(14)</span>
                          </h5>{" "}
                        </li>
                        <li>
                          <h5>
                            Under Review: <span>(50)</span>
                          </h5>{" "}
                        </li>
                        <li>
                          <h5>
                            Rejected: <span>(20)</span>
                          </h5>{" "}
                        </li>
                        <li>
                          <h5>
                            Balance: <span>(24)</span>
                          </h5>{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="table_out">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Listings</th>
                          <th>Responses</th>
                          <th>Edit</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <p className="list_data mb-2">
                              Project Name / Apartment / BHK / SFT / Price /
                              Location / City
                            </p>
                            <div className="d-flex">
                              <p className="mb-0 mr-5">
                                <b>ID</b> : 123456
                              </p>
                              <p>
                                <b>Posted On</b>: 11-11-2023
                              </p>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="list_data">
                              40
                            </a>
                          </td>
                          <td>Edit</td>
                        </tr>
                        <tr>
                          <td>
                            <p className="list_data mb-2">
                              Project Name / Apartment / BHK / SFT / Price /
                              Location / City
                            </p>
                            <div className="d-flex">
                              <p className="mb-0 mr-5">
                                <b>ID</b> : 123456
                              </p>
                              <p>
                                <b>Posted On</b>: 11-11-2023
                              </p>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="list_data">
                              40
                            </a>
                          </td>
                          <td>Edit</td>
                        </tr>
                        <tr>
                          <td>
                            <p className="list_data mb-2">
                              Project Name / Apartment / BHK / SFT / Price /
                              Location / City
                            </p>
                            <div className="d-flex">
                              <p className="mb-0 mr-5">
                                <b>ID</b> : 123456
                              </p>
                              <p>
                                <b>Posted On</b>: 11-11-2023
                              </p>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="list_data">
                              40
                            </a>
                          </td>
                          <td>Edit</td>
                        </tr>
                        <tr>
                          <td>
                            <p className="list_data mb-2">
                              Project Name / Apartment / BHK / SFT / Price /
                              Location / City
                            </p>
                            <div className="d-flex">
                              <p className="mb-0 mr-5">
                                <b>ID</b> : 123456
                              </p>
                              <p>
                                <b>Posted On</b>: 11-11-2023
                              </p>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="list_data">
                              40
                            </a>
                          </td>
                          <td>Edit</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td>
                            <button className="btn"> View More </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* <div className="table_out">
                    <table className="table table_nw">
                      <thead>
                        <tr>

                          <th>S No</th>
                          <th>Name</th>
                          <th>Email ,Phone</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td></td>
                          <td colSpan={3}><p className='mb-0'>2 BHK Apartments for <b>36 Lac</b> in <b>SKYPXIRIS</b></p></td>
                        </tr>
                        <tr>
                          <td>M</td>
                          <td>Mohan Krishna</td>
                          <td>
                            <p className='mb-0'><a href='tel:+91 9876543210'>+91 9876543210</a></p>
                            <p className='mb-0'><a href='mailto:testing@gmail.com'>testing@gmail.com</a></p>
                          </td>
                          <td>
                            <p className='mb-0'>Received on</p>
                            <p className='mb-0'><b>14 Nov 2023</b></p>
                          </td>
                        </tr>
                        <tr>
                        </tr>
                        
                       
                      </tbody>
                    </table>
                  </div> */}

                  {/* after-click-div */}

                  <div>
                    <div className="table_out">
                      <div className="profile-det-titls">
                        <h3>Responses</h3>
                      </div>
                      <div className="mb-4">
                        <div className="d-flex mb-2">
                          <p className="mr-2 pr-2">Property ID: 70560675</p> |{" "}
                          <p className="ml-2">
                            <a href="#">
                              2BHK Multistorey Appartment For sale{" "}
                            </a>
                          </p>
                        </div>
                        <div className="d-flex">
                          <p className="mr-2">Posted: 18-jan-2024</p> |{" "}
                          <p className="mr-2 ml-2">Posted by: Mohan</p> |{" "}
                          <p className="ml-2">Expire : 18-May-2024</p>
                        </div>
                      </div>
                      <table className="table table_nw">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Contact Details</th>
                            <th>Email</th>
                            <th>Received On</th>
                            <th>Request Visit</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Sanjay Nalli (1)</td>
                            <td>
                              <a href="+91 987654321">+91 987654321</a>
                            </td>
                            <td>
                              <a href="mailto:test@gmail.com">test@gmail.com</a>
                            </td>
                            <td>Jan-10-2024</td>
                            <td>
                              <button className="gr-btn">Yes</button>
                              <br></br>
                              <button className="rd-btn">No</button>
                            </td>
                            {/* <td>Mohan Krishna</td>
                            <td>
                              <p className='mb-0'><a href='tel:+91 9876543210'>+91 9876543210</a></p>
                              <p className='mb-0'><a href='mailto:testing@gmail.com'>testing@gmail.com</a></p>
                            </td>
                            <td>
                              <p className='mb-0'>Received on</p>
                              <p className='mb-0'><b>14 Nov 2023</b></p>
                            </td> */}
                          </tr>
                          <tr></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* <div className='row mt-5'>
                    <div className='col-md-6'>
                      <h4>Package: 2</h4>
                    </div>
                    <div className='col-md-6 text-right'>
                      <span className='mr-3'><b>Purchased On:</b> 11-11-2023</span> <span><b>Expires By: </b>11-11-2023</span>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-12'>
                      <ul className='d-flex listing_out'>
                        <li><h5>Active: <span>(14)</span></h5> </li>
                        <li><h5>Under Review: <span>(50)</span></h5> </li>
                        <li><h5>Rejected: <span>(20)</span></h5> </li>
                        <li><h5>Balance: <span>(24)</span></h5> </li>
                        </ul>
</div>
                  </div>
                <div className="table_out">
                    <table className="table">
                      <thead>
                        <tr>

                          <th>Listings</th>
                          <th>Responses</th>
                          <th>Edit</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
    
                          <td>
                            
                            <p className='list_data mb-2'>Project Name / Apartment / BHK / SFT / Price / Location / City</p>
                            <div className='d-flex'>
                            <p className='mb-0 mr-5'><b>ID</b> : 123456</p>
                            <p><b>Posted On</b>: 11-11-2023</p>
                          </div>
                          </td>
                          <td>1</td>
                          <td>Edit</td>
                        </tr>
                        <tr>
    
                          <td>
                            
                            <p className='list_data mb-2'>Project Name / Apartment / BHK / SFT / Price / Location / City</p>
                            <div className='d-flex'>
                            <p className='mb-0 mr-5'><b>ID</b> : 123456</p>
                            <p><b>Posted On</b>: 11-11-2023</p>
                          </div>
                          </td>
                          <td>10</td>
                          <td>Edit</td>
                        </tr>
                        <tr>
    
                          <td>
                            
                            <p className='list_data mb-2'>Project Name / Apartment / BHK / SFT / Price / Location / City</p>
                            <div className='d-flex'>
                            <p className='mb-0 mr-5'><b>ID</b> : 123456</p>
                            <p><b>Posted On</b>: 11-11-2023</p>
                          </div>
                          </td>
                          <td>50</td>
                          <td>Edit</td>
                        </tr>
                        <tr>
    
                          <td>
                            
                            <p className='list_data mb-2'>Project Name / Apartment / BHK / SFT / Price / Location / City</p>
                            <div className='d-flex'>
                            <p className='mb-0 mr-5'><b>ID</b> : 123456</p>
                            <p><b>Posted On</b>: 11-11-2023</p>
                          </div>
                          </td>
                          <td>60</td>
                          <td>Edit</td>
                        </tr>
                        
                      </tbody>
                    </table>
                  </div> */}
                </div>
              </TabPanel>
              <TabPanel value="5">
                <div className="dashbrd_cont profile-details">
                  <div className="profile-det-titls">
                    <h3>Security</h3>
                  </div>
                  <div className="row">
                    <div className="col-md-8">
                      <form className="row">
                        <div className="col-md-12">
                          <p>Do You Want to Change your Existing Password</p>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Enter New Password</label>
                          <input type="text" className="form-control"></input>
                        </div>
                        <div className="form-group col-md-6">
                          <label>ReEnter New Password</label>
                          <input type="text" className="form-control"></input>
                        </div>

                        <div className="form-group col-md-6">
                          <input
                            type="submit"
                            className="mt-2"
                            value="Update"
                          ></input>
                        </div>
                      </form>

                      <form className="row mt-4">
                        <div className="form-group col-md-6">
                          <label>Enter OTP</label>
                          <div className="d-flex otp_blo">
                            <input type="text" className="form-control"></input>
                            <input type="text" className="form-control"></input>
                            <input type="text" className="form-control"></input>
                            <input type="text" className="form-control"></input>
                            <input type="text" className="form-control"></input>
                            <input type="text" className="form-control"></input>
                          </div>
                        </div>
                        <div className="form-group col-md-6"></div>
                        <div className="form-group col-md-6">
                          <input
                            type="submit"
                            className="mt-2"
                            value="Update"
                          ></input>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="6">
                <div className="dashbrd_cont">
                    <div className="profile-det-titls">
                      <h3>Post New Property</h3>
                  </div>
                  <div className="table_out">
                     
                     <table className="table table_nw">
                       <thead>
                         <tr>
                           <th>Builder Properties</th>
                           <th>Exclusive Agents</th>
                           <th>Agent Properties</th>
                           <th>Owner Properties</th>
                         </tr>
                       </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>1</td>
                          <td>1</td>
                          <td>1</td>
                        </tr>
                         
                       </tbody>
                     </table>
                   </div>
                </div>
              </TabPanel>
              <TabPanel value="7">
                <div className="dashbrd_cont">
                  <div className="profile-det-titls">
                    <h3>Requested Visits</h3>
                  </div>
                  <div>
                    <div className="table_out">
                      {/* <div className='mb-4'>
                              <div className='d-flex mb-2'><p className='mr-2 pr-2'>Property ID: 70560675</p> | <p className='ml-2'><a href="#">2BHK Multistorey Appartment For sale </a></p></div>
                              <div className='d-flex'><p className='mr-2'>Posted: 18-jan-2024</p> | <p  className='mr-2 ml-2'>Posted by: 18-jan-2024</p> | <p  className='ml-2'>Expire : 18-jan-2024</p></div>
                      </div> */}
                      <table className="table table_nw">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Contact Details</th>
                            <th>Email</th>
                            <th>Property Details</th>
                            <th>Requested on</th>
                            <th>Accept / Reject</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Mallikarjun (1)</td>
                            <td>
                              <a href="+91 987654321">+91 987654321</a>
                            </td>
                            <td>
                              <a href="mailto:test@gmail.com">test@gmail.com</a>
                            </td>
                            <td>2BHK Multistorey Appartment For sale</td>
                            <td>Jan-10-2024</td>
                            <td>
                              <div>
                              <button className="gr-btn mr-1">Yes</button>
                            
                                <button className="rd-btn">No</button>
                                </div>
                            </td>
                          </tr>
                          <tr></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="8">
                <div className="dashbrd_cont">
                  <div className="profile-det-titls">
                    <h3>Schedule Visits</h3>
                  </div>

                  <div>
                    <div className="table_out">
                      {/* <div className='mb-4'>
                              <div className='d-flex mb-2'><p className='mr-2 pr-2'>Property ID: 70560675</p> | <p className='ml-2'><a href="#">2BHK Multistorey Appartment For sale </a></p></div>
                              <div className='d-flex'><p className='mr-2'>Posted: 18-jan-2024</p> | <p  className='mr-2 ml-2'>Posted by: 18-jan-2024</p> | <p  className='ml-2'>Expire : 18-jan-2024</p></div>
                      </div> */}
                      <table className="table table_nw">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Contact Details</th>
                            <th>Email</th>
                            <th>Visit Schedule</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Mallikarjun (1)</td>
                            <td>
                              <a href="+91 987654321">+91 987654321</a>
                            </td>
                            <td>
                              <a href="mailto:test@gmail.com">test@gmail.com</a>
                            </td>
                            <td>Jan-10-2024</td>
                            {/* <td><button className='gr-btn'>Yes</button><br></br><button className='rd-btn'>No</button></td> */}
                          </tr>
                          <tr></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </div>
          </div>
        </div>
      </TabContext>
    </Box>
  );
}
