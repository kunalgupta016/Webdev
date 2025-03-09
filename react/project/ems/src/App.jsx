import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/Authprovider'



const App = () => {

  const [user,SetUser] = useState(null);
  const [loggedInUserData,SetloggedInUserData] = useState(null);

  const [userData,setuserData] = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser =  localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData = (JSON.parse(loggedInUser))
      SetUser(userData.role)
      SetloggedInUserData(userData.data)
    }
  },[])


  


  const handleLogin = (email,password) =>{
    if(email == 'admin@me.com' && password == '123'){
      SetUser('admin')
      localStorage.setItem("loggedInUserData",JSON.stringify({role:'admin'}))
    } else if(userData){
      const employee =userData.find((e)=>email==e.email && e.password == password)   
      if(employee){
        SetUser('employee')
        SetloggedInUserData(employee)
      
      localStorage.setItem("loggedInUserData",JSON.stringify({role:'employee' , data:'employee'}))
      }
      
        
    }
    else{
      alert('Invalid Credentials')
    }
  }




  return (
    <>
      {!user ? <Login handleLogin={handleLogin} />: ''}
      {user == 'admin' ? <AdminDashboard changedUser={SetUser}/> : (user == 'employee'?<EmployeeDashboard  changedUser={SetUser} data={loggedInUserData}/> : null) }

    </>
  )
}

export default App
