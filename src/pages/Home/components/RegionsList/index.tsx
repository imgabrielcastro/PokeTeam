import { Box } from "@mui/material";
import { theme } from "../../../../theme";

export default function RegionsList() {
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        width: "100%",
        height: "100%",
        borderRadius: 8,
        paddingX: 4,
      }}
    />
  );
}