import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  // Mock user login state
  const [user, setUser] = useState(null);

  const handleAuthClick = () => {
    if (user) {
      // Sign out
      setUser(null);
    } else {
      // Sign in mock
      setUser({ name: "Darlyn" });
    }
  };

  return (
    <header style={styles.header}>
      {/* Logo */}
      <div style={styles.logo}>
        <Link to="/" style={styles.link}>Euphoria</Link>
      </div>

      {/* Navigation */}
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/products" style={styles.link}>Products</Link>
      </nav>

      {/* Sign In / Sign Out button */}
      <div>
        <button style={styles.button} onClick={handleAuthClick}>
          {user ? "Sign Out" : "Sign In"}
        </button>
      </div>
    </header>
  );
}

