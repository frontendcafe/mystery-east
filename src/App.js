import "./App.css";
import { React } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./views/Home";
import Details from "./views/Details";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/season/:season/episode/:episode">
        <Details />
      </Route>
    </Router>
  );
}

export default App;
