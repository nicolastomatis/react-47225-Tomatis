import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productsMockup } from "../../../../productsMockup";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const productosFiltrados = productsMockup.filter(
      (product) => product.category === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName ? productosFiltrados : productsMockup);
    });

    tarea.then((res) => {
      setItems(res);
    });
  }, [categoryName]);

  return <ItemList items={items} categoryName={categoryName} />;
};

export default ItemListContainer;
