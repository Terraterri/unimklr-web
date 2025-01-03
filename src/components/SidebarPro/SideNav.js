import React from "react";
import { GoDot } from "react-icons/go";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { CgIfDesign } from "react-icons/cg";
import { MdSpaceDashboard } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { PiDiamondsFourFill } from "react-icons/pi";
import { TiChartPie } from "react-icons/ti";
import { RiLogoutCircleRFill } from "react-icons/ri";
import Link from "next/link";
    

const SideNav = () => {
  return (
    <>
      <Sidebar
        menuItemStyles={{
          button: {
          
            [`&.active`]: {
              backgroundColor: "#13395e",
              color: "#b6c8d9",
            },
          },
        }}
      >
        <h2 className="BuilderAccount">My Account</h2>
    
        <Menu>
        <MenuItem className="ProfileProfile" href="dashboard">
            <MdSpaceDashboard className="PREMIUMLISTINGS2" /> Dashboard
          </MenuItem>
        <MenuItem className="ProfileProfile" href="ProfilePanel">
            <FaUserAlt className="PREMIUMLISTINGS2" /> My Profile
          </MenuItem>
        <MenuItem className="ProfileProfile" href="recent-search">
            <FaUserAlt className="PREMIUMLISTINGS2" /> Recent Viewed
          </MenuItem>
        <MenuItem className="ProfileProfile" href="short-listed">
            <FaUserAlt className="PREMIUMLISTINGS2" /> Shortlisted
          </MenuItem>
        <MenuItem className="ProfileProfile" href="contact-listed">
            <FaUserAlt className="PREMIUMLISTINGS2" /> Contacted
          </MenuItem>
        <MenuItem className="ProfileProfile" href="buyer-airpropx">
            <FaUserAlt className="PREMIUMLISTINGS2" /> Air Propx
          </MenuItem>
       
        </Menu>
      </Sidebar>
    </>
  );
};

export default SideNav;
