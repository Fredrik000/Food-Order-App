import React, { useContext } from 'react';
import MealItemForm from './MealItemForm';
import cartContext from '../../../store/cart-context';

function MealsItem(props) {
  const cartCtx = useContext(cartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className='meals-item'>
      <div className='meals-item-info'>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <h3>{price}</h3>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default MealsItem;
