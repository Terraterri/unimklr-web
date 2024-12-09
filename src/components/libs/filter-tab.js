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
import { IoCardSharp } from "react-icons/io5";
import { AiFillLock } from "react-icons/ai";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { MdDone } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { includes } from "lodash";

export default function DasboardTabs(props) {
  const [value, setValue] = React.useState("1");
  const {
    reference,
    mastersTypes,
    setSelectedMoreFilters,
    selectedMoreFilters,
    setParams,
    setIsOpen,
  } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSelectProperty = (filter, main) => {
    let key = `${main}-${filter}`;

    // Remove any existing filter in the same category (e.g., "property type")
    const updatedFilters = selectedMoreFilters.filter(
      (item) => !item.startsWith(`${main}-`)
    );

    // Check if the selected filter is already chosen; if so, leave the category empty
    if (selectedMoreFilters.includes(key)) {
      setSelectedMoreFilters(updatedFilters);
    } else {
      // Add the new selection to the updated filters array
      setSelectedMoreFilters([...updatedFilters, key]);
    }

    // if (selectedMoreFilters.includes(key)) {
    //   let removedArray = selectedMoreFilters.filter((prop) => {
    //     return prop !== key;
    //   });
    //   setSelectedMoreFilters(removedArray);
    //   return;
    // }
    // setSelectedMoreFilters([...selectedMoreFilters, key]);
  };

  React.useEffect(() => {
    // setParams(selectedMoreFilters)
    console.log(`sel filters => ${selectedMoreFilters}`);
  }, [selectedMoreFilters])

  return (
    <div className="filter-overlay more_info_dt">
      <div className="container">
        <div className="bg-white br-10">
          <div className="row">
            <div className="col-md-12">
              <div className="p-relative">
                <Box sx={{ width: "100%", typography: "body1" }}>
                  <TabContext value={value}>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="user-profile-sidebar filter-inner">
                          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                            <TabList
                              onChange={handleChange}
                              aria-label="lab API tabs example"
                            >
                              {/* <Tab label="Listing Type" value="3" /> */}
                              <Tab label="Property Facing" value="1" />
                              {/* <Tab label="Property Sizes" value="4" /> */}
                              {/* <Tab label="Amenities" value="5" /> */}
                              <Tab label="Commmunity Types" value="6" />
                              {/* <Tab label="Special Features" value="8" /> */}
                              {/* <Tab label="BHK Sizes" value="9" /> */}
                              {/* <Tab label="Farm House Types" value="10" /> */}
                              <Tab label="Villa Types" value="11" />
                            </TabList>
                          </Box>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="user-profile-card user-profile-property filter-inner-rt">
                          {mastersTypes?.propertyfacing &&
                            mastersTypes?.propertyfacing?.map((item, index) => (
                              <TabPanel
                                value="1"
                                key={index}
                                className={
                                  selectedMoreFilters?.includes(
                                    "propertyfacing-" + item?.id
                                  )
                                    ? "active-bt"
                                    : ""
                                }
                              >
                                <ul>
                                  <Stack direction="row" spacing={5}>
                                    <Chip
                                      label={item?.name}
                                      size="large"
                                      variant="outlined"
                                      icon={
                                        selectedMoreFilters?.includes(
                                          "propertyfacing-" + item?.id
                                        ) ? (
                                          <MdDone />
                                        ) : (
                                          <FaPlus />
                                        )
                                      }
                                      onClick={() => {
                                        handleSelectProperty(
                                          item?.id,
                                          "propertyfacing"
                                        );
                                      }}
                                    />
                                  </Stack>
                                </ul>
                              </TabPanel>
                            ))}

                          {mastersTypes?.communityTypes &&
                            mastersTypes?.communityTypes?.map((item, index) => (
                              <TabPanel
                                value="6"
                                key={index}
                                className={
                                  selectedMoreFilters?.includes(
                                    "communityTypes-" + item?.id
                                  )
                                    ? "active-bt"
                                    : ""
                                }
                              >
                                <ul>
                                  <Stack direction="row" spacing={5}>
                                    <Chip
                                      label={item?.name}
                                      size="large"
                                      variant="outlined"
                                      icon={
                                        selectedMoreFilters?.includes(
                                          "communityTypes-" + item?.id
                                        ) ? (
                                          <MdDone />
                                        ) : (
                                          <FaPlus />
                                        )
                                      }
                                      onClick={() => {
                                        handleSelectProperty(
                                          item?.id,
                                          "communityTypes"
                                        );
                                      }}
                                    />
                                  </Stack>
                                </ul>
                              </TabPanel>
                            ))}
                          {/* {mastersTypes?.specialfeatures &&
                            mastersTypes?.specialfeatures?.map((item) => (
                              <TabPanel
                                value="8"
                                className={
                                  selectedMoreFilters?.includes(
                                    "specialfeatures-" + item?.id
                                  )
                                    ? "active-bt"
                                    : ""
                                }
                              >
                                <ul>
                                  <Stack direction="row" spacing={5}>
                                    <Chip
                                      label={item?.name}
                                      size="large"
                                      variant="outlined"
                                      icon={
                                        selectedMoreFilters?.includes(
                                          "specialfeatures-" + item?.id
                                        ) ? (
                                          <MdDone />
                                        ) : (
                                          <FaPlus />
                                        )
                                      }
                                      onClick={() => {
                                        handleSelectProperty(
                                          item?.id,
                                          "specialfeatures"
                                        );
                                      }}
                                    />
                                  </Stack>
                                </ul>
                              </TabPanel>
                            ))} */}
                          {/* {mastersTypes?.bhksizes &&
                            mastersTypes?.bhksizes?.map((item) => (
                              <TabPanel
                                value="9"
                                className={
                                  selectedMoreFilters?.includes('bhksizes-'+ item?.id)
                                    ? "active-bt"
                                    : ""
                                }
                              >
                                <ul>
                                  <Stack direction="row" spacing={5}>
                                    <Chip
                                      label={item?.name}
                                      size="large"
                                      variant="outlined"
                                      icon={
                                        selectedMoreFilters?.includes(
                                          'bhksizes-'+ item?.id
                                        ) ? (
                                          <MdDone />
                                        ) : (
                                          <FaPlus />
                                        )
                                      }
                                      onClick={() => {
                                        handleSelectProperty(item?.id,'bhksizes');
                                      }}
                                    />
                                  </Stack>
                                </ul>
                              </TabPanel>
                            ))}
                          {mastersTypes?.farmhousetypes &&
                            mastersTypes?.farmhousetypes?.map((item) => (
                              <TabPanel
                                value="10"
                                className={
                                  selectedMoreFilters?.includes('farmhousetypes-'+ item?.id)
                                    ? "active-bt"
                                    : ""
                                }
                              >
                                <ul>
                                  <Stack direction="row" spacing={5}>
                                    <Chip
                                      label={item?.name}
                                      size="large"
                                      variant="outlined"
                                      icon={
                                        selectedMoreFilters?.includes(
                                          'farmhousetypes-'+ item?.id
                                        ) ? (
                                          <MdDone />
                                        ) : (
                                          <FaPlus />
                                        )
                                      }
                                      onClick={() => {
                                        handleSelectProperty(item?.id,'farmhousetypes');
                                      }}
                                    />
                                  </Stack>
                                </ul>
                              </TabPanel>
                            ))} */}
                          {mastersTypes?.villatypes &&
                            mastersTypes?.villatypes?.map((item, index) => (
                              <TabPanel
                                value="11"
                                key={index}
                                className={
                                  selectedMoreFilters?.includes(
                                    "villatypes-" + item?.id
                                  )
                                    ? "active-bt"
                                    : ""
                                }
                              >
                                <ul>
                                  <Stack direction="row" spacing={5}>
                                    <Chip
                                      label={item?.name}
                                      size="large"
                                      variant="outlined"
                                      icon={
                                        selectedMoreFilters?.includes(
                                          "villatypes-" + item?.id
                                        ) ? (
                                          <MdDone />
                                        ) : (
                                          <FaPlus />
                                        )
                                      }
                                      onClick={() => {
                                        handleSelectProperty(
                                          item?.id,
                                          "villatypes"
                                        );
                                      }}
                                    />
                                  </Stack>
                                </ul>
                              </TabPanel>
                            ))}
                        </div>
                      </div>
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
