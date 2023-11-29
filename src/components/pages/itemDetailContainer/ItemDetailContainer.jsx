import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { productsMockup } from "../../../../productsMockup.js";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [estado, setEstado] = useState({ estado: "inicial" });

  useEffect(() => {
    // Buscar el item en productsMockup por el id
    const selectedItem = productsMockup.find((product) => product.id === id);

    if (selectedItem) {
      setItem(selectedItem);
      setEstado({ estado: "existe" });
    } else {
      setEstado({ estado: "noExiste" });
    }
  }, [id]);

  const onAdd = (cantidad) => {
    const addCart = { ...item, cantidad };
    addToCart(addCart);
  };

  return <ItemDetail item={item} onAdd={onAdd} estado={estado} />;
};

export default ItemDetailContainer;
