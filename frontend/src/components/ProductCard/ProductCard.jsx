import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Preț: {product.price} €</p>
      <Link to={`/product/${product.id}`} className={styles.btn}>
        Detalii
      </Link>
    </div>
  );
}

export default ProductCard;