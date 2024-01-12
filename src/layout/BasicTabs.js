import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ShowInformation from "./ShowInformation";
import ProjectList from "../components/projects/ProjectList";
import projects from "../data/data.json";

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const BasicTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Overview" />
          <Tab label="Javascript" />
          <Tab label="Python" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ShowInformation />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProjectList projects={projects.javascriptProjects} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ProjectList projects={projects.pythonProjects} />
      </TabPanel>
    </Box>
  );
};

export default BasicTabs;
