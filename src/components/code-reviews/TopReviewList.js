import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import StarsIcon from "@mui/icons-material/Stars";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Tooltip from "@mui/material/Tooltip";

const ReviewListItem = ({ reviewer, handleModalOpen }) => {
  return (
    <ListItem key={reviewer.id}>
      <ListItemText primary={reviewer.name} secondary={reviewer.email} />
      <ListItemText
        primary={<span>Review Accuracy: {reviewer.accuracy}%</span>}
        sx={{
          textAlign: "right",
          marginRight: "5em",
        }}
      />
      {reviewer.id !== 1 ? (
        <Tooltip title="Trending Up This Week" placement="top">
          <TrendingUpIcon />
        </Tooltip>
      ) : (
        <Tooltip title="Top Reviewer This Week" placement="top">
          <StarsIcon />
        </Tooltip>
      )}
      <Tooltip title="Code Review Quality" placement="top">
        <HelpOutlineIcon
          sx={{
            marginLeft: "1em",
            color: "#888888",
            fontSize: "1.5em",
            cursor: "pointer",
          }}
          onClick={() => handleModalOpen(reviewer.accuracy)}
        />
      </Tooltip>
    </ListItem>
  );
};

export default ReviewListItem;
