import React, { useState, useCallback } from "react";
import Button from "./Button";


function App() {
  const [count, setCount] = useState(1);
  const [isActive, setActive] = useState(false);

  const handleCount = useCallback(() => setCount(count * 2), [count]);
  const handleShow = useCallback(() => setActive(!isActive), [isActive]);

  return (
    <div className="App">
      {isActive && (
        <div>
          <h1>{count}</h1>
          <Button onClick={handleCount} name="Increment" />
        </div>
      )}
      <Button
        onClick={handleShow}
        name={isActive ? "Hide Counter" : "Show Counter"}
      />
    </div>
  );
}

export default App;
