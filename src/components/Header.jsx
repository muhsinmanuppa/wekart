import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cartCount }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/" style={{ fontSize: "1.7rem" }}>
          WeKart
        </Link>

        <div className="d-flex ms-auto">
          <Link
            className="btn btn-outline-light position-relative d-flex align-items-center"
            to="/cart"
            style={{ padding: "6px 12px" }}
          >
            <i className="bi bi-cart3" style={{ fontSize: "1.5rem" }}></i> 
            {cartCount > 0 && (
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: "0.8rem" }}
              >
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
