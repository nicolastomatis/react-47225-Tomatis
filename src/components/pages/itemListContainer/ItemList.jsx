import { Typography, Stack, Container } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items, categoryName }) => {
  console.log("Productos:", items);

  return (
    <>
      <Container maxWidth="xl" mt={1} mb={20} sx={{ overflowX: "scroll" }}>
        <Typography variant="h2" mt={3} mb={2} align="center">
          {categoryName ? `${categoryName} ` : " Revista FABA Informa"}
        </Typography>
        <Stack
          direction={{ xs: "row" }}
          flexWrap="wrap"
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent={{ xs: "center" }}
          gap={2}
          mb={2}
        >
          {items.map((item) => (
            <ProductCard item={item} key={item.title} />
          ))}
        </Stack>
      </Container>
    </>
  );
};

export default ItemList;
