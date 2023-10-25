import { useEffect, useState } from "react";
import AddItem from "./AddItem";

const AddItemsContainer = ({ item, onAdd }) => {
  const [stock, setStock] = useState(4);
  const [contador, setContador] = useState(1);

  const addItems = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const removeItems = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };
  useEffect(() => {
    setStock(item.stock);
  }, [item.id]);

  return (
    <>
      <AddItem
        addItems={() => addItems}
        removeItems={() => removeItems}
        contador={contador}
        onAdd={onAdd}
      />
    </>
  );
};

export default AddItemsContainer;
