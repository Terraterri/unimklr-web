// import React, { useState } from "react";
import { IoCaretUpOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

export default function postedby (props) {
// const postedby = ({ 
  const {
    setParams, reference, setPostedBy , setIsOpen
  } = props;
  
  const handleParams = (postedBy) => {
    setPostedBy(postedBy);
    setParams((prev) => ({
      ...prev,
      posted_by: postedBy,
    }));
  };

  return (
    <>
      <div class="filter-overlay postedby">
        <div class="container">
          <div class="bg-white br-10" ref={reference}>
            {/* <IoCaretUpOutline /> */}
            <div className="p-3 ovr-scrll">
              <div class="row">
                <div className="col-md-12">
                  <h5 className="text-left">Posted By</h5>
                </div>
                <div className="d-flexx" ref={reference}>
                  <div
                    className="postd"
                    onClick={() => handleParams("Builder")}
                  >
                    Builders
                  </div>
                  <div
                    className="postd"
                    onClick={() => handleParams("Exclusive Sales Partner")}
                  >
                    Exclusive Agent
                  </div>
                  <div className="postd" onClick={() => handleParams("Agent")}>
                    Agent
                  </div>
                  <div className="postd" onClick={() => handleParams("Owner")}>
                    Owners
                  </div>
                </div>
                <button className="done_cls">Done</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// export default postedby;
