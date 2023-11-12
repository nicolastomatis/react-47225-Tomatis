import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import AddItemCart from "../../common/addItems/AddItemCart";

const Cart = () => {
  const { cart, deleteProduct } = useContext(CartContext);

  return (
    <Box
      sx={{
        minHeight: "30vh",
        p: 2,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {cart.length <= 0 && <h2>El carrito se encuentra vacio</h2>}
      {cart.map((product) => {
        return (
          <Stack key={product.id} flexDirection={"row"} paddingBottom={2}>
            <Card
              sx={{
                display: "flex",
                maxWidth: "500px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  m: { xs: 0, md: 2 },
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: 75 }}
                  image={product.img}
                  alt="Imagen del producto"
                />
                <CardContent
                  sx={{
                    flex: "1 0 auto",
                    p: { xs: "1px", md: "5px" },
                    paddingLeft: 5,
                  }}
                >
                  <Typography
                    component="div"
                    variant="h5"
                    sx={{ width: { xs: "150px", md: "250px" } }}
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    $ {product.price}
                  </Typography>
                  <AddItemCart cantidad={product.cantidad} product={product} />
                </CardContent>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    pl: { xs: 0, md: 1 },
                    pr: { xs: 1, md: 0 },
                    pb: 1,
                    justifyContent: { xs: "space-around" },
                    flexDirection: { xs: "column-reverse", md: "row" },
                  }}
                >
                  <Typography
                    variant={"subtitle2"}
                    color="text.secondary"
                    component="div"
                    sx={{
                      textAlign: "center",
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    Total $
                    {Math.round(product.price * product.cantidad * 100) / 100}
                  </Typography>
                  <Typography
                    variant={"subtitle1"}
                    color="text.secondary"
                    component="div"
                    sx={{
                      textAlign: "center",
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    Total $
                    {Math.round(product.price * product.cantidad * 100) / 100}
                  </Typography>
                  <Tooltip title="Eliminar producto">
                    <IconButton
                      aria-label="trash"
                      onClick={() => deleteProduct(product)}
                      sx={{
                        alignSelf: { md: "start" },
                      }}
                    >
                      <DeleteForeverIcon
                        sx={{
                          height: { xs: 24, md: 38 },
                          width: { xs: 24, md: 38 },
                        }}
                      />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Box>
            </Card>
          </Stack>
        );
      })}
    </Box>
  );
};

export default Cart;
