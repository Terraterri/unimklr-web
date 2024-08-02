import React from 'react'

const page = () => {
  return (
    <>
      <section  class="contact-section bg-color-1">
  <div  class="auto-container">
    <div  class="sec-title centred">
      <h2 >Contact Us</h2>
    </div>
    <div  class="row align-items-center clearfix">
      <div  class="col-lg-6 col-md-12 col-sm-12 content-column">
        <div  class="content-box">
          <div  class="form-inner">
            <form  novalidate method="post" class="ng-untouched ng-pristine ng-invalid">
              <div  class="row clearfix">
                <div  class="col-lg-12 col-md-6 col-sm-12 form-group">
                  <input  type="text" placeholder=" Name" />
                  
                </div>
                <div  class="col-lg-12 col-md-6 col-sm-12 form-group">
                  <input  type="email" placeholder="Email address" />
                  
                </div>
                <div  class="col-lg-12 col-md-6 col-sm-12 form-group">
                  <input  type="number" formcontrolname="phoneNumber" placeholder="Phone" required value class="ng-untouched ng-pristine ng-invalid" />
                  
                </div>
                <div  class="col-lg-12 col-md-6 col-sm-12 form-group">
                  <input type="text" placeholder="Subject"  />
                  
                </div>
                <div  class="col-lg-12 col-md-12 col-sm-12 form-group">
                  <label >Message</label>
                  <textarea ></textarea>
                  
                </div>
                <div  class="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                  <button  type="submit" class="theme-btn btn-one"> Contact </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div  class="col-lg-6 col-md-12 col-sm-12 image-column">
        <div  data-wow-delay="00ms" data-wow-duration="3000ms" class="image-box wow fadeInRight animated">
          <figure  class="image">
            <img  src="images/contact.jpg" alt />
          </figure>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default page