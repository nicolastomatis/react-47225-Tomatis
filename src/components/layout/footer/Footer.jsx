import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Container, Grid, Link, Typography, Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Box
        component="footer"
        sx={{
          backgroundColor: "#1660A7",
          p: 6,
        }}
      >
        <Container maxWidth="lg">
            <Grid item xs={6} sm={4}>
              <Typography variant="h6" color="white" gutterBottom>
              Órgano de difusión oficial Federación Bioquímica de la Provincia de Buenos Aires. 
              </Typography>
              <Typography variant="h6" color="white" gutterBottom>
              Director: Dr. Claudio H. Cova | Secretaria de Redacción: Ana María Pertierra
              </Typography>
              <Typography variant="h6" color="white" gutterBottom>
                Publicidad: Calle 6 n° 1344 - Tel: (+54+221) 483-8821 / 482-2797 int. 350
              </Typography>
            </Grid>
          <Box mt={5}>
          <Typography variant="body2" color="white">
              © FABA Informa. Todos los derechos reservados.
              </Typography>
              <Typography variant="body2" color="white">
              Diseñado por Área de Imagen y Comunicación de FABA.
              </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
