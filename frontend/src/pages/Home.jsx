import React, { useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import ProductCard from "../components/ProductCard/ProductCard";
import styles from "./Home.module.css";

function Home() {
  const [search, setSearch] = useState("");

  // Produse fake (temporar înainte de backend)
  const products = [
    { id: 1, title: "Laptop Dell XPS", price: 950, image: "https://placehold.co/300x200" },
    { id: 2, title: "iPhone 14 Pro", price: 1200, image: "https://placehold.co/300x200" },
    { id: 3, title: "Camera Canon EOS", price: 780, image: "https://placehold.co/300x200" },
    { id: 4, title: "Bicicletă MTB", price: 250, image: "https://placehold.co/300x200" },
  ];

  // Filtru simplu după căutare
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.home}>
      <h1>🏠 Pagina principală - Licitații</h1>
      <SearchBar onSearch={(q) => setSearch(q)} />

      <div className={styles.productsGrid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => <ProductCard key={p.id} product={p} />)
        ) : (
          <p>Niciun produs găsit...</p>
        )}
      </div>
    </div>
  );
}

export default Home;