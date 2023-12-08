import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Card
      sx={{
        margin: 2,
        display: "flex",
        flexDirection: " column",
        backgroundColor: "#1202",
      }}
    >
      <CardMedia
        sx={{ height: 500 }}
        image={item.img}
        title={`image ${item.title}`}
      />
      <CardContent sx={{ maxWidth: 350 }}>
        <Typography gutterBottom variant="h4" component="div">
          {item.title}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $ {item.price} .-
        </Typography>
      </CardContent>
      <CardActions>
        {item.stock > 0 ? (
          <Link to={`/itemDetail/${item.id}`}>
            <Button size="small" variant="outlined">
              Ver detalle
            </Button>
          </Link>
        ) : (
          <Button variant="contained" disabled>
            Sin stock
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
