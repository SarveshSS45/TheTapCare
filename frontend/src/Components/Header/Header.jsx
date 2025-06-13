import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import BookNowForm from "./Components/BookNowForm";
import TapCareLogo from "../../assets/TapCareLogo.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Lab Partners", href: "#partners" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Host A Camp", href: "/host-camp" },
  ];

  const drawer = (
    <div className="w-full max-w-md mx-auto p-6 flex flex-col items-center space-y-4">
      <div className="w-full flex justify-end">
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </div>
      <List className="w-full flex flex-col items-center space-y-2">
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding className="w-full">
            <ListItemButton
              component="a"
              href={item.href}
              className="justify-center"
              onClick={handleDrawerToggle}
            >
              <ListItemText primary={item.label} className="text-center" />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem className="w-full">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => {
              setFormOpen(true);
              setMobileOpen(false);
            }}
          >
            Book Now
          </Button>
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0} // ✅ Remove elevation shadow
        sx={{
          background: "linear-gradient(to bottom right, #2563eb, #3730a3)", // ✅ Match hero gradient
          boxShadow: "none", // ✅ Remove shadow line
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar className="flex justify-between !pl-0">
          <div
            className="flex justify-between px-13 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={TapCareLogo} alt="TheTapCare Logo" className="h-10" />
          </div>

          {/* Desktop nav */}
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
              onClick={() => setFormOpen(true)}
            >
              Book Now
            </button>
          </div>

          {/* Mobile menu icon */}
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

      {/* Top Drawer for mobile */}
      <Drawer
        anchor="top"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            height: "auto",
            maxHeight: "80vh",
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Booking Form Modal */}
      <BookNowForm open={formOpen} onClose={() => setFormOpen(false)} />
    </>
  );
};

export default Header;
