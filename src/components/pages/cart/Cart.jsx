import { Box, Button, IconButton } from "@mui/material";
import { useContext } from "react";

import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CounterContainer from "../../../components/common/counter/CounterContainer";
import CounterPresentacional from "../../../components/common/counter/CounterPresentacional";

const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const clearCartWithAlert = () => {
    Swal.fire({
      title: "Seguro?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Vaciar carrito!",
      denyButtonText: `No, cancelar!`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito eliminado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito queda como estaba", "", "warning");
      }
    });
  };

  return (
    <Box
      sx={{
        minHeight: "30vh",
        p: 2,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "arial",
        fontSize: 14,
      }}
    >
      {cart.length <= 0 && <h2>El carrito se encuentra vacio</h2>}

      {cart.map((product) => (
        <div
          key={product.id}
          style={{
            flexDirection: "row",
            backgroundColor: "Gainsboro",
            borderRadius: 10,
            marginBottom: 10,
          }}
        >
          <img src={product.img} alt="" style={{ width: 300, height: "100%" }} />
          <h2 style={{ paddingTop: 10, marginLeft: 20 }}>{product.title}</h2>
          <h3 style={{ marginLeft: 20 }}>U$D {product.price}</h3>
          <div style={{ display: "flex" }}>
            <h3 style={{ marginLeft: 20 }}>cantidad: {product.quantity}</h3>
            <IconButton
              sx={{ left: 130, bottom: 10 }}
              onClick={() => deleteProductById(product.id)}
            >
              <DeleteForeverIcon color="primary" />
            </IconButton>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <div>
          <h2 style={{ marginBottom: 6 }}>El total a pagar es : $ {total}</h2>
          <Link to="/checkout">
            <Button variant="contained"  style={{ fontSize: 10 ,marginRight: 60, width: 110 }}>
              Finalizar compra
            </Button>
          </Link>

          <Button
            variant="contained"
            onClick={clearCartWithAlert}
            style={{ width: 110, fontSize: 10 }}
          >
            Vaciar Carrito
          </Button>
        </div>
      )}
    </Box>
  );
};

export default Cart;
