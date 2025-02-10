import React , {useState} from 'react'

import './counter.css'
const counter = () => {
    const [count,setCount] = useState(0);
    //        |      |                 |
    //        \/     \/                \/
    //    State       State            Initial
    //    Variable    Function          State
  return (
    <div className='counter-container'>
        <p id='para'>You have Clicked {count} times</p>
        <button id='btn' onClick={()=>{setCount(count+1);}}>Click Me</button>
    </div>
  )
}

export default counter
