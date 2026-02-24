import { Box } from "@mui/material";
import { theme } from "../../../../theme";
import RegionCard from "../RegionCard";
import VStack from "../../../../components/stacks/Vstack";
import HStack from "../../../../components/stacks/Hstack";

export default function RegionsList() {
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        width: "100%",
        borderRadius: 8,
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      <VStack 
        justifyContent="center" 
        alignItems="center"
        height="100%"
        width="100%"
      >
        <HStack
          gap={2}
          padding={4}
          alignItems="center"
          justifyContent="center"
        >
          <RegionCard city="Kanto" image="/RegionsImages/Kanto.png" />
          <RegionCard city="Johto" image="/RegionsImages/Johto.png" />
          <RegionCard city="Hoenn" image="/RegionsImages/Hoenn.png" incomplete />
        </HStack>
        <HStack
          gap={2}
          paddingBottom={4}
          alignContent="center"
          justifyContent="center"
        >
          <RegionCard city="Sinnoh" image="/RegionsImages/Sinnoh.png" incomplete />
          <RegionCard city="Unova" image="/RegionsImages/Unova.png" incomplete />
          <RegionCard city="Kalos" image="/RegionsImages/Kalos.png" incomplete />
        </HStack>
      </VStack>
    </Box>
  );
}
