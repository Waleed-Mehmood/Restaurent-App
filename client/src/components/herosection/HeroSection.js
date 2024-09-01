import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./heroSection.css"

const HeroSection = () => {
  return (
    <div>
      <div className="hero-section">
        <Container>
          <Row className="align-items-center text-center">
            <Col>
              <h1>Welcome to Our Restaurant</h1>
              <p>Experience the finest cuisine in a cozy atmosphere.</p>
              <Link to="/menu">
                <Button variant="danger" size="lg">
                  View Menu
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default HeroSection
