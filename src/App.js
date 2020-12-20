import About from "./Components/About/About";
import Main from "./local-storage-lab-starter-code/src/App";
import NavBar from "./Components/NavBAr/NAvBar";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path = '/' component ={ Main }/>
          <Route path = '/About' component ={ About }/>
         
        </Switch>
      </Router>
    </>
  );
}

export default App;
