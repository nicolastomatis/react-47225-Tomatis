import { Box } from "@mui/material";

import FilterCard from "../filterCard/FilterCard";

const FilterSection = ({ catFinal }) => {
  return (
    <Box
      sx={{
        height: { xs: "12vh", md: "24vh" },
        display: "flex",
        direction: "row",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {catFinal.map((cat) => {
        return <FilterCard cat={cat} key={cat.id} />;
      })}
    </Box>
  );
};

export default FilterSection;
