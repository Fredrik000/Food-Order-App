import React, { useState, useContext } from 'react';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import Checkout from './Checkout';
import cartContext from '../../store/cart-context';

function Cart(props) {
  const [isCheckout, setIsCheckout] = useState(false);
  const cartCtx = useContext(cartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className='btns-wrapper'>
      <button className='close-btn' onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className='order-btn' onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className='details-wrapper'>
        <div className='total-wrapper'>
          <h2>Total Amount</h2>
          <h2>{totalAmount}</h2>
        </div>
        {isCheckout && <Checkout onCancel={props.onClose} />}
        {!isCheckout && modalActions}
      </div>
    </Modal>
  );
}

export default Cart;
