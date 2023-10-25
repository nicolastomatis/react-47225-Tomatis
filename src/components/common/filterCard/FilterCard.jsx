import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const FilterCard = ({ cat }) => {
  return (
    <Link
      to={cat.id === "Todos" ? `/` : `/category/${cat.category}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <Box
        key={cat.id}
        sx={{
          height: { xs: "10vh", md: "20vh" },
          width: { xs: "10vh", md: "20vh" },
          minWidth: { xs: "10vh", md: "20vh" },
          backgroundImage: `url(${cat.img})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          margin: "1vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          cursor: "pointer",
        }}
      >
        <Box
          sx={{
            backgroundColor: "lightgrey",
            width: "120px",
            textAlign: "center",
            fontSize: { xs: "0.7rem", md: "1.2rem" },
            overflow: "hidden",
            paddingLeft: 1,
          }}
        >
          {cat.category}
        </Box>
      </Box>
    </Link>
  );
};

export default FilterCard;
