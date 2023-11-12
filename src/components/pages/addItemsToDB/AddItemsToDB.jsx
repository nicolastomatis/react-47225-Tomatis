import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const AddItemsToDB = ({ agregarItems, itemsAgregados }) => {
  return (
    <>
      <Box m={5} sx={{ mx: { xs: 2, md: 20 } }}>
        <Typography variant="h3" mt={2} mb={2} align="center">
          Agregar Stock a la Base de Datos
        </Typography>
        <Typography variant="h5" mt={2} mb={2} align="center">
          Al Presionar el siguiente boton se agregaran 5 unidades de stock a
          cada uno de los productos en la Base de datos, a fines de tener stock
          para realizar pruebas de testing.
          <br />
          <br />
          <Typography sx={{ fontSize: "2.5rem" }}>
            Por favor usar con responsabilidad!!!!
          </Typography>
          <br />
          Gracias
        </Typography>
        <Button
          disabled={itemsAgregados}
          variant="contained"
          sx={{ width: "100%" }}
          onClick={agregarItems}
        >
          {!itemsAgregados ? "Agregar items" : "Base de datos actualizada"}
        </Button>
        {itemsAgregados && (
          <Link to={"/"}>
            <Button
              variant="contained"
              sx={{ width: "100%", mt: 3 }}
              onClick={agregarItems}
            >
              Volver
            </Button>
          </Link>
        )}
      </Box>
    </>
  );
};

export default AddItemsToDB;
