import { Box, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartTitle = () => {
  const { cart, clearCart } = useContext(CartContext);
  const emptyCart = cart.length === 0 && { visibility: "hidden" };

  return (
    <Stack
      flexDirection={"row"}
      justifyContent={"space-around"}
      width="100%"
      sx={{ justifyContent: "space-around" }}
    >
      <Box
        sx={{
          height: { xs: 24, md: 38 },
          width: { xs: 24, md: 38 },
        }}
      ></Box>
      <Typography component="div" variant="h3">
        Mi carrito
      </Typography>
      <Tooltip title="Vaciar carrito">
        <IconButton
          aria-label="trash"
          onClick={() => clearCart()}
          sx={{
            alignSelf: { md: "end" },
            ...emptyCart,
          }}
        >
          <DeleteForeverIcon
            sx={{
              height: { xs: 24, md: 38 },
              width: { xs: 24, md: 38 },
            }}
          />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default CartTitle;
