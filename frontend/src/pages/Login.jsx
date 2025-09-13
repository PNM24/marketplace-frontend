import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { saveUser } from "../utils/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // DEMO login simplu
    if (email && password) {
      const user = { name: "User Demo", email };
      saveUser(user);

      alert("✅ Login reușit!");
      navigate("/profile");
    } else {
      alert("❌ Introdu date valide");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h1>🔑 Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ display: "block", marginBottom: 10, width: "100%", padding: "8px" }}
        />
        <input
          type="password"
          placeholder="Parolă"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ display: "block", marginBottom: 10, width: "100%", padding: "8px" }}
        />
        <button type="submit">Login</button>
      </form>
      <p>Nu ai cont? <Link to="/register">Înregistrează-te aici</Link></p>
    </div>
  );
}

export default Login;