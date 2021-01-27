import './App.css';
import Select from './Select'
import React, { useState } from 'react'

const values = ["Value 1", "Value 2", "Value 3", "Value 4", "Value 5"];

function App() {
  const [classes, setNewState] = useState('false');

  return (
    <div className={classes ? 'select' : 'select is-active'}>
      <Select 
      classes={classes}
      setNewState={setNewState}
      values={values}
      />
    </div>
  );
}

export default App;
