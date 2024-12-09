import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MainLogin = () => {
  return (

    <main classNameName="main">
      <div className="login-bg login-area pt-120 pb-120"
        style={{ background: "url('assets/img/login-bg.webp')" }} >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className='col-md-6'>
              <div className="buyr_login_txt">
                <h3>Please Select Your Role to Continue:</h3>
                <Link href="/login"><p className='buyr-out'><label></label>"Property Buyer" <br></br><span>(For those looking to purchase or invest)</span></p></Link>
                <Link href="https://builder.admin.terraterri.com/ad-login"><p><label></label>"Builder/Agent/Owner" <br></br> <span>(For those managing or listing properties)</span></p></Link>
              </div>
            </div>
            <div className='col-md-6'>
              <div className="text-right">
                <Image
                  src={"/assets/img/about-intro.jpg"}
                  width={500}
                  height={300}
                  alt="property"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

  )
}

export default MainLogin