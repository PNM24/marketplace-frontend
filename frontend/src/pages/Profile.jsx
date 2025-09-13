import React from "react";

function Profile() {
  // momentam fake data - simulăm un user logat
  const user = {
    name: "Ion Popescu",
    email: "ion.popescu@email.com",
    bids: [
      { id: 1, product: "Laptop Dell XPS", amount: 960 },
      { id: 2, product: "iPhone 14 Pro", amount: 1250 },
    ],
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h1>👤 Profil utilizator</h1>
      <p><b>Nume:</b> {user.name}</p>
      <p><b>Email:</b> {user.email}</p>

      <h2>📑 Licitațiile mele</h2>
      <ul>
        {user.bids.map((bid) => (
          <li key={bid.id}>
            {bid.product} → {bid.amount} €
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;