import React from 'react';
import ReactDom from 'react-dom';
import Card from '../UI/Card';

const Backdrop = (props) => {
  return <div className='cart-modal-background' onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return <Card className='cart-modal'>{props.children}</Card>;
};

const portalElement = document.getElementById('overlays');

function Modal(props) {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
}

export default Modal;
