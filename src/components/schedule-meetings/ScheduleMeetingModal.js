import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Link from "@mui/material/Link";
import Snackbar from "@mui/material/Snackbar";
import DynamicButton from "../button-component/DynamicButton";
import ScheduleMeetingForm from "./MeetingDialog";

const ScheduleMeetingModal = ({ onMeetingSchedule }) => {
  const [open, setOpen] = useState(false);
  const [meetingTitle, setMeetingTitle] = useState("");
  const [meetingDate, setMeetingDate] = useState("");
  const [meetingTime, setMeetingTime] = useState("");
  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState("");

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setMeetingTitle("");
    setMeetingDate("");
    setMeetingTime("");
    setErrors({});
    setNotification("");
  };

  const handleSave = () => {
    const validationErrors = validateMeetingInformation();
    if (Object.keys(validationErrors).length === 0) {
      const newMeeting = {
        title: meetingTitle,
        date: meetingDate,
        time: meetingTime,
      };

      onMeetingSchedule(newMeeting);
      handleClose();
      setNotification("Meeting scheduled successfully!");
    } else {
      setErrors(validationErrors);
    }
  };

  const validateMeetingInformation = () => {
    const errors = {};

    if (!meetingTitle) {
      errors.title = "Meeting title is required";
    }

    if (!meetingDate) {
      errors.date = "Meeting date is required";
    }

    if (!meetingTime) {
      errors.time = "Meeting time is required";
    }

    return errors;
  };

  return (
    <>
      <Link>
        <DynamicButton
          onClick={handleOpen}
          styleProps={{
            margin: "2.15em 0 0 1em",
            padding: "0.5em",
          }}
        >
          Schedule Meeting
        </DynamicButton>
      </Link>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Schedule Meeting</DialogTitle>
        <ScheduleMeetingForm
          meetingTitle={meetingTitle}
          setMeetingTitle={setMeetingTitle}
          meetingDate={meetingDate}
          setMeetingDate={setMeetingDate}
          meetingTime={meetingTime}
          setMeetingTime={setMeetingTime}
          errors={errors}
        />
        <DialogActions sx={{ width: "35em", marginBottom: "0.5em" }}>
          <DynamicButton onClick={handleClose}>Cancel</DynamicButton>
          <DynamicButton
            styleProps={{ marginRight: "1.1em" }}
            onClick={handleSave}
            colourVariant="contained"
            color="primary"
          >
            Schedule Meeting
          </DynamicButton>
        </DialogActions>
      </Dialog>
      {notification && (
        <Snackbar
          open={notification !== ""}
          autoHideDuration={3000}
          onClose={() => setNotification("")}
          message={notification}
        />
      )}
    </>
  );
};

export default ScheduleMeetingModal;
