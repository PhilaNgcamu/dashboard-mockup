import { Typography, Box } from "@mui/material";
import RecentlyReviewedCard from "./ReviewedProject";
import ScheduleMeetingsCard from "../schedule-meetings/ScheduledMeetingsCard";
import data from "../../data/data.json";

function MainContent({ meetings }) {
  return (
    <>
      <Box display="flex">
        <Box marginRight="1em" flex="1 1 50%">
          <Typography variant="h5">Recently Reviewed Project</Typography>
          <RecentlyReviewedCard />
        </Box>
        <Box width="100%">
          <Typography variant="h5">Scheduled Meetings</Typography>
          <ScheduleMeetingsCard meetingsList={meetings} />
        </Box>
      </Box>
    </>
  );
}

export default function Overview() {
  return <MainContent meetings={data} />;
}
