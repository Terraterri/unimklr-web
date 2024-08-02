import React from 'react'

const page = () => {
  return (
    <>
     <section className="international-banner" style={{
        background: "url('/images/international-3.jpg')",
      }}>
   <div className="auto-container">
     <div className="row">
       <div className="col-md-12 col-sm-12 col-xs-12">
         <h2 className="soon">Launching Soon..</h2>
         <h1>Unimakler International</h1>
         <div className="slide-anm">
           <div className="inter1">
             <h2 className="word w1"> "Your Global Gateway to Distinctive Properties." </h2>
           </div>
           {/* <div className="inter2">
             <h2 className="word w2"> "Explore the World, Find Your Home." </h2>
           </div>
           <div className="inter3">
             <h2 className="word w3"> "Unlock International Opportunities with unimakler Homes." </h2>
           </div>
           <div className="inter4">
             <h2 className="word w4"> "Your Passport to Premier Properties Worldwide." </h2>
           </div> */}
         </div>
       </div>
     </div>
   </div>
 </section>
    </>
  )
}

export default page