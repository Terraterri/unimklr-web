import React from 'react'

const page = () => {
  return (
    <>
    <section className="page-title centred" style={{
        background: "url('/images/background/page-title-3.jpg')",
      }}>
          <div className="auto-container">
            <div className="content-box clearfix">
              <h1>carrers</h1>
            </div>
          </div>
        </section>

        <section class="sec-pad agents-search">
   <div class="search-field">
     <div class="auto-container">
       <div class="search-box">
         <div class="tabs-content info-group">
           <div id="tab-1" class="tab active-tab">
             <div class="inner-box">
               <div class="top-search">
                 <form novalidate method="post" class="search-form ng-untouched ng-pristine ng-valid">
                   <div class="row clearfix">
                     <div class="col-lg-4 col-md-4 col-sm-10 col-xs-6 column">
                       <div class="form-group">
                         <div class="field-input">
                           <i class="fas fa-search"></i>
                           <input type="search" name="search-field" placeholder="Search..." required />
                         </div>
                       </div>
                     </div>
                     <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6 column">
                       <div class="form-group">
                         <div class="select-box">
                           <select class="wide">
                             <option data-display="Select City"> Select City </option>
                             <option value="1"> Hyderabad </option>
                             <option value="2"> Mumbai </option>
                             <option value="3"> Kochi </option>
                             <option value="4"> Chennai </option>
                           </select>
                         </div>
                       </div>
                     </div>
                     <div class="col-lg-2 col-md-2 col-sm-2 col-xs-6 column">
                       <div class="form-group">
                         <button type="submit">
                           <i class="fas fa-search"></i>Search </button>
                       </div>
                     </div>
                   </div>
                 </form>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </section>

 <section class="career-section sec-pad">
          <div class="auto-container">
            <div class="inner-container">
              <div class="row align-items-center">
            <div className='col-md-3'>
              <div  class="career-cards">
                <div  class="round">
                <img  src="https://unimakler.com/unimakler_admin/uploads//postjob/20240429105839918.jpg" alt="career" />
                </div><h4 >FULL STACK DEVELOPER</h4>
                <h5 >Frontend</h5>
                <p  class="text-center">
                  <span  class="ps-2">Hyderabad</span></p>
                  <div class="career-icons"></div>
                  <div  class="career-button text-center"><a  href="#">
                  <button  class="theme" >View More</button></a></div></div>
                  </div>
            <div className='col-md-3'>
              <div  class="career-cards">
                <div  class="round">
                <img  src="https://unimakler.com/unimakler_admin/uploads//postjob/20240429105839918.jpg" alt="career" />
                </div><h4 >FULL STACK DEVELOPER</h4>
                <h5 >Frontend</h5>
                <p  class="text-center">
                  <span  class="ps-2">Hyderabad</span></p>
                  <div class="career-icons"></div>
                  <div  class="career-button text-center"><a  href="#">
                  <button  class="theme" >View More</button></a></div></div>
                  </div>
            <div className='col-md-3'>
              <div  class="career-cards">
                <div  class="round">
                <img  src="https://unimakler.com/unimakler_admin/uploads//postjob/20240429105839918.jpg" alt="career" />
                </div><h4 >FULL STACK DEVELOPER</h4>
                <h5 >Frontend</h5>
                <p  class="text-center">
                  <span  class="ps-2">Hyderabad</span></p>
                  <div class="career-icons"></div>
                  <div  class="career-button text-center"><a  href="#">
                  <button  class="theme" >View More</button></a></div></div>
                  </div>
            <div className='col-md-3'>
              <div  class="career-cards">
                <div  class="round">
                <img  src="https://unimakler.com/unimakler_admin/uploads//postjob/20240429105839918.jpg" alt="career" />
                </div><h4 >FULL STACK DEVELOPER</h4>
                <h5 >Frontend</h5>
                <p  class="text-center">
                  <span  class="ps-2">Hyderabad</span></p>
                  <div class="career-icons"></div>
                  <div  class="career-button text-center"><a  href="#">
                  <button  class="theme" >View More</button></a></div></div>
                  </div>
              </div>
            </div>
          </div>
 </section>
    </>
  )
}

export default page