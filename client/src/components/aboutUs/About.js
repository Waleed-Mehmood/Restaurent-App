import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import about from "../../assets/about-us.jpg";
import "./about.css"

const About = () => {
  return (
    <div>
      <Container className="about-section">
        <Row>
          <Col md={6} className="text-center">
            <h2>About Us</h2>
            <p>
              Welcome to hellofood, where culinary passion meets warm
              hospitality. Founded on the belief that great food brings people
              together, our restaurant offers a menu inspired by both
              traditional and modern flavors, crafted with the freshest local
              ingredients. Whether you're here for a casual meal or a special
              celebration, we strive to provide a dining experience that is both
              memorable and enjoyable. Our team is dedicated to ensuring that
              every guest feels at home, savoring each bite in a cozy, inviting
              atmosphere. Come and join us, and let us make your meal a
              delightful journey of taste and comfort.
            </p>
          </Col>
          <Col md={6}>
            <img src={about} alt="Restaurant Interior" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
