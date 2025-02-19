import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    function HandleClick(){
        navigate('/about');
    }
  return (
    <div>
    Home Page
    <button onClick={HandleClick}>
        Move To About Page
    </button>
    </div>
  )
}

export default Home