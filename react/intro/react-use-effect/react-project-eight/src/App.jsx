import { useEffect, useState } from 'react';


function App() {
  const [count, setCount] = useState(0);
  const [total,setTotal] = useState(1);
  // first -> side-effect render
  // second -> clean -up function
  // third -> comma seperated dep list

  // variation 1
  // run on each render 
  // useEffect(() => {
     // alert("I will run on each render ")
  // });

  // variation 2 
  // run on only first render
  // useEffect(()=>{
  //     alert("I will run on first render only ")
  // },[])

  // variation 3
  // useEffect(()=>{
  //     alert("I will run time when count is update")
  // },[count]);


  
  // variation 4 
  // multiple dependencies
  // useEffect(()=>{
  //     alert("I will run time when count or total is update")
  // },[count,total]);


  // variation : 5
  // iss baar clean up lete hai 
  useEffect(()=>{
      alert("Count is updated")
      return ()=>{
          alert("Count is unmounted from UI")
      }
  },[count])

  function handleClick() {
      setCount(count + 1);
      
  }
  function updatetotal(){
      setTotal(total+1);
  }

  return (
      <>
          <p>Count is: {count}</p>
          
          <button onClick={handleClick}>update count</button>
          <p>Total is : {total}</p>
          <button onClick={updatetotal}>update total</button>
          </>
  );

}

export default App
