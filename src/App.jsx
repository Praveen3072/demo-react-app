import { useState } from 'react'
import Demo from './components/Demo'
import './App.css'
import { Concepts } from './data/data.js'

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
        <Demo name = {Concepts[0].name}
              id = {Concepts[0].id}
        />
        <Demo {...Concepts[1]}/>
        <Demo {...Concepts[2]}/>
        <Demo {...Concepts[3]}/>
      </div>
    </>
  )
}

export default App
