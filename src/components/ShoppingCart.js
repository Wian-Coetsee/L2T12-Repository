// Import statements and setup
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button, Form } from 'react-bootstrap';
import '../styles/ShoppingCart.css';

// Redux action types
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';

// Shipping options array
const shippingOptions = [
    { id: 1, name: 'Standard Shipping', cost: 5, details: 'Standard Shipping typically takes 5-7 business days for delivery. This method is cost-effective and reliable for non-urgent deliveries. Orders are processed within 1-2 business days before shipping.' },
    { id: 2, name: 'Express Shipping', cost: 15, details: 'Express Shipping ensures faster delivery within 2-3 business days. Ideal for urgent orders or when you need items quickly. Orders are processed within 1 business day and shipped for quick delivery.' },
    { id: 3, name: 'Next Day Shipping', cost: 30, details: 'Next Day Shipping guarantees delivery by the next business day. Perfect for last-minute purchases or time-sensitive orders. Orders placed before 12 PM are processed the same day and delivered the next business day.' }
];

// Main ShoppingCart component
const ShoppingCart = () => {
    // Redux state and local state setup
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const [selectedShipping, setSelectedShipping] = useState(null);
    const [showHelp, setShowHelp] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [orderError, setOrderError] = useState('');

    // Handle removal of item from cart
    const handleRemoveItem = (itemId) => {
        dispatch({ type: REMOVE_FROM_CART, payload: itemId });
    };

    // Handle change in shipping method selection
    const handleShippingChange = (e) => {
        const selectedOption = shippingOptions.find(option => option.id === parseInt(e.target.value));
        setSelectedShipping(selectedOption);
        setOrderError(''); // Clear error message when shipping method is selected
    };

    // Show and hide help modal
    const handleShowHelp = () => setShowHelp(true);
    const handleCloseHelp = () => setShowHelp(false);

    // Handle placing the order
    const handleOrder = () => {
        if (selectedShipping) {
            setOrderPlaced(true);
            setOrderError('');
            // Optionally clear the cart here if desired
            // dispatch({ type: CLEAR_CART });
        } else {
            setOrderError('Please select a shipping method before placing your order.');
        }
    };

    // Handle clearing the cart
    const handleClearCart = () => {
        dispatch({ type: CLEAR_CART });
    };

    // Calculate total price including selected shipping
    const totalPriceWithShipping = selectedShipping ? cart.totalPrice + selectedShipping.cost : cart.totalPrice;

    // JSX for rendering the shopping cart
    return (
        <div className="shopping-cart">
            <h2>Shopping Cart</h2>
            {cart.items.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <ul>
                        {cart.items.map(item => (
                            <li key={item.id}>
                                {item.title} - ${item.price.toFixed(2)}
                                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ${totalPriceWithShipping.toFixed(2)}</h3>

                    <Form.Group controlId="shippingMethod">
                        <Form.Label>Select Shipping Method</Form.Label>
                        <Form.Control as="select" onChange={handleShippingChange}>
                            <option value="">Select...</option>
                            {shippingOptions.map(option => (
                                <option key={option.id} value={option.id}>
                                    {option.name} (${option.cost})
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    
                    <Button variant="info" onClick={handleShowHelp}>
                        Help
                    </Button>

                    <Modal show={showHelp} onHide={handleCloseHelp}>
                        <Modal.Header closeButton>
                            <Modal.Title>Shipping Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {selectedShipping ? (
                                <p>{selectedShipping.details}</p>
                            ) : (
                                <p>Select a shipping method to see details.</p>
                            )}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseHelp}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    {orderError && (
                        <div className="order-error">
                            {orderError}
                        </div>
                    )}

                    <div className="order-button-container">
                        <Button 
                            variant="primary" 
                            onClick={handleOrder}
                            className="order-button"
                        >
                            Order
                        </Button>
                    </div>

                    {orderPlaced && selectedShipping && (
                        <div className="order-confirmation">
                            <h3>Order Placed!</h3>
                            <h4>Receipt</h4>
                            <p><strong>Order Summary:</strong></p>
                            <ul>
                                {cart.items.map(item => (
                                    <li key={item.id}>
                                        {item.title} - ${item.price.toFixed(2)}
                                    </li>
                                ))}
                            </ul>
                            <p><strong>Shipping Method:</strong> {selectedShipping.name} (${selectedShipping.cost})</p>
                            <p><strong>Total Price:</strong> ${totalPriceWithShipping.toFixed(2)}</p>
                            <p>Your order has been placed and will arrive according to the {selectedShipping.name} shipping method. {selectedShipping.details}</p>
                        </div>
                    )}

                    <div className="clear-cart-button-container">
                        <Button 
                            variant="danger" 
                            onClick={handleClearCart}
                            className="clear-cart-button"
                        >
                            Clear Cart
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
};

export default ShoppingCart;
