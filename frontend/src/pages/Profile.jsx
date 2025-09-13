import React from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";
import PageWrapper from "../components/UI/PageWrapper";

function Profile() {
  const user = {
    name: "Ion Popescu",
    email: "ion.popescu@email.com",
    bids: [
      { id: 1, product: "Laptop Dell XPS", amount: 960 },
      { id: 2, product: "iPhone 14 Pro", amount: 1250 },
    ],
  };

  return (
    <PageWrapper>
      <Typography variant="h4" gutterBottom align="center">
        👤 Profil utilizator
      </Typography>
      <Typography><b>Nume:</b> {user.name}</Typography>
      <Typography><b>Email:</b> {user.email}</Typography>

      <Typography variant="h6" sx={{ mt: 3 }}>📑 Licitațiile mele</Typography>
      <List>
        {user.bids.map((bid) => (
          <ListItem key={bid.id}>
            <ListItemText primary={`${bid.product} → ${bid.amount} €`} />
          </ListItem>
        ))}
      </List>
    </PageWrapper>
  );
}

export default Profile;