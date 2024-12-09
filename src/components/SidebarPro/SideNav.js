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
            // the active class will be added automatically by react router
            // so we can use it to style the active menu item
            [`&.active`]: {
              backgroundColor: "#13395e",
              color: "#b6c8d9",
            },
          },
        }}
      >
        <h2 className="BuilderAccount">My Account</h2>
        {/* <Menu>
          <MenuItem className="menuitem" href="dashboard">
            <Link href="/DashboardPanel">
              <MdSpaceDashboard className="PREMIUMLISTINGS1" />
              Dashboard
            </Link>
          </MenuItem>
          <MenuItem className="ProfileProfile" href="ProfilePanel">
            <FaUserAlt className="PREMIUMLISTINGS2" /> Profile
          </MenuItem>
          <PiDiamondsFourFill className="PREMIUMLISTINGS" />
          <SubMenu label="PREMIUM LISTINGS" className="dropdown-element">
            <MenuItem href="PBuySale">
              <GoDot /> Buy Sale Packages
            </MenuItem>
            <MenuItem href="PActiveSale">
              <GoDot />
              Active Sale Packages
            </MenuItem>
            <MenuItem href="PPropSale">
              <GoDot />
              Post New Sale Project
            </MenuItem>
            <MenuItem href="PBuyRent">
              <GoDot /> Buy Rent Packages
            </MenuItem>
            <MenuItem  href="PActiveRent">
              <GoDot /> Active Rent Packages
            </MenuItem>
            <MenuItem href="PPropRent">
              <GoDot /> Post New Rental Project
            </MenuItem>
          </SubMenu>
          <TiChartPie className="METAVERSELISTINGS" />
          <SubMenu label="METAVERSE LISTINGS">
            <MenuItem href="MBuy">
              <GoDot /> Buy Packages
            </MenuItem>
            <MenuItem href="MActive">
              <GoDot />
              Active Packages
            </MenuItem>
            <MenuItem href="MProp">
              <GoDot />
              Post New Property
            </MenuItem>
          </SubMenu>
          <CgIfDesign className="AIRPROPXLISTINGS" />
          <SubMenu label="AIRPROPX">
            <MenuItem href="BookaStall">
              <GoDot /> Book a Stall
            </MenuItem>
            <MenuItem href="PendingExpo">
              <GoDot />
              Pending Expos
            </MenuItem>
            <MenuItem href="FutureExpo">
              <GoDot />
              Future Expos
            </MenuItem  >
            <MenuItem href="OnGoingExpo">
              <GoDot />
              On Going Expos
            </MenuItem>
            <MenuItem href="CompletedExpo">
              <GoDot />
              Completed Expos
            </MenuItem>
          </SubMenu>
          <MenuItem className="LogoutLogout">
            <RiLogoutCircleRFill className="Logout" /> Logout{" "}
          </MenuItem>
        </Menu> */}
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
        {/* <SubMenu label="Recent Search">
            <MenuItem href="recent-search">
              <GoDot />
              Projects
            </MenuItem>
            <MenuItem href="properties-search">
              <GoDot />
              Properties
            </MenuItem>
        </SubMenu>
        <SubMenu label="Shortlisted">
            <MenuItem href="recent-search">
              <GoDot /> Projects
            </MenuItem>
            <MenuItem href="properties-search">
              <GoDot /> Properties
            </MenuItem>
            <MenuItem href="/">
              <GoDot /> Paragon
            </MenuItem>
            <MenuItem href="/">
              <GoDot /> BilderBox 
            </MenuItem>
           
          </SubMenu>
        <SubMenu label="Shortlisted">
            <MenuItem href="/">
              <GoDot /> Projects
            </MenuItem>
            <MenuItem href="/">
              <GoDot /> Properties
            </MenuItem>
            <MenuItem href="/">
              <GoDot /> Paragon
            </MenuItem>
            <MenuItem href="/">
              <GoDot /> BilderBox 
            </MenuItem>
           
          </SubMenu>
        <SubMenu label="Contacted">
            <MenuItem href="/">
              <GoDot /> Projects
            </MenuItem>
            <MenuItem href="properties-search">
              <GoDot /> Properties
            </MenuItem>
            <MenuItem href="/">
              <GoDot /> Paragon
            </MenuItem>
            <MenuItem href="/">
              <GoDot /> BilderBox 
            </MenuItem>
           
          </SubMenu>
        <SubMenu label="Airpropx">
            <MenuItem href="/">
              <GoDot /> Expo Registration
            </MenuItem>
            <MenuItem href="/">
              <GoDot /> Visited Expo
            </MenuItem>
          </SubMenu> */}
        </Menu>
      </Sidebar>
    </>
  );
};

export default SideNav;
