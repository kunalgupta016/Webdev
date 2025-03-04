import { useCallback, useState } from 'react'

import './App.css'
import Child from './components/child';

function App() {
  const [count, setCount] = useState(0)
  // function handleClick(){
  //   setCount(count + 1);
  // }

  let handleClick =useCallback( () =>{
    setCount(count + 1);
  },[count]);  // isse child compoennt me re-render nahi hoga ye vala functioon

  return (
    <div>
      <div>
        Count : {count}
      </div>
      <br />
      <div>
      <button onClick={handleClick}>
      Increment
      </button>
      </div>
      <br />
      <div>
        <Child 
        buttonName = "Click me "
        handleClick={handleClick}
        />
      </div>
      
    </div>
  )
}

export default App
