import { useState } from "react";
import ReviewDialog from "./ReviewDialog";
import DynamicButton from "../button-component/DynamicButton";

const AddReviewModal = ({ onReviewSubmit }) => {
  const [open, setOpen] = useState(false);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("Competent");

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleSave = () => {
    const newReview = {
      title: rating,
      description: review,
      email: "user.name@umuzi.org",
    };

    onReviewSubmit(newReview);
    handleClose();
  };

  const handleReviewChange = (event) => setReview(event.target.value);

  const handleRatingChange = (event) => setRating(event.target.value);

  return (
    <>
      <DynamicButton
        onClick={handleOpen}
        styleProps={{
          padding: "0.5em",
          marginRight: "1em",
        }}
      >
        Add Review
      </DynamicButton>
      <ReviewDialog
        open={open}
        onClose={handleClose}
        rating={rating}
        handleRatingChange={handleRatingChange}
        review={review}
        handleReviewChange={handleReviewChange}
        handleSave={handleSave}
      />
    </>
  );
};

export default AddReviewModal;
