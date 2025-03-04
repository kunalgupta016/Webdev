import React from 'react'

const Child = React.memo((props) => {
    console.log("Child go re render again");
  return (
    <div>
      <button onClick={props.handleClick}>
        {props.buttonName}
        
      </button>
    </div>
  )
});

export default Child
// React.memo -> wrap -> component re-render tabhi hoga ab change hoga 

// if function send kar denge to rerender se nahi bacha payega react.memo