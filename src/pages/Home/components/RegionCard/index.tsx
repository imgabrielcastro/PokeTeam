import { Box, Typography } from "@mui/material";

interface IProps {
  city: string;
  image: string;
  incomplete?: boolean;
}

export default function RegionCard({ city, image, incomplete = false }: IProps) {
  return (
    <Box
      sx={{
        borderRadius: 2,
        border: "2px solid white",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: 160,
        minWidth: 340,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        "&:hover": {
          cursor: "pointer",
          transform: "scale(1.05)",
          transition: "transform 0.2s",
        },
        ...(incomplete && {
          opacity: 0.5,
        }),
      }}  
    >
      <Typography variant="h6" color="white">
        <strong>{city}</strong>
      </Typography>
    </Box>
  );
}