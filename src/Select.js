import React, { useState } from 'react'
import './App.css'

function Select ({classes, setNewState, values}) {
  const SelectToggle = () => {
    const currentState = classes;
    setNewState(!currentState)
  }
  const [filters, setFilters] = useState('Выберите значение');

  const onClick = event => {
    const value = event.target.innerHTML;
    setFilters(value);
    SelectToggle();
  };
  return (
  <>
  <div className="select__header" onClick={SelectToggle}> 
    <span className="select__current">{filters}</span>        
    <div className="select__icon">&times;</div>
  </div>
  <div className="select__body">
      {values.map((value, index) => (
        <div 
        name="release_town" 
        id="release_town"
        key={index} value={value}
        onClick={onClick}
        className="select__item">
          {value}
        </div>
      ))}
  </div>
  </>
  );
};

export default Select;
