import React from 'react';
import CartIcon from './UI/CartIcon';

function Shoppingcart(props) {
  const cartClickHandler = () => {};

  return (
    <div className='shoppingcart' onClick={cartClickHandler}>
      <CartIcon />
      <p>Your Cart</p>
      <div className='shoppingcart-item-counter-wrapper'>
        <p className='shoppingcart-item-counter'>0</p>
      </div>
    </div>
  );
}

export default Shoppingcart;
