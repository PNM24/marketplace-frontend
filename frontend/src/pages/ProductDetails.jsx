import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AuctionTimer from "../components/AuctionTimer/AuctionTimer";
import BidSection from "../components/BidSection/BidSection";

function ProductDetails() {
  const { id } = useParams();

  // Produs demo (în viitor luăm din backend)
  const product = {
    id,
    title: "Laptop Dell XPS",
    description: "Laptop premium, 16GB RAM, SSD 1TB.",
    image: "https://placehold.co/500x300",
    startingPrice: 950,
    auctionEnd: new Date(Date.now() + 60 * 60 * 1000) // 1 oră de acum
  };

  // Bidding state demo
  const [currentBid, setCurrentBid] = useState(product.startingPrice);

  const handleBid = (newBid) => {
    setCurrentBid(newBid);
    alert(`✅ Ai plasat o ofertă de ${newBid} €`);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} style={{ maxWidth: "500px" }} />
      <p>{product.description}</p>

      <h3>Preț curent: {currentBid} €</h3>
      <AuctionTimer endTime={product.auctionEnd} />

      <BidSection currentBid={currentBid} onBid={handleBid} />
    </div>
  );
}

export default ProductDetails;