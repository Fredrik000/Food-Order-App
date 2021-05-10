import React from 'react';
import MealItemForm from './MealItemForm';

function MealsItem(props) {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className='meals-item'>
      <div className='meals-item-info'>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <h3>{price}</h3>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
}

export default MealsItem;
