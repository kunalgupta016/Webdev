import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();
    function HandleClick(){
        navigate('/dashboard');
    }
  return (
    <div>
      About Page
      <button onClick={HandleClick}>
        Move To DashBoard Page
    </button>
    </div>
  )
}

export default About
