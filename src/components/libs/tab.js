import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function UnitGalleryTab({ unitGallery = {} }) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    setValue(Object.keys(unitGallery)[0]);
  }, [unitGallery]);

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {Object.keys(unitGallery).length > 0 &&
              Object.keys(unitGallery).map((each) => (
                <Tab label={each} value={each} />
              ))}
          </TabList>
        </Box>
        {Object.keys(unitGallery).length > 0 &&
          Object.keys(unitGallery).map((each) => (
            <TabPanel value={each}>
              <div className="row">
              {unitGallery[each].length > 0 &&
                unitGallery[each].map((imageObj) => (
                    <div className="col-md-3">
                      <img
                        src={imageObj.image_url}
                        className="d-block w-100"
                        width={1250}
                        height={430}
                        alt="thumbnail"
                      />
                    </div>
                ))}
                </div>
            </TabPanel>
          ))}
      </TabContext>
    </Box>
  );
}
