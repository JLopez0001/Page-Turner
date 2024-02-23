import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/navbar-styles/navbar.css";

function Navbar() {
  const [activeLink, setActiveLink] = useState("");

  const { pathname } = useLocation();

  useEffect(() => {
    console.log(pathname.split("/"));
    const currentPath = pathname.split("/")[1];
    setActiveLink(currentPath ? currentPath : "home");
  }, []);

  return (
    <header>
      <nav className="navbar-container container">
        <Link to="/" onClick={() => setActiveLink("home")}>
          <div className="header-container">
            <i class="fa-solid fa-book-skull fa-2xl"></i>
            <h1>Page Turner</h1>
          </div>
        </Link>

        <div className="navbar-links">
          <Link
            className={`navbar-link ${activeLink === "home" ? "active" : ""}`}
            onClick={() => setActiveLink("home")}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`navbar-link ${
              activeLink === "catalog" ? "active" : ""
            }`}
            to="/catalog"
            onClick={() => setActiveLink("catalog")}
          >
            Catalog
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
