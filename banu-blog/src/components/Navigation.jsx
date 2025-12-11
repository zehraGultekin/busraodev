import { Link, useLocation } from "react-router-dom";
import "../styles/Navigation.css";

export default function Navigation() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="logo">
          <span className="logo-icon">👸</span>
          <span className="logo-text">Banu Çiçek'in Blogu</span>
        </Link>
        {!isHome && (
          <Link to="/" className="back-button">
            ← Ana Sayfaya Dön
          </Link>
        )}
      </div>
    </nav>
  );
}

