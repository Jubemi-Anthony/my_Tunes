import Home from "./pages/home";
import Start from "./pages/Start";
import Register from "./pages/Register";
import Danger from "./pages/Dangers";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import Report from "./components/Report";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(true)
    console.log('Toggle')
  }
  return (
    <div>
      <Nav/>
      <div className="container">
        {/* <Danger report={1} handleToggle={'handleToggle'}/>
        <Report toggle={toggle}/> */}
        <Start/>
      </div>
    </div>
  );
}

export default App;
