import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        background: "linear-gradient(90deg, #ff4f9a, #ff77c8)",
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
      {/* Logo / Brand */}
      <h1
        style={{
          color: "white",
          fontWeight: "700",
          letterSpacing: "1px",
          margin: 0,
          fontSize: "1.4rem",
        }}
      >
        Connectly
      </h1>

      {/* Links */}
      <div style={{ display: "flex", gap: "20px" }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "500",
            padding: "6px 12px",
            borderRadius: "6px",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.background = "rgba(255,255,255,0.3)")}
          onMouseOut={(e) => (e.target.style.background = "transparent")}
        >
          Home
        </Link>

        <Link
          to="/about"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "500",
            padding: "6px 12px",
            borderRadius: "6px",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.background = "rgba(255,255,255,0.3)")}
          onMouseOut={(e) => (e.target.style.background = "transparent")}
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
