import React from 'react';
import Shoppingcart from './Shoppingcart';

function Header() {
  return (
    <header className='header'>
      <h1>ReactMeals</h1>
      <Shoppingcart />
    </header>
  );
}

export default Header;
