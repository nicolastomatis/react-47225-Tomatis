import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { CartContext } from "../../../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import "./CheckoutFormik.css";

const CheckoutFormik = () => {
  const [orderId, setOrderId] = useState(null);

  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const total = getTotalPrice();

  const enviarOrden = (formDetails) => {
    let order = {
      buyer: formDetails,
      items: cart,
      total,
      time: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));
    cart.forEach((elemento) => {
      updateDoc(doc(db, "products", elemento.id), {
        stock: elemento.stock - elemento.quantity,
      });
    });

    clearCart();
  };

  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      nombre: "",
      telefono: "",
      email: "",
    },

    onSubmit: (formDetails) => {
      enviarOrden(formDetails);
    },

    validateOnChange: false,

    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("El campo es obligatorio")
        .min(3, "debe tener al menos 3 caracteres"),
      telefono: Yup.number().required("Debes introducir un numero"),
      email: Yup.string()
        .email("El mail debe contener @")
        .required("El campo es obligatorio"),
    }),
  });
  return (
    <>
      {orderId ? (
        <div className="checkout">
          <h2 className="checkh2">
            Gracias por tu comprar en Tienda FABAInforma! Tu N° de orden es {orderId}
          </h2>
          <Button
            variant={"outlined"}
            type="button"
            style={{
              backgroundColor: "black",
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Seguir comprando
            </Link>
          </Button>
        </div>
      ) : (
        <div className="checkout-form-container">
          <form onSubmit={handleSubmit} className="checkout-form">
            <TextField
              label="Nombre"
              variant="outlined"
              name="nombre"
              onChange={handleChange}
              error={errors.nombre ? true : false}
              helperText={errors.nombre}
              style={{ marginBottom: 20 }}
            />

            <TextField
              label="Telefono"
              variant="outlined"
              name="telefono"
              onChange={handleChange}
              error={errors.apellido ? true : false}
              helperText={errors.apellido}
              style={{ marginBottom: 20 }}
            />

            <TextField
              label="Email"
              variant="outlined"
              name="email"
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
            />

            <div className="buttons-container">
              <Button
                variant="contained"
                type="submit"
                style={{ backgroundColor: "black" }}
              >
                Enviar
              </Button>
              <Link to="/cart">
                <Button
                  variant={"contained"}
                  type="button"
                  style={{ backgroundColor: "black" }}
                >
                  Cancelar
                </Button>
              </Link>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default CheckoutFormik;
