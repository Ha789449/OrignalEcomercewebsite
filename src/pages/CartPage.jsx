// pages/CartPage.js
import React from 'react';
import { useSelector } from 'react-redux';

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}
      
    </div>
  );
};

export default CartPage;
