import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Лічильник: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Збільшити</button>
      <button onClick={() => setCount(count - 1)}>Зменшити</button>
    </div>
  );
}

export default App;
