import { useState, useMemo } from 'react'
import './App.css';


 const sum = (a, b) => {
  return a + b;
 };

function App() {
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);

  const result = useMemo(() => sum(val1, val2),  
  [val1, val2]);

  return (
    <div className="App">
      <input
        value={val1}
        onChange={({ target }) =>
          setVal1(parseInt(target.value || 0))
        }
      />
      <input
        value={val2}
        onChange={({ target }) =>
          setVal2(parseInt(target.value || 0))
        }
      />
      <p>{result}</p>
    </div>
  );
}

export default App;
