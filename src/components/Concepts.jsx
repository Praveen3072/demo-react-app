import Demo from './Demo.jsx'
import { Users } from '../data/data.js';
import '../App.css'
export default function Concepts(){
    return(
        <>
        <h3>User Details</h3>
        <div>
        <ul className="user-list">
          <li>{Users.map((item)=>(<Demo key={item.name}{...item}/>))}</li>
        </ul>
        </div>
        </>
    );
}