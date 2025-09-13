import React, { useState } from "react";
import { Grid, Box, Typography, TextField, MenuItem } from "@mui/material";
import ProductCard from "../components/ProductCard/ProductCard";
import PageWrapper from "../components/UI/PageWrapper";

function Licitatii() {
  const [sortBy, setSortBy] = useState("time");
  const [search, setSearch] = useState("");

  const auctions = [
    { id: 1, title: "Laptop Dell XPS", price: 950, timeLeft: 3600, image: "https://placehold.co/600x400" },
    { id: 2, title: "iPhone 14 Pro", price: 1200, timeLeft: 7200, image: "https://placehold.co/600x400" },
    { id: 3, title: "Camera Canon EOS", price: 780, timeLeft: 1800, image: "https://placehold.co/600x400" },
    { id: 4, title: "Bicicletă MTB", price: 250, timeLeft: 9000, image: "https://placehold.co/600x400" },
  ];

  const filtered = auctions
    .filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => (sortBy === "price" ? a.price - b.price : a.timeLeft - b.timeLeft));

  return (
    <PageWrapper maxWidth="lg">
      <Typography variant="h4" gutterBottom align="center">📦 Licitații Active</Typography>

      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} md={8}>
          <TextField
            fullWidth
            label="Caută licitații"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            select
            label="Sortează după"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <MenuItem value="time">⏳ Timp rămas</MenuItem>
            <MenuItem value="price">💰 Preț</MenuItem>
          </TextField>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        {filtered.map((p) => (
          <Grid key={p.id} item xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={p} />
          </Grid>
        ))}
      </Grid>
    </PageWrapper>
  );
}
export default Licitatii;