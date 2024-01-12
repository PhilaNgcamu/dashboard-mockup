import GitHubIcon from "@mui/icons-material/GitHub";
import { Link, Box, Tooltip } from "@mui/material";

export default function GitHubProfile() {
  return (
    <Box
      component="div"
      sx={{
        fontFamily: "Arial, sans-serif",
        position: "relative",
        margin: "4.5em 0 0 1em",
        height: "40px",
      }}
    >
      philangcamu17@gmail.com
      <Link
        href="https://github.com/PhilaNgcamu"
        target="_blank"
        rel="noopener"
      >
        <Tooltip title="PhilaNgcamu">
          <GitHubIcon sx={{ position: "absolute", marginLeft: "0.5em" }} />
        </Tooltip>
      </Link>
    </Box>
  );
}
