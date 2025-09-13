import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, Box, Typography, Button, TextField } from "@mui/material";
import PageWrapper from "../components/UI/PageWrapper";
import AuctionTimer from "../components/AuctionTimer/AuctionTimer";

function ProductDetails() {
  const { id } = useParams();
  const product = {
    id, title: "Laptop Dell XPS",
    description: "Laptop premium, 16GB RAM, SSD 1TB.",
    image: "https://placehold.co/1000x700",
    startingPrice: 950, auctionEnd: new Date(Date.now() + 60 * 60 * 1000)
  };
  const [currentBid, setCurrentBid] = useState(product.startingPrice);
  const [amount, setAmount] = useState("");

  const placeBid = (e) => {
    e.preventDefault();
    const v = parseFloat(amount);
    if (!isNaN(v) && v > currentBid) {
      setCurrentBid(v);
      setAmount("");
    }
  };

  return (
    <PageWrapper maxWidth="lg">
      <Typography variant="h4" gutterBottom>{product.title}</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Box component="img" src={product.image} alt={product.title}
               sx={{ width: '100%', borderRadius: 2, objectFit: 'cover' }} />
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography variant="body1" sx={{ mb: 2 }}>{product.description}</Typography>
          <Typography variant="h6">Preț curent: {currentBid} €</Typography>
          <Box sx={{ my: 1 }}>
            <AuctionTimer endTime={product.auctionEnd} />
          </Box>

          <Box component="form" onSubmit={placeBid} sx={{ mt: 2, display: 'flex', gap: 1 }}>
            <TextField
              type="number"
              label={`Ofertă (min > ${currentBid})`}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              fullWidth
            />
            <Button type="submit" variant="contained">Licită</Button>
          </Box>
        </Grid>
      </Grid>
    </PageWrapper>
  );
}
export default ProductDetails;