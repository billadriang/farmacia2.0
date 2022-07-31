import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";



const styles = {
  container: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 30,
    backgroundColor: "rgb(232,232,232)"
  },
  title: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    height: 30,
  }
};

const Item = ({ product }) => {


  return (
    <Card sx={{ maxWidth: 345 }} style={styles.container}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          image={product.image}
          alt={product.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            style={styles.title}
          >
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/product/${product.id}`}>
          <Button size="small" color="primary">
            Detalles
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Item;