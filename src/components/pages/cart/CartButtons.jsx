import { Button, Stack } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const CartButtons = () => {
  const { cart } = useContext(CartContext);
  const emptyCart = cart.length === 0 && { pointerEvents: "none" };

  return (
    <Stack flexDirection={"row"}>
      <Link to={"/checkout"} style={{ ...emptyCart }}>
        <Button
          disabled={cart.length === 0}
          variant="contained"
          sx={{ backgroundColor: "#374151", px: "50px" }}
        >
          Finalizar compra
        </Button>
      </Link>
    </Stack>
  );
};

export default CartButtons;
