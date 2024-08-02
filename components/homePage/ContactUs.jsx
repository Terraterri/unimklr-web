import React from 'react'

const ContactUs = () => {
  return (
    <>
    
    <section class="contact-section bg-color-1">
   <div class="auto-container">
     <div class="sec-title centred">
       <h2><span className="left_lne"></span> Contact Us <span className="right_lne"></span></h2>
     </div>
     <div class="row clearfix">
     <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 image-column">
         <div data-wow-delay="00ms" data-wow-duration="3000ms" class="image-box wow fadeInRight animated">
           <figure class="image">
             <img src="/images/contact.jpg" alt />
           </figure>
         </div>
       </div>
       <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 content-column">
         <div class="content-box">
           <div class="form-inner">
             <form>
               <div class="row clearfix">
                 <div class="col-lg-12 col-md-6 col-sm-12 form-group">
                   <input type="text" formcontrolname="name" placeholder=" Name" />
                 </div>
                 <div class="col-lg-12 col-md-6 col-sm-12 form-group">
                   <input type="email" formcontrolname="email" placeholder="Email address" />
                 </div>
                 <div class="col-lg-12 col-md-6 col-sm-12 form-group">
                   <input type="text" formcontrolname="phoneNumber" placeholder="Phone" />
                 </div>
                 <div class="col-lg-12 col-md-6 col-sm-12 form-group">
                   <input type="text" formcontrolname="subject" placeholder="Subject" />
                 </div>
                 <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                   <label>Message</label>
                   <textarea formcontrolname="message"></textarea>
                 </div>
                 <div class="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                   <button type="submit" name="submit-form" class="theme-btn btn-one"> Contact </button>
                 </div>
               </div>
             </form>
           </div>
         </div>
       </div>
     </div>
   </div>
 </section>
 
    </>
  )
}

export default ContactUs