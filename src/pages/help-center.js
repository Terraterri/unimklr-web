import Link from 'next/link';
import React from 'react';
import { FaRegUser } from "react-icons/fa";


const HelpCenter = () => {
  return (
    <>
    <main className="main">
      {/* <div
        className="site-breadcrumb"
        style={{
          background:
            "url(assets/img/breadcrumb/ktc-promo-privacy-policy-lg.jpg)",
        }}
      >
        <div className="container">
          <h2 className="breadcrumb-title">Privacy Policy</h2>
          <ul className="breadcrumb-menu">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="active">Privacy Policy</li>
          </ul>
        </div>
      </div> */}
      <div className="py-120">
        <div className="container">
        <h3>Help Center</h3>
          <div className="row">
            <div className='col-md-6'>
              <div className="help_desk_out">
               

                <div className="help_center">
                    <h4><FaRegUser /> Seller Profile</h4>
                    <ul>
                        {/* <li><Link href="#">User Profile</Link></li> */}
                        <li><Link href="seller-help">Registration</Link></li>
                        <li><Link href="seller-help">Sign In</Link></li>
                        <li><Link href="seller-help">My Profile</Link></li>
                        <li><Link href="seller-help">Manage Alerts/Calls</Link></li>
                    </ul>
                </div>
            </div>
            </div>
            <div className='col-md-6'>
              <div className="help_desk_out">
                <div className="help_center">
                    <h4><FaRegUser /> Buyer Profile</h4>
                    <ul>
                        {/* <li><Link href="#">User Profile</Link></li> */}
                        <li><Link href="buyer-help">Registration</Link></li>
                        <li><Link href="buyer-help">My Activities</Link></li>
                        <li><Link href="buyer-help">My Profile</Link></li>
                       
                    </ul>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
  )
}

export default HelpCenter