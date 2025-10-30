import Demo from './Demo.jsx'
import { Users } from '../data/data.js';
export default function Concepts(){
    return(
        <>
        <h3>User Details</h3>
        <div className="tab-menu">
        <ul className="tab-menu">
          {Users.map((item)=>(<Demo key={item.name}{...item}/>))}
        </ul>
        </div>
        </>
    );
}