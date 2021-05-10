import React, { Fragment } from 'react';
import HeaderCart from './HeaderCart';
import mealsImg from '../../assets/meals.jpg';

function Header(props) {
  return (
    <>
      <header className='header'>
        <h1>TechPizza</h1>
        <HeaderCart onShowCart={props.onShowCart} />
      </header>
      <div className='header-img-wrapper'>
        <img src={mealsImg} alt='A table of food' />
      </div>
    </>
  );
}

export default Header;
