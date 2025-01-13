import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#343a40",
        color: "white",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          textAlign: "left",
        }}
      >
        <div>
          <h4 style={{ marginBottom: "15px", color: "#f8f9fa" }}>Contact Us</h4>
          <p>
            Email:{" "}
            <a href="mailto:support@wekart.com" style={{ color: "#ffc107" }}>
              support@wekart.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+18001234567" style={{ color: "#ffc107" }}>
              +1-800-123-4567
            </a>
          </p>
        </div>

        <div>
          <h4 style={{ marginBottom: "15px", color: "#f8f9fa" }}>Address</h4>
          <p>WeKart Inc.</p>
          <p>1234 Shopping St, Suite 567</p>
          <p>New York, NY 10001, USA</p>
        </div>

        <div>
          <h4 style={{ marginBottom: "15px", color: "#f8f9fa" }}>Follow Us</h4>
          <p>
            <a
              href="#"
              style={{
                marginRight: "10px",
                color: "#ffc107",
                fontSize: "20px",
              }}
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="#"
              style={{
                marginRight: "10px",
                color: "#ffc107",
                fontSize: "20px",
              }}
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              style={{
                marginRight: "10px",
                color: "#ffc107",
                fontSize: "20px",
              }}
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </p>
        </div>
      </div>
      <p
        style={{
          marginTop: "15px",
          color: "#adb5bd",
          fontSize: "14px",
        }}
      >
        &copy; {new Date().getFullYear()} WeKart. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
