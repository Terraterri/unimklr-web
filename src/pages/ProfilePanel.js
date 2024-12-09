import React from "react";
import SideNav from "@/components/SidebarPro/SideNav";
import { MdEdit } from "react-icons/md";
const ProfilePanel = () => {
  return (
    <>
      

      <main className="main dashboard-main">
   <div className="py-120 px-30 dash_out">

   <div className="row">
           <div className="col-md-3">
            <div className="user-profile-sidebar">
             <SideNav />
             </div>
           </div>
           <div className="col-md-9">
           <div className="user-profile-card profile-details">
                  <div className="profile-det-titls">
                    <h3>Profile Information</h3>
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
                          <label>State, City</label>
                          <input
                            type="text"
                            className="form-control"
                            value="Telangana, Hyderabad"
                          ></input>
                        </div>
                       
                     
                        <div className="form-group col-md-12">
                          <label>Address</label>
                          <textarea
                            className="form-control"
                            value=""
                          ></textarea>
                        </div>
                        {/* <div className="form-group col-md-6">
                          <input
                            type="submit"
                            className="mt-2"
                            value="Edit Profile"
                          ></input>
                        </div> */}
                      </form>
                    </div>
                    <div className="col-md-4">
                      <div className="avathar_icon">
                        <h3>Profile picture</h3>
                        <img src="assets/img/extilla1.jpeg" />
                      </div>
                      <div className="form-group text-center">
                          <input
                            type="submit"
                            className="mt-2"
                            value="Edit Profile"
                          ></input>
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

export default ProfilePanel;
