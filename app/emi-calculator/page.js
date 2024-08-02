import React from 'react'

const page = () => {
  return (
<>

<section className="page-title centred" style={{
        background: "url('/images/background/page-title-3.jpg')",
      }}>
          <div className="auto-container">
            <div className="content-box clearfix">
              <h1>Loan Calculator</h1>
            </div>
          </div>
</section>
<section class="loan-range sec-pad">
  <div class="auto-container">
    <div class="inner-container">
      <div class="row loan-box">
        <div class="col-md-10">
          <div class="header">
            <h1>Loan Calculator</h1>
          </div>
          <div class="details">
            <div class="det-range">
              <div class="detail">
                <p>Loan Amount</p>
                <p>0</p>
              </div>
              <input type="range" min="0" max="200000000" value="0" />
            </div>
            <div class="det-range">
              <div class="detail">
                <p>Tenure (In Months)</p>
                <p>12</p>
              </div>
              <input type="range" min="12" max="360" value="12" />
            </div>
            <div class="det-range">
              <div class="detail">
                <p>% Interest Rate</p>
                <p>1%</p>
              </div>
              <input type="range" min="1" max="20" value="1" step="0.1" />
            </div>
            <div class="input-button">
              <button type="button" name="submit-form" class="theme-btn btn-one"> Calculate </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="pieChart" class="pie-chart sec-pad">
  <div class="auto-container">
    <div class="row">
      <div class="col-md-6">
        <div class="pie">
          <div id="chart" class="inner-container">
            <h4> Break-up of all total amount payable </h4>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="loan">
          <h5>Loan EMI</h5>
          <h2>₹ 0</h2>
          <h5>Total Interest Payable</h5>
          <h2>₹ 0</h2>
          <h5>Total Payment</h5>
          <h2>₹ 0</h2>
        </div>
      </div>
    </div>
  </div>
</section>
</>
  )
}

export default page