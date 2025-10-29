import { useState } from 'react'
import Demo from './components/Demo'
import './App.css'
import { Concepts } from './data/data.js'
import TabButton from './components/TabButton.jsx'

function App() {
  const [count, setCount] = useState(2)

  const increment = ()=>setCount(count+1);
  const decrement = ()=>setCount(count-1);
  const [tabContent, setTabContent] = useState("Please Click any Button!");
  const handleClick = (selectedConcpet)=>{
    console.log(selectedConcpet);
    setTabContent("Clicked");
  };


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
        <section>
          <h3>Examples</h3>
          <menu className="tab-menu">
            <TabButton onSelect={()=>handleClick('components')}>Components</TabButton>
            <TabButton onSelect={()=>handleClick('JSX')}>JSX</TabButton>
            <TabButton onSelect={()=>handleClick('Props')}>Props</TabButton>
            <TabButton onSelect={()=>handleClick('State')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </div>
    </>
  )
}

export default App
