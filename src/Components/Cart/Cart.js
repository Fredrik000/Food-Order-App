import React from 'react';
import Modal from '../UI/Modal';

function Cart(props) {
  const orderHandler = () => {
    console.log('items have been ordered..');
  };

  const cartItems = (
    <ul>
      {[{ id: 'c1', name: 'Peperoni', amount: '1', price: 10.99 }].map(
        (item) => (
          <li className='cart-item' key={Math.random()}>
            <div className='cart-item-info'>
              <h2>Name</h2>
              <h3>Price</h3>
              <p>1</p>
            </div>
            <div>
              <button>-</button>
              <button>+</button>
            </div>
          </li>
        )
      )}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className='details-wrapper'>
        <div className='total-wrapper'>
          <h2>Total Amount</h2>
          <h2>$99.99</h2>
        </div>
        <div className='btns-wrapper'>
          <button className='close-btn' onClick={props.onClose}>
            Close
          </button>
          <button className='order-btn' onClick={orderHandler}>
            Order
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default Cart;
