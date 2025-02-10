import UserCard from "./components/UserCard"
import "./App.css"
import Kunal from "./assets/Kunal.jpg"
import Maharana from "./assets/maharana.webp"
import Prithvi from "./assets/prithvi.webp"


function App() {


  return (
    <div className="container">
      <UserCard name="Kunal " desc="Description 1" image={Kunal} style={{"border-radius":"20px"}} />
      <UserCard name="Maharana " desc="Description 2" image={Maharana}  style={{"border-radius":"20px"}}/>
      <UserCard name="Prithivi raj chauhan" desc="Description 3" image={Prithvi} style={{"border-radius":"20px"}}/>
    </div>
  )
}

export default App 
