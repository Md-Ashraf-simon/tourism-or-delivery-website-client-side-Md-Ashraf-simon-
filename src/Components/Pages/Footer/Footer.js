import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import iconImg from "../../../image/footer-icon.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div class="footer-area pt-5">
        <Container>
          <Row>
            <Col xs={12} sm={6} md={4}>
              <div className="footer-info">
                <div className="footer-img">
                  <img src={iconImg} alt="" />
                </div>
                <p className="my-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur et quam sollicitudin mi tincidunt faucibus .
                </p>
                <div className="footer-fonts">
                  <h5>Follow us</h5>
                  <div className="footer-fonts">
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram"></i>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <h5>Contact us</h5>
              <p>
                {" "}
                <span className="footer-contact"> Call:</span> +01852-1265122 ,
                +01852-1265122
              </p>
              <p>
                {" "}
                <span className="footer-contact"> Mail:</span> info@example.com,
                support@example.com
              </p>
              <p>
                {" "}
                <span className="footer-contact"> Location :</span> 2752
                Willison Street Eagan, United State
              </p>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <h5>support</h5>
              <div className="footer-nav">
                <Nav.Link as={Link} to="/">
                  <span className="text-light">Home</span>
                </Nav.Link>
                <Nav.Link as={Link} to="/services">
                  <span className="text-light">Services</span>
                </Nav.Link>
                <Nav.Link as={Link} to="/about us">
                  <span className="text-light"> About Us</span>
                </Nav.Link>
                <Nav.Link as={Link} to="/contact us">
                  <span className="text-light"> Contact Us</span>
                </Nav.Link>
              </div>
            </Col>
          </Row>
          <hr />
          <div className="copy-right-area">
            <p>
              Copy Right by <span>TourX </span>|| Design by{" "}
              <span>Ashraf Simon</span>{" "}
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
