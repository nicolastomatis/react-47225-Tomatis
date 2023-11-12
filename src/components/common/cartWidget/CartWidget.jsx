import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);
  const total = totalItems();
  return (
    <div>
      <ShoppingCartOutlinedIcon
        alt="Cart"
        src=""
        fontSize="inherit"
      ></ShoppingCartOutlinedIcon>
      <Badge badgeContent={total} color="primary"></Badge>
    </div>
  );
};

export default CartWidget;
