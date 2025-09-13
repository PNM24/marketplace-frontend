import React from "react";
import { Link } from "react-router-dom";
import { Card, CardActionArea, CardMedia, CardContent, Typography, Button, CardActions, Box } from "@mui/material";

function ProductCard({ product }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardActionArea component={Link} to={`/product/${product.id}`} sx={{ flexGrow: 1 }}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          sx={{ aspectRatio: '4 / 3', objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h6">{product.title}</Typography>
          <Typography variant="body2" color="text.secondary">
            Preț curent: {product.price} €
          </Typography>
          {product.timeLeft && (
            <Typography variant="body2" color="error" sx={{ mt: 0.5 }}>
              ⏳ {Math.floor(product.timeLeft / 60)} min
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box sx={{ width: '100%', px: 1, pb: 1 }}>
          <Button fullWidth variant="contained" component={Link} to={`/product/${product.id}`}>
            Detalii
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}
export default ProductCard;