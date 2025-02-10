/* Agar mai explicitly mntion kar deta hu childtren aur opening and closing tag ke beech me  bhi data bhej deta hu beech vala datra children vala ko override kar dega*/
import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'

function App() {

    const [count,setCount] = useState(0);
    function handleClick(){
      setCount(count+1);
    }
  return (
    
    <div>
    <Button handleClick={handleClick} text="Click Me">
      <h1>{count}</h1>
    </Button>


      {/*<div>
        <Card name="Kunal">
          <h1>Best web dev </h1>
          <p>Trying to be consistent in this</p>
          <p>Will complete the course soon</p>

        </Card>
        <Card children="Mai ek children hu"></Card> 
      </div>*/
      }
      
    </div>
  )
}

export default App
