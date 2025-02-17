import {createContext, useState} from 'react'
import './App.css'
import ChildA from './components/ChildA';
// Step 1 create context
// const userContext = createContext();
// step2 : wrap all the child inside a provider
// step 3: pass svalue
// step 4 : consumer me jaake consume kar lo



const ThemeContext = createContext();
function App() {
  // const[user,setUser] = useState({name:"Kunal"})
  const [theme,setTheme] = useState('light');

  return (
    <>

    <ThemeContext.Provider value={{theme,setTheme}}>
      <div id="container" style={{backgroundColor:theme=='light'?"beige":"black"}}>
      <ChildA />
      </div>
      
    </ThemeContext.Provider>









    {/* <userContext.Provider value={user}>
    <ChildA />
    </userContext.Provider> */}


    
    </>
  )
}

export default App
// export {userContext}
export {ThemeContext}