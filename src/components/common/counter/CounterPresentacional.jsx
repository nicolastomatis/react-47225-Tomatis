import { Button } from "@mui/material";

const CounterPresentacional = ({ sumar, contador, restar, onAdd }) => {
  return (
    <div>
      <Button variant="contained" sx={{margin:2}} onClick={sumar}>sumar</Button >
      <h4 style={{paddingLeft: 55}}> {contador} </h4>
      <Button variant="contained" sx={{margin:2}} onClick={restar}>restar</Button >
      <Button variant="contained" sx={{margin:2}} onClick={()=>onAdd(contador)}>Agregar al carrito</Button >
    </div>
  );
};

export default CounterPresentacional;
