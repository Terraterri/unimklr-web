import React from 'react'

const page = () => {
  return (
   <>
   <section class="login-section">
   <div class="auto-container">
     <div class="row">
       <div class="col-xl-5 col-lg-5 col-md-5">
         <div class="login-box">
           <div class="logo-box">
             <a href="https://unimakler.com/">
               <img src="images/unimaklerlogo.png" alt />
             </a>
           </div>
           <div class="row">
             <form method="post" enctype="multipart/form-data">
               <div class="form-group">
                 <label>Email</label>
                 <input type="email" name="email" required />
               </div>
               <div class="form-group">
                 <label>Password</label>
                 <input type="password" name="name" required />
               </div>
               <div class="forgot-password">
                 <a href="#" class="forget">Forgot Password ?</a>
               </div>
               <div class="form-group login-btn">
                 <button type="submit" class="btn-one"> Login </button>
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

export default page