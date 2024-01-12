import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ViewReviews from "../code-reviews/ViewReviews";

const ProjectList = ({ projects }) => {
  return (
    <>
      <Typography sx={{ paddingBottom: "1em" }} variant="h5" component="div">
        Reviewed Projects
      </Typography>
      {projects.map((project) => (
        <Accordion key={project.id}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5" component="div">
              {project.title}
              <Typography variant="body1" component="div">
                Assignee: {project.assignee}
              </Typography>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ViewReviews />
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default ProjectList;
