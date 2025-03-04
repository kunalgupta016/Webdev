
import { useRef, useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  
  const [count,setCount] = useState(0);
  let val = useRef(0);
  let btnRefe = useRef();
  function handleClick(){
    val.current = val.current+1;
    setCount(count+1);
  }
  useEffect(()=>{
    console.log(val);
    console.log("Mai fir se render ho gya hu");
  })

  function changecolor(){
    btnRefe.current.style.backgroundColor = "red";
  }


  const [time,setTime]   = useState(0);
  let timerRef = useRef(null);
  function startTimer(){
    timerRef.current = setInterval(()=>{
      setTime(time=>time+1);
    },1000)
  }
  function stopTimer(){
    clearInterval(timerRef.current);
    timerRef.current=null;
  }
  function resetTimer(){
    stopTimer();
    setTime(0);
  }

  return (
    <>
      <div>
        <h1>StopWatch: {time} seconds</h1>
        <button onClick={startTimer}>Start</button>
        <br />
        <br />
        <button onClick={stopTimer}>Stop</button>
        <br />
        <br />
        <button onClick={resetTimer}>Reset</button>
      </div>














      {/* <div>
        <button onClick={handleClick} ref={btnRefe}>
          Increment
        </button>
        <br />
        <br />
      </div>
      <button onClick={changecolor}>
        Change Color
      </button>
      <div>
        Count : {count}
      </div> */}
    </>
  )
}

export default App
