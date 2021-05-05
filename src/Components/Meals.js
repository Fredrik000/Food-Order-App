import React from 'react';
import Card from './UI/Card';
import MealsItem from './MealsItem';

function Meals(props) {
  return (
    <Card className='meals'>
      <MealsItem />
    </Card>
  );
}

export default Meals;
