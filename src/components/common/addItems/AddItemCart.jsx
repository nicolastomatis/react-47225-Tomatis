import { Box, IconButton, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const AddItemCart = ({ cantidad, product }) => {
  const { addOneToItem, removeOneToItem } = useContext(CartContext);

  return (
    <Box
      id="box1"
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        flexWrap: "wrap",
        justifyContent: "start",
      }}
    >
      <Box
        sx={{
          display: "flex",
          m: 1,
          ml: 0,
          gap: 2,
          border: 0.5,
          borderRadius: 5,
          borderColor: "grey.400",
          alignItems: "center",
        }}
      >
        <IconButton aria-label="minus" onClick={() => removeOneToItem(product)}>
          <RemoveIcon fontSize="inherit" />
        </IconButton>

        <Typography component="div" variant="h5">
          {cantidad}
        </Typography>
        <IconButton aria-label="minus" onClick={() => addOneToItem(product)}>
          <AddIcon fontSize="inherit" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default AddItemCart;
