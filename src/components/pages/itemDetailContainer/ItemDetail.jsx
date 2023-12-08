import { Box, Card } from "@mui/material";
import CounterContainer from "../../common/counter/CounterContainer";

export const ItemDetail = ({ productSelected, onAdd, initial }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100%"
    >
      {/* aca todo el detalle */}
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <h2>{productSelected.title}</h2>
        <img src={productSelected.img} alt="" style={{ maxWidth: 500 }} />
        <h3>$ {productSelected.price}</h3>
        {/* Aca el contador */}
        <CounterContainer
          stock={productSelected.stock}
          onAdd={onAdd}
          initial={initial}
        />
      </Card>
    </Box>
  );
};
