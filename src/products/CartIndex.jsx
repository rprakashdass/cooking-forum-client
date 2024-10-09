import React, { useState } from 'react';
import IngredientCard from './Ingredients';
import Cart from './Cart';

const CartIndex = () => {
    const [cart, setCart] = useState([]);
    const exchangeRate = 83;

    const ingredients = [
        { name: 'Tomatoes', price: 3.5, imgSrc: './pictures/download.jpeg' },
        { name: 'Onions', price: 2.5, imgSrc: './pictures/download (1).jpeg' },
        { name: 'Chicken', price: 5.5, imgSrc: './pictures/chick.jpeg' },
        { name: 'Rice', price: 3.0, imgSrc: './pictures/rice.jpeg' },
        { name: 'Flour', price: 0.5, imgSrc: './pictures/flour.jpeg' },
        { name: 'Chicken Masala', price: 0.28, imgSrc: './pictures/scm.jpeg' },
        { name: 'Yogurt', price: 0.65, imgSrc: './pictures/youg.jpeg' },
        { name: 'Amul Ice Cream', price: 0.9, imgSrc: './pictures/ice cream.jpeg' }
    ];

    const addToCart = (name, price) => {
        const priceINR = price * exchangeRate;
        const existingItem = cart.find(item => item.name === name);

        if (existingItem) {
            setCart(cart.map(item =>
            item.name === name ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCart([...cart, { name, price: priceINR, quantity: 1 }]);
        }
    };

    const removeItem = index => {
        setCart(cart.filter((_, i) => i !== index));
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const checkout = () => {
        if (cart.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cart));
            window.location.href = '/checkout'; // Replace with the actual checkout URL
        } else {
            alert('Your cart is empty!');
        }
    };

    return (
        <div className="container mx-auto mt-4 flex justify-between flex-wrap">
        <div className="ingredients-section">
        <h2 className="text-center text-2xl font-semibold mb-4">Available Ingredients</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ingredients.map((ingredient, index) => (
            <IngredientCard
            key={index}
            name={ingredient.name}
            price={ingredient.price}
            imgSrc={ingredient.imgSrc}
            addToCart={addToCart}
            />
        ))}
        </div>
        </div>

        <Cart cart={cart} removeItem={removeItem} totalPrice={getTotalPrice()} checkout={checkout} />
        </div>
    );
};

export default CartIndex;