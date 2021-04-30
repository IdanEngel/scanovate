/* eslint-disable no-unused-vars */
import "./App.css";
import Data from "./components/Data";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Data} />
            {/* <Route exact path="/users" component={Users} /> */}
          </Switch>
          {/* <Data /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
