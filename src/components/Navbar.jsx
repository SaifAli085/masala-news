import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navButton = useRef(null);
  const linksContainerRef = useRef(null);

  function collapseNav() {
    navButton.current.classList.add("collapsed");
    linksContainerRef.current.classList.remove("show");
  }
  function myFunction() {
    const element = document.body;
    element.dataset.bsTheme =
      element.dataset.bsTheme === "light" ? "dark" : "light";
  }

  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark"
        style={{ borderBottom: "2px solid", borderColor: "white" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Masala News
          </Link>
          <button
            ref={navButton}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            ref={linksContainerRef}
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link" to="/" onClick={collapseNav}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business" onClick={collapseNav}>
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/entertainment"
                  onClick={collapseNav}
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general" onClick={collapseNav}>
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health" onClick={collapseNav}>
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science" onClick={collapseNav}>
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports" onClick={collapseNav}>
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/technology"
                  onClick={collapseNav}
                >
                  Technology
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={myFunction}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
                style={{ color: "white" }}
              >
                Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
