import { useEffect, useState } from "react";
import { productsMockup } from "../../../../productsMockup";
import FilterSection from "./FilterSection";

const FilterSectionContainer = () => {
  const [catFinal, setCatFinal] = useState([]);

  const [categorias, setCategorias] = useState([
    {
      id: "Todos",
      category: "Todos",
      img: "https://raw.githubusercontent.com/nicolastomatis/react-47225-Tomatis/main/src/assets/img/Nro603.jpg",
    },
  ]);
  useEffect(() => {
    //console.log(categorias);
    productsMockup.map((elem) => {
      if (!categorias.some((cat) => cat.category === elem.category)) {
        const nuevaCat = {
          id: elem.category,
          category: elem.category,
          img: elem.img,
        };

        return setCategorias(categorias.push(nuevaCat));
      }
    });

    const tarea = new Promise((resolve, reject) => {
      resolve(categorias);
    });

    tarea.then((res) => {
      setCatFinal(res);
    });
  }, []);

  return <FilterSection catFinal={catFinal} />;
};

export default FilterSectionContainer;
