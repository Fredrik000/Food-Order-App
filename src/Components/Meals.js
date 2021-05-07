import React, { useState } from 'react';
import Card from './UI/Card';

function Meals(props) {
  const mealList = [
    {
      id: '1',
      name: 'Peperoni',
      description: 'Cheese, peperoni',
      price: 10.99,
    },
    {
      id: '2',
      name: 'Hawaii',
      description: 'Cheese, ham, pinaple',
      price: 11.99,
    },
    {
      id: '3',
      name: 'Ham & Cheese',
      description: 'Cheese, ham',
      price: 10.99,
    },
    {
      id: '4',
      name: 'Taco',
      description: 'Cheese, spicy minced meat, bell pepper',
      price: 12.99,
    },
  ];

  const [cartItem, setCartItem] = useState({
    name: '',
    price: undefined,
    count: undefined,
  });

  const addItemHandler = (e) => {
    e.preventDefault();
    props.setCartContent((prevContent) => {
      return [...prevContent, cartItem];
    });
  };

  return (
    <Card className='meals'>
      <ul>
        {mealList.map((item) => (
          <li className='meals-item' key={item.id}>
            <div className='meals-item-info'>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <h3>${item.price}</h3>
            </div>
            <form className='meals-item-form' onSubmit={addItemHandler}>
              <div>
                <label htmlFor='amount-input'>Amount</label>
                <input type='number' id='amount-input' value={item.count} />
              </div>
              <button type='submit'>+ Add</button>
            </form>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default Meals;
