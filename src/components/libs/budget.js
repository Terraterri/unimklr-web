import React from "react";
import { IoCaretUpOutline } from "react-icons/io5";

const budget = (props) => {
  const { minPrice, maxPrice, setMinPrice, setMaxPrice } = props;

  const handleMinPrice = async (e) => {
    console.log("change");
    if (e.type == "click") {
      setMinPrice(e.target.innerHTML);
    }
    if (e.type == "change") {
      setMinPrice(e.target.value);
    }
  };

  const handleMaxPrice = async (e) => {
    if (e.type == "click") {
      setMaxPrice(e.target.innerHTML);
    }
    if (e.type == "change") {
      setMaxPrice(e.target.value);
    }
  };

  return (
    <>
      <div className="filter-overlay budget_out">
        <div className="container">
          <div className="bg-white br-10">
            <IoCaretUpOutline />
            <div className="p-3 ovr-scrll">
              <div className="row">
                <div className="col-md-6">
                  <h5>Min Price</h5>
                  <div className="txt-innr">
                    <input
                      type="text"
                      name="minPrice"
                      value={minPrice || " "}
                      className="form-control"
                      onChange={handleMinPrice}
                    />
                  </div>
                  <ul>
                    <li onClick={handleMinPrice}>5 Lacs</li>
                    <li onClick={handleMinPrice}>10 Lacs</li>
                    <li onClick={handleMinPrice}>20 Lacs</li>
                    <li onClick={handleMinPrice}>40 Lacs</li>
                    <li onClick={handleMinPrice}>60 Lacs</li>
                    <li onClick={handleMinPrice}>80 Lacs</li>
                    <li onClick={handleMinPrice}>1 Cr</li>
                    <li onClick={handleMinPrice}>2 Cr</li>
                    <li onClick={handleMinPrice}>3 Cr</li>
                    <li onClick={handleMinPrice}>4 Cr</li>
                    <li onClick={handleMinPrice}>5 Cr</li>
                    <li onClick={handleMinPrice}>10 Cr</li>
                    <li onClick={handleMinPrice}>20 Cr</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h5>Max Price</h5>
                  <div className="txt-innr">
                    <input
                      type="text"
                      name="maxPrice"
                      value={maxPrice}
                      className="form-control"
                      onChange={handleMaxPrice}
                    />
                  </div>
                  <ul>
                    <li onClick={handleMaxPrice}>5 Lacs</li>
                    <li onClick={handleMaxPrice}>10 Lacs</li>
                    <li onClick={handleMaxPrice}>20 Lacs</li>
                    <li onClick={handleMaxPrice}>40 Lacs</li>
                    <li onClick={handleMaxPrice}>60 Lacs</li>
                    <li onClick={handleMaxPrice}>80 Lacs</li>
                    <li onClick={handleMaxPrice}>1 Cr</li>
                    <li onClick={handleMaxPrice}>2 Cr</li>
                    <li onClick={handleMaxPrice}>3 Cr</li>
                    <li onClick={handleMaxPrice}>4 Cr</li>
                    <li onClick={handleMaxPrice}>5 Cr</li>
                    <li onClick={handleMaxPrice}>10 Cr</li>
                    <li onClick={handleMaxPrice}>20 Cr</li>
                  </ul>
                </div>

                <button className="done_clss">Done</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default budget;
