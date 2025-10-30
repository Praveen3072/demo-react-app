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
        <Demo name = {Concepts[0].name}
              id = {Concepts[0].id}
        />
        <Demo {...Concepts[1]}/>
        <section>
          <h3>Examples</h3>
          <menu className="tab-menu">
            <TabButton onSelect={()=>handleClick('components')}>Components</TabButton>
            <TabButton onSelect={()=>handleClick('jsx')}>JSX</TabButton>
            <TabButton onSelect={()=>handleClick('Props')}>Props</TabButton>
            <TabButton onSelect={()=>handleClick('State')}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </div>
  )
}

export default App
