import { useState } from 'react'
import Demo from './Demo'
import './App.css'

function App() {
  const [count, setCount] = useState(2)

  const increment = ()=>setCount(count+1);
  const decrement = ()=>setCount(count-1);


  return (
    <>
      <div>
        <h1>count: {count}</h1>
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
        <Demo title="How to use Props" description="This provide deails on how to use props"></Demo>
      </div>
    </>
  )
}

export default App
