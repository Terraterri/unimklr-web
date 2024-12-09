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

const HelpCenter = () => {
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
                  <Tab label="Sign In" value="2" />
                  <Tab label="My Profile" value="3" />
                  <Tab label="Manage Alerts/Calls" value="4" />
     
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
            <h4> Is it free to register on terraterri.com, and how can I sign up?</h4>
            <p>Yes, registering on terraterri.com is completely free! You can sign up by clicking the "Sign Up" link at the top right corner of the homepage.</p>
            </div>
            <div className="mb-3 help_ans">
            <h4>Do I need to register to list a property on terraterri.com?</h4>
            <p>Yes, registration is required for new users before listing a property on terraterri.com. This is a quick, one-time process.</p>
            </div>
            <div className="mb-3 help_ans">
            <h4>Are any documents needed to register as a property owner?</h4>
            <p>No documents are required for registration, though basic information is necessary. This may include details about your property, such as any construction approvals, a RERA certificate (if applicable), and property plans like floor or layout designs.</p>  
</div>
    </div>
              </TabPanel>
              <TabPanel value="2">
              <div className="help_question">
      <div className="mb-3 help_ans">
<h4> I'm not receiving the OTP to log in. What should I do?</h4>
<p>We apologize for the inconvenience. OTP messages are sent via various network providers, and delays can sometimes occur. Please try the following steps:</p>
<p>Click on "Resend Code" on the login page to request a new OTP.</p>
<p>If you still don’t receive an OTP, restart the login process.</p>
<p>Why am I seeing an error that my mobile number or email ID is not registered?</p>
<p>If you’re getting this error, please contact us at support@terraterri.com for assistance.</p>
</div>
<div className="mb-3 help_ans">
<h4>I'm trying to log in, but my account is inactive. What should I do?</h4>
<p>Your account may be inactive. To resolve this, please reach out to us at support@terraterri.com.</p>
</div>
<div className="mb-3 help_ans">
<h4>I can't log in with my mobile number. What should I do?</h4>
<p>If you’re unable to access your account using your mobile number, please contact us at support@terraterri.com.</p>
</div>
    </div>
              </TabPanel>
              <TabPanel value="3">
              <div className="help_question">
      <div className="mb-3 help_ans">
<h4> I created my account with the wrong email address. How can I update it?</h4>
<p>Once your terraterri.com account is created, you cannot change the primary email address. However, if it’s incorrect, you can add or update an alternate email address to receive communications. Follow these steps:</p>
<p>Step 1: Log in to your account (you can also log in with your registered mobile number if needed).</p>
<p>Step 2: Go to the Dashboard and click on Manage Profile.</p>
<p>Step 3: Enter an alternate email address or click on Change Alternate Email to update an existing one.</p>
<p>Step 4: Click Update to save the changes.</p>

</div>
      <div className="mb-3 help_ans">
      <h4>How can I change my profile name?</h4>
        <p> You can update your profile name with these steps:</p>
        <p> Step 1: Log in to your account.</p>
        <p> Step 2: Go to the Dashboard and click on Manage Profile.</p>
        <p> Step 3: Click Edit Login Details.</p>
        <p> Step 4: Update your profile name.</p>
        <p> Step 5: Click Save to confirm the changes.</p>
      </div>
    
      <div className="mb-3 help_ans">
        <h4>How do I hide my contact number?</h4>
        <p>To keep your phone number private, follow these steps:</p>
        <p>Step 1: Log in to your account.</p>
        <p>Step 2: Go to the Dashboard and click on Manage Profile.</p>
        <p>Step 3: Click Edit Login Details.</p>
        <p>Step 4: In the Hide Contact Details field, select Yes to hide your number.</p>
        <p>Step 5: Click Save to apply the changes.</p>

      </div>

      <div className="mb-3 help_ans">
        <h4>How can I reset my password?</h4>
        <p>To reset your password, follow these steps:</p>
        <p> Step 1: Click on My Activity at the top right of the page.</p>
        <p> Step 2: Click the Login button.</p>
        <p> Step 3: Click on the Need Help link below the Next button.</p>
        <p> Step 4: Select I don’t know my password, enter your registered email or mobile number, and click Next.</p>
        <p> Step 5: Enter the 3-digit verification code sent to your registered email and mobile, then click Continue.</p>
        <p> Step 6: Enter a new password, confirm it, and click Submit. Your password will be successfully updated.</p>

      </div>
      <div className="mb-3 help_ans">
          <h4>I forgot my password. Can it be sent to my email or mobile?</h4>
          <p> No, terraterri.com does not send passwords via email or mobile. If you've forgotten your password, you’ll need to reset it. Click here to reset your password.</p> 
      </div>
      <div className="mb-3 help_ans">
      <h4>How can I make my password strong?</h4>
      <p>Follow these guidelines to create a strong password:</p>
      <p> Your password should be between 8 and 14 characters long.</p>
      <p> Include at least one number (e.g., 0, 1, 2).</p>
      <p> Include at least one special character (allowed characters are: !@#$%^&*_).</p>
      <p> Include at least one letter, preferably using both uppercase and lowercase letters for added security.</p>

      </div>
    </div>
              </TabPanel>
              <TabPanel value="4">
              <div className="help_question">
      <div className="mb-3 help_ans">
<h4> I don’t want to receive calls from the sales department. What should I do?</h4>
<p>If you prefer not to receive calls from our sales team, please email us at support@terraterri.com. We prioritize your privacy at terraterri.com.</p>
</div>
<div className="mb-3 help_ans">
<h4>I'm not receiving SMS alerts for responses to my property. What should I do?</h4>
<p>If we haven't informed you of any server or technical issues, this might be a network provider issue. Please contact your mobile network provider to check. In the meantime, you can continue receiving updates via your registered email address.</p>
</div>
<div className="mb-3 help_ans">
<h4>I’m not receiving email alerts for responses to my property.</h4>
<p>If emails are missing from your inbox, try these steps:</p>
<p>Check your Junk/Spam folder, as they may have been miscategorized.</p>
<p>Add terraterri.com to your contact list to ensure emails go directly to your inbox.</p>
<p>If the issue persists, please contact us at support@terraterri.com.</p>
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

export default HelpCenter