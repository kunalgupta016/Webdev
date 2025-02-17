import React, { useContext } from 'react'
import { ThemeContext } from '../App'
const ChildC = () => {
    // const user = useContext(userContext);
    const {theme,setTheme} = useContext(ThemeContext);
    function handleClick(){
        if(theme=='light'){
            setTheme('dark')
        }
        else{
            setTheme('light')
        }
    }
  return (
    <div>
      {/* {user.name} */}
      <button onClick={handleClick}>
        Change Theme
      </button>
    </div>
  )
}

export default ChildC
