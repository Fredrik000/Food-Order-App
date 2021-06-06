import React from 'react';

const CartContext = React.createContext({
  // Default values for the context, lets Emmet find attributes
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

export default CartContext;
