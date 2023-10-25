import * as React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import AddItemsContainer from "../../common/addItems/AddItemsContainer";

const ItemDetail = ({ item, onAdd }) => {
  return (
    <Container
      id="test"
      sx={{
        my: { xs: 2, md: 4 },

        minWidth: "200px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          pt: 2,
          width: "100%",
          maxWidth: "40vw",
          alignItems: "center",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            display: "flex",
            objectFit: { xs: "contain", md: "cover" },
            width: { xs: 2 / 3, md: 1 / 2 },
            maxHeight: { xs: "40%", md: "100%" },
          }}
          image={item.img}
          alt={item.title}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: 1, md: "70%" },
          }}
        >
          <CardContent
            sx={{
              flex: "1 0 auto",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography component="div" variant="h5">
              {item.title}
            </Typography>
            <Typography variant="h7" color="text.secondary" component="div">
              {item.description}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                alignItems: "center",
                m: 1,
                width: "100%",
              }}
            >
              <Box>
                <AddItemsContainer item={item} onAdd={onAdd} />
              </Box>
            </Box>
          </CardContent>
          {/* // Aca va el boton */}
        </Box>
      </Card>
    </Container>
  );
};

export default ItemDetail;
