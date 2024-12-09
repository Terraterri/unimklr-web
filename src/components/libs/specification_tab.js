import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function Specific_Tab({ specationData = {} }) {
  const [value, setValue] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (Object.keys(specationData).length > 0) {
      const firstTabValue = specationData[Object.keys(specationData)[0]].specification_name;
      setValue(firstTabValue);
    }
  }, [specationData]);

  return (
    value && (
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              {Object.keys(specationData).map((each) => (
                <Tab 
                  key={each} 
                  label={specationData[each].specification_name} 
                  value={specationData[each].specification_name} 
                />
              ))}
            </TabList>
          </Box>

          {Object.keys(specationData).map((each) => (
            <TabPanel 
              key={each} 
              value={specationData[each].specification_name}
            >
              <div className="row">
                <div className="col-md-12">
                  <h5>{specationData[each].specification_name}</h5>
                  {specationData[each].specification_description}
                </div>
              </div>
            </TabPanel>
          ))}
        </TabContext>
      </Box>
    )
  );
}
