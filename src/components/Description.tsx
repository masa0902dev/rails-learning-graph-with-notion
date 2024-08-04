import React from "react";
import { Box, Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Description: React.FC = () => {
  return (
    <Box className="item-width">
      <Accordion defaultExpanded className="item-bg description">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>What's This?</AccordionSummary>
        <AccordionDetails>
          This is a simple graph that shows the time spent on learning FE(基本情報技術者試験).
          <br></br>
          The data is fetched from Notion API and displayed using Chart.js.
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
export default Description;
