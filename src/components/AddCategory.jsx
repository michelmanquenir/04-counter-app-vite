import React from 'react'
import { useState } from 'react'


export const AddCategory = ({ onNewCategory }) => {

  const [ inputValue, setInputValue ] = useState('');
  const newInputValue = inputValue.trim();

  const onInputChange = ({target}) => {
    setInputValue(target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if(newInputValue.length <= 1) return;

    onNewCategory(newInputValue);
    setInputValue('');

  }

  return (
    <form onSubmit={ onSubmit }>
      <input
      type="text"
      placeholder='Buscar Gifs'
      value={ inputValue }
      onChange={ onInputChange }
      />
    </form>
  );

}
