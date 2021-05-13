import React from 'react';

function CartItem(props) {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className='cart-item'>
      <div className='cart-item-info'>
        <h2>{props.name}</h2>
        <h3>{price}</h3>
        <p>x {props.amount}</p>
      </div>
      <div>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
}

export default CartItem;
