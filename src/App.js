import About from "./Components/About/About";
import Main from "./local-storage-lab-starter-code/src/App";
import NavBar  from "./Components/NavBAr/NAvBar";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  link
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Main/>
      <About />
    </Router>
      
    </>
  );
}

export default App;
