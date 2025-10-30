import TabButton from './TabButton.jsx'
import { useState } from 'react';
import {Topics} from '../data/data.js'
import Section from './Section.jsx';
import '../App.css'
import Tab from './Tabs.jsx'
export default function Examples(){

    const [tabContent, setTabContent] = useState();
    const handleClick = (selectedConcpet)=>{
    console.log(selectedConcpet);
    setTabContent(selectedConcpet);
     };
     let selectedTopic = <p>Please select a topic</p>;
       if(tabContent)
       {
         selectedTopic = <div>
                   <h3>{Topics[tabContent].name}</h3>
                   <h3>{Topics[tabContent].id}</h3>
               </div>
       }
     
    return(
        <>
                <Section title="Examples" className="section-tab"> 
                  <Tab className="tab-menu" buttons={<>
                    <TabButton isSelected = {selectedTopic==='components'} onSelect={()=>handleClick('components')}>Components</TabButton>
                    <TabButton isSelected = {selectedTopic==='jsx'} onSelect={()=>handleClick('jsx')}>JSX</TabButton>
                    <TabButton isSelected = {selectedTopic==='Props'} onSelect={()=>handleClick('Props')}>Props</TabButton>
                    <TabButton isSelected = {selectedTopic==='State'} onSelect={()=>handleClick('State')}>State</TabButton>
                    </>
                  }>
                    {selectedTopic}
                  </Tab>
                </Section>
        </>
    );
}