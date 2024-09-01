import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import "./services.css"
import service1 from "../../assets/services/services1.jpg";
import service2 from "../../assets/services/services2.jpg";
import service3 from "../../assets/services/services3.jpg";

const Services = () => {
  return (
    <div>
      <Container className="services-section">
        <h2 className="text-center section-title">Our Services</h2>
        <p className="text-center section-subtitle">
          Experience the pinnacle of dining with our exclusive services tailored
          to meet your every need.
        </p>
        <Row>
          <Col md={4} className="text-center my-2">
            <Card className="service-card premium-service">
              <Card.Img
                variant="top"
                src={service1}
                className="service-image"
              />
              <Card.Body>
                <Card.Title>Dine-In Excellence</Card.Title>
                <Card.Text>
                  Immerse yourself in an elegant dining experience, where every
                  detail is crafted to perfection. From the ambiance to the
                  service, we ensure a luxurious and memorable meal.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="text-center my-2">
            <Card className="service-card premium-service">
              <Card.Img
                variant="top"
                src={service2}
                className="service-image"
              />
              <Card.Body>
                <Card.Title>Gourmet Takeaway</Card.Title>
                <Card.Text>
                  Savor the flavors of our cuisine in the comfort of your home.
                  Our takeaway service is crafted to bring the restaurant
                  experience to you, with dishes prepared fresh to order.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="text-center my-2">
            <Card className="service-card premium-service">
              <Card.Img
                variant="top"
                src={service3}
                className="service-image"
              />
              <Card.Body>
                <Card.Title>Luxury Delivery</Card.Title>
                <Card.Text>
                  Enjoy our exquisite dishes delivered right to your door. Our
                  delivery service ensures that your food arrives hot and ready
                  to enjoy, with the same quality you would expect in-house.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Services
