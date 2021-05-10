import React from 'react';
import Input from '../../UI/Input';

function MealItemForm() {
  const addItemHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className='meals-item-form'>
      <Input
        label='Amount'
        input={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button type='submit'>+ Add</button>
    </form>
  );
}

export default MealItemForm;
