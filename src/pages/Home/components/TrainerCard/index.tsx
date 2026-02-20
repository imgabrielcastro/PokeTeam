
import { Box, Typography } from "@mui/material";
import { theme } from "../../../../theme";

export default function TrainerCard() {
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        minHeight: 540,
        borderRadius: 8,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingX: 4,
        paddingTop: 6,
      }}
    >
      <Box>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: theme.palette.secondary.main, textAlign: "center" }}
        >
          Trainer's Card
        </Typography>

        <Typography
          variant="h5"
          sx={{ color: theme.palette.secondary.main, textAlign: "center" }}
        >
          gaboyz
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundImage: "url('/joseph.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom center",
          minHeight: 420,
          position: "relative",
        }}
      />
    </Box>
  );
}
