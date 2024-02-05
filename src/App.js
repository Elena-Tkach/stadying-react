import React, { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [value, setValue] = useState('');

  return (
    <div className="App">
      
      <h2>{value}</h2>
      <input type="text" value={value}
        onChange={e => setValue(e.target.value)}
      />
      <Counter/>
    </div>
  );
}

export default App;
