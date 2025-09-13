import React, { useState } from "react";
import styles from "./BidSection.module.css";

function BidSection({ currentBid, onBid }) {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const bidValue = parseFloat(amount);
    if (isNaN(bidValue) || bidValue <= currentBid) {
      alert(`Oferta trebuie să fie mai mare decât ${currentBid} €`);
      return;
    }
    onBid(bidValue);
    setAmount("");
  };

  return (
    <form className={styles.bidForm} onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder={`Minim ${currentBid + 1} €`}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Plasează oferta 💶</button>
    </form>
  );
}

export default BidSection;