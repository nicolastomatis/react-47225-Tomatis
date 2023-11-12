import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addToCart = (product) => {
    !isInCart(product.id)
      ? addItemToCart(product)
      : setCart(addCantityToItem(product));
  };

  const isInCart = (id) => {
    return cart.some((e) => e.id === id);
  };

  const addItemToCart = (product) => {
    Swal.fire({
      title: `Se agregaron ${product.cantidad} items de ${product.title} al carrito`,
      icon: "success",
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
    const newCart = [...cart, product];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const removeOneToItem = (product) => {
    let newCart = cart.map((e) => {
      let cantidadFinal;

      if (e.id === product.id) {
        if (e.cantidad - 1 > 0) {
          cantidadFinal = e.cantidad - 1;
          Swal.fire({
            title: `Se elimino 1 items de ${product.title} al carrito`,
            icon: "success",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
          });
          return { ...e, cantidad: cantidadFinal };
        } else {
          return e;
        }
      } else {
        return e;
      }
    });
    localStorage.setItem("cart", JSON.stringify(newCart));
    return setCart(newCart);
  };

  const addOneToItem = (product) => {
    let newCart = cart.map((e) => {
      let cantidadFinal;
      if (e.id === product.id) {
        if (e.cantidad + 1 < product.stock) {
          cantidadFinal = e.cantidad + 1;

          Swal.fire({
            title: `Se agrego 1 items de ${product.title} al carrito`,
            icon: "success",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
          });
        } else {
          cantidadFinal = product.stock;
          Swal.fire({
            title: "cantidad maxima alcanzada",
            icon: "success",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          });
        }
        return { ...e, cantidad: cantidadFinal };
      } else {
        return e;
      }
    });
    localStorage.setItem("cart", JSON.stringify(newCart));
    return setCart(newCart);
  };

  const addCantityToItem = (product) => {
    let newCart = cart.map((e) => {
      let cantidadFinal;
      if (e.id === product.id) {
        if (e.cantidad + product.cantidad < product.stock) {
          cantidadFinal = e.cantidad + product.cantidad;
          Swal.fire({
            title: `Se agregaron ${product.cantidad} items de ${product.title} al carrito`,
            icon: "success",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          });
        } else {
          cantidadFinal = product.stock;
          Swal.fire({
            title: "cantidad maxima alcanzada",
            icon: "success",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          });
        }

        return { ...e, cantidad: cantidadFinal };
      } else {
        return e;
      }
    });
    localStorage.setItem("cart", JSON.stringify(newCart));
    return newCart;
  };

  const clearCart = () => {
    Swal.fire({
      icon: "error",
      title: "ATENCION!!!",
      text: "Esta seguro que desea eliminar todos los articulos del carrito de compras?. Esta accion no se podrá deshacer",
      showCancelButton: true,
      confirmButtonText: "Vaciar Carrito",
      confirmButtonColor: "REd",
      cancelButtonText: "cancelar",
      cancelButtonColor: "green",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Carrito eliminado",
          icon: "error",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
        setCart([]);
        localStorage.removeItem("cart");
      }
    });
  };

  const cartBuyed = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };
  const totalItems = () => {
    const itemsTotales = cart.reduce((acc, val) => {
      return acc + val.cantidad;
    }, 0);
    return Math.round(itemsTotales);
  };

  const totalPrice = () => {
    const total = cart.reduce((acc, element) => {
      return acc + element.cantidad * element.price;
    }, 0);
    return Math.round(total * 100) / 100;
  };

  const deleteProduct = (product) => {
    Swal.fire({
      icon: "error",
      title: "ATENCION!!!",
      text: `Esta seguro que desea eliminar el articulo ${product.title} del carrito de compras?. `,
      showCancelButton: true,
      confirmButtonText: "Eliminar producto",
      confirmButtonColor: "red",
      cancelButtonText: "cancelar",
      cancelButtonColor: "green",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Producto eliminado",
          icon: "error",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
        let newCart = cart.filter((e) => {
          return e.id !== product.id;
        });

        localStorage.setItem("cart", JSON.stringify(newCart));
        return setCart(newCart);
      }
    });
  };

  let data = {
    cart,
    addToCart,
    totalItems,
    clearCart,
    addOneToItem,
    removeOneToItem,
    deleteProduct,
    totalPrice,
    cartBuyed,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
