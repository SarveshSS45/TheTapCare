import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ListItemButton from "@mui/material/ListItemButton";

import TapCareLogo from "../../../../assets/TapCareLogo.png";

const HC_Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate(); 

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: "What We Offer", href: "#what-we-offer" },
    { label: "Benefits for You", href: "#benefits-for-you" },
    { label: "Who Can Host Camp", href: "#who-can-host-camp" },
  ];

  const drawer = (
    <div className="w-64 p-4">
      <div className="flex justify-end">
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </div>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton component="a" href={item.href}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => {
              navigate("/host-camp-form");
              setMobileOpen(false);
            }}
          >
            Host A Camp
          </Button>
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: "linear-gradient(to right, #2563eb, #3730a3)",
          boxShadow: 3,
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar className="flex justify-between !pl-0">
          <div className="flex justify-between px-13">
            <img src={TapCareLogo} alt="TheTapCare Logo" className="h-10" />
          </div>
          <div className="px-6 hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:underline"
              >
                {item.label}
              </a>
            ))}
            <button
              className="bg-white text-indigo-800 rounded-full font-medium px-4 py-2 hover:bg-indigo-100 transition"
              onClick={() => navigate("/host-camp-form")}
            >
              Host A Camp
            </button>
          </div>

          <div className="md:hidden">
            <IconButton
              color="inherit"
              edge="end"
              onClick={handleDrawerToggle}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default HC_Header;