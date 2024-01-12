import Button from "@mui/material/Button";

const DynamicButton = ({ onClick, children, colourVariant, styleProps }) => {
  return (
    <Button
      variant={colourVariant === "outlined" ? "outlined" : colourVariant}
      sx={{
        borderRadius: "4px",
        border: "1px solid rgb(0, 149, 255)",
        marginTop: "30px",
        ...styleProps,
      }}
      color="primary"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default DynamicButton;
