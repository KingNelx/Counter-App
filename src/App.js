import './App.css';
import './Counter.css';

import React, { useState, useEffect } from 'react'


const CounterApp = () => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    switch (counter) {

      case -1:
        alert(`Counter can not be less than ${counter}`)
        window.location.reload();
        break;

      case 5:
        alert(`You have clicked ${counter} times`)
        break;

      case 10:
        alert(`You have clicked ${counter} times`)
        break;

      case 15:
        alert(`You have clicked ${counter} times`)
        break;

      case 20:
        alert(`You have clicked ${counter} times`)
        break;

      default:

    }
  })

  return (
    <div className="counterApp">
      <>
        <h1>Counter App </h1>
        <button onClick={() => { setCounter(counter + 1) }}> Count up </button>
        <h2>{counter}</h2>
        <button onClick={() => { setCounter(counter - 1) }}> Count down </button>
      </>
    </div>
  )
}

const App = () => {

  return (
    <div className="App">
      <CounterApp />
    </div>
  );
}

export default App;
