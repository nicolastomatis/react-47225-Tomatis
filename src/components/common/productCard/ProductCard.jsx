import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <>
      <Card
        sx={{
          width: 345,
          transition: "transform 0.25s ease-in-out",
          "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        }}
      >
        <CardMedia
          component="img"
          alt="Revista Faba informa"
          height="auto"
          image={item.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              minHeight: "40.03px",
              "&:hover": {
                color: "red",
                backgroundColor: "white",
                cursor: "text",
              },
            }}
          >
            {item.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/itemDetail/${item.id}`}>
            <Button size="small" variant="outlined">
              Mas detalles
            </Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductCard;
