import { styled } from "@mui/material/styles";
import Overview from "../components/home/DashboardCards";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function ShowInformation() {
  return (
    <>
      <Overview />
    </>
  );
}

export default ShowInformation;
