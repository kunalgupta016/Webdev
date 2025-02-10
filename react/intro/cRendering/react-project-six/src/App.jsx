import { useState } from 'react'
import LogIn from './components/logIn'
import LogOut from './components/logOut'


function App() {
  const [loggedIn, setloggedIn] = useState(false)
  
  if(!loggedIn){
    return(
      <LogIn/>
    )
  }


  return(
    <div>
      <h1>Welcome everyone </h1>
      <div>
        {loggedIn && <LogOut/>}
      </div>
    </div>
  )


  // return(
  //   <div>
  //     {loggedIn ? <LogOut/> : <LogIn/>}
  //   </div>
  // )
  
  
  // if(loggedIn){
  //   return(
  //     <LogOut/>

  //   )
  // }
  // else{
  //   <LogIn/>
  // }

  
}

export default App
