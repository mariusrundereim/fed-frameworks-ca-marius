import { Accordion } from "@mui/material";
import { AccordionSummary } from "@mui/material";
import { AccordionDetails } from "@mui/material";
import { Typography } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

type DescAccordionProps = {
  description: string;
};

function DescAccordion({ description }: DescAccordionProps) {
  return (
    <>
      <div>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Description</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{description}</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}

export default DescAccordion;
