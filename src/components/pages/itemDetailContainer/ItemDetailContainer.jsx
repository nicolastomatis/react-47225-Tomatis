// import axios from "axios";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { productsMockup } from "../../../../productsMockup";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const producto = productsMockup.find((prod) => prod.id === +id);

    const getProduct = new Promise((resolve, reject) => {
      resolve(producto);
    });
    getProduct.then((resp) => {
      setItem(resp);
    });
  }, [id]);

  const onAdd = (cantidad) => {
    const addCart = { ...item, cantidad };
    console.log("se agrego al carrito: ", addCart);
  };

  return <ItemDetail item={item} onAdd={onAdd} />;
};

export default ItemDetailContainer;
