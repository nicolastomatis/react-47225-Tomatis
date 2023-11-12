import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [estado, setEstado] = useState({ estado: "inicial" });

  useEffect(() => {
    let itemCollection = collection(db, "productsMockup");
    let refDoc = doc(itemCollection, id);
    getDoc(refDoc).then((res) => {
      setItem({ id: res.id, ...res.data() });
      res.data()?.title
        ? setEstado({ estado: "existe" })
        : setEstado({ estado: "noExiste" });
    });
  }, [id]);

  const onAdd = (cantidad) => {
    const addCart = { ...item, cantidad };
    addToCart(addCart);
  };

  return <ItemDetail item={item} onAdd={onAdd} estado={estado} />;
};

export default ItemDetailContainer;
