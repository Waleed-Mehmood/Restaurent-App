import React from 'react'
import "./footer.css"
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedin, FaShoppingCart, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <footer className="footer-section">
      <Container>
        <Row>
          <Col md={4} className="footer-about">
            <h5>About Us</h5>
            <p>
              We are a premier dining destination, offering a culinary
              experience that combines the best of tradition and innovation.
              Our mission is to create memorable moments with our exquisite
              dishes and impeccable service.
            </p>
          </Col>
          <Col md={4} className="footer-links">
            <h5>Quick Links</h5>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link as={Link} to="/cart" className="mx-3 nav-link-custom">
                  <FaShoppingCart size={24} />
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={4} className="footer-social">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="footer-bottom">
          <Col md={12} className="text-center">
            <p className="mt-2">
              &copy; 2024 hellofood. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  )
}

export default Footer
