import React, { useState } from "react";
import SideNav from "@/components/SidebarPro/SideNav";
import { MdEdit } from "react-icons/md";
import { IoIosCheckboxOutline } from "react-icons/io";
import { TbCheckbox } from "react-icons/tb";
import { RiCheckboxIndeterminateLine } from "react-icons/ri";
import Link from "next/link";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

const BuyerAirpropx = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>



      <main className="main dashboard-main airprpx-meta">


        <div className="row">
          <div className="col-md-2">
            <SideNav />
          </div>
          <div className="col-md-10">
            <div className="dashbrd_cont">
              {" "}
              <div className="profile-details">
                <div className="d-flex justify-content-between">
                <h5>AirPropX</h5>
                <h6>User: Mahesh</h6>
                </div>
                <Tabs>
    <TabList>
      <Tab> Visited Expo's</Tab>
      <Tab>Future Expo's</Tab>
      <Tab>OnGoing Expo's</Tab>
    </TabList>

    <TabPanel>
    

    <div className="table_out mb-5 pb-2">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Expo Dates</th>
                            <th>Visited Time </th>
                           
                            <th>Visited Stall</th>
                           
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="listTBody">
                            <td>
                             
                              <div className="d-flex">
                                <p className="mb-0 mr-5 highlighted">
                                  <b>HYDERABAD - COMMERCIAL</b><br></br>
                                  Date: 02-11-2024
                                </p>
                               
                              </div>
                            </td>
                            <td
                              className="highlighted40"
                           
                            >
                              10:00 AM
                            </td>
                          
                            <td
                              className="highlighted40"
                          
                            >
                              Daimond
                            </td>
                           
                          </tr>
                     
                        </tbody>
                      </table>
                    </div>


    </TabPanel>
    <TabPanel>
    

    <div className="table_out mb-5 pb-2">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Expo Dates</th>
                           
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="listTBody">
                            <td>
                             
                              <div className="d-flex">
                                <p className="mb-0 mr-5 highlighted">
                                  <b>HYDERABAD - COMMERCIAL</b><br></br>
                                  Date: 02-11-2024
                                </p>
                               
                              </div>
                            </td>
                           
                          </tr>
                    
                        </tbody>
                      </table>
                    </div>


    </TabPanel>
    <TabPanel>
    

    <div className="table_out mb-5 pb-2">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Expo Dates</th>
                            <th>Visited Time </th>
                           
                            <th>Visited Stall</th>
                           
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="listTBody">
                            <td>
                             
                              <div className="d-flex">
                                <p className="mb-0 mr-5 highlighted">
                                  <b>HYDERABAD - COMMERCIAL</b><br></br>
                                  Date: 02-11-2024
                                </p>
                               
                              </div>
                            </td>
                            <td
                              className="highlighted40"
                           
                            >
                              10:00 AM
                            </td>
                          
                            <td
                              className="highlighted40"
                          
                            >
                              Daimond
                            </td>
                           
                          </tr>
                     
                        </tbody>
                      </table>
                    </div>
    </TabPanel>

  </Tabs>
              
              </div>
            </div>
          </div>
        </div>


        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>TEST</Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
      </main>


    </>
  );
};

export default BuyerAirpropx;
