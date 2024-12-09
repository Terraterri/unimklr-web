import Link from 'next/link';
import React from 'react';

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
          <div className="row">
            <div>
              <div className="help_desk_out">
                <h3>Explore Help Topics</h3>

                <div className="help_center">
                    <h4>User Profile</h4>
                    <ul>
                        <li><Link href="#">User Profile</Link></li>
                        <li><Link href="#">New Registration & Login</Link></li>
                        <li><Link href="#">Account Deactivation/Re-activation</Link></li>
                        <li><Link href="#">My Profile</Link></li>
                        <li><Link href="#">Password Settings</Link></li>
                        <li><Link href="#">Update Email Address</Link></li>
                        <li><Link href="#">Explore More</Link></li>
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