import { useState } from "react";
import Link from "@mui/material/Link";
import ScheduleMeetingModal from "../schedule-meetings/ScheduleMeetingModal";
import DynamicButton from "../button-component/DynamicButton";

function Content() {
  return (
    <Link
      href="https://github.com/Umuzi-org/Tilde"
      target="_blank"
      rel="noopener"
    >
      <DynamicButton
        styleProps={{
          padding: "0.5em",
        }}
      >
        View Project
      </DynamicButton>
    </Link>
  );
}

function Meetings() {
  const [, setScheduledMeetings] = useState([]);

  const handleMeetingSchedule = (newMeeting) => {
    setScheduledMeetings((prevMeetings) => [...prevMeetings, newMeeting]);
  };

  return <ScheduleMeetingModal onMeetingSchedule={handleMeetingSchedule} />;
}

export default function CodeReviewButtons() {
  return (
    <>
      <Content />
      <Meetings />
    </>
  );
}
