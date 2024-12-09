import React, { useState } from "react";
import SideNav from "@/components/SidebarPro/SideNav";
import { MdEdit } from "react-icons/md";
import { IoIosCheckboxOutline } from "react-icons/io";
import { TbCheckbox } from "react-icons/tb";
import { RiCheckboxIndeterminateLine } from "react-icons/ri";
import Link from "next/link";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

const ContactListed = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <main className="main dashboard-main">
        <div className="row">
          <div className="col-md-2">
            <SideNav />
          </div>
          <div className="col-md-10">
            <div className="dashbrd_cont">
              {" "}
              <div className="profile-details">
                <h5>Contacted Viewed</h5>

                <Tabs>
                  <TabList>
                    <Tab> Projects</Tab>
                    <Tab>Properties</Tab>
                    <Tab>Paragon</Tab>
                    <Tab>Builder Box</Tab>
                  </TabList>

                  <TabPanel>
                    <h6 className="tabinr-title">
                      <span>Projects</span> 22151 Viewed
                    </h6>
                    <div className="row shorlist-out">
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <h6 className="tabinr-title">
                      <span>Properties</span> 22151 Viewed
                    </h6>
                    <div className="row">
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <h6 className="tabinr-title">
                      <span>Paragon</span> 22151 Viewed
                    </h6>
                    <div className="row">
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <h6 className="tabinr-title">
                      <span>Builder Box</span> 22151 Viewed
                    </h6>
                    <div className="row">
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                      <div className="col-md-3">
                        <Link className="list-itms" href="/singleProject/141">
                          <div className="listing-item">
                            <div className="listing-img">
                              <img
                                alt="property"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                data-nimg="1"
                                src="https://terraterri-website-images.s3.us-east-2.amazonaws.com/FYZUlJDfmxFNMf8xOLekxz2PCIFzNqzElDhSx8up.webp"
                              />
                            </div>
                            <div className="listing-content">
                              <h4 className="listing-title">
                                The Worldd of Joy
                              </h4>
                              <p className="listing-sub-title">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path>
                                </svg>
                                Bachupally, sublocality,HYD
                              </p>
                              <div className="listing-price">
                                <div className="listing-price-info">
                                  <span className="listing-price-title">
                                    Starts From
                                  </span>
                                  <h6 className="listing-price-amount">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 24 24"
                                      font-size="19"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                                    </svg>
                                    8400000
                                  </h6>
                                </div>
                              </div>
                              <p className="d-flex align-items-center justify-content-between">
                                <span className="mr-3">Under....</span> By:
                                06-10-2024
                              </p>
                              <div className="listing-bottom">
                                <div className="listing-author">
                                  <p className="ar_grp">
                                    <span>By:</span> Urbanrise
                                  </p>
                                </div>
                                <Link
                                  className="listing-btn"
                                  href="/singleProject/141"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button onClick={handleShow}>Contact Details</button>
                      </div>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Contact Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <label>Name:</label>
              <label>Phone:</label>
            </form>
          </Modal.Body>
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

export default ContactListed;
