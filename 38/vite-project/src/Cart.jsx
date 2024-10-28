import React from 'react';
import { useCart } from './CartContext'; // Імпортуємо хук для роботи з корзиною

const Cart = () => {
  const { cartItems } = useCart();

  return (
    <div className="container mt-4">
      <h3>Cart</h3>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul className="list-group">
          {cartItems.map((item, index) => (
            <li key={index} className="list-group-item">
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
