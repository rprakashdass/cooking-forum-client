import React, { useState, useEffect } from 'react';

const PaymentProcessing = () => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart'));
        if (storedCart) {
            setCart(storedCart);
            let calculatedTotal = 0;
            storedCart.forEach(item => {
                calculatedTotal += item.price * item.quantity;
            });
            setTotal(calculatedTotal);
        }
    }, []);

    return (
        <div className="container mt-5">
        <h2>Checkout Summary</h2>
        <div id="cart-summary">
        {cart.length > 0 ? (
            <>
            {cart.map((item, index) => (
                <p key={index}>
                {item.name} - ₹{(item.price * item.quantity).toFixed(2)}
                </p>
            ))}
            <h5>Total: ₹{total.toFixed(2)}</h5>
            </>
        ) : (
            <p>Your cart is empty.</p>
        )}
        </div>
        <button className="btn btn-primary mt-3">Proceed to Payment</button>
        </div>
    );
};

export default PaymentProcessing;