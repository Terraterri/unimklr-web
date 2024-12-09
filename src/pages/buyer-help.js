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

const BuyerHelp = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <main className="main">
      <div className="py-120">
      <div className="container">
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <div className="row">
          <div className="col-md-3">
            <div className="user-profile-sidebar">
         
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example">
             
                  <Tab label="Registration" value="1" />
                  <Tab label="My Activities" value="2" />
                  <Tab label="My Profile" value="3" />
                  {/* <Tab label="Manage Alerts/Calls" value="4" /> */}
     
                  {/* <Tab label="Logout" /> */}
                </TabList>
              </Box>
            </div>
          </div>
          <div className="col-md-9">
            <div className="user-profile-card user-profile-property">
              <TabPanel value="1">
    <div className="help_question">
          <div className="mb-3 help_ans">
          <h4> Is registration on terraterri.com free, and how can I register?</h4>
          <p>Yes! Registration on terraterri.com is completely free. Click the "Sign Up" link at the top right corner of the homepage.</p>
          </div>
          <div className="mb-3 help_ans">
          <h4> What are the benefits of registering on terraterri.com?</h4> 
          <p>By registering, you gain access to valuable features, including:</p>
          <p>A personalized dashboard</p>
          <p>Real-time tracking of responses and the ability to contact buyers/tenants instantly</p>
          <p>Chatting with buyers without revealing your contact details</p>
          <p>Posting your property quickly</p>
          <p>Access to terraterri.com promotions and deals</p>
          <p>Notifications about special offers and new deals, especially during festivals</p>
          <p>Free property valuation tools</p>
          </div>
          <div className="mb-3 help_ans">
          <h4> Do I need any documents to register?</h4>
          <p>No property-related documents are needed. You can simply register using your email and mobile number. Click here to register.</p>
          </div>
          <div className="mb-3 help_ans">
          <h4>Can I log in using Facebook or Google?</h4>
          <p>Yes, terraterri.com allows you to log in conveniently via Facebook or Google.</p>
          </div>
          <div className="mb-3 help_ans">
          <h4>I forgot my password and email. How can I log in?</h4>
          <p>You can log in using your registered mobile number. Here’s how:</p>
          <p>Step 1: Enter your registered mobile number in the login form and click Next.</p>
          <p>Step 2: You’ll receive a 3-digit verification code on your registered mobile number. Enter this code to log in successfully.</p>
          </div>
          <div className="mb-3 help_ans">
          <h4>How can I reset my password?</h4>
          <p> Follow these steps to reset your password:</p>
          <p> Step 1: Go to My Activity at the top right of the page.</p>
          <p> Step 2: Click the Login button.</p>
          <p> Step 3: Select the Need Help link below the Next button.</p>
          <p> Step 4: Choose I don’t know my password and enter your registered email or mobile number.</p>
          <p> Step 5: You’ll receive a verification code via SMS and email. Enter this code and click Continue.</p>
          <p> Step 6: Enter and confirm your new password, then click Submit to finalize the reset.</p>
</div>
          <div className="mb-3 help_ans">
<h4>I'm not receiving the OTP to log in. What should I do?</h4>
<p>OTPs are also sent to your registered email address. For mobile OTPs:</p>
<p> Ensure you’re in a full network zone with a strong signal.</p>
<p> Wait a moment and try entering the last OTP received.</p>
<p> If you still haven’t received an OTP, click Resend Code on the login page.</p>
<p> If the issue persists, restart your phone or contact your network provider.</p>

          </div>

    </div>
              </TabPanel>

              <TabPanel value="2">
              <div className="help_question">
      <div className="mb-3 help_ans">
      <h4> How can I contact a property advertiser?</h4>
      <p> To reach out to a property advertiser:</p>
      <p> Click on the Contact Agent/Owner/Builder option for the property you’re interested in.</p>
      <p> Enter your details in the provided fields.</p>
      <p> Enter the OTP sent to your registered mobile number.</p>
      <p> Your message and contact information will be shared with the advertiser, and you’ll be able to view their contact details.</p>

      </div>
<div className="mb-3 help_ans">
      <h4>Where can I find the properties I’ve viewed or contacted?</h4>
      <p> To view properties you have previously contacted or viewed:</p>

      <p> Go to terraterri.com and click on My Activity in the dropdown menu.</p>
      <p> Select Contacted Properties or Viewed Properties.</p>
      <p> Enter your login details, and you’ll see a list of all your contacted and viewed properties.</p>

      </div>
<div className="mb-3 help_ans">
      <h4>Where can I find my recent searches?</h4>
      <p> To review your recent property searches:</p>
      <p> Log in to your terraterri.com account.</p>
      <p> Click on My Activity in the menu.</p>
      <p> Select Searches to view your previous search history.   </p>

</div>

    </div>
              </TabPanel>

              <TabPanel value="3">
              <div className="help_question">
      <div className="mb-3 help_ans">


      <h4>How can I update my contact details?</h4>
<p>To update details like your mobile number, email ID, or deactivate your account, please email us from your registered email ID at support@terraterri.com with your request.</p>

<h4> How can I edit my requirements or preferences?</h4>
<p>To update your requirements or preferences:</p>
<p>Step 1: Log in to your account.</p>
<p>Step 2: Click on My Profile.</p>
<p>Step 3: In the Requirement section, click Edit to update your property requirements.</p>
<p>Step 4: In the My Preferences section, click Edit on the right to change your preferences.</p>
<p>Step 5: Make the changes and click Update to save.</p>
</div>
<div className="mb-3 help_ans">
<h4> How can I change my profile name?</h4>
<p>To change your profile name:</p>
<p>Step 1: Log in to your account.</p>
<p>Step 2: Go to Dashboard and select Manage Profile.</p>
<p>Step 3: Click on Edit Login Details.</p>
<p>Step 4: Update your profile name.</p>
<p>Step 5: Click Save to confirm.</p>
<h4> I want to update my registered email ID. Is it possible?</h4>
<p>You cannot change your Primary Email address. However, if you’re no longer using it, you can add or update an Alternate Email address to continue receiving emails from Terraterri:</p>
<p>Step 1: Log in to your account (you can also log in using your registered mobile number).</p>
<p>Step 2: Go to Dashboard and select Manage Profile.</p>
<p>Step 3: Enter your Alternate Email address or click on Change Alternate Email to modify it.</p>
<p>Step 4: Click Update to save.</p>
</div>
<div className="mb-3 help_ans">
<h4> How do I update my alternate email address?</h4>
<p> To update your Alternate Email address:</p>
<p> Step 1: Log in to your account.</p>
<p> Step 2: Go to Dashboard and select Manage Profile.</p>
<p> Step 3: Under Profile Details, click on Change Alternate Email.</p>
<p> Step 4: Click Update to save your changes.</p>
</div>


    </div>
              </TabPanel>
            
            </div>
          </div>
        </div>
      </TabContext>
    </Box>
    </div>
    </div>
    </main>
  </>
  )
}

export default BuyerHelp