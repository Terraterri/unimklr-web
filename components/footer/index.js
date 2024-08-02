import React from 'react'

const index = () => {
  return (
    
    <>
    <footer className="main-footer">
     <div className="footer-top bg-color-2">
       <div className="container-fluid">
         <div className="row clearfix">
           <div className="col-lg-4 col-md-6 col-sm-6 footer-column">
             <div className="footer-widget contact-widget">
               <div className="footer-logo">
                 <a routerlink="/" href="/">
                   <img src="images/unimaklerlogo.png" alt="Logo" width="80%" className="black-logo" />
                 </a>
               </div>
               <div className="offices-footer">
                 <div className="widget-title pt-3">
                   <h5>Our Offices</h5>
                 </div>
                 <select className="cities-dropdown">
                   <option value className="color-black"> Select Country </option>
                 </select>
                 <select name id className="cities-dropdown">
                   <option value selected="selected" className="color-black"> Select City </option>
                 </select>
               </div>
               <div className="widget-title reach pt-2">
                 <h5>Reach US</h5>
               </div>
               <ul className="info-list clearfix">
                 <li>
                   <i className="fas fa-envelope"></i>
                   <a href="mailto:info@unimakler.com">info@unimakler.com</a>
                 </li>
               </ul>
             </div>
           </div>
           <div className="col-lg-3 col-md-6 col-sm-6 footer-column">
             <div className="footer-widget links-widget">
               <div className="widget-title">
                 <h3>Quick Links</h3>
               </div>
               <div className="widget-content">
                 <ul className="links-list className">
                   <li>
                     <a routerlink="/About" href="/About">About Us</a>
                   </li>
                   <li>
                     <a routerlink="/Services" href="/Services">Our Services</a>
                   </li>
                   <li>
                     <a routerlink="https://unimakler.com/unimakler_landingpage/" href="/https:/unimakler.com/unimakler_landingpage">Partners with us</a>
                   </li>
                   <li>
                     <a routerlink="/Buddy-Services" href="/Buddy-Services">Buddy Service</a>
                   </li>
                   <li>
                     <a routerlink="/Blogs" href="/Blogs">Blogs</a>
                   </li>
                   <li>
                     <a routerlink="/Contact" href="/Contact">Contact Us</a>
                   </li>
                   <li>
                     <a routerlink="/Privacy-policy" href="/Privacy-policy">Privacy policy</a>
                   </li>
                 </ul>
               </div>
             </div>
           </div>
           <div className="col-lg-5 col-md-6 col-sm-12 footer-column">
             <div className="footer-widget links-widget">
               <div className="widget-title">
                 <h3>Our Services</h3>
               </div>
               <div className="services-flex">
                 <div className="widget-content">
                   <ul className="links-list className">
                     <li>
                       <a href="#">New Projects</a>
                     </li>
                     <li>
                       <a href="#">Flat for Sale</a>
                     </li>
                     <li>
                       <a href="#">Flat for Rent</a>
                     </li>
                     <li>
                       <a href="#">House for Sale</a>
                     </li>
                     <li>
                       <a href="#">House for Rent</a>
                     </li>
                     <li>
                       <a href="#">Land for Sale</a>
                     </li>
                     <li>
                       <a href="#">Plot for Sale</a>
                     </li>
                   </ul>
                 </div>
                 <div className="widget-content content">
                   <ul className="links-list className">
                     <li>
                       <a href="#">Commercial Property for sale</a>
                     </li>
                     <li>
                       <a href="#">Commercial Property for Rent</a>
                     </li>
                     <li>
                       <a href="#">Shop for Sale</a>
                     </li>
                     <li>
                       <a href="#">Shop for Rent</a>
                     </li>
                     <li>
                       <a href="#">Office Space for Sale</a>
                     </li>
                     <li>
                       <a href="#">Office Space for Rent</a>
                     </li>
                     <li>
                       <a href="#">Property for Sale</a>
                     </li>
                   </ul>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
     <div className="footer-bottom">
       <div className="auto-container">
         <div className="inner-box clearfix">
           <div className="copyright pull-left">
             <p>
               <a href="#">Unimakler</a> © 2023 All Right Reserved
             </p>
           </div>
           <ul className="footer-nav pull-right clearfix">
             <li>
               <a href="#">Terms of Service</a>
             </li>
             <li>
               <a href="#">Privacy Policy</a>
             </li>
           </ul>
         </div>
       </div>
     </div>
   </footer>
    </>
  )
}

export default index