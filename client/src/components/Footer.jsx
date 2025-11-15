import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(90deg, #ff4fa8, #ff82c9)",
        padding: "12px 0",
        textAlign: "center",
        color: "#fff",
        fontSize: "14px",
        marginTop: "40px",
        width: "100%",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
      }}
    >
      <div style={{ fontWeight: "600", marginBottom: "6px" }}>Connectly 💌📞</div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginBottom: "6px",
        }}
      >
        <a href="#" style={iconStyle}>
          <i className="fa-brands fa-instagram"></i>
        </a>

        <a href="#" style={iconStyle}>
          <i className="fa-brands fa-linkedin"></i>
        </a>

        <a href="#" style={iconStyle}>
          <i className="fa-brands fa-github"></i>
        </a>
      </div>

      <p style={{ margin: 0, fontSize: "12px", opacity: 0.8 }}>
        © {new Date().getFullYear()} Connectly — All rights reserved
      </p>
    </footer>
  );
};

const iconStyle = {
  color: "white",
  fontSize: "18px",
  transition: "0.3s",
};

export default Footer;
