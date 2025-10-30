import { useState } from 'react'
import Demo from './components/Demo'
import './App.css'
import { Concepts } from './data/data.js'
import TabButton from './components/TabButton.jsx'
import { Examples } from './data/data.js'

function App() {
  const [tabContent, setTabContent] = useState();
  const handleClick = (selectedConcpet)=>{
    console.log(selectedConcpet);
    setTabContent(selectedConcpet);
  };

  let selectedTopic = <p>Please select a topic</p>;
  if(tabContent)
  {
    selectedTopic = <div>
              <h3>{Examples[tabContent].name}</h3>
              <h3>{Examples[tabContent].id}</h3>
          </div>
  }

  return (
      <div>
        <h3>User Details</h3>
        <div className="tab-menu">
        <ul className="tab-menu">
          {Concepts.map((item)=>(<Demo key={item.name}{...item}/>))}
        </ul>
        </div>
        <section>
          <h3>Examples</h3>
          <menu className="tab-menu">
            <TabButton isSelected = {selectedTopic==='components'} onSelect={()=>handleClick('components')}>Components</TabButton>
            <TabButton isSelected = {selectedTopic==='jsx'} onSelect={()=>handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected = {selectedTopic==='Props'} onSelect={()=>handleClick('Props')}>Props</TabButton>
            <TabButton isSelected = {selectedTopic==='State'} onSelect={()=>handleClick('State')}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </div>
  )
}

export default App
