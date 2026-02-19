
import { Box, Typography } from "@mui/material";
import { theme } from "../../../../theme";

export default function TrainerCard() {
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        maxWidth: 450,
        minHeight: 700,
        borderRadius: 8,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingTop: 4,
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
          backgroundPosition: "center",
          width: "100%",
          height: 520,
        }}
      />
    </Box>
  );
}
