import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import DynamicButton from "../button-component/DynamicButton";

const ReviewDialog = ({
  open,
  onClose,
  rating,
  handleRatingChange,
  review,
  handleReviewChange,
  handleSave,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Review</DialogTitle>
      <DialogContent>
        <FormControl fullWidth sx={{ marginTop: "0.5em" }}>
          <InputLabel id="rating-label">Rating</InputLabel>
          <Select
            labelId="rating-label"
            value={rating}
            onChange={handleRatingChange}
            label="Rating"
          >
            <MenuItem value="Excellent">Excellent</MenuItem>
            <MenuItem value="Competent">Competent</MenuItem>
            <MenuItem value="Not Yet Competent">Not Yet Competent</MenuItem>
            <MenuItem value="Red Flag">Red Flag</MenuItem>
          </Select>
        </FormControl>
        <DialogContentText sx={{ marginTop: "1em" }}>
          Share your thoughts on the project:
        </DialogContentText>
        <TextField
          margin="dense"
          label="Description"
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          value={review}
          onChange={handleReviewChange}
        />
      </DialogContent>
      <DialogActions sx={{ width: "35em", marginBottom: "0.5em" }}>
        <DynamicButton onClick={onClose}>Cancel</DynamicButton>
        <DynamicButton
          colourVariant="contained"
          styleProps={{ marginRight: "1.2em" }}
          onClick={handleSave}
        >
          Submit Review
        </DynamicButton>
      </DialogActions>
    </Dialog>
  );
};

export default ReviewDialog;
