import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { BsFillPhoneFill } from "react-icons/bs";
import { MdSpaceDashboard } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { TbPackages } from "react-icons/tb";
import { MdDone } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { RiLogoutCircleRFill } from "react-icons/ri";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";

export default function PropertyTabs(props) {
  const [value, setValue] = React.useState(1);
  const {
    reference,
    mastersTypes,
    selectedProperties,
    setSelectedProperties,
    selectedSubProperties,
    setSelectedSubProperties,
    setParams,
    setIsOpen,
  } = props;
  const [mainProperty, setMainProperty] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // useEffect(() => {
  //   console.log(`selected => ${selectedSubProperties}`);
  //   if(selectedProperties > 0){
  //     setParams((prevParams) => ({
  //       ...prevParams,
  //       property_type_id: mainProperty,
  //       property_sub_type_id: selectedSubProperties,
  //     }))
  //   }

  // }, [mainProperty, selectedSubProperties, selectedProperties])

  useEffect(() => {
    setParams((prevParams) => {
      if (
        prevParams.property_type_id !== mainProperty ||
        prevParams.property_sub_type_id !== selectedSubProperties
      ) {
        return {
          ...prevParams,
          property_type_id: mainProperty,
          property_sub_type_id: selectedSubProperties,
        };
      }
      return prevParams;
    });
  }, [mainProperty, selectedSubProperties, selectedProperties, setParams]);

  const handleSelectProperty = (property, main, id) => {
    setSelectedSubProperties(id);
    setMainProperty(main);

    if (mainProperty !== main) {
      setSelectedProperties(property);
      return;
    }
    // if (selectedProperties.includes(property)) {
    //   let removedArray = selectedProperties.filter((prop) => {
    //     return prop !== property;
    //   });
    //   setSelectedProperties(removedArray);
    //   return;
    // }
    // setSelectedProperties([...selectedProperties, property]);
    setSelectedProperties(property);
  };

  //   const
  useEffect(() => {
    setValue(1);
  }, []);
  return (
    <div className="filter-overlay property_out">
      <div className="container">
        <div className="bg-white br-10">
          <div className="row">
            <div className="col-md-12">
              <div className="p-relative">
                <Box
                  sx={{ width: "100%", typography: "body1" }}
                  ref={reference}
                >
                  <TabContext value={value}>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="user-profile-sidebar filter-inner">
                          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                            <TabList
                              onChange={handleChange}
                              aria-label="lab API tabs example"
                            >
                              {mastersTypes?.propertytype &&
                                mastersTypes?.propertytype?.map((property) => (
                                  <Tab
                                    label={property?.name}
                                    value={property?.id}
                                    key={property?.id}
                                  />
                                ))}
                            </TabList>
                          </Box>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="user-profile-card user-profile-property filter-inner-rt">
                          <div className="tab-main">
                            {mastersTypes?.propertysubtype &&
                              mastersTypes?.propertysubtype?.map(
                                (sub, index) => (
                                  <div className="tab-rpt" key={index}>
                                    <TabPanel
                                      value={sub?.property_type_id}
                                      className={
                                        selectedProperties?.includes(sub?.name)
                                          ? "active-bt"
                                          : ""
                                      }
                                    >
                                      <ul>
                                        <Stack direction="row" spacing={5}>
                                          <Chip
                                            label={sub?.name}
                                            size="large"
                                            variant="outlined"
                                            icon={
                                              selectedProperties ===
                                              sub?.name ? (
                                                <MdDone />
                                              ) : (
                                                <FaPlus />
                                              )
                                            }
                                            onClick={() => {
                                              handleSelectProperty(
                                                sub?.name,
                                                sub?.property_type_id,
                                                sub?.id
                                              );
                                            }}
                                          />
                                        </Stack>
                                      </ul>
                                    </TabPanel>
                                  </div>
                                )
                              )}
                          </div>
                        </div>
                      </div>
                      {/* <div className="col-md-3">
                        <div className="flat-size">
                          <h2>Appartment</h2>
                          <p>Select BHK</p>
                          <div className="sizes_out">
                            <ul className="size-inr">
                              <li><button>Studio</button></li>
                              <li><button>1BHK</button></li>
                              <li><button>2BHK</button></li>
                              <li><button>3BHK</button></li>
                              <li><button>4BHK</button></li>
                              <li><button>5BHK+</button></li>
                            </ul>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </TabContext>
                </Box>
                <button className="done_cls" onClick={() => setIsOpen("")}>
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
