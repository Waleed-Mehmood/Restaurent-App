import React, { useContext, useEffect } from "react";
import "./cart.css";
import { CartContext } from "../../context/CartContext";
import { Table, Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import Footer from "../footer/Footer";
import axios from "axios";

const Cart = () => {
  const { cart, updateCartItemQuantity, removeItemFromCart,clearCart  } =
    useContext(CartContext);

  const handleQuantityChange = (index, quantity) => {
    if (quantity >= 0) {
      updateCartItemQuantity(index, quantity);
    }
  };

  const calculateTotalPrice = (item) => {
    return (item.price * item.quantity).toFixed(2);
  };

  const calculateGrandTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  axios.defaults.withCredentials = true;

  const handlePlaceOrder = async () => {
    const grandTotal = calculateGrandTotal();
  
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/orders/placeOrder`, {
        cart,
        grandTotal,
      });
  
      if (response.status !== 200) {
        throw new Error("Failed to place order");
      }
  
      toast.success("Order placed successfully!");
  
      // Clear the cart after placing the order
      clearCart();
    } catch (error) {
      toast.error("Failed to place order");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="container my-5">
        <h2 className="text-center mb-4 Heading-ColorSet">Order Details</h2>
        {cart.length === 0 ? (
          <p className="cart-empty">Your cart is empty.</p>
        ) : (
          <>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Recipe</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: "100px", height: "100px" }}
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                    <td>
                      <Form.Control
                        type="number"
                        value={item.quantity}
                        min="0"
                        onChange={(e) =>
                          handleQuantityChange(index, parseInt(e.target.value))
                        }
                        style={{ width: "80px" }}
                      />
                    </td>
                    <td>{calculateTotalPrice(item)}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => removeItemFromCart(index)}
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="text-right">
              <h4>Total Price: Rs {calculateGrandTotal()}</h4>
            </div>
            <Button
              variant="success"
              className="mt-3"
              onClick={handlePlaceOrder}
            >
              Place Order
            </Button>
          </>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default Cart;
