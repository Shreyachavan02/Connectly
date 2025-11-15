import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
    padding: "8px 14px",
    borderRadius: "6px",
    transition: "0.3s ease",
    fontSize: "1rem",
  };

  return (
    <nav
      style={{
        background: "linear-gradient(90deg, #ff3d95, #ff6fc7)",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 10px rgba(255, 105, 180, 0.3)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      
      <h1
        style={{
          color: "white",
          fontWeight: "800",
          letterSpacing: "1.5px",
          margin: 0,
          fontSize: "1.7rem",
          textShadow: "0 0 8px rgba(255,255,255,0.4)",
          cursor: "pointer",
        }}
      >
        Connectly💌
      </h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            ...linkStyle,
            background: isActive ? "rgba(255,255,255,0.35)" : "transparent",
            color: isActive ? "#fff" : "white",
          })}
          onMouseEnter={(e) => (e.target.style.background = "rgba(255,255,255,0.35)")}
          onMouseLeave={(e) => (e.target.style.background = "transparent")}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          style={({ isActive }) => ({
            ...linkStyle,
            background: isActive ? "rgba(255,255,255,0.35)" : "transparent",
            color: isActive ? "#fff" : "white",
          })}
          onMouseEnter={(e) => (e.target.style.background = "rgba(255,255,255,0.35)")}
          onMouseLeave={(e) => (e.target.style.background = "transparent")}
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
