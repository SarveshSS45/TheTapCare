import React from "react";
import { Call, WhatsApp } from "@mui/icons-material";

const Button = ({ label, variant = "filled", children, className = "", ...props }) => {
  const base = "px-6 py-2 rounded-full font-medium inline-flex items-center justify-center gap-2";
  const filled = "bg-blue-600 text-white hover:bg-blue-700";
  const outlined = "border border-blue-600 text-blue-600 hover:bg-blue-50";
  const classes = `${base} ${variant === "outlined" ? outlined : filled} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
      {label}
    </button>
  );
};

const FloatingButtons = ({ visible }) => {
  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex-col gap-4 transition-opacity duration-300 ${
        visible ? "flex" : "opacity-0 pointer-events-none"
      }`}
    >
      <a href="tel:+918108737114">
        <Button
          variant="filled"
          className="bg-blue-600 hover:bg-blue-700 p-3 w-12 h-12 rounded-full shadow-lg"
        >
          <Call />
        </Button>
      </a>
      <a href="https://wa.me/918108737114" target="_blank" rel="noopener noreferrer">
        <Button
          variant="filled"
          className="bg-green-500 hover:bg-green-600 p-3 w-12 h-12 rounded-full shadow-lg"
        >
          <WhatsApp />
        </Button>
      </a>
    </div>
  );
};

export default FloatingButtons;