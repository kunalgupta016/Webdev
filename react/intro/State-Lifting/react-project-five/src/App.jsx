import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  
  // Create State
  // Manage State
  // Change State
  // Sabhi child me state ko sync karwadunga
  const [name,setName] = useState('')
   return (
    
      <div>
        <Card title="Card1"  name={name} setName={setName}></Card>
        {/* <p>I am inside Parent Component and value of name is : {name}</p> */}
        <Card title="Card2" name={name} setName={setName}></Card>
      </div> 
  )
}

export default App
