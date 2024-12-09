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
      <div className="site_main">
      <div className="row">
           <div className='col-md-12'>
           <div className='text-center site_bredcum'>
            <h3>SiteMap</h3>
            <p><Link href="#">Buy Rent / Sell your Property</Link></p>
           </div>
           </div>
          </div>
<div>
<div className='container'> 
<div className='py-5 over-hidden'>
  <div className='d-block'>
  <div className='w-50 m-auto over-hidden'>
    <h3 className='mb-3'>Terraterri Links</h3>


    <ul className='list_out '>
      <li>
        <Link href='#'>Home</Link>
      </li>
      <li>
        <Link href='#'>Advertise Your Property</Link>
      </li>
      <li>
        <Link href='#'>Builders Registration</Link> 
      </li>
     
      <li>
        <Link href='#'>Expo Registration</Link>
      </li>
      <li>
        <Link href='#'>Sign In Buyer</Link>
      </li>
      <li>
        <Link href='#'>Careers</Link>
      </li>
    </ul>
  </div>
  </div>
  <hr></hr>
  <div className='d-block'>
  <div className='w-50 m-auto over-hidden'>
    <h3 className='mb-3'>Other Links</h3>
    <ul className='list_out '>
      <li>
        <Link href='#'>About Us</Link>
      </li>
      <li>
        <Link href='#'>Privacy Policy</Link>
      </li>
      <li>
        <Link href='#'>Contact us</Link>
      </li>
      <li>
        <Link href='#'>Blog</Link>
      </li>
      <li>
        <Link href='#'>Feed Back</Link>
      </li>
      <li>
        <Link href='#'>Help Center</Link>
      </li>
      <li>
        <Link href='#'>Commercial Property</Link>
      </li>
      <li>
        <Link href='#'>Terms & Conditions</Link>
      </li>
      <li>
        <Link href='#'>Site Map</Link>
      </li>
    </ul>
  </div>
  </div>
  <hr></hr>
  <div className='w-50 m-auto over-hidden'>
    <h3 className='mb-3'>Our Products</h3>
    <ul className='list_out'>
      <li>
        <Link href='#'>Paragon</Link>
      </li>
      <li>
        <Link href='#'>Builder Box Your Property</Link>
      </li>
      <li>
        <Link href='#'>Estella</Link>
      </li>
      <li>
        <Link href='#'>Airpropx</Link>
      </li>
      
    </ul>
  </div>
  <hr></hr>
  <div className='d-block'>
  <div className='w-50 m-auto over-hidden'>
    <h3 className='mb-3'>Real Estate in India</h3>
    <ul className='list_out '>
    
      <li>
        <Link href='#'>Hyderabad</Link>
      </li>
      <li>
        <Link href='#'>Delhi</Link>
      </li>
      <li>
        <Link href='#'>Mumbai</Link>
      </li>
      <li>
        <Link href='#'>Chennai</Link>
      </li>
      <li>
        <Link href='#'>Bangalore</Link>
      </li>
      <li>
        <Link href='#'>Kolkata</Link>
      </li>
      <li>
        <Link href='#'>Pune</Link>
      </li>
      <li>
        <Link href='#'>Ahmedabad</Link>
      </li>
    </ul>
  </div>
  </div>
 
  </div>
  </div>
  {/* 99acres Links
Home
Advertise Your Property
Builders in India
Residential Property
Registration Page
Articles
Commercial Property
Post Requirements
Mobile Apps
New Projects
Buy Our Services
Price Trends
Other Links
About Us
Register
User Login
Terms and Conditions
Contact us
Request info
Real Estate in India
Delhi
Mumbai
Chennai
Bangalore
Kolkata
Hyderabad
Ahmedabad
Pune */}

</div>
          
      </div>
    </main>
  </>
  )
}

export default HelpCenter