import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter</h1>
      <div className="card">
        
         <h2> Count is {count} </h2>
      </div>
      <button onClick={() => setCount((count) => count + 1)}>
          +
        </button><p></p>
        <button onClick={() => setCount((count) => count - 1)}>
          -
        </button>
        <p></p>
        <button onClick={() => setCount((count) => count * 0)}>
          Reset
        </button>
    </>
  )
}

export default App
