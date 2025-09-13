import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUser, logoutUser } from "../../utils/auth";
import styles from "./Header.module.css";

function Header() {
  const user = getUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    alert("🚪 Delogat cu succes!");
    navigate("/");
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>🛒 Marketplace</div>

      <nav className={styles.nav}>
        <Link to="/">Acasă</Link>
        <Link to="/licitatii">Licitatii</Link>
        <Link to="/anunturi">Anunțuri</Link>

        {user ? (
          <>
            <Link to="/profile">Profil</Link>
            <button className={styles.logout} onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;