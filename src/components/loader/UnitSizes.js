import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { BiRupee } from "react-icons/bi";

export default function UnitSizes({ data }) {
  const [value, setValue] = React.useState(data[0]?.id || "1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    setValue(data[0]?.id)
  },[data])

  return (
    <>
      {data.length > 0 && (
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                {data.map((each) => (
                  <Tab label={each.bhk_name} value={each.id} />
                ))}
              </TabList>
            </Box>
            {data.map((each) => (
              <TabPanel value={each.id}>
                <div className="row">
                  <div className="col-md-12">
                    <h5>Details</h5>
                  </div>
                  <div className="col-md-12">
                    <div className="unit-pric">
                      <p>
                        <span>Built Up Size</span> :
                        <b>{each.super_built_up_area}</b>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="unit-pric">
                      <p>
                        <span>Carpet Area</span> :
                        <b>{each.carpet_area}</b>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="unit-pric">
                      <p>
                        <span>Property Facing</span> :
                        <b>{each.property_facing}</b>
                      </p>
                    </div>
                  </div>
                  {/* <div className="col-md-12">
                    <div className="unit-pric">
                      <p>Currency</p>
                    </div>
                  </div> */}
                  <div className="col-md-6">
                    <div className="unit-pric">
                      <p>
                        <span>Base Price (Per Sq Ft)</span> :{" "}
                        <b>
                          <BiRupee fontSize={19} /> {each.base_price}
                        </b>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="unit-pric">
                      <p>
                        <span>Total Base Price</span> :{" "}
                        <b>
                          <BiRupee fontSize={19} /> {each.total_base_price}
                        </b>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <h5>Amenities</h5>
                  </div>
                  <div className="col-md-12">
                    <div className="unit-pric">
                      <p>
                        <span>Car Parking Charges</span> :{" "}
                        <b>
                          <BiRupee fontSize={19} /> {each.car_parking_charges}
                        </b>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="unit-pric">
                      <p>
                        <span>Club House Charges</span> :{" "}
                        <b>
                          <BiRupee fontSize={19} />
                          {each.club_house_charges}
                        </b>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="unit-pric">
                      <p>
                        <span>Corpus</span> :{" "}
                        <b>
                          <BiRupee fontSize={19} /> {each.corpus_fund}
                        </b>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="unit-pric">
                      <p>
                        <span>Maintenance Charges</span> :{" "}
                        <b>
                          <BiRupee fontSize={19} />{" "}
                          {each.advance_maintenance_charges}
                        </b>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="unit-pric">
                      <p>
                        For <b>{each.advance_maintenance_for_months || 1}</b>{" "}
                        Months
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="unit-pric">
                      <p>
                        <span>Legal Charges</span> :{" "}
                        <b>
                          <BiRupee fontSize={19} /> {each.legal_charges}
                        </b>
                      </p>
                    </div>
                  </div>
                  {each.others_1_charges_name != null && (
                    <div className="col-md-12">
                      <div className="unit-pric">
                        <p>
                          <span>{each.others_1_charges_name}</span> :{" "}
                          <b>
                            <BiRupee fontSize={19} /> {each.others_1_charges}
                          </b>
                        </p>
                      </div>
                    </div>
                  )}
                  {each.others_2_charges_name != null && (
                    <div className="col-md-12">
                      <div className="unit-pric">
                        <p>
                          <span>{each.others_2_charges_name}</span> :{" "}
                          <b>
                            <BiRupee fontSize={19} /> {each.others_2_charges}
                          </b>
                        </p>
                      </div>
                    </div>
                  )}
                  {each.others_3_charges_name != null && (
                    <div className="col-md-12">
                      <div className="unit-pric">
                        <p>
                          <span>{each.others_3_charges_name}</span> :{" "}
                          <b>
                            <BiRupee fontSize={19} /> {each.others_3_charges}
                          </b>
                        </p>
                      </div>
                    </div>
                  )}
                  <div className="col-md-6">
                    <div className="unit-pric">
                      <p>
                        <span>Total Estimated Price</span> :{" "}
                        <b>
                          <BiRupee fontSize={19} /> {each.estimated_total_price}
                        </b>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12 pt-3 mt-3 br-1">
                    <h5>Estimated GST and Registration Charges</h5>
                  </div>
                  <div className="col-md-6">
                    <div className="unit-pric">
                      <p>
                        <span>GST (Taxes) </span> :{" "}
                        <b>
                          <BiRupee fontSize={19} /> {each.gst_charges}
                        </b>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="unit-pric">
                      <p>
                        <span>Registration Charges </span> :{" "}
                        <b>
                          <BiRupee fontSize={19} /> {each.registration_charges}
                        </b>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <h5>Preferred Location Charges (PLC)</h5>
                  </div>
                  <div className="col-md-6">
                    <div className="unit-pric">
                      <p>
                        <span>Floor Raising Charges </span> :{" "}
                        <b>
                          <BiRupee fontSize={19} /> {each.total_base_price}
                        </b>{" "}
                        per sft
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="unit-pric">
                      <p>
                        Valid From <b>{each.total_base_price}</b> Floor
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="unit-pric">
                      <p>
                        East Facing Premium charges{" "}
                        <b>{each.total_base_price}</b> per sft
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="unit-pric">
                      <p>
                        Corner Property <b>{each.total_base_price}</b> per sft
                      </p>
                    </div>
                  </div>
                </div>
              </TabPanel>
            ))}
          </TabContext>
        </Box>
      )}
    </>
  );
}
