import React from 'react';
import ReactDom from 'react-dom';
import Card from './UI/Card';

const Backdrop = (props) => {
  return (
    <div className='cart-modal-background' onClick={props.closeModalHandler} />
  );
};

const ModalOverlay = (props) => {
  const orderHandler = () => {
    console.log('items have been ordered..');
  };

  return (
    <Card className='cart-modal'>
      <ul>
        <li className='cart-item'>
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
      </ul>
      <div className='details-wrapper'>
        <div className='total-wrapper'>
          <h2>Total Amount</h2>
          <h2>$99.99</h2>
        </div>
        <div className='btns-wrapper'>
          <button className='close-btn' onClick={props.closeModalHandler}>
            Close
          </button>
          <button className='order-btn' onClick={orderHandler}>
            Order
          </button>
        </div>
      </div>
    </Card>
  );
};

function Shoppingcart(props) {
  const closeModalHandler = () => {
    props.setCartIsVisible(false);
  };

  return (
    <>
      {ReactDom.createPortal(
        <Backdrop closeModalHandler={closeModalHandler} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDom.createPortal(
        <ModalOverlay closeModalHandler={closeModalHandler} />,
        document.getElementById('overlay-root')
      )}
    </>
  );
}

export default Shoppingcart;
