import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { saveUser } from "../utils/auth";
import { Box, Button, TextField, Typography } from "@mui/material";
import PageWrapper from "../components/UI/PageWrapper";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      saveUser({ name: "User Demo", email });
      navigate("/profile");
    }
  };

  return (
    <PageWrapper>
      <Typography variant="h4" gutterBottom align="center">
        🔑 Login
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth label="Email" margin="normal"
          value={email} onChange={(e) => setEmail(e.target.value)} required
        />
        <TextField
          fullWidth label="Parolă" type="password" margin="normal"
          value={password} onChange={(e) => setPassword(e.target.value)} required
        />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
          Login
        </Button>
      </Box>
      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        Nu ai cont? <Link to="/register">Înregistrează-te aici</Link>
      </Typography>
    </PageWrapper>
  );
}

export default Login;