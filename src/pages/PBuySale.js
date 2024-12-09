import React from "react";
import SideNav from "@/components/SidebarPro/SideNav";
import { MdEdit } from "react-icons/md";
const PBuySale = () => {
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
      <div className="profile-det-titls">
        <h5 className="PremiumAccount mb-4">PREMIUM LISTINGS</h5>
        <h3 className="PremiumAccount1"> Buy Packages</h3>
      </div>
      <div className="pakcblo_title">
        <h5>
          Unlock Your Listing's Potential: Buy a Terraterri Packages Today!"
        </h5>
        {/* <h4>
                    <span>Venture Beyond Limits:</span> Harness the Power of
                    Metaverse Listings on terraterri!"
                  </h4> */}
        <h3 className="mb-0">Choose the Right plan for your real estate</h3>
      </div>
      <div className="row">
        <div className="col-md-12 text-center mt-3">
          <div className="d-flex sel_blo listing_tbs justify-content-center">
            <button className="actv">Premium Listings </button>
            {/* <button>Metaverse Listings</button>
                        <button>AirPropx Expo</button> */}
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
            <select className="form-control formcontrol">
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
            <select className="form-control formcontrol">
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
              <h2 className="gold">GOLD</h2>
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
              <h2 className="gold">PLATINUM</h2>
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
              <h2 className="gold">DIAMOND</h2>
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
               </div>
           </div>
         </div>
      </main>
      


     
    </>
  );
};

export default PBuySale;
