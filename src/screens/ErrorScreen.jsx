import React from "react";
import { Link } from "react-router-dom";

const ErrorScreen = () => (
  <div style={{
    minHeight: "60vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#222"
  }}>
    <h1 style={{ fontSize: "4rem", marginBottom: "0.5em" }}>404</h1>
    <h2 style={{ marginBottom: "1em" }}>Page Not Found</h2>
    <p style={{ marginBottom: "2em" }}>
      Oops! The page you are looking for does not exist.
    </p>
    <Link to="/" style={{
      padding: "12px 28px",
      background: "#00d4ff",
      color: "#1a1a1a",
      borderRadius: "25px",
      textDecoration: "none",
      fontWeight: "bold",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
    }}>
      Go Home
    </Link>
  </div>
);

export default ErrorScreen;