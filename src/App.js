import React, { useState } from 'react';
import Header from './Components/Header';
import Meals from './Components/Meals';
import CartModal from './Components/CartModal';

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const [cartContent, setCartContent] = useState([]);

  return (
    <>
      <Header setCarIsVisible={setCartIsVisible} cartContent={cartContent} />
      <Meals setCartContent={setCartContent} />
      {cartIsVisible && (
        <CartModal
          setCartIsVisible={setCartIsVisible}
          setCartContent={setCartContent}
        />
      )}
    </>
  );
}

export default App;
