import Box from "@mui/material/Box";
import VStack from "../../components/stacks/Vstack";
import TrainerCard from "./components/TrainerCard";
import HStack from "../../components/stacks/Hstack";

export default function Home() {
  return (
    <VStack
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundImage: "url('/background.png')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundColor: "#000",
      }}
    >
      <VStack sx={{ flex: 1, justifyContent: "center", padding: 4 }}>
        <TrainerCard />
      </VStack>
    </VStack>
  );
}
