import './App.css';
import React, {useState, useEffect} from "react"

function App() {
  const savedValue = localStorage.getItem('Value')
  const [counter, setCounter] = useState(Number(savedValue))

  function increaseCount() {
    setCounter(prevCount => prevCount + 1)
  }

  function zeroCount() {
    setCounter(0)
  }

  useEffect(() => {
    localStorage.setItem('Value', JSON.stringify(counter))
  }, [counter])

  function decreaseCount() {
    setCounter(prevCount => prevCount - 1)
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <main>
            <h1>
              Counter
            </h1>
            <p>your count is currently:</p>
            <p className='count'>{counter}</p>
            <button onClick={increaseCount}>
              increase count
            </button>
            <button onClick={zeroCount}>
              zero out
            </button>
            <button onClick={decreaseCount}>
              decrease count
            </button>
          </main>
        </header>
      </div>
    </>
  );
}

export default App;
