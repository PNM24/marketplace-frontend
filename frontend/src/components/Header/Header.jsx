import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { getUser, logoutUser } from "../../utils/auth";

function Header() {
  const user = getUser();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  const linksCommon = [
    { to: "/", label: "Acasă" },
    { to: "/licitatii", label: "Licitatii" },
    { to: "/anunturi", label: "Anunțuri" },
  ];
  const linksAuth = user
    ? [{ to: "/profile", label: "Profil" }]
    : [{ to: "/login", label: "Login" }, { to: "/register", label: "Register" }];

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            🛒 Marketplace
          </Typography>

          {/* Desktop links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {[...linksCommon, ...linksAuth].map((l) => (
              <Button key={l.to} color="inherit" component={RouterLink} to={l.to}>
                {l.label}
              </Button>
            ))}
            {user && (
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            )}
          </Box>

          {/* Mobile menu button */}
          <IconButton
            edge="end"
            color="inherit"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: 'inline-flex', md: 'none' } }}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer (Mobile) */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260 }} role="presentation" onClick={() => setOpen(false)}>
          <List>
            {[...linksCommon, ...linksAuth].map((l) => (
              <ListItem key={l.to} disablePadding>
                <ListItemButton component={RouterLink} to={l.to}>
                  <ListItemText primary={l.label} />
                </ListItemButton>
              </ListItem>
            ))}
            {user && (
              <ListItem disablePadding>
                <ListItemButton onClick={handleLogout}>
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </ListItem>
            )}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Header;