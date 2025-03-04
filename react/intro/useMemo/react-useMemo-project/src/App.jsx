import { useState } from 'react'
import './App.css'
import { useMemo } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [input, setinput] = useState(0);

// Memoi
  function expensiveTask(num){
    console.log("Inside expensive task");
    for(let i=0;i<=10000;i++){}
    return num*2;
  }
  let doubleValue = useMemo(()=>expensiveTask(input) , [input] );

  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <div>
        <p>Count: {count}</p>
      </div>

      <input type="number" placeholder='Enter Number ' 
      value={input} 
      onChange={(e)=>setinput(e.target.value)}/>

      <div>
        Double: {doubleValue}
      </div>
    </div>
  )
}

export default App
