import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}
 
function Counter () {
  const [count, setCount] = useState(50);
  const increaseCount = () =>{
     const newCount = count + 1;
     setCount(newCount);
  }

  const decreaseCount = () =>{
    const newCount = count -1;
    setCount(newCount);
  }
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

export default App;
