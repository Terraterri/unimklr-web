import React from 'react'

const page = () => {
  return (
    <>

<section className="page-title centred" style={{
        background: "url('/images/background/page-title-3.jpg')",
      }}>
          <div className="auto-container">
            <div className="content-box clearfix">
              <h1>Loan Eligibility Calculator</h1>
            </div>
          </div>
</section>

<section class="sec-pad eligible_blo">
  <div class="auto-container">
    <div class="inner-container">
      <div class="row">
        <div class="col-md-6">
          <img src="images/loan-eli.jpg" alt />
        </div>
        <div class="col-md-6">
          <form novalidate method="post" enctype="multipart/form-data" class="ng-untouched ng-pristine ng-valid">
            <div class="emi">
              <h5>Eligibility Calculator</h5>
              <div class="row">
                <div class="col-md-6">
                  <div class="input-field">
                    <label>Gross Monthly Salary</label>
                    <input type="text" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="input-field">
                    <label>Date of Birth</label>
                    <input type="Date" formcontrolname="dateOfBirth" value class="ng-untouched ng-pristine ng-valid" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="input-field">
                    <label>Tenure</label>
                    <input type="text" formcontrolname="tenure" value class="ng-untouched ng-pristine ng-valid" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="input-field">
                    <label>Other EMI</label>
                    <input type="text" formcontrolname="otherEmi" value class="ng-untouched ng-pristine ng-valid" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="input-field">
                    <label>Any Monthly Deductions/Expenses</label>
                    <input type="text" formcontrolname="otherExpenses" value class="ng-untouched ng-pristine ng-valid" />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="input-button">
                    <button type="button" class="theme-btn btn-one"> Calculate </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="col-md-12">
          <div class="row sec-pad justify-content-center">
            <div class="col-md-4">
              <div class="emi-cards">
                <h4>Eligible Loan Amount</h4>
                <h3>₹ 3,500</h3>
              </div>
            </div>
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