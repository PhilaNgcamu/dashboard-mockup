import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";

const ScheduleMeetingForm = ({
  meetingTitle,
  setMeetingTitle,
  meetingDate,
  setMeetingDate,
  meetingTime,
  setMeetingTime,
  errors,
}) => {
  return (
    <DialogContent>
      <DialogContentText>
        Provide the details for the meeting:
      </DialogContentText>
      <TextField
        margin="dense"
        label="Meeting Title"
        fullWidth
        variant="outlined"
        value={meetingTitle}
        onChange={(event) => setMeetingTitle(event.target.value)}
        error={errors.title ? true : false}
        helperText={errors.title}
        required
      />
      <TextField
        margin="dense"
        type="date"
        fullWidth
        variant="outlined"
        value={meetingDate}
        onChange={(event) => setMeetingDate(event.target.value)}
        error={errors.date ? true : false}
        helperText={errors.date}
        required
      />
      <TextField
        margin="dense"
        type="time"
        fullWidth
        variant="outlined"
        value={meetingTime}
        onChange={(event) => setMeetingTime(event.target.value)}
        error={errors.time ? true : false}
        helperText={errors.time}
        required
      />
    </DialogContent>
  );
};

export default ScheduleMeetingForm;
