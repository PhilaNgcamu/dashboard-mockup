import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";
import DynamicButton from "../button-component/DynamicButton";

const MeetingsList = ({ meetingsList }) => {
  const meetings = meetingsList.javascriptProjects;

  return (
    <Card sx={{ marginTop: "1em" }}>
      <CardContent>
        <List>
          {meetings.map((meeting) => (
            <ListItem key={meeting.id}>
              <ListItemText
                sx={{ maxWidth: "30%" }}
                primary={`Project: ${meeting.title}`}
                secondary={`Assignee: ${meeting.assignee}`}
              />
              <ListItemText
                primary={`Reviewers: ${meeting.email}`}
                secondary={`Date: ${meeting.date}, Time: ${meeting.time}`}
              />
              <Link
                href="https://meet.google.com/"
                target="_blank"
                rel="noopener"
              >
                <DynamicButton
                  colourVariant="contained"
                  styleProps={{ backgroundColor: "rgb(0, 155, 255)" }}
                >
                  Join With Google Meet
                </DynamicButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default MeetingsList;
