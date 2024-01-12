import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ReviewListItem from "./TopReviewList";
import DynamicButton from "../button-component/DynamicButton";

const TopReviewersCard = ({ reviewers }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviewQuality, setReviewQuality] = useState("");

  const handleModalOpen = (accuracy) => {
    setReviewQuality(accuracy);
    setModalOpen(true);
  };

  const handleModalClose = () => setModalOpen(false);

  const getReviewQualityText = (accuracy) => {
    if (accuracy >= 70) {
      return "Good Review";
    } else if (accuracy >= 40) {
      return "Fair Review";
    } else {
      return "Bad Review";
    }
  };

  const renderReviewers = () => {
    return reviewers.map((reviewer) => (
      <ReviewListItem
        key={reviewer.id}
        reviewer={reviewer}
        handleModalOpen={handleModalOpen}
      />
    ));
  };

  const renderCodeQualityExplanation = () => {
    let explanation = "";
    if (reviewQuality >= 70) {
      explanation =
        "The review aligns with the projects' expectations and meets the required standards for them this week.";
    } else if (reviewQuality >= 40) {
      explanation =
        "The review partially aligns with the expectations of this week's reviewed projects' requirements, but there is room for improvement to fully meet their required standards.";
    } else {
      explanation =
        "The review does not meet the required expectations of this week's projects' requirements. Significant improvements are necessary to align with the content expectations.";
    }
    return explanation;
  };

  return (
    <Card>
      <CardContent>
        <List>{renderReviewers()}</List>
      </CardContent>
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="code-review-modal"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: "0.5em",
          }}
        >
          <Typography variant="h5" component="h2" align="center" gutterBottom>
            Code Review Quality
          </Typography>
          <Typography variant="body1" align="start" gutterBottom>
            The code review quality is classified as{" "}
            <strong>{getReviewQualityText(reviewQuality)}</strong>, indicating
            an accuracy level of {reviewQuality}%.{" "}
            {renderCodeQualityExplanation()} Providing comprehensive and
            insightful feedback in code reviews is essential for maintaining
            high-quality code. Please offer additional context, specific
            details, and suggestions for improvement related to the code review
            quality.
          </Typography>

          <DynamicButton onClick={handleModalClose} colourVariant="contained">
            Close
          </DynamicButton>
        </Box>
      </Modal>
    </Card>
  );
};

export default TopReviewersCard;
