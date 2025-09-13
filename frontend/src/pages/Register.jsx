import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { saveUser } from "../utils/auth";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && password) {
      const newUser = { name, email };
      saveUser(newUser);

      alert(`✅ Cont creat pentru ${name}`);
      navigate("/profile");
    } else {
      alert("❌ Completează toate câmpurile");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h1>📝 Înregistrare</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nume complet"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ display: "block", marginBottom: 10, width: "100%", padding: "8px" }}
        />
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
        <button type="submit">Înregistrează-te</button>
      </form>
      <p>Ai deja cont? <Link to="/login">Login aici</Link></p>
    </div>
  );
}

export default Register;