import React, { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

function HeaderCart(props) {
  // Gives access to content inside CartContext
  const cartCtx = useContext(CartContext);

  // Takes the items array and reduces it to a single number
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <div className='header-cart' onClick={props.onShowCart}>
      <CartIcon />
      <p>Your Cart</p>
      <div className='header-item-counter-wrapper'>
        <p className='header-item-counter'>{numberOfCartItems}</p>
      </div>
    </div>
  );
}

export default HeaderCart;
