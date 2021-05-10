import React from 'react';

const CartContext = React.createContext({
  // Default values for the context
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
