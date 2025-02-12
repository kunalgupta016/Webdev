import './App.css'

function App() {  

    function handleClick() {
      alert("I am clicked");
    }

    function handleMouse(){

      alert("para pe mouse lee aaye ho");
    }
    function handleinput(e){
      console.log(e.target.value);
    }
    function handleSubmit(e){
      e.preventDefault();
      alert("form submitted");
    }

  return (

      <div>

        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleinput} />
          <button type='submit' >Click me </button>
        </form>

        {/* <p onMouseOver={handleMouse} >Hover me </p>

        <button onClick={handleClick}>CLick me </button> */}
      </div>
      

  )
}

export default App
