import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./features.css"
import feature1 from "../../assets/SpecialMenu/SHAVED-BEEF-CIABATTA.png";
import feature2 from "../../assets/SpecialMenu/Lemon-Fettuccine-Pasta.jpg";
import feature3 from "../../assets/SpecialMenu/CRUMBED-RED-SNAPPER-WITH-GREEN-HERB-SAUCE_.png";

const FeatureDishes = () => {
  return (
    <div>
      <Container className="featured-dishes-section">
      <h2 className="text-center section-title">Featured Dishes</h2>
      <Row>
        <Col md={4} className="my-2">
          <Card>
            <Card.Img variant="top" src={feature1} />
            <Card.Body>
              <Card.Title>SHAVED BEEF CIABATTA SANDWICH</Card.Title>
              <Card.Text>
                Toasted Ciabatta, Seared Beef, Orange Cheddar Cheese,
                Caramelized Onions...
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="my-2">
          <Card>
            <Card.Img variant="top" src={feature2} />
            <Card.Body>
              <Card.Title>LEMON FETTUCINE CHICKEN PASTA</Card.Title>
              <Card.Text>
                Fettuccine with Grilled Chicken, in a Creamy lime infused
                sauce...
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="my-2">
          <Card>
            <Card.Img variant="top" src={feature3} />
            <Card.Body>
              <Card.Title>
                CRUMBED RED SNAPPER WITH GREEN HERB SAUCE
              </Card.Title>
              <Card.Text>
                Herb Crumbed snapper, Green herb sauce, siracha tomatoes,
                roasted potatoes
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="text-center mt-4">
        <Link to="/menu">
          <Button variant="danger" size="lg">
            View More
          </Button>
        </Link>
      </div>
    </Container>
    </div>
  )
}

export default FeatureDishes
