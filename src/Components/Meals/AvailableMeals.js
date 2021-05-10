import React, { useState } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: '0',
    name: 'Special Meal',
    description: 'Helens Favorite pls',
    price: 9.99,
  },
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

function AvailableMeals(props) {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <Card className='meals'>
      <ul>{mealsList}</ul>
    </Card>
  );
}

export default AvailableMeals;
