import { Route ,Routes ,Navigate } from "react-router-dom";
import Home from "./components/Home.js";
import Room from "./components/room.js";

function App() {
  return (
    <div className="App">
      hi Rajshri
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/room/:roomID" element=
        {<Room/>}/>
      </Routes>
    </div>
  );
}

export default App;
