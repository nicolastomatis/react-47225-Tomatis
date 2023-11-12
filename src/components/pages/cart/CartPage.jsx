import { Paper } from "@mui/material";
import Cart from "./Cart";
import CartButtons from "./CartButtons";
import CartTitle from "./CartTitle";
import CartTotal from "./CartTotal";

const CartPage = () => {
  return (
    <>
      <Paper
        elevation={12}
        sx={{
          m: "20px",
          p: 1,
          display: "flex",
          flexDirection: { xs: "column", md: "column" },
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <CartTitle />
        <Cart />
        <CartTotal />
        <CartButtons />
      </Paper>
    </>
  );
};

export default CartPage;
