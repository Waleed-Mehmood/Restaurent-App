import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import "./testimonial.css"
import testimonial1 from "../../assets/testimonial/dummy-boyimage.jpg";
import testimonial2 from "../../assets/testimonial/dummy-girlimage.png";

const Testimonial = () => {
  return (
    <div>
      <Container className="testimonial-section">
      <h2 className="text-center section-title">What Our Customers Say</h2>
      <Carousel
        className="testimonial-carousel"
        indicators={false}
        interval={4000}
        controls={false}
      >
        <Carousel.Item>
          <div className="testimonial-item">
            <img
              src={testimonial1}
              className="testimonial-image"
              alt="testimonial" />
            <p className="testimonial-text">
              "The dining experience was absolutely fantastic. The ambiance
              was delightful, and the food was out of this world. Highly
              recommended!"
            </p>
            <p className="testimonial-author">Sheikh Nimariq</p>
            <p className="testimonial-position">Teacher</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="testimonial-item">
            <img
              src={testimonial1}
              className="testimonial-image"
              alt="testimonial" />
            <p className="testimonial-text">
              "From start to finish, every detail was perfect. The service was
              impeccable, and the dishes were bursting with flavor. A
              must-visit!"
            </p>
            <p className="testimonial-author">Bilal Ahmad</p>
            <p className="testimonial-position">Business man</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="testimonial-item">
            <img
              src={testimonial2}
              className="testimonial-image"
              alt="testimonial" />
            <p className="testimonial-text">
              "I've dined at many restaurants, but this one stands out for its
              extraordinary quality and customer service. Simply amazing!"
            </p>
            <p className="testimonial-author">Zainab Ali</p>
            <p className="testimonial-position">Restaurant Blogger</p>
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
    </div>
  )
}

export default Testimonial
