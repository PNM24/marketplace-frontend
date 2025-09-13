import React, { useEffect, useState } from "react";
import styles from "./AuctionTimer.module.css";

function AuctionTimer({ endTime }) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(endTime).getTime() - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft("Licitația s-a încheiat ⏹️");
        return;
      }

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  return <p className={styles.timer}>⏳ {timeLeft}</p>;
}

export default AuctionTimer;