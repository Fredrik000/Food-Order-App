import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

function HeaderCart(props) {
  const [headerIsHighlighted, setHeaderIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext); // Gives access to content inside CartContext
  const { items } = cartCtx;

  // Takes the items array and reduces it to a single number
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const headerClasses = `header-cart ${headerIsHighlighted ? 'bump' : ''} `;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setHeaderIsHighlighted(true);

    const timer = setTimeout(() => {
      setHeaderIsHighlighted(false);
    }, 300);

    // cleanup fucntion
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <div className={headerClasses} onClick={props.onShowCart}>
      <CartIcon />
      <p>Your Cart</p>
      <div className='header-item-counter-wrapper'>
        <p className='header-item-counter'>{numberOfCartItems}</p>
      </div>
    </div>
  );
}

export default HeaderCart;
