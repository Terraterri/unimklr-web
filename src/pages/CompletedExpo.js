import React from "react";
import SideNav from "@/components/SidebarPro/SideNav";
import { MdEdit } from "react-icons/md";

const CompletedExpo = () => {
  return (
    <>
      

    
      
  
      <div className="row">
        <div className="col-md-2">
          <SideNav />
        </div>
        <div className="col-md-10">
          <div className="dashbrd_cont">
          


      <div className="sb2-2">
        <div className="sb2-2-3">
          <div className="row">
            <div className="col-md-12">
              <div className="box-inn-sp">
                <div className="inn-title">
                  <h4 className="ongoingexpo pb-5">Completed Expos</h4>
                  <div className="row searchBox">
                    <div className="col-md-1">
                      <label className="BuildName">City</label>
                    </div>
                    <div className="col-md-3">
                      <select
                        className="form-control cityIn formcontrol"
                        aria-placeholder="Select Country"
                      >
                        <option value={1}>select</option>
                        <option value={2}>kakinada</option>
                        <option value={3}>vizag</option>
                      </select>
                    </div>
                    <div className="col-md-1">
                      <label className="BuildName">Date</label>
                    </div>
                    <div className="col-md-3">
                      <input type="date" className="form-control" />
                    </div>
                    <div className="col-md-3">
                      <input
                        type="text"
                        className="form-control searchh"
                        placeholder="Search"
                      ></input>
                    </div>
                    <div className="col-md-1 mt-4">
                      <button className="BuildBtn">Search</button>
                    </div>
                  </div>
                </div>
                <div className="tab-inn">
                  <div className="table-responsive table-desi">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>s.no</th>
                          <th>Expo-Code</th>
                          <th>City</th>
                          <th>FROM DATE </th>
                          <th>TO DATE </th>
                          <th>Responces</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span className="list-img">1</span>
                          </td>
                          <td>
                            <a href="#">
                              <span className="list-enq-name">
                                INHYDJAN08-2024
                              </span>
                            </a>
                          </td>
                          <td>Hyderabad</td>
                          <td>02-02-2024</td>
                          <td>03-02-2024</td>
                          <td
                            className="highlighted40"
                            onClick={(e) => {
                              handleChange(e, "400");
                            }}
                          >
                            <p className="higlight400"> 40</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="list-img">2</span>
                          </td>
                          <td>
                            <a href="#">
                              <span className="list-enq-name">
                                INHYDJAN08-2024
                              </span>
                            </a>
                          </td>
                          <td>Hyderabad</td>
                          <td>02-02-2024</td>
                          <td>03-02-2024</td>
                          <td
                            className="highlighted40"
                            onClick={(e) => {
                              handleChange(e, "400");
                            }}
                          >
                            <p className="higlight400"> 40</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="list-img">3</span>
                          </td>
                          <td>
                            <a href="#">
                              <span className="list-enq-name">
                                INHYDJAN08-2024
                              </span>
                            </a>
                          </td>
                          <td>Hyderabad</td>
                          <td>02-02-2024</td>
                          <td>03-02-2024</td>
                          <td
                            className="highlighted40"
                            onClick={(e) => {
                              handleChange(e, "400");
                            }}
                          >
                            <p className="higlight400"> 40</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="list-img">4</span>
                          </td>
                          <td>
                            <a href="#">
                              <span className="list-enq-name">
                                INHYDJAN08-2024
                              </span>
                            </a>
                          </td>
                          <td>Hyderabad</td>
                          <td>02-02-2024</td>
                          <td>03-02-2024</td>
                          <td
                            className="highlighted40"
                            onClick={(e) => {
                              handleChange(e, "400");
                            }}
                          >
                            <p className="higlight400"> 40</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="list-img">5</span>
                          </td>
                          <td>
                            <a href="#">
                              <span className="list-enq-name">
                                INHYDJAN08-2024
                              </span>
                            </a>
                          </td>
                          <td>Hyderabad</td>
                          <td>02-02-2024</td>
                          <td>03-02-2024</td>
                          <td
                            className="highlighted40"
                            onClick={(e) => {
                              handleChange(e, "400");
                            }}
                          >
                            <p className="higlight400"> 40</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="list-img">6</span>
                          </td>
                          <td>
                            <a href="#">
                              <span className="list-enq-name">
                                INHYDJAN08-2024
                              </span>
                            </a>
                          </td>
                          <td>Hyderabad</td>
                          <td>02-02-2024</td>
                          <td>03-02-2024</td>
                          <td
                            className="highlighted40"
                            onClick={(e) => {
                              handleChange(e, "400");
                            }}
                          >
                            <p className="higlight400"> 40</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="list-img">7</span>
                          </td>
                          <td>
                            <a href="#">
                              <span className="list-enq-name">
                                INHYDJAN08-2024
                              </span>
                            </a>
                          </td>
                          <td>Hyderabad</td>
                          <td>02Post New Property-02-2024</td>
                          <td>03-02-2024</td>
                          <td
                            className="highlighted40"
                            onClick={(e) => {
                              handleChange(e, "400");
                            }}
                          >
                            <p className="higlight400"> 40</p>
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
          </div>
        </div>
      </div>




    </>
  );
};

export default CompletedExpo;
