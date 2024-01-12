import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { NavLink } from "react-router-dom";
import developers from "../../data/data.json";
import DynamicButton from "../button-component/DynamicButton";

function AssigneeAndReviewers({ data }) {
  const developers = data.developers;
  return (
    <CardContent>
      {developers.map(({ projectName, assignee, reviewers, language }) => {
        return (
          <React.Fragment key={assignee}>
            <Typography variant="h5" component="div">
              {projectName}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              flavour: {language}
            </Typography>
            <Typography variant="body2">
              assignee:
              <br />
              {assignee}
              <br />
              <br />
            </Typography>
            <Typography component="div" variant="body2">
              Reviewers:
              <br />
              {reviewers.map((reviewer) => (
                <div key={reviewer.id}>{reviewer.name}</div>
              ))}
            </Typography>
          </React.Fragment>
        );
      })}
    </CardContent>
  );
}

function NavigateToContentAndReviews() {
  return (
    <CardActions sx={{ justifyContent: "flex-end" }}>
      <Link
        href="http://syllabus.africacode.net/projects/tilde-mockups/"
        target="_blank"
        rel="noopener"
      >
        <DynamicButton styleProps={{ marginTop: 0 }}>
          View Content
        </DynamicButton>
      </Link>
      <NavLink to="code-reviews">
        <DynamicButton styleProps={{ marginTop: 0 }}>
          View Reviews
        </DynamicButton>
      </NavLink>
    </CardActions>
  );
}

export default function RecentlyReviewedCard() {
  return (
    <Card sx={{ maxWidth: 355, marginTop: "1em" }}>
      <AssigneeAndReviewers data={developers} />
      <NavigateToContentAndReviews />
    </Card>
  );
}
