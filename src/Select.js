import React from 'react'
import './my.css'

const Select = ({onChange, release_town, towns}) => (
  <div className="header-container">
      <select
      id="release_town"
      className="select"
      name="release_town"
      value={release_town}
      onChange={onChange}
    >
      <option key={0} value="" disabled>
        Выберите город
      </option>
      {towns.map((town, index) => (
        <option key={index} value={town} className="option-size">
          {town}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
