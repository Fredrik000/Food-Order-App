import React from 'react';

function MealsItem(props) {
  return (
    <li className='meals-item'>
      <div className='meals-item-info'>
        <h2>Navn</h2>
        <p>Beskrivelse</p>
        <h3>Pris</h3>
      </div>
      <form className='meals-item-form'>
        <div>
          <label htmlFor='amount-input'>Amount</label>
          <input type='number' id='amount-input' defaultValue='1' />
        </div>
        <button type='submit'>+ Add</button>
      </form>
    </li>
  );
}

export default MealsItem;
