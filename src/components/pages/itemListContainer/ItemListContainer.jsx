
import { useState, useEffect } from "react";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


import { getDocs, collection, query, where, addDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import ItemListSkeleton from "./ItemSkeleton";


const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "products");

    let consulta = undefined;

    if (!categoryName) {
      
      consulta = productsCollection;
    } else {
      
      consulta = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    }

    getDocs(consulta).then((res) => {
      let newArray = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });

      setItems(newArray);
    });
  }, [categoryName]);

  return (
    <>
      {items.length <= 0 ? (
        <ItemListSkeleton />
      ) : (
        <ItemList items={items} categoryName={categoryName} />
      )}
    </>
  );
};

export default ItemListContainer;


