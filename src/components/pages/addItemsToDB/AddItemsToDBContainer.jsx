import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import ItemDetailSkeleton from "../itemDetailContainer/ItemDetailSkeleton";
import AddItemsToDB from "./AddItemsToDB";

const AddItemsToDBContainer = () => {
  const [items, setItems] = useState([]);
  const [itemsAgregados, setItemsAgregados] = useState(false);

  useEffect(() => {
    let productsColection = collection(db, "productsMockup");

    getDocs(productsColection).then((resp) => {
      let newArray = resp.docs.map((prod) => {
        return { id: prod.id, ...prod.data() };
      });

      setItems(newArray);
    });
  }, []);

  const agregarItems = () => {
    setItemsAgregados(true);
    items.forEach((element) => {
      updateDoc(doc(db, "productsMockup", element.id), {
        stock: element.stock + 5,
      });
    });
  };
  return (
    <>
      {items.length > 0 ? (
        <AddItemsToDB
          agregarItems={agregarItems}
          itemsAgregados={itemsAgregados}
        />
      ) : (
        <ItemDetailSkeleton />
      )}
    </>
  );
};

export default AddItemsToDBContainer;
