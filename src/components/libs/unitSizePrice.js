"use-strict";
import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { BiRupee } from "react-icons/bi";
import { convertToIndianRupees } from "./higherOderFN";
import {  getProjectById } from "@/components/endPoints/projectEndpoints";
import { useState,useEffect } from "react";


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));


export default function UnitSizePrice(props) {

  const sulg = props.id;

  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  const getProperty = async (id) => {
    const apiResponse = await getProjectById(id);
    if (apiResponse?.status) {
      if (apiResponse?.data.length > 0) {
        const data = apiResponse?.data[0];        
        data.loc = [{lat: 17.3519681, long:78.366936}]
        setProject(data);
      }
    }
    setIsLoading(false);
  };



  useEffect(() => {
    getProperty(sulg);
  }, []);
  

  return (
    
    <React.Fragment>
      <BootstrapDialog
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
        maxWidth="md"
      >
        {project == null && !isLoading && <h1>Project Not Found</h1>}
        {project != null && !isLoading && (
        <DialogTitle
          className="modalTitleColor d-flex align-items-center unit-titls"
          sx={{ m: 0, p: 2 }}
          id="customized-dialog-title "
        >
          {/* {project?.builder_name} */}

          <h4 className="mr-4 text-tnsf">{project?.project_name}</h4>
          <h5 className="text-tnsf">by: {project?.builder_name}</h5>
          
        </DialogTitle>
          )}
        <IconButton
        className="price_close"
          aria-label="close"
          onClick={props.handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          {/* <CloseIcon /> */}

          Close
        </IconButton>
        

          <div className="prices_card">
            <div className="price-sec-01">
              <div className="row">
                <div className="col-md-12">
                    <h5 className="modalTitleColor">Unit Pricing</h5>
                </div>
                <div className="col-md-12">
                  <div className="unit-pric">
                    <p>
                      <span>Built Up Size</span> : {" "}
                      <b>{props.each.super_built_up_area}</b> sq.ft
                    </p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="unit-pric">
                    <p>
                      <span>Carpet Area</span> : {" "}<b>{props.each.carpet_area}</b> sq.ft
                    </p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="unit-pric">
                    <p>
                      <span>Property Facing</span> :{" "}
                      <b>{props.each.property_facing}</b>
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="unit-pric">
                    <p>
                      <span>Base Price (Per Sq Ft)</span> :{" "}
                      <b>{convertToIndianRupees(props.each.base_price)}</b>
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="unit-pric">
                    <p>
                      <span>Total Base Price</span> :{" "}
                      <b>{convertToIndianRupees(props.each.total_base_price)}</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
                {/* separate */}
            <div className="price-sec-02">
              <div className="row">
                <div className="col-md-12">
                  <h5 className="modalTitleColor">Amenities Charges</h5>
                </div>
                <div className="col-md-12">
                  <div className="unit-pric">
                    <p>
                      <span>Car Parking Charges</span> :{" "}
                      <b>{convertToIndianRupees(props.each.car_parking_charges)}</b>
                    </p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="unit-pric">
                    <p>
                      <span>Club House Charges</span> :{" "}
                      <b>{convertToIndianRupees(props.each.club_house_charges)}</b>
                    </p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="unit-pric">
                    <p>
                      <span>Corpus</span> :{" "}
                      <b>{convertToIndianRupees(props.each.corpus_fund)}</b>
                    </p>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="unit-pric">
                    <p>
                      <span>Maintenance Charges</span> :{" "}
                      <b>
                        {convertToIndianRupees(
                          props.each.advance_maintenance_charges
                        )}
                      </b>
                    </p>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="unit-pric">
                    <p>
                      For <b>{props.each.advance_maintenance_for_months || 1}</b>{" "}
                      Months
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="unit-pric">
                    <p>
                      <span>Legal Charges</span> :{" "}
                      <b>{convertToIndianRupees(props.each.legal_charges)}</b>
                    </p>
                  </div>
                </div>
             
                <div className="col-md-12 mt-2">
                  <h5 className="modalTitleColor">Other Charges</h5>
                </div>
                {props.each.others_1_charges_name != null && (
                  <div className="col-md-12">
                    <div className="unit-pric">
                      <p>
                        <span>{props.each.others_1_charges_name}</span> :{" "}
                        <b>{convertToIndianRupees(props.each.others_1_charges)}</b>
                      </p>
                    </div>
                  </div>
                )}
                {props.each.others_2_charges_name != null && (
                  <div className="col-md-6">
                    <div className="unit-pric">
                      <p>
                        <span>{props.each.others_2_charges_name}</span> :{" "}
                        <b>{convertToIndianRupees(props.each.others_2_charges)}</b>
                      </p>
                    </div>
                  </div>
                )}
                {props.each.others_3_charges_name != null && (
                  <div className="col-md-5">
                    <div className="unit-pric">
                      <p>
                        <span>{props.each.others_3_charges_name}</span> :{" "}
                        <b>{convertToIndianRupees(props.each.others_3_charges)}</b>
                      </p>
                    </div>
                  </div>
                )}
        
                <div className="col-md-6">
                  <div className="unit-pric">
                    <p>
                      <span>Total Estimated Price</span> :{" "}
                      <b className="tEstimatedPrice">
                        {convertToIndianRupees(props.each.estimated_total_price)}
                      </b>
                    </p>
                  </div>
                </div>

              </div>
            </div>
                {/* ////// */}
                {/* <div className="price-sec-03">
                <div className="row">
                <div className="col-md-12">
                  <h5 className="modalTitleColor">
                    Estimated GST and Registration Charges
                  </h5>
                </div>
                <div className="col-md-6">
                  <div className="unit-pric">
                    <p>
                      <span>GST (Taxes) </span> :{" "}
                      <b>{convertToIndianRupees(props.each.gst_charges)}</b>
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="unit-pric">
                    <p>
                      <span>Registration Charges </span> :{" "}
                      <b>
                        {convertToIndianRupees(props.each.registration_charges)}
                      </b>
                    </p>
                  </div>
                </div>
              </div>
              </div> */}
              <div className="price-sec-03">
              <div className="row">
                <div className="col-md-12">
                  <h5 className="modalTitleColor">
                    Preferred Location Charges (PLC)
                  </h5>
                </div>
          
                <div className="col-md-6">
                  <div className="unit-pric">
                    <p>
                      <span>Floor Raising Charges </span> :{" "}
                      <b>{convertToIndianRupees(props.each.total_base_price)}</b>{" "}
                      per sft
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="unit-pric">
                    <p>
                      <span>Valid From{" "}</span>
                      <b>--</b>{" "}
                      Floor
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="unit-pric">
                    <p>
                      <span>East Facing charges</span> : {" "}
                      <b>
                        {convertToIndianRupees(props.each.total_base_price)}
                      </b>{" "}
                      per sft
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="unit-pric">
                    <p>
                      <span>Corner Property</span>
                      <b>
                        --
                      </b>{" "}
                      per sft
                    </p>
                  </div>
                </div>
              </div>
              </div>
          </div>

      </BootstrapDialog>
    </React.Fragment>



  );
}
