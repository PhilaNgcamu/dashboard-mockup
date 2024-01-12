import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import CodeReviewButtons from "./CodeReviewButtons";
import AddReviewModal from "./AddReviewModal";
import reviewers from "../../data/data.json";

const ViewReviews = () => {
  const [codeReviews, setCodeReviews] = useState(reviewers.reviewers);

  const handleReviewSubmit = (newReview) => {
    setCodeReviews((prevReviews) => [newReview, ...prevReviews]);
  };

  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            Code Reviews
          </Typography>
        </CardContent>
        <Divider />
        <CardContent>
          <List>
            {codeReviews.map((review) => (
              <ListItem key={review.id}>
                <ListItemText
                  primary={review.title}
                  secondary={review.description}
                />
                <Typography variant="body1" color="textSecondary">
                  {review.email}
                </Typography>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
      <AddReviewModal onReviewSubmit={handleReviewSubmit} />
      <CodeReviewButtons />
    </>
  );
};

export default ViewReviews;
