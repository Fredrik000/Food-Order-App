import React from 'react';
import CartIcon from './UI/CartIcon';

function Header(props) {
  const cartClickHandler = () => {
    props.setCarIsVisible(true);
  };

  return (
    <header className='header'>
      <h1>TechPizza</h1>
      <div className='header-cart' onClick={cartClickHandler}>
        <CartIcon />
        <p>Your Cart</p>
        <div className='header-item-counter-wrapper'>
          <p className='header-item-counter'>0</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
