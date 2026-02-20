import Box from "@mui/material/Box";
import TrainerCard from "./components/TrainerCard";
import logoPokemon from "../../../public/logoPokemon.png";
import RegionsList from "./components/RegionsList";

export default function Home() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        backgroundImage: "url('/background.png')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "#000",
        paddingX: 4,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 24,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Box
          component="img"
          src={logoPokemon}
          alt="Logo Pokemon"
          sx={{ width: { xs: 160, md: 240 } }}
        />
      </Box>

      <Box
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingX: 4,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            gap: 2,
            flexDirection: { xs: "column", md: "row" },
            marginTop: 4,
          }}
        >
          <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <TrainerCard />
          </Box>

          <Box sx={{ flex: 2 }}>
            <RegionsList />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
