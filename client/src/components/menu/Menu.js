import React, { useContext, useEffect } from 'react'
import './menu.css';
import { Card, Button } from 'react-bootstrap';
import recipes from '../../recipes';
import { CartContext } from '../../context/CartContext';
import { toast } from 'react-toastify';
import Footer from '../footer/Footer';

const Menu = () => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (recipe) => {
    addToCart(recipe);
    toast.success(`${recipe.title} has been added to your cart!`, {
      position: "top-right", // Position of the toast
      autoClose: 2000, // Duration before auto-close
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="menu-container">
        <div className="text-overlay">
          <h1 className="menu-heading">Discover Our Culinary Delights</h1>
          <p className="menu-paragraph">
            At HelloFood, we blend fresh ingredients with culinary artistry to create unforgettable dishes. Savor the flavors and enjoy a remarkable dining experience with us.
          </p>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="text-center mb-4 Heading-ColorSet">Special Menu</h2>
        <div className="row">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="col-md-4 mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={recipe.image} style={{height: "300px"}} />
                <Card.Body>
                  <Card.Title>{recipe.title}</Card.Title>
                  <Card.Text>{recipe.description}</Card.Text>
                  <Card.Text className="text-muted">
                    Price: <strong>Rs</strong> <strong>{recipe.price}</strong>
                  </Card.Text>
                  <Button variant="danger" onClick={() => handleAddToCart(recipe)}>Add to Cart</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Menu
