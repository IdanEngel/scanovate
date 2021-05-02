/* eslint-disable no-unused-vars */
import "./App.css";
import Data from "./components/Data";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
// Contains routing to every component in the app
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <div className="route">
                  <Sidebar />
                  <Data />
                </div>
              )}
            />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
