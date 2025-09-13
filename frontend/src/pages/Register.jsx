import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { saveUser } from "../utils/auth";
import {
  Box,
  Button,
  TextField,
  Typography
} from "@mui/material";
import PageWrapper from "../components/UI/PageWrapper";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email };
    saveUser(newUser);
    alert(`✅ Cont creat pentru ${name}`);
    navigate("/profile");
  };

  return (
    <PageWrapper>
      <Typography variant="h4" gutterBottom align="center">
        📝 Înregistrare
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth label="Nume complet" margin="normal"
          value={name} onChange={(e) => setName(e.target.value)} required
        />
        <TextField
          fullWidth type="email" label="Email" margin="normal"
          value={email} onChange={(e) => setEmail(e.target.value)} required
        />
        <TextField
          fullWidth type="password" label="Parolă" margin="normal"
          value={password} onChange={(e) => setPassword(e.target.value)} required
        />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
          Înregistrează-te
        </Button>
      </Box>
      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        Ai deja cont? <Link to="/login">Login aici</Link>
      </Typography>
    </PageWrapper>
  );
}

export default Register;