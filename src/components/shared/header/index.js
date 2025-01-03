"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Offcanvas from "react-bootstrap/Offcanvas";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/router";
import { UserContext, useUser } from "../../../context/UserContext";
import { useContext } from "react";

export default function Home() {
  const { user, setUser } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const router = useRouter();

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {

    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }

  };


  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground);


  }
  useEffect(() => {
    setIsOpen(false);
  }, []);

  const logOut = () => {
    if (confirm("Do you want to Logout ?")) {
      setUser(null);
      localStorage.removeItem("userToken");
      router.push("/");
    }
  };

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="description" content></meta>
        <meta name="keywords" content></meta>
        <title>Unimakler</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="assets/img/logo/terraterri-favicon.png"
        ></link>
      </Head>



      <section className={navbar ? "header-part active" : "header-part"} >

        <header className="header header_otr">

          <div className="main-navigation">
            <nav className="navbar navbar-expand-lg">
              <div className="container" style={{ maxHeight: "80px" }}>
                <Link className="navbar-brand" href="/">
                  <Image
                    width={150}
                    height={50}
                    src={"/assets/img/logo/unimakler-final.png"}
                    alt="logo"
                  />
                </Link>
                <div className="mobile-menu-right">
               
                </div>
                <div className="collapse navbar-collapse" id="main_nav">
                  <ul className="navbar-nav">
           
                    <li className="nav-item">
                      <Link className="nav-link" href="/">
                        Home
                      </Link>
                    </li>
                   

                    <li className="nav-item">
                      <Link
                        className="nav-link dropdown-toggle"
                        href="#"
                        target="_blank"
                      >
                        About us
                      </Link>
                      <ul className="dropdown-menu fade-down">
                        <li>
                          <Link className="dropdown-item" href="about">
                            About Company
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="ourService">
                            Our Services
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        href="/international"
                      >
                        International
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        className="nav-link "
                        href="franchise"
                      >
                        Own a Franchise
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="buddy-service">
                        Buddy Services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/career">
                        Careers
                      </Link>
                    </li>
                  </ul>

                </div>
              </div>
            
            </nav>

            <div className="mobile-toggle">
              <HiMiniBars3 onClick={() => setShow(true)} />
            </div>
          </div>
        </header>
      </section>
      <Offcanvas show={show} onHide={() => setShow(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sign in to get a personalised feed!</Offcanvas.Title>
          
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="mobile-nav">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="https://builder.admin.terraterri.com/" target="_blank">Advertise</Link>
            </li>
            <li>
              <Link href="https://expo.terraterri.com/" target="_blank">Expo Registration</Link>
            </li>
            <li>
              <Link href="#">Our Products</Link>
            </li>
            <li>
              <Link href="/career">Careers</Link>
            </li>
            <li>
              <Link href="franchise" >
                Own a Franchise
              </Link>
            </li>
            <li>
              <Link href="buddy-service">
                Buddy Services
              </Link>
            </li>
            <li>
              <Link href="/contact">Contactus</Link>
            </li>
            <li>
              <Link href="/MainLogin">Sign In</Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
